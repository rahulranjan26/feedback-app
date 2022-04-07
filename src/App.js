import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from "./components/FeedBackStats";
import { FeedBackProvider } from "./context/FeedBackContext";
import FeedBackForm from "./components/FeedBackForm";
import AboutIcon from "./components/AboutIcon.js";

import AboutPage from "./components/pages/AboutPage.js";

function App() {
  return (
    <FeedBackProvider>
      <Router>
        <Header />
        {/*<FeedBackFilter filterHandler={handleFilterOps} / >*/}
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStats />
                  <FeedBackList />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIcon />
      </Router>
    </FeedBackProvider>
  );
}

export default App;
