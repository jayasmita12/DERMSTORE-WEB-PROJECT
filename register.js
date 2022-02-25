// document.getElementById("continue").addEventListener("onclick",getregisterdata)
 function getregisterdata(event){
     event.preventDefault()
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let confirmEmail=document.getElementById("confirm-email").value
    let password=document.getElementById("password").value
    let confirmPassword=document.getElementById("confirm-password").value
    let number=document.getElementById("phn-number").value
    // let check=document.getElementById("check").value

    function Account(name,email,confirmEmail,password,confirmPassword,number){
        this.name=name;
        this.email=email;
        this.confirmEmail=confirmEmail;
        this.password=password;
        this.confirmPassword=confirmPassword;
        this.number=number;
        // this.name=name;
    }

    if(name !="" && email != "" && (confirmEmail !="" && confirmEmail == email) && password !="" && (confirmPassword !="" && confirmPassword == password) && number !=""){
        let acntdetails = new Account(name,email,confirmEmail,password,confirmPassword,number)
        let acntjson=JSON.stringify(acntdetails)
        console.log(acntjson);
        localStorage.setItem("registerdetails",acntjson)
        alert("Register Successfully")
        window.location.href="account.html";
    }
    else{
        alert("Fill all the details clearly")
    }
}