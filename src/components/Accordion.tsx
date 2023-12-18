'use client'
import { useState } from "react";
interface AccordionProps {
    heading: string;
    items: {
        title: string;
        content: string;
    }[];
}
const Accordion = ({ items, heading }: AccordionProps) => {
    const [open, setOpen] = useState<number | null>();

    return (
        <div className="container mx-auto w-full mt-5">
            <div className="rounded-lg overflow-hidden">
                <div className="border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800">{heading}</h2>
                </div>
                <div>
                    {items.map((item, index) => (
                        <div key={index} className="border-b border-gray-200">
                            <button
                                onClick={() => setOpen(open === index ? null : index)}
                                className="flex items-center gap-3 w-full p-4 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-50"
                            >
                                <span>
                                    {
                                        open === index ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                                            </svg>
                                        )
                                    }

                                </span>
                                <p className="text-gray-600 text-sm md:text-base">{item.title}</p>

                            </button>
                            <div
                                className={`${open === index ? "max-h-screen" : "max-h-0"
                                    } overflow-hidden transition-all duration-300 ease-in-out`}
                            >
                                <div className="p-4 text-gray-500 text-sm md:text-base">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
