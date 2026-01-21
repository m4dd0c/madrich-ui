
function Show() {
    return (
        <>
            <div className="flex items-center justify-around h-screen w-full font-grotesk">
                <div className="relative ">
                    <div className="flex items-center justify-center w-[300px] h-[550px] border-2  border-foreground rounded-[45px] shadow-[-5px_5px_0px_1px_#000]">
                        <div className="relative bg-[#80C551] w-[260px] h-[510px] border-2 border-t-0 rounded-[25px] border-foreground">
                            <div className="absolute w-[60px] h-[30px] left-[-2px] top-[-1px] border-2 border-foreground inset-0 border-b-transparent border-r-transparent rounded-tl-[25px] ">
                            </div>
                            <div className="absolute w-[60px] h-[30px]  left-[198px] top-[-1px] border-2 border-foreground inset-0 border-b-transparent border-l-transparent rounded-tr-[25px] ">
                            </div>
                            <div className="absolute left-1/2  top-[-1px] z-10 h-5 w-36 -translate-x-1/2 rounded-b-2xl border-2 border-foreground border-t-0 bg-background" />
                        </div>

                        <div className="flex items-center justify-center text-9xl text-black font-extrabold tracking-[10px] shadow-[-5px_5px_0px_1px_#000] h-32 w-[350px] bg-white border-2 border-foreground absolute inset-0 top-23 left-[-100px] rounded-xl">
                            NEO </div>
                        <div className="absolute flex items-center justify-center text-7xl text-black tracking-[8px] shadow-[-5px_5px_0px_1px_#000] font-extrabold h-28 w-[550px] inset-0 top-[245px] left-[-150px] border-2 border-foreground bg-white rounded-xl">
                            BRUTALISM </div>
                        <div className="flex items-start p-4 flex-col gap-2 justify-center text-black bg-[#F9D52F] h-20 border-2 border-foreground rounded-xl shadow-[-5px_5px_0px_1px_#000] w-[200px] absolute inset-0 top-[380px] left-[-100px]">
                            <p className="h-2 w-[160px] bg-black rounded-xl"></p>
                            <div className="flex gap-2">
                                <p className="h-2 w-[50px] bg-black rounded-xl"></p>
                                <p className="h-2 w-[80px] bg-black rounded-xl"></p>
                            </div>
                            <p className="h-2 w-[145px] bg-black rounded-xl"></p>


                        </div>
                    </div>


                </div>


            </div>
        </>
    )
}

export default Show