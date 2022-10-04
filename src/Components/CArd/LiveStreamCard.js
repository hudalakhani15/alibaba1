import React from 'react'
import LiveStreamCards from "./LiveStreamCards"
const LiveStreamCard = () => {

    const date = new Date().toLocaleTimeString()
    console.log(date)
    return (
        <div>
            <div style={{margin:"2rem auto",width:"85%"}}>
                <h1 style={{}}>ALIBABA.COM LIVESTREAMS</h1>
            </div>
            <LiveStreamCards
                text="Discover select products With
                Real-time demonstrations"
                img="https://img.alicdn.com/imgextra/i2/O1CN01bfldEW1bi89H65qiQ_!!6000000003498-0-tps-852-400.jpg"
            />

            <div style={{margin:"2rem auto",width:"85%"}}>
                <h1 style={{}}>SMALL COMMODITIES MARKETPLACE</h1>
            </div>
            <LiveStreamCards
                text="A wide range of selected good with fast free shipping"
               img="https://img.alicdn.com/tfs/TB1V9GnyYj1gK0jSZFuXXcrHpXa-296-200.png"
            />


            <div style={{margin:"2rem auto",width:"85%"}}>
                <h1 style={{}}>WEEKLY DEALS</h1>
            </div>
            <LiveStreamCards 
               text="from 10% OFF"
               img="https://img.alicdn.com/tfs/TB1M5H4oRjTBKNjSZFwXXcG4XXa-720-400.png"
               date={date}
            />

            
        </div>
    )
}

export default LiveStreamCard