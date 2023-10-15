import './App.css'

import { Github } from 'lucide-react'

import { ModeToggle } from './components/mode-toggle'
import { Button } from './components/ui/button'
import { ProjectCard } from './components/project-card'
import { Helmet } from 'react-helmet-async'

function App() {

  return (
    <>
      <Helmet>
        <title>Home | edrf12</title>
      </Helmet>
      <div className='dark:bg-zinc-950 bg-zinc-100 flexbox'>  
        <div className="border-b flex h-[8vh] w-screen items-center justify-center px-4">
          <div className='h-10 w-[5.25rem]' />
          <p className='text-xl font-medium  font-mono mx-auto'>
            EDRF
          </p>
          <div className='flex gap-1'>
            <Button variant='outline' size='icon' onClick={() => window.open('https://github.com/edrf12')}>
              <Github className='h-[1.2rem] w-[1.2rem] scale-100 transition-all' />
            </Button>
            <ModeToggle />
          </div>
        </div>
        <div className='flex flex-row flex-wrap gap-4 justify-center items-center mt-12'>
          <ProjectCard 
            title='Snake Game' 
            description={`Simple snake game built with React, Vite and shadcn/ui`}
            projectLink='https://gh.edrf.tech/snake/Users/eduardo/Developer/snake/.github' 
            projectSource='https://github.com/edrf12/snake'
          />
        </div>
      </div>
    </>
  )
}

export default App
