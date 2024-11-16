import React from 'react'

export default function page() {
  return (
    <div>
        <div className="relative">
            <div className="w-[100px] h-[100px] bg-[#22139a] rounded-full absolute left-[150px] top-[179px] flex justify-center items-center">
                <div className="text-white text-[52.56px] font-bold">E</div>
            </div>

            <div className="text-white text-[35.04px] absolute left-[120px] top-[279px] font-bold font-dm-sans leading-tigh">
                estradard
            </div>

            <div className="relative">
    
                <div className="absolute left-[95px] top-[350px] flex items-center">
                    <img src="./coin.svg" alt="Icon" className="w-[70px] h-[70px] mr-1" />
                    
                    <div className="text-[#ffc83d] text-[43.80px] font-bold font-dm-sans">
                    1,269
                    </div>
                </div>
            </div>

            <div className="w-[334px] h-[183px] absolute left-[44px] top-[482px]">
                <div className="relative w-full h-full">
                    <img className="w-full h-full object-cover rounded-lg blur-[2px]" src="./cardImage1.svg" alt="Subscription image" />
                
                    <div className="w-[256px] h-[183px] absolute left-[13px] top-[62px] text-white text-xl font-bold font-dm-sans leading-tight">
                        The 5 paid subscriptions I actually use in 2024 as a software engineer
                    </div>
                  
                    <div className="absolute left-[45px] top-[151px] text-white text-[10.33px] font-light font-dm-sans leading-tight">
                        Jacob Bennett
                    </div>
                    
                    <img className="absolute left-[13px] top-[143px] w-6 h-6 rounded-full" src="./authorImage1.svg" alt="Jacob's Avatar" />
                </div>
                
                <div className="absolute bottom-4 right-4 flex justify-center items-center bg-white text-[#212120] text-[15px] font-bold font-dm-sans rounded-[20px] py-2 px-4">
                    <div className="text-center">Read</div>
                </div>
            </div>

            <div className="w-[334px] h-[60px] absolute left-[44px] top-[680px]">
                <div className="w-[334px] h-[60px] left-0 top-0 absolute bg-[#ffc83d] rounded-[7px]" />
                <div className="left-[86px] top-[15px] absolute text-center text-[#212120] text-[22px] font-normal font-dm-sans">Read-to-Earn</div>
            </div>

        </div>

    </div>
  )
}
