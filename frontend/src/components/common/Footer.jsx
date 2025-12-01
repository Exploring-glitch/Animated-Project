
const Footer = () => {
    return (
        <div className="p-3 w-full md:h-[25vw] bg-black text-[#EDEDED] mt-2">
            <div className="md:mb-[15vw] lg:mb-[17vw] md:flex md:justify-between">
                <div className="flex gap-2">
                    <button className="font-[font2] text-[2.6vw] px-6 pt-1 rounded-full border-2 hover:text-[#CCFF00] hover:border-[#CCFF00]">FB</button>
                    <button className="font-[font2] text-[2.6vw] px-6 pt-1 rounded-full border-2 hover:text-[#CCFF00] hover:border-[#CCFF00]">IG</button>
                    <button className="font-[font2] text-[2.6vw] px-6 pt-1 rounded-full border-2 hover:text-[#CCFF00] hover:border-[#CCFF00]">IN</button>
                    <button className="font-[font2] text-[2.6vw] px-6 pt-1 rounded-full border-2 hover:text-[#CCFF00] hover:border-[#CCFF00]">BE</button>
                </div>
                
                <div className="text-center">
                    <button className="font-[font2] text-[2vw] text-center rounded-full border-2 px-4 pt-1 hover:text-[#CCFF00] hover:border-[#CCFF00] uppercase">Contact for info</button>
                </div>
            </div>

            <div className="md:flex md:justify-center md:gap-5 uppercase text-[10px] md:text-[12px]">
                <h6 className="font-[font2] hover:text-[#CCFF00] hover:underline">Privacy Policy</h6>
                <h6 className="font-[font2] hover:text-[#CCFF00] hover:underline">Privacy Notice</h6>
                <h6 className="font-[font2] hover:text-[#CCFF00] hover:underline">Ethics Report</h6>
                <h6 className="font-[font2] hover:text-[#CCFF00] hover:underline">Concent Options</h6>
            </div>
        </div>
    )
}

export default Footer