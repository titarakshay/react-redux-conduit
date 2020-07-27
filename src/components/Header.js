import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { signoutUser } from "../store/action";
import { connect } from "react-redux";

function Header(props) {
  const { isLogged } = props.state;

  return (
    <header className="container">
      <Link className="link" to="/">
        <h2 className="header-name">conduit</h2>
      </Link>
      {isLogged ? <AuthHeader {...props} /> : <NonAuthHeader />}
    </header>
  );
}

const NonAuthHeader = () => {
  return (
    <ul className="nav-bar">
      <NavLink
        activeClassName="activeLink"
        className=" link nav-links"
        exact
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName="activeLink"
        className=" link nav-links"
        to="/Signin"
      >
        Sign in
      </NavLink>
      <NavLink
        activeClassName="activeLink"
        className="nav-links link"
        to="/Signup"
      >
        Sign up
      </NavLink>
    </ul>
  );
};

const AuthHeader = (props) => {
  return (
    <ul className="nav-bar">
      <NavLink
        activeClassName="activeLink"
        className=" link nav-links"
        exact
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        activeClassName="activeLink"
        className=" link nav-links"
        to="/newPost"
      >
        New Post
      </NavLink>
      <Link
        activeClassName="activeLink"
        className="nav-links link"
        onClick={() => signoutUser(props.dispatch)}
        to="/"
      >
        Logout
      </Link>
    </ul>
  );
};

function mapState(state) {
  return { state };
}

export default connect(mapState)(withRouter(Header));
