
const ProjectFooter = () => {
    return (
        <div className="p-2 w-full h-[20vw] bg-black text-[#EDEDED]">
            <div className="mb-[15vw] flex justify-between">
                <div className="flex gap-4 p-1">
                    <button className="font-[font2] text-2xl px-6 pt-1  rounded-full border-2 hover:text-[#CCFF00] hover:border-[#CCFF00]">FB</button>
                    <button className="font-[font2] text-2xl px-6 pt-1 rounded-full border-2 hover:text-[#CCFF00] hover:border-[#CCFF00]">IG</button>
                    <button className="font-[font2] text-2xl px-6 pt-1 rounded-full border-2 hover:text-[#CCFF00] hover:border-[#CCFF00]">IN</button>
                    <button className="font-[font2] text-2xl px-6 pt-1 rounded-full border-2 hover:text-[#CCFF00] hover:border-[#CCFF00]">BE</button>
                </div>
                <div>
                    <button className="font-[font2] text-2xl rounded-full border-2 px-4 pt-1 hover:text-[#CCFF00] hover:border-[#CCFF00] uppercase">Contact for info</button>
                </div>

            </div>
            <div className="flex justify-center gap-5 uppercase text-[12px]">
                <h6 className="font-[font2] hover:text-[#CCFF00] hover:underline">Privacy Policy</h6>
                <h6 className="font-[font2] hover:text-[#CCFF00] hover:underline">Privacy Notice</h6>
                <h6 className="font-[font2] hover:text-[#CCFF00] hover:underline">Ethics Report</h6>
                <h6 className="font-[font2] hover:text-[#CCFF00] hover:underline">Concent Options</h6>
            </div>
        </div>
    )
}

export default ProjectFooter