
import Accordion from "@/components/Accordion";
import GalleryComp from "@/components/GalleryComp";
import Image from "next/image";
async function getData(slug: string) {
    const res = await fetch(`https://backend.furniturehub.com.np/api/v1/products/${slug}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        return []
    }

    return res.json()
}

export default async function DestinationDetails({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug)

    return (
        <>
            <div className="relative w-full aspect-[16/5]">
                <Image
                    src={'/img/ProductDetail.jpg'}
                    alt="hero"
                    layout="fill"
                    className="object-cover rounded-md -z-[1]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                <GalleryComp />
            </div>
            <div className="container grid grid-cols-12 mx-auto mt-8 gap-10 p-2 text-gray-600 ">
                <div className="col-span-12 md:col-span-9 shadow-md p-5">
                    <h2 className="font-bold text-3xl ">5-Day Oahu Tour: Honolulu, Pearl Harbor, & Diamond Head</h2>

                    {/* location */}
                    <div className="flex items-center gap-2">
                        {/* location svg */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 z-50  text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" />
                            <circle cx={12} cy={10} r={3} />
                        </svg>
                        <p className="text-gray-500">Greater London, United Kingdom</p>-<span className="link link-primary">View on map</span>
                    </div>
                    <div className="divider my-5"></div>
                    <div className="flex flex-wrap gap-8">
                        {/* duration */}
                        <div className="flex gap-4">
                            {/* alarm clock svg icon */}
                            <Image src="/icon/alarm.svg" alt="alarm clock" width={20} height={20} />
                            <span className="text-gray-500">5 days</span>
                        </div>
                        {/* People allowed */}
                        <div className="flex gap-4">
                            {/* peoples svg icon */}
                            <Image src="/icon/peoples.svg" alt="alarm clock" width={20} height={20} />
                            <span className="text-gray-500">Max People: 5 days</span>
                        </div>
                        <div className="flex gap-4">
                            {/*wifi svg icon */}
                            <Image src="/icon/wifi.svg" alt="alarm clock" width={20} height={20} />
                            <span className="text-gray-500">Wifi Available </span>
                        </div>
                        {/* Calendar */}
                        <div className="flex gap-4">
                            {/* calendar svg icon */}
                            <Image src="/icon/calendar.svg" alt="alarm clock" width={20} height={20} />
                            <span className="text-gray-500">Jan 18’ - Dec 21&apos;</span>
                        </div>
                        {/* min age */}
                        <div className="flex gap-4">
                            {/* People svg icon */}
                            <Image src="/icon/age.svg" alt="alarm clock" width={20} height={20} />
                            <span className="text-gray-500">Min Age: 18</span>
                        </div>
                        {/* Pick up */}
                        <div className="flex gap-4">
                            {/* Pickup svg icon */}
                            <Image src="/icon/pickup.svg" alt="alarm clock" width={20} height={20} />
                            <span className="text-gray-500">Pick up: Airport</span>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className="font-bold text-2xl">Description</h1>
                        <p className="mt-3">
                            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.
                        </p>
                        <p className="mt-3">
                            Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Comma wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of t
                        </p>
                    </div>
                    {/* divider */}
                    <div className="divider my-5"></div>

                    {/* What to expect  */}
                    <div className="mt-5">
                        <h1 className="font-bold text-2xl">What to expect</h1>
                        <p className="mt-3">
                            Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <p className="mt-3">
                            Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                    </div>
                    {/* Itinerary */}
                    <Accordion heading='Itinerary' items={[
                        {
                            title: "Day: 1 - Barcelona – Zaragoza – Madrid",
                            content:
                                "We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). No bus. Walking: light.",
                        },
                        {
                            title: "Day 2: Luzern Free Day",
                            content:
                                "Today is your day to enjoy the best of Luzern. You can join your guide for an optional walking tour that includes a visit to the poignant Lion Monument, a moving memorial to Swiss Guards who died defending the French royal family during the French Revolution. You’ll also learn about Luzern’s fascinating history as a mercantile crossroads, its clever “Dance of Death” paintings, and its stirring role in Catholic reform. This afternoon you’ll be free to wander through Luzern’s traffic-free Old Town, cross its famous covered bridges, take a boat ride on the lake, or grab a cable car up a nearby peak for thrilling views. No bus. Walking: light to strenuous (your choice). Boat: 1 hour. Cable car: 1 hour.",
                        },
                        {
                            title: "Day 3: Luzern – Bern – Gruyères – Gstaad Area",
                            content:
                                "Today we’ll drive to the Swiss capital of Bern, where we’ll take a walking tour through the city’s medieval Old Town, with its ornate fountains, clock tower, and beautifully preserved sandstone buildings. Then we’ll head to the French-speaking region of Switzerland, stopping along the way to visit the cheese-making village of Gruyères. We’ll end our day in the Berner Oberland, where we’ll sleep in the heart of the Swiss Alps near the traffic-free village of Gstaad. Sleep in the Gstaad area (2 nights). Bus: 5 hours. Walking: moderate.",
                        },
                        {
                            title: "Day 4: Gstaad Area",
                            content: "Today is your day to hike high in the Swiss Alps, take a thrilling mountain-climbing train to 10,000 feet, or relax in the village and wander through the mountains on foot. No bus. Walking: light to strenuous (your choice).",
                        }
                    ]} />


                </div>
                <div className="col-span-12 md:col-span-3">
                    {/* Book This trip Now */}
                    <div className="card">
                        <h2 className="card-title">Book Now</h2>
                    </div>
                    {/* divider */}
                    <div className="divider my-5"></div>

                    <form action="">
                        {/* trip start date  */}
                        <div className="card shadow-md p-3 px-auto">
                            <div className="">
                                <h2 className="card-title">Trip Start Date</h2>
                                <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>
                            {/* number of people */}
                            <div className="mt-5">
                                <h2 className="card-title">Number of People</h2>
                                <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" min={1} />
                            </div>
                        </div>

                        {/* divider */}
                        <div className="divider my-5"></div>
                        {/* personal information */}
                        <div className="mt-5 flex flex-col gap-5 card shadow-md p-3 px-auto">
                            <h2 className="card-title">Personal Information</h2>
                            <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs" />
                            <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                            <input type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                            {/* dob */}
                            <input type="date" placeholder="Date of Birth" className="input input-bordered w-full max-w-xs" />
                            {/* country */}
                            <select className="select select-bordered w-full max-w-xs">
                                <option>Country</option>
                                <option>Nepal</option>
                                <option>India</option>
                                <option>China</option>
                                <option>USA</option>
                                <option>UK</option>
                            </select>

                        </div>
                        {/* special requirement  */}
                        <div className="mt-5 card shadow-md p-3">
                            <h2 className="card-title">Special Requirement</h2>
                            <textarea name="" id="" rows={5} className="textarea textarea-bordered w-full max-w-xs"></textarea>
                        </div>
                        {/* Book now Button */}
                        <div className=" p-3">
                            <button className="btn btn-primary btn-block">Book Now</button>
                        </div>
                    </form>


                </div>

            </div>
        </>
    );
}
