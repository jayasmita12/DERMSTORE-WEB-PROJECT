import {navbar,offerdiv,footerpart,belowfoot} from "./components/navbar.js";
import {skincareproducts} from"./scripts/data.js"

let navbar1 = document.getElementById("navbar")
let offers_mainbar=document.getElementById("offers-mainbar")
navbar1.innerHTML=navbar();
offers_mainbar.innerHTML=offerdiv()


//option of many sorting program
appendproductimages(skincareproducts)
function appendproductimages(skincareproducts){
   let product_images=document.getElementById("many-product-images")
   
   skincareproducts.map((e)=>{
    let div=document.createElement("div")
    let img=document.createElement("img")
    img.src=e.image
    
    img.onclick=()=>{
      
    }
    let p = document.createElement("p")
    p.innerText=e.title
   
    let price= document.createElement("h2")
    price.innerText="$"+e.price.toFixed(2)
    price.style="text-align:center"
    let quickbuy=document.createElement("button")
    quickbuy.innerText="QUICK BUY"
    quickbuy.onclick=()=>{
      console.log(e)
      window.location.href="product.html"
      localStorage.setItem("productdetails",JSON.stringify(e))
    }
    div.setAttribute("id",'center')
    div.append(img,p,price,quickbuy)
    div.style=""
   
    product_images.append(div)
   })  
}



let footerdiv=document.getElementById("footerdiv")
footerdiv.innerHTML=footerpart()
let belowfooterdiv=document.getElementById("belowfooter")
belowfooterdiv.innerHTML=belowfoot()