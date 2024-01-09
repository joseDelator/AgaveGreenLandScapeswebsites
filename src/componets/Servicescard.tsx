import React from 'react'
import { FaArrowAltCircleRight, FaHardHat } from 'react-icons/fa'
interface Props{
    tag: string, 
    message:JSX.Element,
    icon:any,
    color:string,
    linkpage: string
}
function Servicescard({icon, message,tag, linkpage, color}:Props) {
  return (
    <div className="card w-96 bg-base-200 shadow-xl">
        <figure className=''></figure>
    <div className={`w-2 h-2 m-1 border-l-[50px] border-l-transparent border-t-[75px] border-t-${color} border-r-[50px] border-r-transparent center`}>{icon}
</div>
    <div className="card-body text-neutral">
        <h2 className="card-title ">Landscape Contruction</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className={'card-actions justify-end'}>
        <button className={`btn btn-${color} `}>Learn More <FaArrowAltCircleRight/></button>
        </div>
    </div>
</div>
  )
}

export default Servicescard