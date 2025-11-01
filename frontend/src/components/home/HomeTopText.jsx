import Video from './Video.jsx'

const HomeTopText = () => {
  return (
    <div className='text-white uppercase font-[font1] text-center mt-2 '>
      <div className='text-[9.5vw] leading-[8.5vw] flex items-center justify-center' >L'étincelle</div>

      <div className='text-[9.5vw] leading-[8.5vw] flex items-start justify-center mt-1' >
        qui
        <div className='h-[6.5vw] w-[15vw] mt-1'>
          <Video />
        </div>
        génère
      </div>

      <div className='text-[9.5vw] leading-[8.5vw] flex items-center justify-center' >la créativité</div>
    </div>
  )
}

export default HomeTopText