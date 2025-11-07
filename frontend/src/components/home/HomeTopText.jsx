import Video from './Video.jsx'

const HomeTopText = () => {
  return (
    <div className='text-white uppercase font-[font1] text-center mt-60 sm:mt-44 md:mt-40 lg:mt-2'>
      <div className='text-[10vw] md:text-[9.5vw] leading-[8.5vw] flex items-center justify-center' >The spark</div>

      <div className='text-[8vw] lg:text-[6vw] leading-[8.5vw] flex items-start justify-center mt-1' >
        that
        <div className='-mt-0.5 mx-1 h-[9.5vw] w-[20vw] lg:h-[5vw] lg:w-[12vw] lg:mt-[1.3vw] lg:ml-4 lg:mr-3.5 border-2 border-[#CCFF00]'>
          <Video />
        </div>
        generates
      </div>

      <div className='text-[9.5vw] leading-[11vw] lg:leading-[8.5vw] flex items-center justify-center' >the creativity</div>
    </div>
  )
}

export default HomeTopText