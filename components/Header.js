import Image from "next/image";
import {SearchIcon, UsersIcon, UserCircleIcon, MenuIcon, GlobeAltIcon} from "@heroicons/react/solid";



function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3
         bg-white shadow-md p-5 md:px-10">


             {/* left logo */}
            <div className="relative flex items-center h-10 my-auto cursor-pointer">
            <Image src="https://links.papareact.com/qd3" layout="fill" 
            objectFit="contain" objectPosition="left"/>
            </div>


            {/* middle search */}
            <div className="flex items-center md:border-2 rounded-full 
                            border-gray-200 py-2 md:shadow-md">
                <input className="pl-5 outline-none bg-transparent 
                                flex-grow text-sm text-gray-600 
                                placeholder-gray-400" type="text" placeholder="Start your search"/>
                {/* visible ones it hits medium */}
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full p-2
                 text-white cursor-pointer mx-2"/>
            </div>



            {/* Right Section */}
            <div className="flex space-x-4 items-center justify-end
                            text-gray-500">
            <p className="hidden md:inline-flex cursor-pointer">Become a Host</p>
            <GlobeAltIcon className="h-6 cursor-pointer"/>
            <div className="flex items-center border-2 
                            rounded-full p-2 space-x-2">
                <MenuIcon className="h-6"/>
                <UserCircleIcon className="h-6"/>
            </div>
            </div>
        </header>
    )
}

export default Header
