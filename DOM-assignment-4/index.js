const form=document.getElementById("signup");
const arr=JSON.parse(localStorage.getItem("userInfo")) || [];
form.addEventListener("submit",(e)=>{
  e.preventDefault();
 
  let obj={
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    country:document.getElementById("country").value,
    phone:document.getElementById("phone").value,
    password:document.getElementById("password").value
  }
  arr.push(obj);

 localStorage.setItem("userInfo", JSON.stringify(arr));
})

const signin=document.getElementById("signin");
signin.addEventListener("submit",(e)=>{
  e.preventDefault();
       
  let objsignin={
  name:document.getElementById("signin-name").value,
  email:document.getElementById("signin-email").value,
  password:document.getElementById("signin-password").value
  }

  const xyz=JSON.parse(localStorage.getItem("userInfo"));

  let store=arr.filter((el,i)=>el.email==objsignin.email && el.password==objsignin.password)
  if(store[0])
  {
    alert("Login Succesfully")
  }
  else
  {
    alert("Invalid Password || Email");
  }
})