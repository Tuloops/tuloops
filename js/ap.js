// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyC3QZaJ9-RdMewwi8aX7e4MVMMXWccMtNc",
  authDomain: "tuloopsweb.firebaseapp.com",
  databaseURL: "https://tuloopsweb.firebaseio.com",
  projectId: "tuloopsweb",
  storageBucket: "tuloopsweb.appspot.com",
  messagingSenderId: "552673932159",
  appId: "1:552673932159:web:c6db494cc1b64488d2e04a",
  measurementId: "G-3J4WF0PW5V"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  //email veri

  // Get values
  var name = getInputVal('name');

  var email = getInputVal('email');

  var message = getInputVal('message');

  function ValidateEmail(email) {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(contactForm.email.value)) {
      console.log('Success');
      // Save message
      saveMessage(name, email, message);

      // Show alert
      document.querySelector('.alert-success').style.display = 'block';

      // Hide alert after 3 seconds
      setTimeout(function () {
        document.querySelector('.alert-success').style.display = 'none';
      }, 3000);

      // Clear form
      document.getElementById('contactForm').reset();
    }
    else {
      console.log('Else Success');
      document.querySelector('.alert-email-failure').style.display = 'block';
      setTimeout(function () {
        document.querySelector('.alert-email-failure').style.display = 'none';
      }, 3000);
      return false;
    }
  }


  if (name.length == 0 || email.length == 0 || message.length == 0) {
    document.querySelector('.alert-failure').style.display = 'block';
    setTimeout(function () {
      document.querySelector('.alert-failure').style.display = 'none';
    }, 3000);

    console.log('first if success');
  }
  else if (email != null) {

    ValidateEmail(email);
    console.log('else if success');

  }


}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });
}