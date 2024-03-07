function loginUser(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    var error = document.getElementById("error-m");

    if(email && password){
       const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) :[];
       
       console.log(users);
       const userFromArr = users.filter((user)=>user.email === email)[0];
       console.log(userFromArr);

       let token = crypto.randomUUID()
        
       if(userFromArr?.email){
        if(userFromArr.password == password){
            localStorage.setItem("currentUser",
            JSON.stringify({
              email:email,
              password:password,
              token:token,
            }));
            error.innerHTML = "lOGIN SUCCESSFUL"
         }else{
            error.innerHTML = "Password is incorrect"
         }
       }else{
           error.innerHTML = "User does not exist"
       }

    }
}