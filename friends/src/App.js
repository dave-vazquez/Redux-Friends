import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import ProtectedRoute from "./components/ProtectedRoute";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: fit-content;
  border-bottom: 1px solid black;

  padding: 10px 0;
`;

const StyledLink = styled(Link)`
  font-size: 1.6em;
  text-decoration: none;
`;

const Nav = styled.nav``;

class App extends React.Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <NavContainer>
            <Nav>
              <StyledLink to="/login">Login</StyledLink>
            </Nav>
          </NavContainer>
          <Route path="/login" component={Login} />
          <Route path="/protected" component={FriendsList} />
        </AppContainer>
      </Router>
    );
  }
}

export default App;
