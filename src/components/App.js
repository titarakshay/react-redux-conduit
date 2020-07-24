import React from "react";
import { connect } from "react-redux";
import { fetchArticle, addTags, selectTags, fetchTags } from "../store/action";
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
    this.props.dispatch(fetchArticle(url));
    this.props.dispatch(fetchTags(url2));
  }
  handleTag(tag) {
    if (tag === "global") {
      var tagUrl =
        "https://conduit.productionready.io/api/articles?limit=10&offset=0";
      this.setState({ tagname: "" });
    } else {
      this.setState({ tagname: tag });
      tagUrl = `https://conduit.productionready.io/api/articles?tag=${tag}&limit=10&offset=0`;
    }
    this.props.dispatch(fetchArticle(tagUrl));
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
