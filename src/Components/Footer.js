import { Button } from '@mui/material'
import React from 'react'
import "./../CssFiles/Navbar.css"
const Footer = () => {
    return (
        <div className="f_1" style={{backgroundColor:"#445268" ,width:"100%" ,textAlign:"center"}}>
            <div className="f_2">
            <h3>Trade Alert - Delivering the latest product trends and 
                industry news straight to your inbox.</h3>

                <input type="email" placeholder="Your Email" />
                <Button variant="outlined"
                sx={{color:"#999999",border:"2px solid #999999",height:"48px",margin:"0 1rem",fontWeight:"bold"}}
                
                >Subscribe</Button>

                <p>We’ll never share your email address with a third-party.</p>
                </div>


                <div style={{display:"flex",justifyContent:"space-around",marginTop:"4rem "}}>
                    <ul>
                        <h1>Contumer service</h1>
                        <li>help Center</li>
                        <li>Contact us</li>
                        <li> Report Abuse</li>
                        <li>Submit a Dispute</li>
                        <li>Policies  & Rules</li>

                    </ul>


                    <ul>
                        <h1>About us</h1>
                        <li>help Center</li>
                        <li>Contact us</li>
                        <li> Report Abuse</li>
                        <li>Submit a Dispute</li>
                        <li>Policies  & Rules</li>

                    </ul>



                    <ul>
                        <h1>Source on Alibaba.com</h1>
                        <li>help Center</li>
                        <li>Contact us</li>
                        <li> Report Abuse</li>
                        <li>Submit a Dispute</li>
                        <li>Policies  & Rules</li>

                    </ul>


                    <ul>
                        <h1>Sell on Alibaba.com</h1>
                        <li>help Center</li>
                        <li>Contact us</li>
                        <li> Report Abuse</li>
                        <li>Submit a Dispute</li>
                        <li>Policies  & Rules</li>

                    </ul>
                </div>
        </div>
    )
}

export default Footer