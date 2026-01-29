import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/registry/new-york/ui/accordion"

const AccordionDemo = () => {
    return (
        <>
            <Accordion type="single" collapsible className="w-full max-w-lg">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='bg-hero'>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}

export default AccordionDemo