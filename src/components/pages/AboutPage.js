import React from "react";
import Card from "./../shared/Card";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>React app to leave reviews for a particular product</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to="/">Back Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
