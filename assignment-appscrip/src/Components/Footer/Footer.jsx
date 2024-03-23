import React from 'react';
import "./Footer.css"; // Optional: Import CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <div>
                    <h4>BE THE FIRST KNOW</h4>
                    <p>Sign up for updates from metta muse.</p>
                    <input type="text" placeholder='Enter your e-mail...' />
                    <button style={{padding:"10px",width:"150px",backgroundColor:"black",cursor:"pointer",color:"grey",borderColor:"grey",marginLeft:"20px"}}>SUBSCRIBE</button>
                </div>
                <div>
                    <h4>CONTACT US</h4>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>
                    <h4>CURRENCY</h4>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNJfQPJZRqNEFqoQ6SqQS6UZZ6aDzEm8hOCQ&usqp=CAU" alt="" />
                    <span>.USD</span>
                    <p>Transactions will be completed in Euros and a currency refrence is available on hover.</p>
                </div>
                
            </div>
            <hr />
            <div>
                <div>
                    <h4>metta muse</h4>
                    <p>About Us</p>
                    <p>Stories</p>
                    <p>Artisans</p>
                    <p>Bountiques</p>
                    <p>Contact Us</p>
                    <p>EU Compliances Docs</p>
                </div>
                <div>
                    <h4>QUICK LINKS</h4>
                    <p>Orders & Shipping</p>
                    <p>Join/Login as a Seller</p>
                    <p>Payment & Pricing</p>
                    <p>Return & Refunds</p>
                    <p>FAQs</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div>
                    <h4>FOLLOW US</h4>
                    <img src="https://i.pinimg.com/564x/86/08/cc/8608cce40e22afd979e926507479a909.jpg" alt="Instagram" />
                    <img src="https://www.citypng.com/public/uploads/preview/hd-white-round-outline-linkedin-in-icon-symbol-png-31623972067mbebj1ksdz.png" alt="Linkedin" />
                    <h4>metta muse ACCEPTS</h4>
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png" alt="GooglePay" />
                    <img src="https://www.albawaba.com/sites/default/files/styles/d08_standard/public/2023-03/Mastercard%20Logo%20%281%29.jpg?h=10d202d3&itok=ZqekW9Q-" alt="MaterCard" />
                    <img src="https://cdn0.iconfinder.com/data/icons/shift-ecommerce/32/Paypal-512.png" alt="Paypal" /> */}
                    <img style={{width:"300px"}} src="https://image.shutterstock.com/image-photo/image-260nw-2304102381.jpg" alt="Applepay" />
                </div>
            </div>
            <p style={{color:"white"}}>Copyright © 2023 mettamuse. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
