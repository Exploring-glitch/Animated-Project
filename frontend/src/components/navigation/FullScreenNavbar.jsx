import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useContext, useRef } from 'react';
import { NavContext } from '../context/NavContext';



const FullScreenNav = () => {
  const [navOpen, setNavOpen] = useContext(NavContext);


  function gsapAnimation() {
    const tl = gsap.timeline()

    tl.to('.fullScreenRef', {
      display: 'block'
    })

    tl.to('.stairAnimate', {
      delay: 0.2,
      height: '100%',
      stagger: {
        amount: -0.3
      }
    })

    tl.to('.link', {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3
      }
    })

    tl.to('.navbarTopLink', {
      opacity: 1
    })
  }

  function gsapAnimationReverse() {

    const tl = gsap.timeline()
    tl.to('.link', {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1
      }
    })

    tl.to('.stairAnimate', {
      height: 0,
      stagger: {
        amount: 0.1
      }
    })

    tl.to('.navbarTopLink', {
      opacity: 0
    })

    tl.to('.fullScreenRef', {
      display: 'none',
    })
  }

  useGSAP(function () {
    if (navOpen) {
      gsapAnimation()
    } else {
      gsapAnimationReverse()
    }
  }, [navOpen])


  return (
    <div className='fullScreenRef hidden h-screen w-screen text-white overflow-hidden font-[font2] z-50 fixed'>
      <div className='h-screen w-screen fixed'>
        <div className='h-full w-full flex'>
          <div className='stairAnimate h-full w-1/5 bg-black'></div>
          <div className='stairAnimate h-full w-1/5 bg-black'></div>
          <div className='stairAnimate h-full w-1/5 bg-black'></div>
          <div className='stairAnimate h-full w-1/5 bg-black'></div>
          <div className='stairAnimate h-full w-1/5 bg-black'></div>
        </div>
      </div>

      <div className='relative h-full p-2 flex flex-col justify-between'>
        <div className='navbarTopLink flex justify-between'>
          <svg xmlns="http://www.w3.org/2000/svg" width="115" height="50" viewBox="0 0 103 44" fill='white'>
            <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
          </svg>
          <div onClick={() => { setNavOpen(false) }} className='relative h-20 w-20 cursor-pointer'>
            <div className='absolute h-28 w-[0.4vw] lg:w-[0.2vw] -rotate-45 origin-top bg-[#CCFF00]'></div>
            <div className='absolute h-28 w-[0.4vw] lg:w-[0.2vw] right-0 rotate-45 origin-top bg-[#CCFF00]'></div>
          </div>
        </div>

        <div className='lg:-mt-2'>
          <div className='link relative border-t-[0.1vw] text-center'>
            <h1 className='uppercase text-5xl sm:text-7xl md:text-8xl leading-0 p-6 pt-7 sm:p-10 sm:pt-12  lg:p-12 lg:pt-14.5'>Projects</h1>

            <div className='move_link absolute top-0 flex bg-[#CCFF00] text-black h-full'>
              <div className='moveX flex items-center pt-2'>
                <h2 className='uppercase text-4xl sm:text-8xl text-center text whitespace-nowrap'>See the projects</h2>
                <img className='shrink-0 w-20 h-8 sm:w-50 sm:h-18 mb-2 md:mb-3 ml-5 mr-5 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt=""></img>

                <h2 className='uppercase text-4xl sm:text-8xl text-center text whitespace-nowrap'>See the projects</h2>
                <img className='shrink-0 w-20 h-8 sm:w-50 sm:h-18 mb-2 md:mb-3 ml-5 mr-5 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt=""></img>
              </div>

              <div className='moveX flex items-center  pt-2'>
                <h2 className='uppercase text-4xl sm:text-8xl text-center text whitespace-nowrap'>See the projects</h2>
                <img className='shrink-0 w-20 h-8 sm:w-50 sm:h-18 mb-2 md:mb-3 ml-5 mr-5 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt=""></img>

                <h2 className='uppercase text-4xl sm:text-8xl text-center text whitespace-nowrap'>See the projects</h2>
                <img className='shrink-0 w-20 h-8 sm:w-50 sm:h-18 mb-2 md:mb-3 ml-5 mr-5 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt=""></img>
              </div>
            </div>
          </div>

          <div className='link relative border-t-[0.1vw] text-center '>
            <h1 className='uppercase text-5xl sm:text-7xl md:text-8xl leading-0 p-6 pt-7 sm:p-10 sm:pt-12  lg:p-12 lg:pt-14.5'>Agence</h1>

            <div className='move_link absolute top-0 flex bg-[#CCFF00] text-black h-full'>
              <div className='moveX flex items-center pt-2'>
                <h2 className='uppercase text-4xl sm:text-8xl text-center text whitespace-nowrap'>To Know Everything</h2>
                <img className='shrink-0 w-20 h-8 sm:w-50 sm:h-18 mb-2 md:mb-3 ml-5 mr-5 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt=""></img>

                <h2 className='uppercase text-4xl sm:text-8xl text-center text whitespace-nowrap'>To Know Everything</h2>
                <img className='shrink-0 w-20 h-8 sm:w-50 sm:h-18 mb-2 md:mb-3 ml-5 mr-5 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt=""></img>
              </div>
              <div className='moveX flex items-center  pt-2'>
                <h2 className='uppercase text-4xl sm:text-8xl text-center text whitespace-nowrap'>To Know Everything</h2>
                <img className='shrink-0 w-20 h-8 sm:w-50 sm:h-18 mb-2 md:mb-3 ml-5 mr-5 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt=""></img>

                <h2 className='uppercase text-4xl sm:text-8xl text-center text whitespace-nowrap'>To Know Everything</h2>
                <img className='shrink-0 w-20 h-8 sm:w-50 sm:h-18 mb-2 md:mb-3 ml-5 mr-5 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt=""></img>
              </div>
            </div>
          </div>

          <div className='link relative border-t-[0.1vw] text-center '>
            <h1 className='uppercase text-5xl sm:text-7xl md:text-8xl leading-0 p-6 pt-7 sm:p-10 sm:pt-12  lg:p-12 lg:pt-14.5'>Contact</h1>

            <div className='move_link absolute top-0 flex bg-[#CCFF00] text-black h-full'>
              <div className='moveX flex items-center pt-2'>
                <h2 className='uppercase text-4xl sm:text-8xl text-center text whitespace-nowrap'>To Send a Fax</h2>
                <img className='shrink-0 w-20 h-8 sm:w-50 sm:h-18 mb-2 md:mb-3 ml-5 mr-5 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt=""></img>

                <h2 className='uppercase text-4xl sm:text-8xl text-center text whitespace-nowrap'>To Send a Fax</h2>
                <img className='shrink-0 w-20 h-8 sm:w-50 sm:h-18 mb-2 md:mb-3 ml-5 mr-5 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt=""></img>
              </div>
              <div className='moveX flex items-center  pt-2'>
                <h2 className='uppercase text-4xl sm:text-8xl text-center text whitespace-nowrap'>To Send a Fax</h2>
                <img className='shrink-0 w-20 h-8 sm:w-50 sm:h-18 mb-2 md:mb-3 ml-5 mr-5 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt=""></img>

                <h2 className='uppercase text-4xl sm:text-8xl text-center text whitespace-nowrap'>To Send a Fax</h2>
                <img className='shrink-0 w-20 h-8 sm:w-50 sm:h-18 mb-2 md:mb-3 ml-5 mr-5 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt=""></img>
              </div>
            </div>
          </div>

          <div className='link relative border-y-[0.1vw] text-center '>
            <h1 className='uppercase text-5xl sm:text-7xl md:text-8xl leading-0 p-6 pt-7 sm:p-10 sm:pt-12  lg:p-12 lg:pt-14.5'>Blogue</h1>

            <div className='move_link absolute top-0 flex bg-[#CCFF00] text-black h-full'>
              <div className='moveX flex items-center pt-2'>
                <h2 className='uppercase text-4xl sm:text-8xl text-center text whitespace-nowrap'>Read The Articles</h2>
                <img className='shrink-0 w-20 h-8 sm:w-50 sm:h-18 mb-2 md:mb-3 ml-5 mr-5 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt=""></img>

                <h2 className='uppercase text-4xl sm:text-8xl text-center text whitespace-nowrap'>Read The Articles</h2>
                <img className='shrink-0 w-20 h-8 sm:w-50 sm:h-18 mb-2 md:mb-3 ml-5 mr-5 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt=""></img>
              </div>

              <div className='moveX flex items-center  pt-2'>
                <h2 className='uppercase text-4xl sm:text-8xl text-center text whitespace-nowrap'>Read The Articles</h2>
                <img className='shrink-0 w-20 h-8 sm:w-50 sm:h-18 mb-2 md:mb-3 ml-5 mr-5 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt=""></img>

                <h2 className='uppercase text-4xl sm:text-8xl text-center text whitespace-nowrap'>Read The Articles</h2>
                <img className='shrink-0 w-20 h-8 sm:w-50 sm:h-18 mb-2 md:mb-3 ml-5 mr-5 object-cover rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt=""></img>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center md:flex-row md:justify-between lg:justify-around'>
          <div className='lg:flex lg:gap-3 uppercase font-[font1] mt-2'>
            <h6 className='text-xs hover:text-[#CCFF00] hover:duration-100'>Privacy Policy</h6>
            <h6 className='text-xs hover:text-[#CCFF00] hover:duration-100'>Privacy Notice</h6>
            <h6 className='text-xs hover:text-[#CCFF00] hover:duration-100'>Ethics Report</h6>
            <h6 className='text-xs hover:text-[#CCFF00] hover:duration-100'>Concent Options</h6>
          </div>
          <div className="mt-3 flex gap-1 lg:gap-2 md:items md:h-7 md:mt-9 lg:mt-0">
            <button className="font-[font2] text-lg px-4 rounded-full border-2 hover:text-[#CCFF00] hover:border-[#CCFF00]">FB</button>
            <button className="font-[font2] text-lg px-4 rounded-full border-2 hover:text-[#CCFF00] hover:border-[#CCFF00]">IG</button>
            <button className="font-[font2] text-lg px-4 rounded-full border-2 hover:text-[#CCFF00] hover:border-[#CCFF00]">IN</button>
            <button className="font-[font2] text-lg px-4 rounded-full border-2 hover:text-[#CCFF00] hover:border-[#CCFF00]">BE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav