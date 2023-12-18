import Image from 'next/image'
import React from 'react'
interface Props {
    name: string;
    image: string;
}
const TopDestinationCard = ({ image, name }: Props) => {
    return (
        <div className="card w-full shadow-xl">
            <div className='aspect-[8/7] relative'>
                <Image
                    src={image!}
                    fill
                    alt='hero'
                    className="object-cover -z-10 rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <h2 className='m-3 font-bold text-white'>{name}</h2>

            </div>

        </div>
    )
}

export default TopDestinationCard