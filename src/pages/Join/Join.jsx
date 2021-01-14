// @flow
import React, { useState } from 'react';
import {Tabs,Tab} from 'react-bootstrap'
import firebase from 'firebase';
import './Join.scss';
import Auth from './components/Auth';

const firebaseConfig = {
  apiKey: "AIzaSyD1IVmSMWFElv-BoX74SqGTfTOFXj-USAQ",
  authDomain: "playway-4de62.firebaseapp.com",
  databaseURL: "https://playway-4de62.firebaseio.com",
  projectId: "playway-4de62",
  storageBucket: "playway-4de62.appspot.com",
  messagingSenderId: "456674711143",
  appId: "1:456674711143:web:605a6ad40aef4440fbe6c2",
  measurementId: "G-5VDP6BHJ15"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const Join = () => {
  const [authError,setAuthError] = useState(null);
  const signup = (name,aadhar,std,email,password) => {
    console.log(email,password);
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email,password);
    promise
    .then(signup => {
        console.log("User data :",signup.user.email);
        console.log("User data :",signup.user.uid);
        localStorage.setItem('loggedin',true);
        localStorage.setItem('user',signup.user.email);
       /*  console.log("storage data :",localStorage.getItem('user')); */
    })
    .catch(e =>{
        var err = e.message;
       /*  this.setState({err : err}); */
        console.log("error data is :",err);
        setAuthError(err);
        setInterval(() => setAuthError(null),7000);
    });
}

const signin = (email,password) => {
    console.log(email,password);
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email,password);

    promise
    .then(login =>{
        var err = "Successfully logged in, "+login.user.email;
        console.log("User data :",login.user.email);
        console.log("User data :",login.user.uid);
        localStorage.setItem('loggedin',true);
        localStorage.setItem('user',login.user.email);
       /*  console.log("storage data :",localStorage.getItem('user')); */
    })
    
    .catch(err =>{
        var error = err.message;
        console.log(error);
        setAuthError(error);
        setInterval(() => setAuthError(null),7000);
        /* this.setState({err : error}); */
    });
}//func
 
const google = () => {
    console.log("i am in google ");
    var provider = new firebase.auth.GoogleAuthProvider();
    var promise = firebase.auth().signInWithPopup(provider);
    /* firebase.auth().signInWithRedirect(provider);
    var promise = firebase.auth().getRedirectResult(); */

    promise
      .then(result => {
          var user = result.user;
          console.log("result object is :",result);
          console.log("user object is :",user);
          localStorage.setItem('loggedin',true);
          localStorage.setItem('user',result.user.email);
          console.log("storage data :",localStorage.getItem('user'));
      })
      .catch(e=>{
          var err = e.message;
          var code = e.code;
          console.log("Error is:"+err+". Error code is :"+code);
          setAuthError("Error is:"+err+". Error code is :"+code);
          setInterval(() => setAuthError(null),7000);
      });
     
} //func

  return (
    <section className="Join">
       <div className="join-flex-container">
        <div className="join-container">
        <Tabs defaultActiveKey="signin" id="uncontrolled-tab-example" style={{backgroundColor:'#82CFD5',borderRadius:'3%',border:'1px solid black',boxShadow:'6px 10px darkblue'}}>
          <Tab eventKey="signin"  title={<div className="tab-title">Sign In</div>}>
            <Auth type="signin" google={google} signin={signin} authError={authError} />
          </Tab>
          <Tab eventKey="signup" title={<div className="tab-title">Sign Up</div>}>
            <Auth type="signup" google={google} signup={signup} authError={authError} />
          </Tab>
        </Tabs>
        </div>
       </div>
    </section>
  );
};

export default Join;
