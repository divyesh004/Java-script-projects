const signinForm = document.getElementById("signin");
let isvalid = true;
signinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signin-email").value;
  const password = document.getElementById("signin-password").value;
  if (email == "") {
    isvalid = false;
    document.getElementById("emailError").innerHTML = "Please enter your Email";
    document.getElementById("signin-email").style.border = "1px solid red"

  }
  if (password == ""){
    isvalid = false;
    document.getElementById("PasswordError").innerHTML = "Please enter your Password";
    document.getElementById("signin-password").style.border = "1px solid red"
}

const userData = JSON.parse(localStorage.getItem("userInfo"));
const user = userData.find((el) => el.email == email && el.password == password);
  if(isvalid){    
    if (user) {
      alert(`Login Succesfully! Welcome ${user.name}`);
      window.location.href = 'home.html'
    } else {
    alert("Enter Correct Password || Email");
    }
  } else {
    alert('All fields are required');
    return;
  }

});

