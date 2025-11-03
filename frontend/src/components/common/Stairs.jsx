import { useGSAP } from '@gsap/react'
import { useLocation } from '@tanstack/react-router';
import gsap from 'gsap'
import { useRef } from 'react'

const Stairs = () => {
    const currentPath = useLocation().pathname
    
    const stairRef = useRef(null);
    const pageRef = useRef(null);

    useGSAP(function () {
        const tl = gsap.timeline();

        tl.to(stairRef.current, {
            display: 'block'
        })

        tl.from('.stair', { //on load: coming animation
            height: 0,
            stagger: {
                amount: -0.25
            }
        })

        tl.to('.stair', { //on load: going animation
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })

        tl.to(stairRef.current, {
            display: 'none'
        })

        tl.to('.stair', { //reset
            y: '0%',
        })

        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1
        })
    }, [currentPath])

    return (
        <div ref={stairRef} className='h-screen w-screen fixed z-10 top-0'>
            <div className='h-full w-full flex'>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
                <div className='stair h-full w-1/5 bg-black'></div>
            </div>
        </div>
    )
}

export default Stairs