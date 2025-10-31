import { Link } from '@tanstack/react-router'

const HomeBottomText = () => {
  return (
    <div className='font-[font1] flex items-center justify-center gap-5 mb-2'>
      <div className='text-white uppercase text-[6vw] border-4 border-white rounded-full px-7 leading-[5vw] pt-3 hover:border-[#CCFF00] hover:text-[#CCFF00]'>
        <Link to="/projects">projects</Link>
      </div>
      
      <div className='text-white uppercase text-[6vw] border-4 border-white rounded-full px-7 leading-[5vw] pt-3 hover:border-4 hover:border-[#CCFF00] hover:text-[#CCFF00]'>
        <Link to="/agence">agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText