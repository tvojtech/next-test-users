import Link from 'next/link';

const UserListItem = ({ user, onRemove }) => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <div style={{ marginRight: '1rem' }}>
      <Link as={`/users/${user.id}`} href={`/user?id=${user.id}`}>
        <a>
          <div>{user.name} ({user.company.name})</div>
        </a>
      </Link>
    </div>
    <div>
      <button type="button" onClick={onRemove}>
        X
      </button>
    </div>
  </div>
);

export default UserListItem;
