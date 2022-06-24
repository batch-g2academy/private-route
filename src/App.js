import { Routes, Route, useNavigate } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AccountDetail from './pages/AccountDetail';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProfileDetail from './pages/ProfileDetail';

function App() {
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login')
  }
  return (
    <div>
      { (localStorage.getItem('token')) && <div onClick={signOut}>Sign Out</div>}
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/profile' element={ 
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
         } />
        <Route path='/profile/:username' element={ <ProfileDetail /> } />
        <Route path='/account/:id' element={ <PrivateRoute><AccountDetail /></PrivateRoute> } />
      </Routes>
    </div>
  );
}

export default App;
