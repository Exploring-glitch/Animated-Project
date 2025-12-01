import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "../components/common/Footer";
import AgenceBottomTexts from "../components/agence/AgenceBottomTexts";


const AgencePage = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imgDivRef = useRef(null);
  const imgRef = useRef(null);

  const imageArray = [
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007',
    'https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac',
    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/Lawrence_480x640.jpg?w=480&h=640&fit=crop&s=0a878205586092164001a9afe0ef4007',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6'
  ]

  useGSAP(function () {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        //markers: true,
        start: 'top 23%',
        end: 'top -120%',
        pin: true,


        onUpdate: function (e) {

          let imgIndex;

          if (e.progress < 1) { //progress starts from 0 and ends at 1 
            imgIndex = Math.floor(e.progress * imageArray.length) //when less than 1 do this.
          } else {
            imgIndex = imageArray.length - 1 //when 1 do this.
          }

          imgRef.current.src = imageArray[imgIndex]
        }
      }
    })
  })

  return (
    <div className="bg-[#1e1e20] text-[#ffffff]">
      <div ref={imgDivRef} className="absolute h-[45vw] w-[32vw] rounded-full overflow-hidden left-[5vw] bottom-[60vh] sm:left-[20vw] md:left-[27vw] lg:bottom-58">
        <img
          ref={imgRef}
          className="h-full w-full object-cover "
          src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
          alt=""
        />
      </div>

      <div className="relative pt-[30vh] md:pt-[55vh]">
        <h1 className="font-[font2] uppercase text-center text-[20vw] leading-[20vw] sm:text-[22vw] sm:leading-[20vw] md:text-[21vw] md:leading-[18vw]">
          Seventy <br /> Two
        </h1>

        <div className="pl-[5vw] pr-[5vw] sm:pl-[20vw] sm:pr-[10vw] md:pl-[44vw] md:pr-0 font-[font2] mt-10">
          <p className="text-xl leading-[6vw] sm:text-3xl sm:leading-[4vw] md:text-5xl md:leading-normal"
          >
            &emsp; &emsp; &emsp; &emsp; &emsp;
            We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner.
            A brand is a living thing, with values, a personality and a story.
            If we ignore that, we can achieve short-term success, but not influence that goes the distance.
            We bring that perspective to every brand story we help tell.
          </p>
        </div>

        <AgenceBottomTexts />
      </div>

      <Footer />
    </div>
  );

}

export default AgencePage