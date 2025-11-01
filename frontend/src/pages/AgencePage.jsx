import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6'
  ] 

  useGSAP(function(){
    gsap.to(imgDivRef.current, {
      scrollTrigger : {
        trigger: imgDivRef.current,
        //markers: true,
        start: 'top 23%',
        end: 'top -120%',
        pin:true,
        onUpdate: function(e){
          
          let imgIndex;

          if(e.progress<1){ //progress starts from 0 and ends at 1 
            imgIndex = Math.round(e.progress * imageArray.length) //when less than 1 do this.
          } else{
            imgIndex = imageArray.length-1 //when 1 do this.
          }
          
          imgRef.current.src = imageArray[imgIndex]
        }
      }
    })
  })

  return (
    <div>
      <div className="section1">
        <div ref={imgDivRef} className="absolute h-[22vw] w-[16vw] rounded-full overflow-hidden left-[27vw] bottom-58"> {/*first give w and h to parent as you like*/}
          <img ref={imgRef} className="h-full w-full object-cover" src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" /> {/*then make the child h and w full to parent*/}
        </div>

        <div className='relative mt-[55.5vh]'>
          <h1 className='font-[font2] uppercase text-center text-[22vw] leading-[18vw]'>Seventy <br />Two</h1>

          <div className=' pl-[44vw] font-[font2] mt-10'>
            <p className='text-5xl'>&emsp; &emsp; &emsp; &emsp; &emsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>

          <div className="font-[font2] flex justify-around w-[50vw] mt-30 ml-7">
            <h1 className="text-xl">Expertise</h1>
            <div>
              <h1 className="text-xl">Strategy <br /> Advertising <br /> Branding <br /> Design <br /> Content</h1>
            </div>
          </div>

          <div className="font-[font2] mt-40 flex gap-20 w-[75vw] ml-[10.5vw] text-lg">
            <p className="w-1/2">Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.</p>
            <p className="w-1/2">Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.</p>
            <p className="w-1/2">Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.</p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">

      </div>
    </div>
  )
}

export default AgencePage