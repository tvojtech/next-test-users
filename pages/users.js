import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../api/users';
import UserList from '../components/UserList';
import Page from '../components/Page';
import {normalize, schema} from 'normalizr';

const filterUsers = (search, users) => {
  if (!search) {
    return users
  }
  search = search.toLowerCase()
  return users.filter(user => user.name.toLowerCase().indexOf(search) >= 0 || user.company.name.toLowerCase().indexOf(search) >= 0);
}

const listUsers = api.listUsers

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users,
    };
  }

  removeUser = (userToRemove) => {
    this.setState(state => ({users: state.users.filter(user => user.id !== userToRemove.id)}))
  }

  refetchUsers = async () => {
    const users = await listUsers()
    this.setState({users})
  }

  render() {
    const {users, search} = this.state;
    return (
      <div>
        <div style={{margin: '0 0 1rem 0'}}>
          <input type="text" onChange={evt => this.setState({search: evt.target.value})} placeholder="Search"/>
          <button type="button" onClick={this.refetchUsers}>Refetch</button>
        </div>
        <UserList users={filterUsers(search, users)} onRemove={this.removeUser}/>
      </div>
    );
  }
}

Users = Page(Users);

Users.getInitialProps = async () => ({
  users: await listUsers(),
});

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Users;
