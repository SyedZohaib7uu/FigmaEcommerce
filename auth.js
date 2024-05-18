import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut ,onAuthStateChanged, signInWithPopup, GoogleAuthProvider  } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCJF45dejc9GHZFrOrgX-45pX1ObNDXuZE",
    authDomain: "figmaecommerce.firebaseapp.com",
    projectId: "figmaecommerce",
    storageBucket: "figmaecommerce.appspot.com",
    messagingSenderId: "99909596967",
    appId: "1:99909596967:web:c5722171d4325d6a6f5b02"
  };
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();
 auth.languageCode = 'it';
 var loginform = document.getElementById("loginform")
 var signform = document.getElementById("signform")
 var home = document.getElementById("home")

 var loginbtn = document.getElementById("loginbtn")
 var signbtn = document.getElementById("signbtn")
 var togle = document.getElementById("togle")
 var logout = document.getElementById("logout")
 var btnh = document.getElementById("btnh")
 
 var gbtn = document.getElementById("gbtn")
 const user = auth.currentUser;

 if (user) {
   loginform.style.display="none"
   signform.style.display="none"
   togle.style.display="none"
   gbtn.style.display="none"
   btnh.style.display="none"
//    when.style.height="0vh"
home.style.display="block"
document.getElementById("demail").innerText=user.email
} else {
   loginform.style.display="block"
   signform.style.display="none"
   gbtn.style.display="block"
   btnh.style.display="block"

   togle.style.display="block"
//    when.style.height=100+"vh"

   home.style.display="none"

}
onAuthStateChanged(auth, (user) => {
   if (user) {
       loginform.style.display="none"
       signform.style.display="none"
   gbtn.style.display="none"
//    when.style.height=0+"vh"
   togle.style.display="none"
   btnh.style.display="none"

       home.style.display="block"
    document.getElementById("demail").innerText=user.email
     const uid = user.uid;
     // ...
   } else {
       loginform.style.display="block"
       signform.style.display="none"
   gbtn.style.display="block"
   btnh.style.display="block"

   togle.style.display="block"
// when.style.height="100vh"

       home.style.display="none"
   }
 });






// var a = signform.addEventListener("click",function(e){
//     e.preventDefault()
//     console.log("ok");
// })
var t = 0;
togle.addEventListener("click",()=>{
if (t===0) {
    loginform.style.display="none"
    signform.style.display="block"
    gbtn.style.display="none"
    
    togle.innerText="Transfer To Login"
    t=1
}
else{
    loginform.style.display="block"
    signform.style.display="none"
    gbtn.style.display="block"
    togle.innerText="Create New Account"
    t=0
}
})
signform.addEventListener("submit",(e)=>{
   e.preventDefault()
console.log("enters");
var passs = document.getElementById("passs").value;
var emails = document.getElementById("emails").value;
var names = document.getElementById("names").value;


     createUserWithEmailAndPassword(auth, emails, passs)
     .then((userCredential) => {
         const user = userCredential.user;
         console.log(`${userCredential} `);
      
       loginform.style.display="none"
       signform.style.display="none"
       togle.style.display="none"
       btnh.style.display="none"

       gbtn.style.display="none"
    //    when.style.height=0+"vh"


       // logout.style.display="block"
       // logout.style.display="block"
       home.style.display="block"
       document.getElementById("demail").innerText=emails
       alert("signup sucessfully !!!")
       if (user !== null) {
           // The user object has basic properties such as display name, email, etc.
           const displayName = user.displayName;
           const email = user.email;
           const photoURL = user.photoURL;
           const emailVerified = user.emailVerified;
         
           // The user's ID, unique to the Firebase project. Do NOT use
           // this value to authenticate with your backend server, if
           // you have one. Use User.getToken() instead.
           const uid = user.uid;
       
         }
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
      alert(errorMessage)
      console.log(errorMessage)
     });
})
loginform.addEventListener("submit",(e)=>{
   e.preventDefault()
console.log("enters");
var emaill = document.getElementById("emaill").value;
var passl = document.getElementById("passl").value;
signInWithEmailAndPassword(auth, emaill, passl)
     .then((userCredential) => {
         const user = userCredential.user;
         console.log(userCredential);
       loginform.style.display="none"
       signform.style.display="none"
       gbtn.style.display="none"
       togle.style.display="none"
    //    when.style.height=0+"vh"
    
    btnh.style.display="none"
    
    home.style.display="block"
    document.getElementById("demail").innerText=emaill
       alert("login sucessfully !!!")
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
      alert(errorMessage)
      console.log(errorMessage)
     });
})


logout.addEventListener("click",()=>{
   console.log("entersignout");
   signOut(auth).then(() => {
      alert("signout sucessfully")
      loginform.style.display="block"
    
      togle.style.display="block"
    //   when.style.height=100+"vh"

    btnh.style.display="block"

   //    logout.style.display="none"  
      home.style.display="none"
     }).catch((error) => {
      alert(error)
     });
})
gbtn.addEventListener("click",()=>{
   signInWithPopup(auth, provider)
 .then((result) => {
   // This gives you a Google Access Token. You can use it to access the Google API.
   const credential = GoogleAuthProvider.credentialFromResult(result);
   const token = credential.accessToken;
   // The signed-in user info.
   const user = result.user;
   // IdP data available using getAdditionalUserInfo(result)
  
   loginform.style.display="none"
   signform.style.display="none"
   togle.style.display="none"
   gbtn.style.display="none"
//    when.style.height=100+"vh"
btnh.style.display="none"


   home.style.display="block"
   document.getElementById("demail").innerText=user.email
   

   alert("login sucessfully !!!")
 }).catch((error) => {
   // Handle Errors here.
   const errorCode = error.code;
   const errorMessage = error.message;
   // The email of the user's account used.
   const email = error.customData.email;
   // The AuthCredential type that was used.
   const credential = GoogleAuthProvider.credentialFromError(error);
   alert(errorMessage)
   console.log(errorMessage)
 });

})