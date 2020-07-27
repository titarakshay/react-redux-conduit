import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../store/action";
import Feed from "./Feed";
import Hero from "./Hero";
import Tags from "./Tags";
import { NavLink } from "react-router-dom";

class Main extends React.Component {
  componentDidMount() {
    if (localStorage.authToken) {
      this.props.dispatch(fetchUser(localStorage.authToken));
    }
  }
  giveClass = () => {};
  render() {
    const { articles, tags } = this.props.state;

    return (
      <>
        <Hero />
        <div className="container">
          <div className="main">
            <div className="feed-div">
              <div className="global">
                {this.props.state.userInfo ? (
                  <NavLink
                    className="active"
                    activeClassName="activeTab"
                    onClick={() => this.props.handle("userArticle")}
                    to="/yourFeed"
                  >
                    Your Feed
                  </NavLink>
                ) : (
                  ""
                )}
                <NavLink
                  className="active"
                  activeClassName="activeTab"
                  onClick={() => this.props.handle("global")}
                  to="/"
                >
                  Global Feed
                </NavLink>
                {this.props.tagname ? (
                  <>
                    <span className="tagname"> {this.props.tagname}</span>
                  </>
                ) : (
                  <>
                    <span></span>
                  </>
                )}
              </div>
              {articles ? <Feed /> : "Loading"}
            </div>
            <div className="tags">
              <h4>Popular Tags</h4>
              {tags ? (
                <Tags handle={(tag) => this.props.handle(tag)} />
              ) : (
                "Loading tags"
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}
function mapState(state) {
  return { state };
}

// export default connect((state) => ({ state }))(App);
export default connect(mapState)(Main);
