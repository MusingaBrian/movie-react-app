import React from 'react'
import { Button } from './ui/button'

function navbar() {
  return (
    <div className="w-full p-3 h-[60px] border-solid border-2 border-lime-950">
        <h2 className="text-center text-lime-950 text-2xl">Movie Plex App</h2>
        <Button>Click Me</Button>
    </div>
  )
}

export default navbar