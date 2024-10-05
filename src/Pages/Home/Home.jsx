import React from 'react'
import Resume from '../Resume'
import Hero from '../Hero'
import Center from '../CENTER/Center'
import End from '../ENDSAYT/End'

const Home = () => {
  return (
    <main className='font-exo dark:bg-dakr'>
      <Hero />
      <Resume />
      <Center />
      <End />
    </main>
  )
}

export default Home