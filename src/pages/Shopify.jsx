import React from 'react'
import "../styles/shopify.css"
function Shopify() {
    return <>
        <div>
            <div className='Shopname'>
                <h3 style={{ fontWeight: "bold", fontStyle: "italic" }}> <img style={{ marginRight: "-20px" }} src="/photo/shopifylogo.png" alt="" /> Shopify</h3>
            </div>
            <div className='mainheading'>
                <div className='firstheading'>
                    <h1 style={{ fontSize: "3em", fontWeight: "bold" }}>Create your own ecommerces store with Shopify</h1>
                    <p style={{ fontSize: "23px" }}>Shopify is trusted by millions of businesses worldwide</p>
                    <div className='buttonname'>
                        <input style={{ width: "18rem ", borderRadius: "9px" }} type="text" placeholder='Enter your email' />
                        <button style={{ width: "10rem ", borderRadius: "9px", color: "wheat", backgroundColor: "black" }}>Start free trial</button>

                    </div>
                    <p style={{ height: "60px", width: "25rem", fontSize: "12px", paddingTop: "1rem", marginLeft: "12rem" }}>Try Shopify free for 3 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.</p>
                </div>
                <img style={{ width: "31rem", marginLeft: "10rem" }} src="/photo/shopimg.png" alt="" />

            </div>
            <div className='threediv'>
                <div className='innerdiv'>
                    <img style={{ height: "4rem", marginTop: "-20px" }} src="/photo/fb.jpeg" alt="" />
                    <h6 style={{ fontSize: "20px" }}>① Choose & customise a theme</h6>
                    <p>Customize the design of your shop from over thousands of themes. No design experience or programming skills required.</p>
                </div>
                <div className='innerdiv'>
                    <img style={{ height: "4rem", marginTop: "-20px" }} src="/photo/insta.png" alt="" />
                    <h6 style={{ fontSize: "20px" }}>② Add products</h6>
                    <p>Add your products to the shop. List your eye-catching products with the best photos, price and descriptions.</p>
                </div>
                <div className='innerdiv'>
                    <img style={{ height: "4rem", marginTop: "-20px" }} src="/photo/whatapp.png" alt="" />

                    <h6 style={{ fontSize: "20px" }}>③ Start selling</h6>
                    <p>Set up payments and shipping, and start selling.</p>
                </div>
            </div>
            <div className='logo'>
                <img style={{ height: "5rem", width: "5rem", marginTop: "40px" }} src="/photo/i1.png" alt="" />
                <img style={{ height: "5rem", width: "5rem", marginTop: "40px" }} src="/photo/i2.png" alt="" />
                <img style={{ height: "5rem", width: "5rem", marginTop: "40px" }} src="/photo/i3.png" alt="" />
                <img style={{ height: "5rem", width: "5rem", marginTop: "40px" }} src="/photo/i4.png" alt="" />
                <img style={{ height: "5rem", width: "5rem", marginTop: "40px" }} src="/photo/i55.png" alt="" />
            </div>
            <div className='twodiv'>
                <div className='samediv'>
                    Overall it has fulfilled all the needs for our online store, and we will recommend it to anyone whose time and design are a priority.”
                    <h6 style={{ fontWeight: "bold", paddingTop: "1rem" }}>FELIPE BENJUMEA, FOREVER NEW</h6>
                </div>
                <div className='samediv'>
                    The fact that Shopify provides endless support and easy-to-use design components made the transition smooth and the integration simple.”
                    <h6 style={{ fontWeight: "bold", paddingTop: "1rem" }}>COLLECTIVE GOODS</h6>

                </div>
            </div>
            <div className='single'>
                “Shopify is hands down the easiest e-commerce system to customize the look and feel of.”
                <h6 style={{ marginTop: "1rem" }}>DEREK ASHAUER | ASHWEBSTUDIO</h6>
                <button style={{ backgroundColor: "black", color: "wheat", marginTop: "40px", width: "11rem", height: "4rem", borderRadius: "9px" }}>Start free trial</button>
                <h1 style={{ fontWeight: "bold", marginTop: "4rem", height: "2rem" }}>FAQs</h1>
            </div>

            <div className='last'>
                    <div className='one' >
                        <h5>How do i start an ecommerces business?</h5>
                        <img style={{width:"2rem",height:"2rem"}} src="/photo/plus.png" alt="" />
                    </div>
                    <div className='one' >
                        <h5>What do i start an ecommerce business ?</h5>
                        <img style={{width:"2rem",height:"2rem"}} src="/photo/plus.png" alt="" />
                    </div>
                    <div className='one' >
                        <h5>Is ecommerces a profitabal businesses?</h5>
                        <img style={{width:"2rem",height:"2rem"}} src="/photo/plus.png" alt="" />
                    </div>
                    <div className='one' >
                        <h5>Is it hard to start your own ecommerce business?</h5>
                        <img style={{width:"2rem",height:"2rem"}} src="/photo/plus.png" alt="" />
                    </div>
                </div>

        </div>


    </>
}

export default Shopify
