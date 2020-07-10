import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config =
{
    apiKey: "AIzaSyCPYb-M3tTwxE0PRoehNWljUhVBRDF7ZZA",
    authDomain: "malek-test-9952f.firebaseapp.com",
    databaseURL: "https://malek-test-9952f.firebaseio.com",
    projectId: "malek-test-9952f",
    storageBucket: "malek-test-9952f.appspot.com",
    messagingSenderId: "53966759613",
    appId: "1:53966759613:web:b74e5bd5157f13cb2879d4",
    measurementId: "G-FWK6RB4KMH"


}




export const creatProfilDoc = async (userAuth , adiitionaldata)=>{
  if (!userAuth) return;
  const userref = firestore.doc(`malek/${userAuth.uid}`) //make ur object  DOC Refrence
  
  const snopshot= await userref.get() // bring it as a Doc snapshot
  
  if(!snopshot.exists) {
    const {uid,displayname, email}= userAuth;
    
    const timeCreat= new Date();
    try {
      await userref.set({
        displayname,
        email,
        uid,
       
        timeCreat,
        ...adiitionaldata
      })
    } catch (error){
      console.log('error creating user', error.message);
    }
  }
  
  return userref;
  }





firebase.initializeApp(config);
export const auth= firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInwithGoogle=()=> auth.signInWithPopup(provider);
export default firebase;