
const ProjectCard = (props) => {
  return (
    <>
      <div className='group md:w-1/2 relative hover:rounded-[3.5vw] transition-all overflow-hidden'>
        <img className='w-full h-full object-cover object-top' src={props.img1} alt="" />
        <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 bg-black/30 h-full w-full flex justify-center items-center'>
          <h2 className='text-white font-[font2] text-6xl uppercase border-4 rounded-full px-5 pt-0.5'>See The Project</h2>
        </div>
      </div>

      <div className='group md:w-1/2 relative hover:rounded-[3.5vw] transition-all overflow-hidden'>
        <img className='w-full h-full object-cover object-top' src={props.img2} alt="" />
        <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 bg-black/30 h-full w-full flex justify-center items-center'>
          <h2 className='text-white font-[font2] text-6xl uppercase border-4 rounded-full px-5 pt-0.5'>See The Project</h2>
        </div>
      </div>
    </>
  )
}


export default ProjectCard