function getpaymentdata(event){
    event.preventDefault()
    let email=document.getElementById("email").value
   let country=document.getElementById("country").value
   let name=document.getElementById("name").value
   let address=document.getElementById("address").value
   let number=document.getElementById("number").value
   let cardnumber=document.getElementById("cardnumber").value
   let cardname=document.getElementById("cardname").value
   let month=document.getElementById("month").value
   let year=document.getElementById("year").value
   let cvv=document.getElementById("cvv").value
   let p1=document.getElementById("p1")
   let p2=document.getElementById("p2")
   let otp =document.getElementById("OTP").value

   function paymentdetails(email,country,name,address,number,cardnumber,cardname,month,year,cvv,p1,p2,otp){
       this.email=email,
       this.country=country,
       this.name=name,
       this.address=address,
       this.number=number,
       this.cardnumber=cardnumber,
       this.cardname=cardname,
       this.month=month,
       this.year=year,
       this.cvv=cvv,
       this.p1=p1,
       this.p2=p2,
       this.otp=otp
      
   }

  if(email!=""&&country != "" && name !="" && address !="" && number.length == 10 && cardnumber.length==16 && cardname !="" && month !="" && year!="" && cvv.length==3 &&(p1.checked==true && p2.checked!=true) && otp=="4Rg6Tc"){
    let paymentarray=new paymentdetails(email,country,name,address,number,cardnumber,cardname,month,year,cvv,p1,p2,otp)

    setTimeout(function(){
        alert("Payment Successfully")
        window.location.href="paymentsuccess.html"
    },3000)
  
   
      
   
    
  }
 
  else{
      alert("Fill all the details")

  } 

}   