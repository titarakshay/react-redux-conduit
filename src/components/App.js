import React from "react";
import { connect } from "react-redux";
import { fetchArticle, fetchTags } from "../store/action";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Signin from "./Signin";
import Signup from "./Signup";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagname: null,
    };
  }
  componentDidMount() {
    var url =
      "https://conduit.productionready.io/api/articles?limit=10&offset=0";
    var url2 = "https://conduit.productionready.io/api/tags";
    var userurl =
      " https://conduit.productionready.io/api/articles/feed?limit=10&offset=0";
    if (this.props.state.userInfo) {
      this.props.dispatch(fetchArticle(userurl, localStorage.authToken));
    } else {
      this.props.dispatch(fetchArticle(url));
    }

    this.props.dispatch(fetchTags(url2));
  }
  handleTag(tag) {
    if (tag == "global") {
      this.setState({ tagname: "" });
      var tagUrl =
        "https://conduit.productionready.io/api/articles?limit=10&offset=0";
    } else if (tag == "userArticle") {
      this.setState({ tagname: "" });
      tagUrl =
        " https://conduit.productionready.io/api/articles/feed?limit=10&offset=0";
    } else {
      this.setState({ tagname: tag });
      tagUrl = `https://conduit.productionready.io/api/articles?tag=${tag}&limit=10&offset=0`;
    }
    this.props.dispatch(fetchArticle(tagUrl, localStorage.authToken));
  }
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route
            path="/"
            render={() => (
              <Main
                tagname={this.state.tagname}
                handle={(tag) => this.handleTag(tag)}
              />
            )}
            exact
          />
          <Route path="/Signin" component={Signin} />
          <Route path="/Signup" component={Signup} />
          <Route
            path="/yourFeed"
            render={() => (
              <Main
                tagname={this.state.tagname}
                handle={(tag) => this.handleTag(tag)}
              />
            )}
            exact
          />
          <Route component={Error} />
        </Switch>
        <Footer />
      </>
    );
  }
}

function mapState(state) {
  return { state };
}

// export default connect((state) => ({ state }))(App);
export default connect(mapState)(App);
