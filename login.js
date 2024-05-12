import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
var firebaseConfig = {
    apiKey: "AIzaSyCNPHDJfqWuz6M0dV7YD497sRR51Bifd6w",
    authDomain: "mywebproject-26e7d.firebaseapp.com",
    databaseURL: "https://mywebproject-26e7d-default-rtdb.firebaseio.com",
    projectId: "mywebproject-26e7d",
    storageBucket: "mywebproject-26e7d.appspot.com",
    messagingSenderId: "450920042676",
    appId: "1:450920042676:web:6b5a46dcd295bea70dc7e1"
};



// Google Login with firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("googlelogin");
googleLogin.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            window.location.href = "/profileindex.html";
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
});



// Check wheather the user is regested or not 
document.getElementById("logincheck").addEventListener("click", function () {
    var email_temp = document.getElementById("email").value;
    var password_temp = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email_temp, password_temp)
        .then(async (userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert(user.email + " login successfully!!!");
            window.location.href = "/profileindex.html";

            // login user with id and password
            try {
                const result = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value);
                console.log(result);
                alert("login successful");
                window.location.href = "/profileindex.html";
            } catch (err) {
                console.log(err);
            }
            //document.getElementById('logout').style.display='block';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        }); // Added closing parentheses for catch block
}); // Added closing parentheses for addEventListener function call



document.getElementById('logout').addEventListener('click', function () {
    signOut(auth).then(() => {
        console.log('Sign-Out Successfull!!!');
        //document.getElementById('logout').style.display = 'none';
    }).catch((error) => {
        console.log("An Error happened");
    });
});



