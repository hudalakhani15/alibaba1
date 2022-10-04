import { Button,Typography } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider';
// import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
// import ReactTooltip from 'react-tooltip';
import Modalz from "./ModalCom.js"


 const Subnavbar = () => {
     const arr = ["Ready To Ship","Personal Protective","Trade Shows","Buyer Central","Sell on Alibaba","Help"]
    
    
     return (
        <div style={{boxShadow:"1px 1px 5px 1px lightgray",backgroundColor:"white",border:"2px solid #E6E7EB",width:"100%" ,height:"60px",paddingLeft:"20px",display:"flex"}}>
            <div className="sub_cate_btn">
           
              <Modalz name="Categories"/>

             
            </div>
           
            

             <div>
              <ul className="sub_cate_center">
               {
                   arr.map((e,i) => (
                       <>
                         <Divider sx={{ height: 29, m: 1 }} orientation="vertical" />
                           <li>{e}</li>

                       </>
                       
                   ))
               }
             </ul></div>


             <div className="sub_cate_right">
                 <Typography variant="p">ENGLISH-PKR <ArrowDropDownOutlinedIcon /></Typography>
                 <Typography>SHIP-TO <ArrowDropDownOutlinedIcon/> </Typography>

             </div>



            {/* <Divider sx={{ height: 29, m: 1 }} orientation="vertical" /> */}
        </div>
    )
}
 export default Subnavbar