import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import {StarIcon} from "@heroicons/react/solid"


function InfoCard({img,location,title,total,description,star, price }) {
    return (
        <div className="flex py-7 px-2 border-b cursor-pointer
                        hover:opacity-80 hover:shadow-lg
                        transition duration-200 ease-out
                        first: border-t
                        ">
           
           {/* left hand image */}
           <div className="relative h-24 w-40 md:h-52 md:w-80
                            flex-shrink-0">
               <Image className="rounded-2xl" src={img} layout="fill" objectFit="cover"/>
           </div>

            {/* right hand section */}
           <div className="flex flex-col flex-grow pl-4">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer"/>
                </div>

                <h4 className="text-xl">{title}</h4>

                <div className="border-b w-10 pt-2"/>


                <p className="pt-2 text-sm text-gray-500">{description}</p>
           
                <div className="flex justify-between items-end">
                    <p className="flex items-center pt-5">
                        <StarIcon className="h-5 text-red-400"/>
                    </p>

                    <div>
                        <p className="text-lg font-semibold lg:text-2xl pb-2">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>
           
           </div>
        </div>
    )
}

export default InfoCard;
