import Image from "next/image";

interface Props {
    title: string;
    type: string;
    price: string;
    image: string;
    location: string;
}
const PackagesCard = ({ title, type, price, image, location }: Props) => {
    return (
        <div className="card w-full shadow-xl">
            <div className='aspect-[8/7] relative'>
                <Image
                    src={image!}
                    fill
                    alt='hero'
                    className="h-full w-full object-cover -z-10 rounded-lg"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="flex h-full p-3 items-end bg-gradient-to-t from-[#0000008d] to-transparent">
                    {/* location icon svg */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 z-50  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
                        <circle cx={12} cy={10} r={3} />
                    </svg>
                    <span className=" z-50  text-white">{location}</span>
                </div>
            </div>
            <div className="card-body p-2 h-fit">
                <h2 className="card-title text-base">{title}</h2>
                <span className="badge ps-0">{type}</span>
                <span className="badge ps-0">From: {price}</span>
            </div>
        </div>
    )
}
export default PackagesCard;