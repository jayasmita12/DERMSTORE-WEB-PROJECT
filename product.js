import {navbar,offerdiv,footerpart,belowfoot} from "./components/navbar.js";
let navbar1 = document.getElementById("navbar")
let offers_mainbar=document.getElementById("offers-mainbar")
navbar1.innerHTML=navbar();
offers_mainbar.innerHTML=offerdiv()

let oneproduct = JSON.parse(localStorage.getItem("productdetails"))
console.log(oneproduct)
imageshow(oneproduct)

function imageshow(oneproduct){
    let productimage= document.getElementById("product-image")
  
    let div=document.createElement("div")
    let img= document.createElement("img")
    img.src=oneproduct.image
    
    // span.append(title)
    div.append(img)
    div.id="single-image-div"
    productimage.append(div)
}

let cart = localStorage.getItem("cartdetails")
if(!cart){
  cart=[]
  localStorage.setItem("cartdetails",JSON.stringify(cart))
  countcart(cart)
}
else{
  cart=JSON.parse(cart)
  countcart(cart)
}

function countcart(cart){
  let count=document.getElementById("count")
  count.innerText="("+cart.length+")"
}

productdatashow(oneproduct)
function productdatashow(oneproduct){
    let productdata= document.getElementById("product-data")
    let div=document.createElement("div")
     let title= document.createElement("h1")
     title.innerText=oneproduct.title
     let p =document.createElement("p")
     p.innerHTML="A vitamin C serum that provides environmental protection, lightens lines, firms skin and brightens your complexion."
     let r=document.createElement("h4")
     r.innerText=oneproduct.reviews
     p.style="font-size:20px"
    let s=document.createElement("h3")
    s.innerHTML="✦ Earn 830 reward points when purchasing this product as a rewards member*"
    let price=document.createElement("h1")
    price.innerText="$"+oneproduct.price.toFixed(2)
    let div2= document.createElement("div")
    div2.innerText=`$${oneproduct.price.toFixed(2)}, One time Purchase`
    let div3= document.createElement("div")
    div3.innerText=`$${oneproduct.price.toFixed(2)}, Suscribe`;
    let hr= document.createElement("hr")
    let button= document.createElement("button")
    button.innerHTML="ADD TO CART"
    button.id="addtocart"
    
    
    button.onclick=()=>{
      window.location.href="cart.html"
      additemtocart(oneproduct)
    }
    hr.style="margin-top:30px"
    div.append(title,p,r,s,price,div2,div3,hr,button)
    div2.style="border:1px solid;width:250px;text-align:center;padding:20px 40px;cursor:pointer;font-size:20px;font-weight:bold"
    div3.style="border:1px solid;width:250px;text-align:center;padding:20px 40px;cursor:pointer;font-size:20px;font-weight:bold"
     productdata.append(div)
}
function additemtocart(oneproduct){
  console.log(oneproduct)
  let cart =JSON.parse(localStorage.getItem("cartdetails"))
  cart.push(oneproduct)
  localStorage.setItem("cartdetails",JSON.stringify(cart))
  countcart(cart)
}
let footerdiv=document.getElementById("footerdiv")
footerdiv.innerHTML=footerpart()
let belowfooterdiv=document.getElementById("belowfooter")
belowfooterdiv.innerHTML=belowfoot()