var firebaseConfig = {
    apiKey: "AIzaSyCNPHDJfqWuz6M0dV7YD497sRR51Bifd6w",
    authDomain: "mywebproject-26e7d.firebaseapp.com",
    databaseURL: "https://mywebproject-26e7d-default-rtdb.firebaseio.com",
    projectId: "mywebproject-26e7d",
    storageBucket: "mywebproject-26e7d.appspot.com",
    messagingSenderId: "450920042676",
    appId: "1:450920042676:web:6b5a46dcd295bea70dc7e1",
};


// Subscribe email code 
firebase.initializeApp(firebaseConfig);
var message = firebase.database().ref('Subscribe');

document.getElementById("sub").addEventListener('click', subscribe);

function subscribe(e) {
    e.preventDefault();
    var email_temp = document.getElementById("contactemail").value;
    console.log(email_temp.value);
    saveMessage(email_temp);
}

function saveMessage(email) {
    var data_local = message.push();
    data_local.set({
        email: email
    });
}


