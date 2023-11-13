import React from 'react'
import "./Home.css"
import Lottie from 'lottie-react'
import Animation from "./Animation - 1699634873411.json"
const Home = () => {
  return (
    <>
      <div id="home">
       
      <Lottie animationData={Animation}/>
      </div>
      </>
  )
}

export default Home