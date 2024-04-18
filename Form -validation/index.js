// document.getElementById("name");
// let click=document.getElementById("submit");
// click.addEventListener('click',(e)=>{  
//     e.preventDefault(); 
//     console.log(document.getElementById("name").value)
// });

let form=document.getElementById("signup")
form.addEventListener("submit",(e)=>{  
    e.preventDefault(); 
 
    let isvalid=true;
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let country = document.getElementById("country");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password")

    if(name.value =="")
    {
        isvalid=false,
        document.getElementById("namerror").innerText="Name is Requried"
    }
    if(email.value =="")
    {
        isvalid=false,
        document.getElementById("emailerror").innerText="email is Requried"
    }
    if(country.value =="")
    {
        isvalid=false,
        document.getElementById("countryerror").innerText="country is Requried"
    }
    if(phone.value =="")
    {
        isvalid=false,
        document.getElementById("phonerror").innerText="phone is Requried"
    }
    if(password.value =="")
    {
        isvalid=false,
        document.getElementById("passworderror").innerText="Password is Requried"
    }

    if(isvalid)
    {
        alert("succecfully login")
        let obj={
                name:document.getElementById("name").value,
                email:document.getElementById("email").value,
                country:document.getElementById("country").value,
                phone:document.getElementById("phone").value,
                password:document.getElementById("password").value
            } 
        localStorage.setItem('userinfo',JSON.stringify(obj))
    }
    else
    {
        alert("fill up form")
    }
});



// let obj={
//     name:document.getElementById("name").value,
//     email:document.getElementById("email").value,
//     country:document.getElementById("country").value,
//     phone:document.getElementById("phone").value,
//     password:document.getElementById("password").value
// }  
// console.log(obj)