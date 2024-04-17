const form = document.getElementById("signup");
form.addEventListener("submit",(e)=>{
e.preventDefault();
  let obj={
   name:document.getElementById('name').value,
   email:document.getElementById('email').value,
   country:document.getElementById('country').value,
   phone:document.getElementById('phone').value,
   password:document.getElementById('password').value
  }
  console.log(obj);
});

let forms = document.getElementById("signin");
forms.addEventListener("submit",(e1)=>{
e1.preventDefault();
  let obj1={
   name:document.getElementById('signin-name').value,
   email:document.getElementById('signin-email').value,
   password:document.getElementById('signin-password').value
  }
  console.log(obj1);
});