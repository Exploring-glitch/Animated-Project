import { Outlet } from '@tanstack/react-router'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {

  useGSAP(function(){
    const tl = gsap.timeline();

    tl.from('.stair', {
      height: 0,
      stagger: {
        amount: -0.25
      }
    })

    tl.to('.stair', {
      y: '100%',
      stagger: {
        amount: -0.25
      }
    })

  })

  return (
    <>
      <div className='h-screen w-screen flex fixed z-10 '>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>
      <Outlet />
    </>
  )
}

export default App