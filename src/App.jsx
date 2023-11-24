import { useState } from 'react'
import youtubeLogo from "./assets/youtube.png"
import './App.css';
import ImageAvatars from "./components/Avatar";
import Burger from './components/Burger';
import SearchIcon from '@mui/icons-material/Search';
import BadgeIcon from './components/Badge';
import VideoCard from './components/VideoCard';
import HomeIcon from './components/HomeIcon';
import { Home } from '@mui/icons-material';
import ytshorts from './assets/ytshorts.png'
import youtubeu from './assets/youtubeu.png'
import subscriptions from './assets/subscriptions.png'
import home from './assets/home.png'
import Portfolio from './assets/Portfolio.mp4';
import Dragon_Ball from './assets/Dragon_ball.mp4';

function App() {
  const loop = [0,1,2,3,4,5];
  const videos = [Portfolio,Dragon_Ball]
  const recommended = ["All","Music","Gaming","Programming","Mixtape","Anime","Podcasts",
    "Motivation","soundtracks","Laptops","Football","David Goggins","Messi","Ronaldo"];

  return (
    <>
      <div className='header '>

        <Burger/>
        <div className='flex h-6 w-6 mt-6 '>
        <img 
          src={youtubeLogo}
          alt = "youtube"
          width="380"
            height="280"
        />
          <h2 className='ml-4 text-white font-bold'>YouTube</h2>
        </div>
        
    <div className='relative'>
     <input type="search" id="search" name="search" 
          className='bg-black rounded-3xl text-white 
          mt-6 w-80  border-solid border-2 border-gray-600 
            py-2 pl-3 pr-5  w-2/4'

          placeholder=' Search...'
        />
          <SearchIcon className='bg-black absolute inset-y-8 rounded-2xl' color='info'/>


       
    </div>


      <div className='flex mt-1 w-fit'>
    <BadgeIcon/>
     <ImageAvatars/>

     </div>


      </div>

      <div className='flex '>
        
         <ul className=' ml-4 text-white mt-3'>

          <li  className='mb-5 bg-gray-700 hover:bg-gray-50 hover:text-black w-9 '><img src={home} /></li>
          <li  className='mb-5 bg-gray-700 w-9 hover:bg-white'><img src={ytshorts}/></li>
          <li  className='mb-5 w-9 bg-gray-700 hover:bg-gray-100'><img src={subscriptions} /></li>
          <li  className='w-9 bg-gray-700 hover:bg-gray-100'><img src={youtubeu} /></li>
        </ul>

        <ul className='text-white flex ml-20 mt-6 '> 
          {recommended.map(l=>{
          return(
          <li key={l} className='border border-solid border-gray-500 rounded-2xl mr-5 p-2 h-10 hover:bg-gray-700'>{l}</li>
          ) 
          })}
        </ul>
      </div>

      <div className='grid grid-cols-3 mt-5'>
       
        {loop.map((l)=>{
          return (
            <div className='video grid grid-cols-0  '>
              <h1></h1>
             <VideoCard  key={l} loop={l}/>
              <h1></h1>
              
             </div>
          )
        })}

      </div>



    </>
  )
}

export default App
