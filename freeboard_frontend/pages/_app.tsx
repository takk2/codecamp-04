import "../styles/reset.css";
import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "antd/dist/antd.css";
import Layout from "../src/componentds/commons/layout";

// -------- takk2_boards --------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);

//--------- 코드캠프 backend04 -----------
function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend04.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
