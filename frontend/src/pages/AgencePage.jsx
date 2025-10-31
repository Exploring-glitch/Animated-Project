import { useRef } from "react"

const AgencePage = () => {
  const imgDivRef = useRef(null);

  return (
    <div>
      <div className="section1">
        <div ref={imgDivRef} className="absolute h-[22vw] w-[16vw] rounded-full overflow-hidden left-[28vw] bottom-58"> {/*first give w and h to parent as you like*/}
          <img className="h-full w-full object-cover" src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" /> {/*then make the child h and w full to parent*/}
        </div>

        <div className='relative mt-[55.5vh]'>
          <h1 className='font-[font2] uppercase text-center text-[20vw] leading-[17.5vw]'>Soixan7e <br />Douze</h1>

          <div className=' pl-[50vw] font-[font2] mt-10'>
            <p className='text-5xl'>&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>

          <div className="font-[font2] flex justify-around w-[50vw] mt-30 ml-7">
            <h1 className="text-xl">Expertise</h1>
            <div>
              <h1 className="text-xl">Stratégie <br /> Publicité <br /> Branding <br /> Design <br /> Contenu</h1>
            </div>
          </div>

          <div className="font-[font2] mt-40 flex gap-20 w-[75vw] ml-[10.5vw]">
            <p className="w-1/4">Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</p>
            <p className="w-1/4">Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</p>
            <p className="w-1/4">Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers.</p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen">

      </div>
    </div>
  )
}

export default AgencePage