import React from "react";
import { connect } from "react-redux";
import { addArticle, addTags, selectTags } from "../store/action";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Signin from "./Signin";
import Signup from "./Signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.props.dispatch(addArticle(data.articles)));
    fetch(url2)
      .then((res) => res.json())
      .then((data) => this.props.dispatch(addTags(data.tags)));
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
      .then((data) => this.props.dispatch(selectTags(data.articles)));
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
