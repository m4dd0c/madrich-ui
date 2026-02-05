import { Button } from "@/registry/new-york/ui/button"
import { CodeXml, Link2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SearchBar } from "./Header"

const Hero = () => {

    return (
        <>
            <div className="relative font-grotesk flex justify-between h-screen w-full overflow-hidden">
                <div className="flex flex-col gap-3 pl-20 justify-center w-[60%]">
                    <h1 className="text-7xl font-bold leading-[1.4]  tracking-wide"><span className="ring-2 ring-hero bg-background  p-1  shadow-[6px_6px_0px_2px_var(--hero)]">Neo-Brutal</span> UI for <br /> Bold Builders.</h1>
                    <p className="text-xl leading-[1.5]  " >A neo-brutalist UI library for <span className="font-bold text-hero">developers</span> who hate boring design.  <br />
                        Sharp borders, bold colors, zero fluff — just <span className="font-bold text-hero">components</span> that stand out.</p>
                    <div className=" mt-5">
                        <button className="border border-foreground p-2 px-4 font-semibold bg-hero shadow-neo "><Link href="/">Browse Components</Link></button>
                    </div>
                </div>

                <div className="w-[40%] flex flex-col gap-6">
                    <div className="flex gap-5 justify-between">
                        <div className="flex mt-20 h-10 gap-5">
                            <button className="border border-foreground p-1 px-5 font-semibold bg-[#FFC900] rounded-sm shadow-neo ">Badge</button>
                            <button className="border border-foreground p-1 px-5 font-semibold bg-[#11A365] rounded-lg shadow-neo ">Badge</button>
                            <button className="border border-foreground p-1 px-5 font-semibold bg-[#FF7051] rounded-full shadow-neo ">Badge</button>
                        </div>
                        <div className="flex items-center justify-center gap-4 mt-15 h-20 w-[400px] border-2 border-foreground border-r-0 rounded-sm shadow-neo rounded-br-none bg-[#E7E5E4]">
                            <Link href="#" className="flex items-center gap-2 underline underline-offset-2"><Link2 />Copy link</Link>
                            <Link href="#" className="flex items-center gap-2 underline underline-offset-2"><CodeXml />Get embed code</Link>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <Button className="w-[220px] rounded-sm h-11 text-lg">Button CTA</Button>
                        <Button className="w-[220px] rounded-sm h-11 bg-background text-lg">Button CTA</Button>
                        <Button className="w-[220px] rounded-sm h-11 bg-foreground text-background rounded-tr-none text-lg">Button CTA</Button>
                    </div>

                    <div className="flex justify-between mt-5">
                        <div className="flex flex-col gap-2">
                            <div className="h-30 w-[350px] border-2 p-2 border-foreground  shadow-neo">
                                <h2 className="text-sm font-semibold pb-1">Tooltip text</h2>
                                <p className="text-[12px]">A tooltip shows additional information related to an element.
                                    It appears when the user hovers or focuses on the item.
                                    This helps explain actions, labels, or icons clearly. </p>
                            </div>

                           


                        </div>

                    </div>
                </div>
            </div>



        </>
    )
}

export default Hero
