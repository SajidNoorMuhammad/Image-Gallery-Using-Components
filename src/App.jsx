import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageGallery from '../Components/ImageGallery'

function App() {

  const images = [
    { url: "Images/a.jpg" },
    { url: "Images/c.jpg" },
    { url: "Images/f.jpg" },
    { url: "Images/g.jpg" },
    { url: "Images/h.jpg" },
    { url: "Images/i.jfif" },
    { url: "Images/j.webp" },
    { url: "Images/k.jpg" },
    { url: "Images/l.jpg" },
    { url: "Images/m.jpeg" },
    { url: "Images/n.webp" },
    { url: "Images/o.jfif" },

    
  ]
  return (
    <div className='mx-auto'>
      <h1 className=' font-bold text-4xl bg-red-300 p-5 text-center font-sans'>My Image Gallery</h1>
      <ImageGallery images={images} />
    </div>
  )
}

export default App
