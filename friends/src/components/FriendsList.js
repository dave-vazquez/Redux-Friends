import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getFriends } from "../actions/friendsList";

const FriendsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
  height: fit-content;

  margin: 10px;
  padding: 10px;
`;

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <FriendsListContainer>
        {this.props.friends.map(friend => (
          <div key={friend.id}>
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>
        ))}
      </FriendsListContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsList.friends
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsList);
