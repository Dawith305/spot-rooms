import Image from "next/image";
import {SearchIcon, UsersIcon, UserCircleIcon, MenuIcon, GlobeAltIcon, UserIcon} from "@heroicons/react/solid";
import { useState } from "react";


import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";


function Header({placeholder}) {

    // searchInput state variable setSearchState is the setter for
    //searchInput variable. We can also pass default value in the useState but we dont' need that now
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberOfGuests, setNumberOfGuests] = useState(1);

    const router = useRouter();


    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }

    const handleDateSelect = (ranges) => {
            setStartDate(ranges.selection.startDate);
            setEndDate(ranges.selection.endDate)
    }

    const resetDatePicker = () => {
        setSearchInput("");
    }

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfGuests
            }
        });
    }



    return (
        <header className="sticky top-0 z-50 grid grid-cols-3
         bg-white shadow-md p-5 md:px-10">


             {/* =============left logo=============== */}
            <div 
            onClick={() => router.push("/")}
            className="relative flex items-center h-10 my-auto cursor-pointer">
            <Image src="https://links.papareact.com/qd3" layout="fill" 
            objectFit="contain" objectPosition="left"/>
            </div>


            {/* ===========middle search============== */}
            <div className="flex items-center md:border-2 rounded-full 
                            border-gray-200 py-2 md:shadow-md">
                <input 
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="pl-5 outline-none bg-transparent 
                                flex-grow text-sm text-gray-600 
                                placeholder-gray-400" type="text"
                                 placeholder={ placeholder || "Start your search"}/>
                {/* visible ones it hits medium */}
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full p-2
                 text-white cursor-pointer mx-2"/>
            </div>



            {/* =========Right Section============= */}
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


            {/* ============ Date Range Picker =========== */}
            {searchInput && (
                <div className="flex flex-col mx-auto col-span-3 mt-2">
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        minDate={new Date}
                        rangeColors={['#FD5B61']}
                        onChange={handleDateSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                        <UsersIcon className="h-5"/>
                        <input 
                        value={numberOfGuests}
                        onChange={(e) => setNumberOfGuests(e.target.value)}
                        min={1}
                        type="number" 
                        className="w-12 pl-2 outline-none text-red-400 text-lg"/>
                    </div>

                    <div className="flex center-items">
                        <button className="flex-grow" onClick={resetDatePicker}>Cancel</button>
                        <button 
                        onClick={search}
                        className="flex-grow text-red-400">Search</button>
                    </div>
                </div>
            )}

        </header>
    )
}

export default Header
