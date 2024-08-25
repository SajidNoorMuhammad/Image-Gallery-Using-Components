import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageGallery from '../Components/ImageGallery'

function App() {

  const images = [
    { url: "a.jpg" },
    { url: "c.jpg" },
    { url: "f.jpg" },
    { url: "g.jpg" },
    { url: "h.jpg" },
    { url: "/d.jfif" },
    { url: "/j.webp" },
    { url: " /k.jpg" },
    { url: "/l.jpg" },
    { url: "/m.jpeg" },
    { url: "/n.webp" },
    { url: "/o.jfif" },

    
  ]
  return (
    <div className='mx-auto'>
      <h1 className=' font-bold text-4xl bg-red-300 p-5 text-center font-sans'>My Image Gallery</h1>
      <ImageGallery images={images} />
    </div>
  )
}

export default App
