import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import ProjectCard from '../components/projects/ProjectCard'
import { ScrollTrigger } from "gsap/all";
import Footer from "../components/common/Footer";


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
    }, {
      img1: 'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f',
      img2: 'https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda'
    }, {
      img1: 'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996',
      img2: 'https://k72.ca/images/caseStudies/BEST/BEST_site_menu_Thumbnail.jpg?w=1280&h=960&s=d3b20d81946c6a7f4a6cd7ce1cfbb0fd'
    }
  ]

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.utils.toArray(".projectImgWrapper").forEach((wrapper, i) => {
      const inner = wrapper.querySelector(".projectImgInner");
      gsap.fromTo(inner,
        { scale: 0.8, y: 100, opacity: 0 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wrapper,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            // markers: true
          }
        }
      );
    });
  });

  return (
    <div className="bg-[#1e1e20] text-white min-h-screen w-full overflow-x-hidden">
      <h1 className="w-full ml-5 pt-[30vh] md:pt-[60vw] lg:pt-[23vw] text-[12vw] md:text-[16vw] lg:text-[9vw] uppercase font-[font2]">
        <span className="text-[#CCFF00]">Pro</span>
        <span>jects</span>
      </h1>

      <div className="pt-4 -mt-[5vw]">
        {pictures.map((e, i) => (
          <div key={i} className="projectImgWrapper w-full h-[100vw] md:h-[35vw] lg:h-[25vw] mb-2 overflow-hidden">
            <div className="projectImgInner w-full h-full flex flex-col md:flex-row gap-2">
              <ProjectCard img1={e.img1} img2={e.img2} />
            </div>
          </div>
        ))}
      </div>


      <Footer />
    </div>
  );

};

export default ProjectsPage;
