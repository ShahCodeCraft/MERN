import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

function Home() {
  return (
    <div>
     <CategoryList/>
     <BannerProduct/>

     <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
     <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/>

     <VerticalCardProduct category={"mobiles"} heading={"Popular's Mobiles"}/>
     <VerticalCardProduct category={"Mouse"} heading={"Popular's Mouse"}/>
    </div>
  )
}

export default Home