
function signupUser(){
    // e.preventDefault()
    console.log("signUP")
   
    var firstName = document.getElementById("firstName").value
    var lastName = document.getElementById("lastName").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var confirmPassword = document.getElementById("confirmPassword").value
    var error = document.getElementById("error-m");

     if(email && password && confirmPassword && password == confirmPassword){
        var user={
            firstName : firstName,
            lastName : lastName,
            email:email,
            password:password,
        };
        
        let users = localStorage.getItem("users");
        var usersArr = []
        if(users){
             usersArr = JSON.parse(localStorage.getItem("users"));
            if(usersArr.filter((user)=>user.email === email).length == 0){
                usersArr.push(user);  
            }else{
                error.innerHTML = "email already exists"
            }
           
        }else{
            usersArr =[user]; 
        }
        localStorage.setItem("users",JSON.stringify(usersArr));
        window.location.href = "./loginPage.html"; 
    }
}   