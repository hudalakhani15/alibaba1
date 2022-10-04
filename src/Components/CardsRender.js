import React from 'react'
import Card from "../Components/CArd/Card"
import "../CssFiles/Navbar.css"
import { useState } from 'react'
import Bigcard from "./CArd/BigCard"


const CardsRender = () => {
const [ state,setState] = useState(
    [
        {
            img:"https://s.alicdn.com/@sc04/kf/Hf05dcc64de6248dda23e1d3c13ee7172p.jpg_120x120.jpg",
            tittle:"New Arrivals",
            img1:"https://s.alicdn.com/@sc04/kf/He47bb9a81e5e49ee99e8cdefecd08a72y.jpg_120x120.jpg",
            img2:"https://s.alicdn.com/@sc04/kf/Hf05dcc64de6248dda23e1d3c13ee7172p.jpg_120x120.jpg",
            price1:"333.23",
            price2:"221.1",
            des1:"Trending Now",
           

        },
        {
            img:"https://img.alicdn.com/tfs/TB1VsukzuH2gK0jSZJnXXaT1FXa-38-34.png",
            tittle:"Top-Ranked Product",
            img1:"https://s.alicdn.com/@sc04/kf/H23d05060c20243ef9b2bffb3e91eb06cq.jpg_120x120xz.jpg",
            img2:"	https://s.alicdn.com/@sc04/kf/H6028d43b19ad48b0a487908a29644ed6R.jpg_120x120xz.jpg",
            price1:"137.22",
            price2:"6,782.22",
            des1:"1 Piece",
          

        },
        {
            img:"https://img.alicdn.com/imgextra/i2/O1CN01m3E6Kp1nx2NbudQJI_!!6000000005155-2-tps-60-60.png",
            tittle:"Personal Protuctive",
            img1:"	https://s.alicdn.com/@sc04/kf/U80ddf7153264404f915053794c51b36az.png_120x120xz.jpg",
            img2:"https://s.alicdn.com/@sc04/kf/H475e3e5e505642ce99b197a9c10b8a4dn.jpg_120x120xz.jpg            ",
            price1:"5.17",
            price2:"2,65.22",
            des1:"",
            

        },
        {
            img:"https://img.alicdn.com/imgextra/i3/O1CN01NRSdOO1N2zv6KFoVV_!!6000000001513-0-tps-42-48.jpg",
            tittle:"Dropshipping",
            img1:"https://s.alicdn.com/@sc04/kf/H1df377ea10f0483ca43453bfdee519dbq.jpg_120x120xz.jpg            ",
            img2:"https://s.alicdn.com/@sc04/kf/Hbf5b06a9f6ff47f29269d1339c76825d7.png_120x120xz.jpg",
            price1:"4.293.33",
            price2:"351,2.22",
            des1:"1 piece",
            

        },
        {
            img:"https://img.alicdn.com/tfs/TB1XEafzAL0gK0jSZFAXXcA9pXa-40-40.png",
            tittle:"Global Orignal Sources",
            img1:"https://s.alicdn.com/@sc04/kf/H171cfdbbf9e64c82aab9f6152e4d0f27A.jpg_120x120xz.jpg",
            img2:"https://s.alicdn.com/@sc04/kf/Hd70554d513594a089c09783fce08e55bD.jpg_120x120xz.jpg",
            price1:"51.52",
            price2:"7,310.11",
            des1:"1 piece",
            

        },
        {
            img:"https://img.alicdn.com/imgextra/i3/O1CN01NRSdOO1N2zv6KFoVV_!!6000000001513-0-tps-42-48.jpg",
            tittle:"Dropshipping",
            img1:"https://s.alicdn.com/@sc04/kf/H1df377ea10f0483ca43453bfdee519dbq.jpg_120x120xz.jpg            ",
            img2:"https://s.alicdn.com/@sc04/kf/Hbf5b06a9f6ff47f29269d1339c76825d7.png_120x120xz.jpg",
            price1:"4.293.33",
            price2:"351,2.22",
            des1:"1 piece",
            

        },
    ]
)

    return <> (
        <div className="card_main">


{
    state.map((e,i) => {
        return <Card 
                logo={e.img}
                tittle={e.tittle}
                img1={e.img1}
                img2={e.img2}
                desc={e.des1}
        
        />
    })
}




        </div>
    )

    <div>
        <div style={{display:"flex" , margin:"2rem auto", width:"85%"   }}>
        <h1>CONSUMER ELECTRONICS </h1>
       
        </div>
        
    <Bigcard
         Rightimg="	https://img.alicdn.com/tfs/TB1J5jev7voK1RjSZPfXXXPKFXa-300-320.png"
         h2=" Select Novelty Products"
    />


    <div style={{display:"flex" , margin:"2rem auto", width:"85%"   }}>
        <h1>APPAREL </h1>
       
        </div>

    <Bigcard
       Rightimg="	https://img.alicdn.com/tfs/TB1ZXXNIgHqK1RjSZFkXXX.WFXa-300-320.jpg"
       h2="Trending Style"
    />
    </div>

    </>
}

export default CardsRender