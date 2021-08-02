// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBNoOzh0eLFakmnrBlzJvnFQcSRnbjrZoQ",
  authDomain: "contact-from-3c145.firebaseapp.com",
  projectId: "contact-from-3c145",
  storageBucket: "contact-from-3c145.appspot.com",
  messagingSenderId: "71694539251",
  appId: "1:71694539251:web:b291d0e330d086f5fcda86"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference contactInfo collections
let contactInfo = firebase.database().ref("infos");



$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
  });

  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

  $('.page-redirect').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });

});


// Listen for a submit
function myFunction() {
  var dots = document.getElementById("medical_dots");
  var moreText = document.getElementById("medical_more");
  var btnText = document.getElementById("medical_Btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function clothFunction() {
  var dots = document.getElementById("cloth_dots");
  var moreText = document.getElementById("cloth_more");
  var btnText = document.getElementById("cloth_Btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function hardwareFunction() {
  var dots = document.getElementById("hardware_dots");
  var moreText = document.getElementById("hardware_more");
  var btnText = document.getElementById("hardware_Btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}


document.querySelector(".contact-form").addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  let subject = document.querySelector(".subject").value;

  saveContactInfo(name, email, subject, message);

  sendEmail(name,email,subject,message);

  document.querySelector(".contact-form").reset();
}

function saveContactInfo(name, email, subject, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    username: name,
    email: email,
    subject: subject,
    message: message,
  });

  // retrieveInfos();
}

// Retrive Infos

// function retrieveInfos() {
//   let ref = firebase.database().ref("infos");
//   ref.on("value", getData);
// }


// function getData(data) {
//   let info = data.val();
//   let keys = Object.keys(info);

//   for (let i = 0; i < keys.length; i++) {
//     let infodata = keys[i]
//     let name = info[infodata].username
//     let email = info[infodata].email
//     let subject = info[infodata].subject
//     let message = info[infodata].message
//   }
// }

// Send Email Info

function sendEmail(name,email,subject,message){
  Email.send({
    Host:"smtp.gmail.com",
    Username: "achieveyrdream20@gmail.com",
    Password: "adkzvquectrigmqz",
    To: "achieveyrdream20@gmail.com",
    From: "achieveyrdream20@gmail.com",
    Subject: `${name} sent you a message`,
    Body: `Subject:${subject}<br/><br/> Name: ${name} <br/>Email: ${email} <br/> Message: ${message}`
  }).then(message => {
    if(message=='OK'){
      alert("Thank you, Your message has been sent")
    }
    else{
      console.error(message);
      alert("There is error at sending message");
    }
  });
}