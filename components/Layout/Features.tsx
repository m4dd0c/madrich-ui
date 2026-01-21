import {
    Palette,
    Layers,
    Square,
    Code2,
} from "lucide-react";


function Features() {
    return (
        <>
            <section className="relative bg-background font-grotesk px-6 py-32">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-16 border-2 border-foreground bg-background  text-[#1ac90a] shadow-[5px_5px_0px_1px_#000] px-6 py-4 text-4xl font-extrabold">
                        Why This Library Exists
                    </h2>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="border-2 border-foreground bg-background shadow-[5px_5px_0px_1px_#000] p-6">
                            <Palette className="mb-4 h-10 w-10 stroke-[3]" /> 
                            <h3 className="text-xl text-[#1ac90a] font-extrabold">
                                Made with Tailwind CSS
                            </h3>
                            <p className="mt-2 font-medium">
                                Utility-first styling that keeps your UI fast, flexible,
                                and brutally simple to customize.
                            </p>
                        </div>

                        <div className="border-2 border-foreground bg-background shadow-[5px_5px_0px_1px_#000] p-6">
                            <Layers className="mb-4 h-10 w-10 stroke-[3]" />
                            <h3 className="text-xl text-[#1ac90a] font-extrabold">
                                Uses shadcn/ui
                            </h3>
                            <p className="mt-2 font-medium">
                                Built on accessible, composable components with full
                                ownership — no locked-in styles.
                            </p>
                        </div>

                        <div className="border-2 border-foreground bg-background shadow-[5px_5px_0px_1px_#000] p-6">
                            <Square className="mb-4 h-10 w-10 stroke-[3]" />
                            <h3 className="text-xl text-[#1ac90a] font-extrabold">
                                Neo-Brutal Design
                            </h3>
                            <p className="mt-2 font-medium">
                                Hard borders, sharp corners, and bold contrast —
                                design that refuses to be subtle.
                            </p>
                        </div>

                        <div className="border-2 border-foreground bg-background shadow-[5px_5px_0px_1px_#000] p-6">
                            <Code2 className="mb-4 h-10 w-10 stroke-[3]" />
                            <h3 className="text-xl text-[#1ac90a] font-extrabold">
                                Developer-First
                            </h3>
                            <p className="mt-2 font-medium">
                                Clean markup, predictable structure, and examples you
                                can drop straight into production.
                            </p>
                        </div>
                    </div>
                </div>
                
            </section>
            <div className='h-1 w-full bg-foreground'>

            </div>
        </>
    )
}

export default Features
