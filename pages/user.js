import Page from '../components/Page'
import { getUser } from '../api/users';

let User = ({ user }) => (
  <div>
    <div>
      <h1>{user.name} ({user.company.name})</h1>
    </div>
    <div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
      <div>{user.website}</div>
      <div>{user.address.city}</div>
    </div>
  </div>
);

User = Page(User)

User.getInitialProps = async ({ query }) => ({
  user: await getUser(query.id),
});

export default User;
