import React, { useRef } from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
import {Navigation,EfectFade} from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import "swiper/css"
const Slider = () => {
  return (
    <div>
    <Swiper
    modules={Navigation}
    >
    
    </Swiper>
    </div>
  )
}

export default Slider