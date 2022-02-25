import {navbar,offerdiv,footerpart,belowfoot} from "./components/navbar.js";
import  {bestsellers}  from "./scripts/data.js";
import{seasonalMoisturiser,newarrivals} from"./scripts/data.js"
let navbar1 = document.getElementById("navbar")
let offers_mainbar=document.getElementById("offers-mainbar")
navbar1.innerHTML=navbar();
offers_mainbar.innerHTML=offerdiv()

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

appendbestseller(bestsellers)
function appendbestseller(bestsellers){
  //  let product_show_div2=document.getElementById("product-show-div2")
    let product_show_div=document.getElementById("product-show-div")
   bestsellers.map((e)=>{
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=e.image
    
    img.onclick=()=>{
      
    }
    let p = document.createElement("p")
    p.innerText=e.title
    let price= document.createElement("h2")
    price.innerText="$"+e.price.toFixed(2)
    let quickbuy=document.createElement("button")
    quickbuy.innerText="QUICK BUY"
    quickbuy.onclick=()=>{
      console.log(e)
      window.location.href="product.html"
      localStorage.setItem("productdetails",JSON.stringify(e))
    }
    div.setAttribute("id",'center')
    div.append(img,p,price,quickbuy)
    product_show_div.append(div)
    // product_show_div2.append(div)
   })  
}
appendseseonal(seasonalMoisturiser)
function appendseseonal(seasonalMoisturiser){
   let product_show_div2=document.getElementById("product-show-div2")
   
   seasonalMoisturiser.map((e)=>{
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=e.image
    
    img.onclick=()=>{
      
    }
    let p = document.createElement("p")
    p.innerText=e.title
    let price= document.createElement("h2")
    price.innerText="$"+e.price.toFixed(2)
    let quickbuy=document.createElement("button")
    quickbuy.innerText="QUICK BUY"
    quickbuy.onclick=()=>{
      console.log(e)
      window.location.href="product.html"
      localStorage.setItem("productdetails",JSON.stringify(e))
    }
    div.setAttribute("id",'center')
    div.append(img,p,price,quickbuy)
   
    product_show_div2.append(div)
   })  
}

appendnewarrivals(newarrivals)
function appendnewarrivals(newarrivals){
   let product_show_div3=document.getElementById("product-show-div3")
   
   newarrivals.map((e)=>{
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=e.image
    
    img.onclick=()=>{
      
    }
    let p = document.createElement("p")
    p.innerText=e.title
    let price= document.createElement("h2")
    price.innerText="$"+e.price.toFixed(2)
    let quickbuy=document.createElement("button")
    quickbuy.innerText="QUICK BUY"
    quickbuy.onclick=()=>{
      console.log(e)
      window.location.href="product.html"
      localStorage.setItem("productdetails",JSON.stringify(e))
    }
    div.setAttribute("id",'center')
    div.append(img,p,price,quickbuy)
   
    product_show_div3.append(div)
   })  
}


//input for main searchbar part
document.getElementById("btn1").addEventListener("click",skincareimages)
function skincareimages(){
  let inputvalue= document.getElementById("main-searchbar").value 
  if(inputvalue=="Skincare" || inputvalue=="Sunscreen" ||inputvalue=="moisturizer"){
    window.location.href="optionpage.html"

    
  }
}

let footerdiv=document.getElementById("footerdiv")
footerdiv.innerHTML=footerpart()
let belowfooterdiv=document.getElementById("belowfooter")
belowfooterdiv.innerHTML=belowfoot()
