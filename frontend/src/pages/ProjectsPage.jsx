import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import ProjectCard from '../components/projects/ProjectCard'
import { ScrollTrigger } from "gsap/all";

const ProjectsPage = () => {
  const pictures = [
    {
      img1: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
      img2: 'https://k72.ca/images/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail.jpg?w=1280&h=960&s=5c944bb014f8643227ad7bb117fccc14'
    }, {
      img1: 'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
      img2: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c'
    }, {
      img1: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b',
      img2: 'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757'
    }, {
      img1: 'https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821',
      img2: 'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000'
    }, {
      img1: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022',
      img2: 'https://k72.ca/images/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes.jpg?w=1280&h=960&s=bb42c9de87442e1bffc542c332e07124'
    }
  ]

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from('.projectImg', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.projectImgParent',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })

    return (
      <div className='p-2'>
        <div>
          <h1 className='w-full pt-[20vw] text-[12vw] uppercase font-[font2]'>Projects</h1>
        </div>

        <div className='-mt-[4vw] projectImgParent'>
          {pictures.map(function (e) {
            return (
              <div className='projectImg w-full h-[25vw] flex gap-2 mb-2'>
                <ProjectCard img1={e.img1} img2={e.img2} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }

export default ProjectsPage