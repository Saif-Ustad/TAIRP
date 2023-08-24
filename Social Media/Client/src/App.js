import './App.scss';

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Authentication from './pages/Auth/Authentication';
import {Routes, Route, Navigate} from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {

  const user = useSelector((state)=>state.authReducer.authData);

  return (
    <div className="App">
        {/* <Home /> */}
        {/* <Profile /> */}
        {/* <Authentication /> */}
        <Routes>
          <Route path='/' element={user? <Navigate to="home" /> : <Navigate to="auth" />} />
          <Route path='/home' element={user? <Home /> : <Navigate to="../auth" />} />
          <Route path='/auth' element={user?  <Navigate to="../home" />: <Authentication />} />
          <Route path="/profile/:id" element={user ? <Profile /> : <Navigate to="../auth" />}
        />
        </Routes>
    </div>
  );
}

export default App;
