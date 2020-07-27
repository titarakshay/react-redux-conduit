import React from "react";
import uuid from "react-uuid";
import { connect } from "react-redux";

function Tags(props) {
  const tags = props.state.tags.filter((tag) => {
    return tag !== "";
  });

  return (
    <div className="tag-div">
      {tags.map((tag) => {
        return (
          <button
            key={uuid()}
            className="single-tag"
            onClick={() => props.handle(tag)}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
function mapState(state) {
  return { state };
}

// export default connect((state) => ({ state }))(App);
export default connect(mapState)(Tags);
