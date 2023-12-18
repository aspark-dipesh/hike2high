import Image from "next/image";
import React, { FC } from "react";

interface Props {
    title?: string;
    description?: string;
    image?: string;
    link?: string;
}
export default function CardOne({ title, description, image, link }: Props) {

    return (
        <div className="card w-full bg-base-100 shadow-xl h-full">
            <div className='aspect-[7/5] relative'>
                <Image
                    src={image!}
                    fill
                    alt='hero'
                    className="h-full w-full object-contain z-10 rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

            </div>
            <div className="card-body">
                <div className="flex h-full flex-col justify-between">
                    <h2 className="card-title text-5xl">{title}</h2>
                    <p className=" flex flex-wrap items-center w-4/5 h-fit">{description}
                    </p>
                    <div>
                        <button className="btn  btn-outline hover:btn-dark/800">Explore things to do</button>
                    </div>
                </div>

            </div>
        </div>
    )

}
