import Image from "next/image"


function Banner() {
    return (

        // sm is greater than mobile so the defaut one are 
        //for mobile the rest break points starting from sm 
        //will be added to based on what we need 
        <div className="relative h-[300px] sm:h-[400px]
         lg:h-[500px] 2xl:h-[600px] 2xl:h-[700px]">
            <Image src="https://links.papareact.com/0fm" 
                    layout="fill" 
                    objectFit="cover"/>
        
            <div className="absolute top-1/2 w-full
                            text-center">
                <p className="text-sm sm:text-lg font-semibold">We have the perfect PLACES :)</p>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md
                                    rounded-full rounded-4 font-bold my-3 hover:shadow-xl
                                    active:scale-90 transition duration-200
                                    ">Take Me Away</button>
            </div>
        
        </div>
    )
}

export default Banner
