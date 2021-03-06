import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  gql,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useEffect, useState } from "react";
import { includes } from "lodash";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
import * as Sentry from "@sentry/nextjs";

// import Head from "next/head";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGz1NsTv3vnOErwPcEW69Cgaq2VsjS8wc",
  authDomain: "codecamp-04-takk2.firebaseapp.com",
  projectId: "codecamp-04-takk2",
  storageBucket: "codecamp-04-takk2.appspot.com",
  messagingSenderId: "256347027239",
  appId: "1:256347027239:web:23bc4664792e98756a9b02",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

Sentry.init({
  dsn: "https://fa2e79d4cae347069d6c589b5ba00382@o1091872.ingest.sentry.io/6109514",
});

export const GlobalContext = createContext(null);
function MyApp({ Component, pageProps }) {
  const [myAccessToken, setMyAccessToken] = useState("");
  const [myUserInfo, setMyUserInfo] = useState("");
  const myValue = {
    accessToken: myAccessToken,
    setAccessToken: setMyAccessToken,
    userInfo: myUserInfo,
    setUserInfo: setMyUserInfo,
  };

  const uploadLink = createUploadLink({
    uri: "https://backend04.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${myAccessToken}` },
    credentials: "include",
  });

  useEffect(() => {
    // const accessToken = localStorage.getItem("accessToken") || "";
    // if (accessToken) setMyAccessToken(accessToken);
    if (localStorage.getItem("refreshToken")) getAccessToken(setMyAccessToken);
  }, []);

  const RESTORE_ACCESS_TOKEN = gql`
    mutation restoreAccessToken {
      restoreAccessToken {
        accessToken
      }
    }
  `;

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1. ???????????? ????????? ??????
        if (err.extensions?.code === "UNAUTHENTICATED") {
          const newAccessToken = getAccessToken(setMyAccessToken); // 2. refreshToken?????? accessToken ????????? ?????? => restoreAccessToken
          // 3. ????????? ????????? ?????? ?????? ???????????????
          operation.setContext({
            headers: {
              ...operation.getContext().heafers,
              authorization: `Bearer ${newAccessToken}`,
            },
          });

          return forward(operation);
        }
      }
    }
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <>
      {/* <Head> ????????????????????? ??????????????? ???????????? ???????????? ???????????????
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=593bb17803d800ca368cf511e3bcea13"
        ></script>
      </Head> */}
      <GlobalContext.Provider value={myValue}>
        <ApolloProvider client={client}>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
