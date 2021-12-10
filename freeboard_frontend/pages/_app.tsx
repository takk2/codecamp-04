import "../styles/reset.css";
import "../styles/globals.css";
import { onError } from "@apollo/client/link/error";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import "antd/dist/antd.css";
import Layout from "../src/componentds/commons/layout";
import { createUploadLink } from "apollo-upload-client";

// -------- takk2_boards --------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createContext, useState, useEffect } from "react";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-GT8EmDW7fdzQjmoT-0rVlpj7DupQPzk",
  authDomain: "takk2-board.firebaseapp.com",
  projectId: "takk2-board",
  storageBucket: "takk2-board.appspot.com",
  messagingSenderId: "823636097152",
  appId: "1:823636097152:web:0185ec43bce28f1b3e8e65",
};

export const firebaseapp = initializeApp(firebaseConfig);
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

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1. 토큰만료 에러를 캐치
        if (err.extensions?.code === "UNAUTHENTICATED") {
          const newAccessToken = getAccessToken(setMyAccessToken); // 2. refreshToken으로 accessToken 재발급 받기 => restoreAccessToken
          // 3. 기존에 실패한 요청 다시 재요청하기
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
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return (
    <GlobalContext.Provider value={myValue}>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
