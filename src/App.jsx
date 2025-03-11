import './App.css'
import Hero from './Ayush/Hero'
import Parallex from './Ayush/Parallax'

import InfiniteMenu from './Ayush/anims/infmenu'
import Footer from './rishabh/Footer';
import Red from './rishabh/Red';
import CircularGallery from './Ayush/rollscroll';

const items = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROz5wbopI9Pry7ERvmjfeZWHeqkfjVhk6cbg&s',
    link: 'https://google.com/',
    title: 'Cybertruck',
    description: 'Military Eh?'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-aJJfiVT5ewdvxYK5UrPR5zyECivkxmWAVQ&s',
    link: 'https://google.com/',
    title: 'CyberTruck',
    description: 'Lets roam driverlessly'
  },
  {
    image: 'https://pbs.twimg.com/media/GAN4O1BXcAA3IUC?format=jpg&name=4096x4096',
    link: 'https://google.com/',
    title: 'CyberTruck',
    description: 'Remember Elon?'
  },
  {
    image: 'https://www.edmunds.com/assets/m/cs/blt59c979cb76e3a8a0/66916db0e9be9365b13b7e52/2024-Tesla-Cybertruck-r34-07112024-02-edmunds_717.jpg',
    link: 'https://google.com/',
    title: 'CyberTruck',
    description: 'Do you want Frunk?'
  }
];

function App() {
  return (
    <>
      <Hero />
      <Parallex />


      <div style={{ height: '600px', position: 'relative' }} className="bg-black">

        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />

      </div>

      <Red />

      <Footer />

    </>
  )
}

export default App
