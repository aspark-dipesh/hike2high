import Image from "next/image";

interface Props {
    title?: string;
    price?: string;
    image?: string;
    link?: string;
}

export default function SmallCard({ title, price, image, link }: Props) {

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className='aspect-[8/7] relative'>
                <Image
                    src={image!}
                    fill
                    alt='hero'
                    className="h-full w-full object-cover z-10 rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

            </div>
            <div className="card-body p-2 h-fit">
                <h2 className="card-title text-base">{title}</h2>
                <div className="badge">From: {price}</div>
            </div>
        </div>
    )

}