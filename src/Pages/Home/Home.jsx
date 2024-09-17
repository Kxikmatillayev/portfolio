import React from 'react'
import Resume from '../Resume' 
import Hero from '../Hero'
// import Global from '../Global'

const Home = () => {
  return (
    <main className='font-exo'> 
      <Hero />
      <Resume />
      {/* <Global /> */}
    </main>
  )
}

export default Home