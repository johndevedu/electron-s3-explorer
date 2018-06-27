// @flow
import React from "react";
import { Link } from "react-router-dom";

const AWS = require("aws-sdk");
const dotenv = require("dotenv");
dotenv.config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

export default class S3Root extends React.Component {
  componentDidMount() {
    const s3 = new AWS.S3();
    var that = this;
    s3.listBuckets(function(err, data) {
      if (err) {
        console.log("Error:", err);
      } else {
        that.setState({
          buckets: data.Buckets
        });
      }
    });
  }
  render() {
    console.log(this.state);
    const bucketList =
      this.state && this.state.buckets
        ? this.state.buckets.map(bucket => {
            return (
              <li key={bucket.Name}>
                Bucket: {bucket.Name} : {bucket.CreationDate.toString()}
              </li>
            );
          })
        : null;

    return (
      <React.Fragment>
        <h1>HELLO BOBO!</h1>
        {bucketList && <ul>{bucketList}</ul>}
        <Link to="/">Return Home </Link>
      </React.Fragment>
    );
  }
}
