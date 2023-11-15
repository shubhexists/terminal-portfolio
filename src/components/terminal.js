import React from 'react'
import Ascii from './ascii'
import Header from './header'
import Command from './command-area'

const Terminal = () => {
  return (
    <div className='bg-neutral-800 text-slate-300 w-screen h-full min-h-screen'>
      <Ascii />
      <Header />
      <Command />
    </div>
  )
}

export default Terminal