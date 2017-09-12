import UserListItem from './UserListItem';

const UserList = ({ users, onRemove }) => (
  <ul style={{ listStyle: 'none' }}>
    {users.map(user => (
      <li key={user.id}>
        <UserListItem user={user} onRemove={() => onRemove(user)} />
      </li>
    ))}
  </ul>
);

export default UserList;
