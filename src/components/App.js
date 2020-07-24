import React from "react";
import { connect } from "react-redux";
import { addArticle } from "../store/action";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Signin from "./Signin";
import Signup from "./Signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    fetch("https://conduit.productionready.io/api/articles?limit=10&offset=0")
      .then((res) => res.json())
      .then((articles) => this.props.dispatch(addArticle(articles)));
  }
  handleTag(tag) {
    if (tag === "global") {
      var tagUrl =
        "https://conduit.productionready.io/api/articles?limit=10&offset=0";
      this.setState({ tagname: "" });
    } else {
      this.setState({ tagname: tag });
      var tagUrl = `https://conduit.productionready.io/api/articles?tag=${tag}&limit=10&offset=0`;
    }
    fetch(tagUrl)
      .then((res) => res.json())
      .then((data) => this.setState({ feed: data.articles }));
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
                tags={this.state.tags}
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
