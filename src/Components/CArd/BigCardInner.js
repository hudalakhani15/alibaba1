import React from 'react'

const BigCardInner = ({h2,icon,img,text,veri}) => {
    return (
        <div style={{padding:"20px"}}>
            <div style={{display:"flex"}}>
                <img src={icon} alt="icon"/>
                <h2>{h2}</h2>
            </div>

             <h4 style={{color:"#666",fontWeight:"600"}}>{text} </h4>

            <div style={{display:"flex",justifyContent:"space-between" , alignItems:"center"}}>
                <img src={veri} alt="verified" height="12"/>
                <img src={img} alt="item" height="90"/>

            </div>
            
        </div>
    )
}

export default BigCardInner