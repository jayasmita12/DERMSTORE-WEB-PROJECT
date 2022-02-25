let rgsterdetel = JSON.parse(localStorage.getItem("registerdetails"))
let a=[]
a.push(rgsterdetel)
function logindata(event) {
    event.preventDefault()
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
 
    isuser = false
    for (var i = 0; i < a.length; i++) {
        if (a[i].email == email && a[i].password == password) {
            console.log(a[i])
            isuser = true
            break;
        }

    }
    if (isuser == true) {
        alert("Login Successfully")
        window.location.href = "myaccount.html"

    }
    else {
        alert("Invalid Credentials")
    }
}