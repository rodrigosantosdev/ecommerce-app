import React from 'react'
import { Gallery, GalleryContainer } from "./style"

export default function GallerySimple() {
  return (
    <GalleryContainer>
      <Gallery>
        <img src="https://images.pexels.com/photos/6616416/pexels-photo-6616416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <img src="https://images.pexels.com/photos/13921689/pexels-photo-13921689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <img src="https://images.pexels.com/photos/14577737/pexels-photo-14577737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <img src="https://images.pexels.com/photos/14686959/pexels-photo-14686959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <img src="https://images.pexels.com/photos/12620000/pexels-photo-12620000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </Gallery>
    </GalleryContainer>
  )
}
