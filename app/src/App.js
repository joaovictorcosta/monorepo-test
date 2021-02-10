import {React} from 'react'
import { getUser } from './user'


const user = getUser()
function App() {
  return (
      <div>{`${user.id} - ${user.name} - ${user.fone}`}</div>
  );
}

export default App;
