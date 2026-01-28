import Image from "next/image"
import Link from "next/link"

const Hero = () => {

    return (
        <>
            <div className="relative font-grotesk flex items-center justify-between h-screen w-full overflow-hidden">
                <div className="flex flex-col gap-3 pl-20">
                    <h1 className="text-7xl font-bold leading-[1.4]  tracking-wide"><span className="ring-2 ring-hero bg-background  p-1  shadow-[6px_6px_0px_2px_var(--hero)]">Neo-Brutal</span> UI for <br /> Bold Builders.</h1>
                    <p className="text-xl leading-[1.5]  " >A neo-brutalist UI library for <span className="font-bold text-hero">developers</span> who hate boring design.  <br />
                        Sharp borders, bold colors, zero fluff — just <span className="font-bold text-hero">components</span> that stand out.</p>
                    <div className=" mt-5">
                        <button className="border border-foreground p-2 px-4 font-semibold bg-hero shadow-neo "><Link href="/">Browse Components</Link></button>
                    </div>
                </div>
            </div>
            <div className='h-1 w-full bg-foreground'>

            </div>
        </>
    )
}

export default Hero
