import Video from './Video.jsx'

const HomeTopText = () => {
  return (
    <div className='text-white uppercase font-[font1] text-center mt-2 '>
      <div className='text-[9.5vw] leading-[8.5vw] flex items-center justify-center' >The spark</div>

      <div className='text-[6vw] leading-[8.5vw] flex items-start justify-center mt-1' >
        that
        <div className='h-[5vw] w-[12vw] mt-[1.3vw] ml-4 mr-3.5 border-2 border-[#CCFF00]'>
          <Video />
        </div>
        generates
      </div>

      <div className='text-[9.5vw] leading-[8.5vw] flex items-center justify-center' >the creativity</div>
    </div>
  )
}

export default HomeTopText