import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { login } from "../actions/login";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: fit-content;

  margin: 10px;
  padding: 10px;

  border: 1px solid black;
`;

class Login extends React.Component {
  state = {
    credentials: {
      username: "Lambda School",
      password: "i<3Lambd4"
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push("/protected"));
  };

  render() {
    return (
      <LoginForm onSubmit={this.handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={this.state.credentials.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={this.state.credentials.password}
          onChange={this.handleChange}
        />
        <button onSubmit={this.handleLogin}>Login</button>
      </LoginForm>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
