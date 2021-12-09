
// import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import NotFound from './components/NotFound/NotFound';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Sports from './components/Sports/Sports';
import Entertainment from './components/Entertainment/Entertainment';
import Business from './components/Business/Business';
import Technology from './components/Technology/Technology';
import Health from './components/Health/Health';
import OtherNews from './components/OtherNews/OtherNews';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';

import Footer from './components/Footer/Footer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UserProfile from './components/UserProfile/UserProfile';


export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

        <BrowserRouter>
          <Header></Header>
          <Routes>


            <Route path="/" element={<News />} />
            <Route path="/home" element={<News />} />
            <Route path="/sports" element={<PrivateRoute><Sports /></PrivateRoute>} />
            <Route path="/business" element={<PrivateRoute><Business /></PrivateRoute>} />
            <Route path="/technology" element={<PrivateRoute><Technology/></PrivateRoute>} />
            <Route path="/entertainment" element={<PrivateRoute><Entertainment/></PrivateRoute>} />
            <Route path="/health" element={<PrivateRoute><Health/></PrivateRoute>} />
            <Route path="/othernews" element={<PrivateRoute><OtherNews/></PrivateRoute>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/userprofile" element={<UserProfile/>}/>
            <Route path="/*" element={<NotFound></NotFound>} />


          </Routes>
          <Footer></Footer>
        </BrowserRouter>

      </UserContext.Provider>


    </div>
  );
}

export default App;
