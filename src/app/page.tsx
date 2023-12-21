import CardOne from '@/components/BigCard'
import PackagesCard from '@/components/PackagesCard'
import SmallCard from '@/components/SmallCard'
import TopDestinationCard from '@/components/TopDestinationCard'

import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='relative'>
        <div className='w-full relative aspect-[9/16] md:aspect-[1920/750] flex h-auto justify-center md:items-center'>
          <Image src='/img/hero.jpg'
            alt='hero'
            className="h-full w-full object-contain -z-10"
            fill
            sizes="(max-width: 768px) 200vw, (max-width: 1200px) 100vw, 100vw"
            objectFit='cover'
          />
          <div className='z-0 text-center mt-32 md:mt-0'>
            <h2 className='font-bold text-white text-2xl md:text-6xl'>Love where you&apos;re going</h2>
            <h4 className='font-semi mt-1 md:mt-2 text-white text-md md:text-2xl'>Book experiences you’ll want to tell the world about</h4>
          </div>
          <div className='absolute md:mt-0 bottom-14 md:-bottom-14 '>
            {/* search form */}

            <form action="" className='flex justify-center'>
              <div className="flex items-center justify-center gap-8 bg-base-200 p-10 rounded-lg flex-wrap">
                <div className="relative">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-white transition-colors focus:outline-none peer bg-inherit"
                  />
                  <label
                    htmlFor="username"
                    className="text-dark absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-dark"
                  >Destination</label>
                </div>
                <div className="relative">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-white transition-colors focus:outline-none peer bg-inherit"
                  />
                  <label
                    htmlFor="username"
                    className="text-dark absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-dark"
                  >From - TO</label>
                </div>
                <div className="relative">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-white transition-colors focus:outline-none peer bg-inherit"
                  />
                  <label
                    htmlFor="username"
                    className="text-dark absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-dark"
                  >Outdoors</label>
                </div>
                {/* search button */}
                <button className='bg-white text-black px-4 py-2 rounded-md'>Search</button>
              </div>
            </form>
          </div>
        </div>

      </div>
      <div className='container mx-auto mt-10 md:mt-20 px-2 md:px-0'>
        <div className='text-center my-8'>
          <h2 className='font-bold text-3xl'>Unmissable Destinations</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div>
            <CardOne title='New York' description='Take in the iconic skyline and visit the neighborhood hangouts that you’ve only ever seen on TV.' image='/img/package1.jpg' />
          </div>
          <div className='relative grid grid-cols-1 md:grid-cols-2 gap-4'>
            <SmallCard title='NYC: Priority or Flexible Statue of Liberty Ticket' image='/img/package2.jpg' price='1000' />
            <SmallCard title='One World Observatory: Skip-All-Lines and Express Tickets' image='/img/package3.jpg' price='1000' />
            <SmallCard title='New York: NYC Explorer Pass w. Over 85 Tours and Attractions' image='/img/package4.jpg' price='1000' />
            <SmallCard title='New York City: Little Italy Italian Food Tasting Tour' image='/img/package5.jpg' price='1000' />
          </div>

        </div>
      </div >
      <div className='mt-10'>
        <div className="hero w-full aspect-[4/1]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div >
      <div className='container mx-auto mt-10 md:mt-20'>
        <div className='text-center my-8'>
          <h2 className='font-bold text-3xl'>Popular Packages</h2>
        </div>

        <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2'>
          <PackagesCard title='Mangrove Tunnel Kayak Eco' image='/img/package6.jpg' price='1000' location='Greater London, United Kingdom' type='Tour' />
          <PackagesCard title='Mangrove Tunnel Kayak Eco' image='/img/package7.jpg' price='1000' location='Greater London, United Kingdom' type='Tour' />
          <PackagesCard title='Mangrove Tunnel Kayak Eco' image='/img/package8.jpg' price='1000' location='Greater London, United Kingdom' type='Tour' />
          <PackagesCard title='Mangrove Tunnel Kayak Eco' image='/img/package9.jpg' price='1000' location='Greater London, United Kingdom' type='Tour' />

        </div>


      </div >
      <div className='container mx-auto mt-10 md:mt-20'>
        <div className='text-center my-8'>
          <h2 className='font-bold text-3xl'>Top Destination</h2>
        </div>

        <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-5 p-2'>
          <TopDestinationCard name='Turkey' image='/img/destination1.jpg' />
          <TopDestinationCard name='United States' image='/img/destination2.jpg' />
          <TopDestinationCard name='Ukraine' image='/img/destination3.jpg' />
          <TopDestinationCard name='France' image='/img/destination4.jpg' />
          <TopDestinationCard name='India' image='/img/destination5.jpg' />
          <TopDestinationCard name='United Kingdom' image='/img/destination6.jpg' />
          <TopDestinationCard name='Germany' image='/img/destination7.jpg' />
          <TopDestinationCard name='Greece' image='/img/destination8.jpg' />
          <TopDestinationCard name='Canada' image='/img/destination9.jpg' />
          <TopDestinationCard name='Italy' image='/img/destination10.jpg' />
        </div>


      </div >

    </>
  )
}
