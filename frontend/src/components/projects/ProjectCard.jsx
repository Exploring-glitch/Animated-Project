
import React from 'react'

const ProjectCard = () => {
  return (
    <div className='w-full h-[20vw] flex gap-2 '>
      <div className='group w-1/2 h-full relative hover:rounded-[3.5vw] transition-all overflow-hidden'>
        <img className='h-full w-full object-cover object-top' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
        <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 bg-black/30 h-full w-full flex justify-center items-center'>
          <h2 className='text-white font-[font2] text-6xl uppercase border-4 rounded-full px-5 pt-0.5'>See The Project</h2>
        </div>
      </div>
      <div className='group w-1/2 h-full relative hover:rounded-[3.5vw] transition-all overflow-hidden'>
        <img className='h-full w-full object-cover object-top' src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e" alt="" />
        <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 bg-black/30 h-full w-full flex justify-center items-center'>
          <h2 className='text-white font-[font2] text-6xl uppercase border-4 rounded-full px-5 pt-0.5'>See The Project</h2>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard