import './App.css';
import { useState } from 'react';
import { FollowCard } from './components/FollowCard';
import { initialUsers } from './backend';
import { negative } from './helpers';

const App = () => {
  const [userHidedIndex, setUserHidedIndex] = useState(0)
  const [users, setUsers] = useState(initialUsers)
  const hidedUserUserName = users[userHidedIndex].userName
  const showedUserUserName = users[negative(userHidedIndex)].userName

  return (
    <section className="App">
      {users.map(user => user.id !== userHidedIndex &&
        <FollowCard {...user} key={user.id} users={users} setUsers={setUsers}/>
      )}
      <button onClick={() => setUserHidedIndex(negative(userHidedIndex))}>
        change {showedUserUserName} for {hidedUserUserName}!
      </button>
    </section>
  )
}

export default App;
