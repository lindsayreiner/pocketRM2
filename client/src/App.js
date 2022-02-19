import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AOS from "aos";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard"
import ErrorBoundary from "./components/ErrorBoundary"

import "./styles/App.css";
import "aos/dist/aos.css";

const PUBLIC_URL = process.env.PUBLIC_URL || "http://localhost:3001";

const httpLink = createHttpLink({
  uri: `${PUBLIC_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  console.log(authLink);
  // AOS init
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <div className="app-wrapper">
      <ApolloProvider client={client}>
        <Router>
          <Navbar />
          <main>
            <Routes>
              {/* <ErrorBoundary></ErrorBoundary> */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />

            </Routes>
          </main>
        </Router>
        <Footer />
      </ApolloProvider>
    </div>
  );
}

export default App;
