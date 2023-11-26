import Profile from "components/Profile/Profile";
import user from "./components/Profile/user.json"
import data from './components/Statistics/data.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json'
import Container from "components/Container/Container";
import Statistics from "components/Statistics/Statistics";
import FriendList from "components/FriendList/FriendList";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";



export const App = () => {
  return (
    // <div></div>
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};

export default App;