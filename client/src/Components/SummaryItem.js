import React from 'react'

const SummaryItem = (props) => {
  return (
    <div className="mt-5 group flex items-center justify-center flex-col w-3/4 lg:w-full">
        <span className="bg-sky-500 rounded-full p-12 group-hover:scale-0 transition-all duration-700 absolute text-xl">{props.num}</span>
        <div className="bg-emerald-500/40 scale-0 group-hover:scale-100 transition-all duration-700 w-full flex flex-row lg:flex-col first-letter:items-center justify-center">
            <h1 className="p-2 text-center underline text-xl ">{props.title}</h1>
            <div className=" break-words bg-emerald-500/50 m-2 p-2 rounded-md grou">{props.text}</div>
            <img className=" h-36 m-2 rounded-md" src={props.img} alt=""/>
        </div>
    </div>
  )
}

export default SummaryItem