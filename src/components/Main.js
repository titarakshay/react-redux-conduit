import React from "react";
import { connect } from "react-redux";
import Feed from "./Feed";
import Hero from "./Hero";
import Tags from "./Tags";

function Main(props) {
  const { articles, tags } = props.state;

  return (
    <>
      <Hero />
      <div className="container">
        <div className="main">
          <div className="feed-div">
            <div className="global">
              {props.tagname ? (
                <>
                  <button
                    className="active"
                    onClick={() => props.handle("global")}
                  >
                    Global Feed
                  </button>
                  <span className="tagname"> {props.tagname}</span>
                </>
              ) : (
                <>
                  <button
                    className="global-btn"
                    onClick={() => props.handle("global")}
                  >
                    Global Feed
                  </button>
                  <span></span>
                </>
              )}
            </div>
            {articles ? <Feed /> : "Loading"}
          </div>
          <div className="tags">
            <h4>Popular Tags</h4>
            {tags ? (
              <Tags handle={(tag) => props.handle(tag)} />
            ) : (
              "Loading tags"
            )}
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
