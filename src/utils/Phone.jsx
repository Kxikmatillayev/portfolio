import React from 'react'

const Phone = () => {
    return (
        <div>
            <button
                className="overflow-hidden relative p-2 h-12 bg-gren text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group hidden lg:flex justify-center items-center px-4 sm:ml-2"
            >
                +998 90 904 16 85
                <span
                    className="absolute w-36 h-32 -top-6 -left-2 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                ></span>
                <span
                    className="absolute w-[200px] h-32 -top-6 -left-2 bg-gren transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                ></span>
                <span
                    className="absolute w-[190px] h-32 -top-6 -left-2 bg-gren transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
                ></span>
                <span
                    className="flex flex-row text-center items-center gap-3 group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-3 left-10 z-10"
                ><i className="fa-solid fa-phone-volume"></i>Call</span>
            </button>
        </div>
    )
}

export default Phone

