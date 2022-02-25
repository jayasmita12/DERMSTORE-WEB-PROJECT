const navbar = ()=>{
    return `    <div id="sub-navbar-first">     
    <div id="derm-icon">
    <a href="index.html"><img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2pHARSsaViwMQ86kYBhX3KkurTwehaCPQtjfPOx1YDdtEP8zKb2N8eqH7gP-ySC_QXw&usqp=CAU"
            alt="icon" id="icon"></a>
</div>
<div id="input-search">
    <input type="text" placeholder="Search for a product or a brand..." id="main-searchbar">
    <button id="btn1"><i class="fa fa-search"></i></button>
</div>
<a href="account.html"><div id="account"><i class="fa fa-user"> Account</i></div> </a>
<a href="cart.html"><div id="cart"><i class="fa fa-shopping-cart"> Cart<span id="count"></span></i></div></a>

</div>

<div id="sub-navbar-second">
<ul id="list-item">
    <a href="index.html"><li>Brands</li></a>
    <a href="index.html"><li>Browse By</li></a>
    <a href="index.html"><li>Bestsellers</li></a>
    <a href=""><li>Skincare</li></a>
    <a href=""><li>Makeup</li></a>
    <a href=""><li>Haircare</li></a>
    <a href=""><li>Bath&Body</li></a> 
    <a href=""><li>Men</li></a>
    <a href=""><li>Tools&Device</li></a>
    <a href=""><li>Gift & sets</li></a> 
    <a href=""><li>Beauty</li></a> 
    <li>sale</li>
    <li>New</li>
    <li>Skin 101</li>
</ul>
</div>
`
}
function offerdiv(){
    return `    <ul id="offers-bar">
    <li><i class="fa fa-truck"> FREE US shipping over $50</i></li>
    <li><i class="fa fa-clock"> New customers save 15% with code WELCOME15</i></li>
    <li> Redeem Dermstore Rewards</li>
    <li><i class="fa fa-check"> Pay in 4 with Klarna</i></li>
</ul>`
}

function footerpart(){
    return `      <div id="foot1">
    <p>Sign up to our newsletters and receive the latest exclusive discounts and deals</p>
    <a href="account.html"><button>
    SIGN ME UP</button></a>
    <hr style="margin-top:50px">
    <p>Customer Service</p>
    <div>Help Center/FAQs</div>
    <div>Return</div>
    <div>Shipping Information</div>
    <div>Order Status</div>
</div>
<div id="foot2">
    <p>Connect with us</p>
    <div id="socialimg-logo">
        <img src="./login_img/facebook_svg.svg" alt="">
        <img src="./login_img/twitter_svg.svg" alt="">
        <img src="./login_img/instagram_svg.svg" alt="">
        <img src="./login_img/youtube_svg.svg" alt="">
        <img src="./login_img/pinterest_svg.svg" alt="">
    </div>
    <div id="threediv">
        <div id="myaccount">
            <hr style="margin-top: 50px;width:270px">
            <p>My Account</p>
            <div>Manage My Subscriptions</div>
            <div>My Rewards</div>
            <div>My Favorites</div>
            <div>Referrals</div>
            <div>Order History</div>
        </div>
        <div id="company">
            <hr style="margin-top: 50px;width:270px">
            <p>Company</p>
            <div>About us</div>
            <div>Press</div>
            <div>What is Klarna?</div>
        </div>
        <div id="legal">
            <hr style="margin-top: 50px;width:270px">
            <p>Legal</p>
            <div>Privacy Policy</div>
            <div>Terms & Consitions</div>
            <div>Modern Slavery Statement</div>
            <div>Product Recall</div>
            <div>Accessibility</div>
        </div>
    </div>

</div>`
}


function belowfoot(){
    return `       <div id="first">
    <h1>THG</h1>
    <h4>2022 ©The Hut.com Ltd.</h4>
</div>
<div id="allcard">
    <h1>Pay securely with</h1>
    <div>
        <img src="https://www.investopedia.com/thmb/1IVupa7WPkyjIVLKezgBowB52DM=/800x450/filters:fill(auto,1)/full-color-800x450-cee226a48bed4177b90351075b332227.jpg"
            alt="">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQokKHsJhfDDps4c0ZgyqVMZtd_gAfQ4p2ZeDatoBAQXdDBuiNmm3ZF1uku1EtShPomWg&usqp=CAU"
            alt="">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1eadNGtl1ScX9qrqXKRiqXrgf7DtLmGyw3MQp45G5oECsCNJD9-RuYO_iMmRyAOHBaE&usqp=CAU"
            alt="">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZuO5luqh3u9hjkmQtOSIwUziBX9FcIO7GsA&usqp=CAU"
            alt="">
        <img src="https://logosvector.net/wp-content/uploads/2015/08/apple-pay-logo.png" alt="">
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/afterpay-logo-png-black-transparent.png"
            alt="">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQkEqvC1ypxkpm20RidRdNdWyITAiGGvbFQt7Prl20nofrp6_foDSwEWFI9hx2ukuxbo&usqp=CAU"
            alt="">
    </div>
</div>`
}
export {navbar,offerdiv,footerpart,belowfoot};