import Image from 'next/image'
import React from 'react'
interface BlogCardProps {
    title: string
    description?: string
    image: string
    author: string
    date: string
    authorImage?: string
}
const BlogCard = ({ author, date, image, title, authorImage, description }: BlogCardProps) => {
    return (
        <>
            <div className="group cursor-pointer shadow-lg p-3">
                <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   ">
                    <a className="relative block aspect-square" href="/blogs/test">
                        <Image alt="Thumbnail" fill className="object-cover transition-all" sizes="(max-width: 768px) 30vw, 33vw" src={image} />
                    </a>
                </div>
                <div className="">
                    <div>
                        <div className="flex gap-3">
                            <a href="/category/lifestyle"><span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-purple-600">Lifestyle</span></a>
                            <a href="/category/personal-growth"><span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-emerald-700">Personal Growth</span>
                            </a>
                        </div>
                        <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    ">
                            <a href="/blogs/test">
                                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]  ">{title}</span>
                            </a>
                        </h2>
                        <div className="">
                            <p className="mt-2 line-clamp-3 text-sm text-gray-500 ">
                                <a href="/blogs/test">That was so fun! I’ve got a new addiction! my athlete friend exclaimed, tired but happy in the car on the way home. “Let’s do it again tomorrow.”</a>
                            </p>
                        </div>
                        <div className="mt-3 flex items-center space-x-3 text-gray-500 ">
                            <a href="/author/mario-sanchez">
                                <div className="flex items-center gap-3">
                                    {
                                        authorImage && (
                                            <div className="relative h-5 w-5 flex-shrink-0">
                                                <Image alt={author} fill className="rounded-full object-cover" sizes="20px" src={authorImage} />
                                            </div>
                                        )
                                    }

                                    <span className="truncate text-sm">{author}</span>
                                </div>
                            </a><span className="text-xs text-gray-300 ">•</span>
                            <time className="truncate text-sm" >{date}</time>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard