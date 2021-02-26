import React, {useEffect} from 'react';
import styles from './App.module.css';
import {useDispatch} from "react-redux";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feed/Feed";
import {selectUser} from "./features/counter/userSlice";
import Login from "./Login/Login";
import {useSelector} from "react-redux";
import { auth } from './firebase';
import {login, logout} from "./features/counter/userSlice";
import Widjets from "./Widgets/Widjets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL        }));
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className={styles.app}>
      <Header />
      
      {!user.user ? <Login />
      : <div className={styles.app_body}>
      <Sidebar />
      <Feed />
      <Widjets />
   </div>
      }
     

    </div>
  );
}

export default App;
//https://linkedin-clone-98c33.web.app