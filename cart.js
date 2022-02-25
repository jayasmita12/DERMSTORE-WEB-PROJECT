import { navbar, offerdiv, footerpart, belowfoot } from "./components/navbar.js";

let navbar1 = document.getElementById("navbar")
let offers_mainbar = document.getElementById("offers-mainbar")
navbar1.innerHTML = navbar();
offers_mainbar.innerHTML = offerdiv()


let cart = (localStorage.getItem("cartdetails"))
if(!cart){
  cart=[]
  localStorage.setItem("cartdetails", JSON.stringify(cart))
  countcart(cart)
}
else{
  cart=JSON.parse(cart)
  countcart(cart)
}
console.log("cart:",cart)
let subtotal= cart.reduce((acc,curr)=>{

  return acc+curr.price
},0)

function countcart(cart){
  let count=document.getElementById("count")
  count.innerText="("+cart.length+")"
}

let cartitem = JSON.parse(localStorage.getItem("cartdetails"))

let rgsterdetel = JSON.parse(localStorage.getItem("registerdetails"))

document.getElementById("checkout").addEventListener("click",check)
function check(){
    console.log(rgsterdetel)
    if(rgsterdetel){
        window.location.href="checkout.html"
    }
    else{
        alert("Create an account First")
        window.location.href="account.html"
    }
}
// console.log(cartitem)


let cartdiv = document.getElementById("cartitems")
let table = document.createElement("table")
let thead = document.createElement("thead")
let tr = document.createElement("tr")
let th1 = document.createElement("th")
th1.textContent = "image"
let th2 = document.createElement("th")
th2.textContent = "ITems"
let th3 = document.createElement("th")
th3.textContent = "Price"
let th4 = document.createElement("th")
th4.textContent = "Option"
tr.append(th1, th2, th3, th4)
thead.append(tr)


let tbody = document.createElement("tbody")
cartitem.map((el) => {
let {image,title,price}=el
    let tr1 = document.createElement("tr")
    let td1 = document.createElement("td")
    let img = document.createElement("img")
    img.src = image
    img.style = "width:100px;height:100px"
    td1.append(img)
    let td2 = document.createElement("td")
    let des = document.createElement("p")
    des.innerText = title
    td2.append(des)
    let td3 = document.createElement("td")
    let rate = document.createElement("h3")
    rate.innerText = "$"+price.toFixed(2)
    td3.append(rate)
    let td4 = document.createElement("td")
    let option = document.createElement("button")
    option.innerText = "x"
    option.style = "font-size:20px";
    option.onclick=()=>{
      document.getElementById("completerow").remove()
    //  removefromcart(cart)

   
    }
    td4.append(option)
    let hr = document.createElement("hr")
    hr.style = "width:100%";
    tr1.append(td1, td2, td3, td4)
    tr1.id="completerow"
    tbody.append(tr1, hr)
})
table.append(thead, tbody)
cartdiv.append(table)


function totalamount(subtotal){
  let total=document.getElementById("subtotaldiv")
  total.textContent="Cart Subtotal:  $" +subtotal.toFixed(2)
  
  console.log(subtotal)
}
totalamount(subtotal)

document.getElementById("couponbtn").addEventListener("click",applycoupon)
 function applycoupon(){
  let inputvalue=document.getElementById("couponinput").value
  
  if(inputvalue==="GROW UP"||inputvalue==="DERM$STORE"){
 {
    subtotal=subtotal-(0.3*100);
    totalamount(subtotal)
    }
  }
}



  

let footerdiv=document.getElementById("footerdiv")
footerdiv.innerHTML=footerpart()
let belowfooterdiv=document.getElementById("belowfooter")
belowfooterdiv.innerHTML=belowfoot()