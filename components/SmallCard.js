import Image from "next/image";


function SmallCard({img, location, distance}) {
    return (
        <div className="flex items-center m-2 space-x-4 cursor-pointer
                        hover:bg-gray-100 hover:scale-105 transition
                         delay-200 ease-out">


            {/* left image div */}
            <div class="relative h-16 w-16">
                <Image className="rounded-lg" src={img} layout="fill"/>
            </div>


            {/* right text div */}
            <div>
                <h2>
                    {location}
                </h2>
                <h2 className="text-gray-500">
                    {distance}
                </h2>
            </div>
        </div>
    )
}

export default SmallCard
