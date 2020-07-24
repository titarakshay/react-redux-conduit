import React from "react";
import { connect } from "react-redux";
import Feed from "./Feed";
import Hero from "./Hero";
import Tags from "./Tags";

function Main(props) {
  console.log(props.handle, "here");
  const { articles, tags } = props.state.articles;
  return (
    <>
      <Hero />
      <div className="container">
        <div className="main">
          <div className="feed-div">
            <div className="global"></div>
          </div>
        </div>
      </div>
    </>
  );
}
function mapState(state) {
  return { state };
}

// export default connect((state) => ({ state }))(App);
export default connect(mapState)(Main);
