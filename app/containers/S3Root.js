// @flow
import React from "react";
import { Link } from "react-router-dom";

export default class S3Root extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>HELLO BOBO!</h1>
        <Link to="/">Return Home </Link>
      </React.Fragment>
    );
  }
}
