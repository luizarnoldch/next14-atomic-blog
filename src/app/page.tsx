import React from 'react'
import Welcome from './sections/Welcome'
import Skills from './sections/Skills'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='bg-background'>
      <Welcome />
      <Skills />
    </div>
  )
}

export default Home