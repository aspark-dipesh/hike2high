import React from 'react'
interface Props {
    title?: string;
    image?: string;
    link?: string;
}
const DestinationCard = ({ title, image, link }: Props) => {
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className='aspect-[8/7] relative'>
                    <img src={image!} alt="hero" className="h-full w-full object-cover z-10 rounded-lg" />
                </div>
                <div className="card-body p-2 h-fit">
                    <h2 className="card-title text-base">{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default DestinationCard