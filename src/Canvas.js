import React, { PureComponent } from "react";
import classes from "./App.module.css";
import Comment from "./Comment.js";
import Comments from "./Comment.js";

export default class Canvas extends PureComponent {
  render() {
    return (
      <div className={classes.boxContainer}>
        <h2 style={{ color: "#efefef" }}>TITLE - by whoever</h2>
        <div>
          {this.props.children}
          <div
            style={{
              height: "5%",
              backgroundColor: "gray",
              display: "flex",
              justifyContent: "space-around"
            }}
          >
            HELLO COTNROLS ABOUT SHADER HERE
            <div />
          </div>
          <div style={{ height: "15%", backgroundColor: "green" }}>
            HELLO TEXT ABOUT SHADER HERE
          </div>

          <div
            style={{ height: 1000, backgroundColor: "gray", marginBottom: 15 }}
          >
            <Comments />
          </div>
        </div>
      </div>
    );
  }
}
