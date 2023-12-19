import BlogCard from "@/components/BlogCard";
import Image from "next/image";

export default function BlogsPage() {
    return (
        <>
            <div className="container my-5">
                <div>
                    <h2 className="heading"> Blogs & News </h2>
                </div>
                <div className="grid gap-10 mt-20 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
                    <BlogCard title="10 Breathtaking Beaches You Need to Visit Before You Die" author="Erika Oliver" date="September 23, 2022" image="https://source.unsplash.com/random/200x200?sig=12" />
                    <BlogCard title="The 15 Most Instagrammable Cities in the World" author="Erika Oliver" date="September 23, 2022" image="https://source.unsplash.com/random/200x200?sig=11" />
                    <BlogCard title="7 Incredible Landmarks That Should be on Your Bucket List" author="Erika Oliver" date="September 23, 2022" image="https://source.unsplash.com/random/200x200?sig=10" />
                    <BlogCard title="Top 12 Travel Hacks Every Wanderlust Should Know" author="Erika Oliver" date="September 23, 2022" image="https://source.unsplash.com/random/200x200?sig=9" />
                    <BlogCard title="The 20 Best Hidden Gems in [Destination] You Must Explore" author="Erika Oliver" date="September 23, 2022" image="https://source.unsplash.com/random/200x200?sig=8" />
                    <BlogCard title="The Surprising Benefits of Traveling: Exploring the Unknown" author="Erika Oliver" date="September 23, 2022" image="https://source.unsplash.com/random/200x200?sig=7" />
                    <BlogCard title="The Impact of Travel on Mental Health: A Personal Journey" author="Erika Oliver" date="September 23, 2022" image="https://source.unsplash.com/random/200x200?sig=6" />
                    <BlogCard title="Why Traveling Is the Best Education You Can Get" author="Erika Oliver" date="September 23, 2022" image="https://source.unsplash.com/random/200x200?sig=5" />
                    <BlogCard title="Unlocking the World: How Travel Broadens Your Horizons" author="Erika Oliver" date="September 23, 2022" image="https://source.unsplash.com/random/200x200?sig=4" />
                    <BlogCard title="From Dreamer to Traveler: Embracing Wanderlust" author="Erika Oliver" date="September 23, 2022" image="https://source.unsplash.com/random/200x200?sig=3" />
                    <BlogCard title="Ultimate Guide: How to Plan Your Dream Vacation" author="Erika Oliver" date="September 23, 2022" image="https://source.unsplash.com/random/200x200?sig=2" />
                </div>
            </div>
        </>
    )
}