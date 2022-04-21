import './App.css';
import UserList from './components/user_list';
import UserDetail from './components/user_detail';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App min-h-screen text-white bg-primary">
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:userId" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
{/* <Routes>
<Route path="/users" element={<UserList />} />
<Route path="/login" element={<UserDetail />} />
<Route path="/user" element={<User />} />
</Routes> */}