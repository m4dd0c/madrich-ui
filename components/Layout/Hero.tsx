
const Hero = () => {
    return (
        <>


            <div className="relative font-grotesk flex items-center justify-around h-screen overflow-hidden ">
                {/* Large Blocks */}
                <div className="-z-10 absolute -top-20 -left-24 h-64 w-64 rotate-6 border-4 border-foreground bg-yellow-400 " />
                <div className="-z-10 absolute top-32 -right-32 h-72 w-72 -rotate-3 border-4 border-foreground bg-blue-500" />

                {/* Medium Blocks */}
                <div className="-z-10 absolute bottom-24 left-1/4 h-40 w-40 rotate-12 border-4 border-foreground bg-red-500" />
                <div className="-z-10 absolute bottom-10 right-1/3 h-32 w-32 -rotate-6 border-4 border-foreground bg-lime-400" />

                {/* Thin Accent Lines */}
                <div className="-z-10 absolute top-1/2 left-0 h-1 w-32 bg-foreground" />
                <div className="-z-10 absolute bottom-1/3 right-0 h-1 w-40 bg-foreground" />

                <div className="flex flex-col gap-3">
                    <h1 className="text-8xl font-bold leading-[1.4]  tracking-wide"><span className="ring ring-[#1ac90a] rounded-sm p-1 shadow-[6px_6px_0px_2px_#1ac90a]">Neo-Brutal</span> UI <br /> for Bold Builders.</h1>
                    <p className="text-xl leading-[1.5]  " >A neo-brutalist UI library for <span className="font-bold text-[#1ac90a]">developers</span> who hate boring design.  <br />
                        Sharp borders, bold colors, zero fluff — just <span className="font-bold text-[#1ac90a]">components</span> that stand out.</p>
                </div>
            </div>
            <div className='h-1 w-full bg-foreground'>

            </div>
        </>
    )
}

export default Hero
