import ProjectCard from '../components/projects/ProjectCard'

const ProjectsPage = () => {
  return (
    <div className='p-2'>
      <div>
        <h1 className='w-full pt-[20vw] text-[12vw] uppercase font-[font2]'>Projects</h1>
      </div>
      <div className='-mt-[4vw]'>
        <ProjectCard />
      </div>
      

    </div>
  )
}

export default ProjectsPage