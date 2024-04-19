$("documnet").ready(()=>{

    $("#signup").submit((e)=>{
        e.preventDefault()
        let name=$("#name").val()
        let email=$("#email").val()
        let password=$("#password").val()
        let phone=$('#phone').val()
        let country=$("#country").val()

        let isvalid=true;

        if(name=="")
        {
            isvalid=false
            $("#namerror").text("Name is Requied");
            $("#namerror").css("color","red");

        }
        else
        {
            $("#namerror").text("Verfied");
            $("#namerror").css("color","green");
        }

        if(email=="")
        {
            isvalid=false
            $("#emailerror").text("Email is Requied");
            $("#emailerror").css("color","red");

        }
        else
        {
            $("#emailerror").text("Verfied");
            $("#emailerror").css("color","green");
        }
        
        
        if(country=="")
        {
            isvalid=false
            $("#countryerror").text("country is Requied");
            $("#countryerror").css("color","red");

        }
        else
        {
            $("#countryerror").text("Verfied");
            $("#countryerror").css("color","green");
        }

        if(phone=="")
        {
            isvalid=false
            $("#phonerror").text("Phone is Requied");
            $("#phonerror").css("color","red");

        }
        else
        {
            $("#phonerror").text("Verfied");
            $("#phonerror").css("color","green");
        }
        
        if(password=="")
        {
            isvalid=false
            $("#passworderror").text("password is Requied");
            $("#passworderror").css("color","red");

        }
        else
        {
            $("#passworderror").text("Verfied");
            $("#passworderror").css("color","green");
        }
      

    
    })

})

