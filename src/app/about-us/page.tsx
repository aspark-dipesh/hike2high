'use client'
import Head from 'next/head'
import Image from 'next/image'
export default function About() {
    return (
        <div className=" mx-auto p-8">
            <section className="mb-8 flex items-center container">

                <div className="w-1/2  mr-8 text-center">
                    <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
                    <p className="text-lg mb-4">
                        At Hike to High, our mission is to create memorable and transformative travel experiences that inspire a deeper connection with the world. We believe in crafting journeys that not only showcase the beauty of diverse landscapes but also contribute positively to the communities and environments we encounter.
                    </p>
                    <p className="text-lg">
                        Whether you&apos;re scaling peaks, immersing yourself in local cultures, or simply enjoying the tranquility of nature, our goal is to make every adventure with us a life-enriching experience.
                    </p>
                </div>
                <div className="w-1/2 ">
                    <div className='w-full aspect-[1/1] relative'>
                        <Image
                            src={`https://source.unsplash.com/random/1600x900?sig=15`}
                            alt="Mission Image"
                            fill
                            className='object-cover rounded-md'
                            sizes='(max-width: 768px) 50vw, 50vw'

                        />
                    </div>


                </div>
            </section>

            <section className="mb-8 flex items-center relative py-16 ">


                <Image
                    src={`https://source.unsplash.com/random/1600x900?sig=14`}
                    alt="Reasons Image"
                    fill
                    className='aspect-video object-cover rounded-md'
                    sizes='(max-width: 768px) 100vw, 100vw'
                />

                <div className="z-10 text-center container text-white">
                    <h1 className="text-4xl font-bold mb-6">Reasons Behind Hike to High</h1>
                    <p className="text-lg mb-4">
                        What sets Hike to High apart is our unwavering commitment to quality, sustainability, and personalized service. We are driven by the belief that travel is not just about reaching a destination but about the journey itself. Here are some key reasons why adventurers choose Hike to High:
                    </p>
                    <ul className="list-disc pl-6">
                        <li className="mb-2">Unparalleled Expertise: Our team comprises seasoned travelers and experts who curate unique itineraries with a deep understanding of each destination.</li>
                        <li className="mb-2">Sustainable Tourism: We prioritize responsible travel practices, working closely with local communities to minimize our impact and contribute to the well-being of the places we visit.</li>
                        <li className="mb-2">Personalized Experiences: Your journey with Hike to High is tailored to your preferences, ensuring every moment aligns with your expectations and desires.</li>
                    </ul>
                </div>
            </section>

            <section className="flex items-center container">
                <div className="w-1/2 mr-8">



                    <Image
                        src={`https://source.unsplash.com/random/1600x900?sig=13`}
                        alt="Why Choose Image"
                        width={800}
                        height={450}
                        className="rounded-md"
                    />

                </div>
                <div className="w-1/2">
                    <h1 className="text-4xl font-bold mb-6">Why Choose Hike to High</h1>
                    <p className="text-lg mb-4">
                        Embark on your next adventure with confidence, knowing that Hike to High is dedicated to providing unparalleled travel experiences. Here are some compelling reasons to choose us:
                    </p>
                    <ul className="list-disc pl-6">
                        <li className="mb-2">Passionate Team: Our diverse and passionate team brings a wealth of knowledge and dedication to ensuring your journey is seamless and memorable.</li>
                        <li className="mb-2">Variety of Options: From thrilling treks to cultural explorations, we offer a diverse range of itineraries catering to different interests and preferences.</li>
                        <li className="mb-2">Customer-Centric Approach: Your satisfaction is our priority. We go the extra mile to exceed your expectations and make your travel dreams a reality.</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
