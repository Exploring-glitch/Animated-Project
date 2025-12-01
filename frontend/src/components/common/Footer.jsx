
const Footer = () => {
    return (
        <div className="w-full flex justify-center items-end">
            <div className="p-2 md:p-4 w-full bg-black text-[#EDEDED]">
                <div className="flex justify-between md:items-center gap-4 md:gap-0 mb-6 md:mb-[10vw] lg:mb-[8vw]">
                    <div className="flex flex-wrap md:gap-2">
                        <button className="font-[font2] text-xs md:text-[1.4vw] px-3 md:px-4 py-1 rounded-full border-2 hover:text-[#CCFF00] hover:border-[#CCFF00]">FB</button>
                        <button className="font-[font2] text-xs md:text-[1.4vw] px-3 md:px-4 py-1 rounded-full border-2 hover:text-[#CCFF00] hover:border-[#CCFF00]">IG</button>
                        <button className="font-[font2] text-xs md:text-[1.4vw] px-3 md:px-4 py-1 rounded-full border-2 hover:text-[#CCFF00] hover:border-[#CCFF00]">IN</button>
                        <button className="font-[font2] text-xs md:text-[1.4vw] px-3 md:px-4 py-1 rounded-full border-2 hover:text-[#CCFF00] hover:border-[#CCFF00]">BE</button>
                    </div>
                    
                    <div className="text-center">
                        <button className="font-[font2] text-xs md:text-[1.2vw] border-2 px-4 py-1 rounded-full uppercase hover:text-[#CCFF00] hover:border-[#CCFF00]">
                            Contact for info
                        </button>
                    </div>
                </div>
    
                <div className="flex flex-col md:flex-row md:justify-center md:gap-6 uppercase text-[10px] md:text-[12px] gap-1 text-center">
                    <h6 className="font-[font2] hover:text-[#CCFF00] hover:underline">Privacy Policy</h6>
                    <h6 className="font-[font2] hover:text-[#CCFF00] hover:underline">Privacy Notice</h6>
                    <h6 className="font-[font2] hover:text-[#CCFF00] hover:underline">Ethics Report</h6>
                    <h6 className="font-[font2] hover:text-[#CCFF00] hover:underline">Concent Options</h6>
                </div>
            </div>
        </div>
    );
};


export default Footer