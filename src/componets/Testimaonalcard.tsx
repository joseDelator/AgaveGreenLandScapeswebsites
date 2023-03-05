import React from 'react'
import Image from 'next/image'
interface Props{
    tag: string, 
    message:JSX.Element,
    image:string
}
const Testimaonalcard = ({image, message,  tag}:Props) => {
    return (
        <div className="card w-full sm:w-96 h-full bg-base-100 shadow-xl text-neutral">
        <figure><Image src={image}  width="0"
    height="0"
    sizes="100vw" loading="lazy" alt="Sonoma, marin,  " /></figure>
        <div className="card-body">
            <h2 className="card-title">
                <div className="rating">
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star"  />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" checked readOnly/>
                </div>
            <div className="badge badge-secondary">{tag}</div>
            </h2>
           {message}
            <div className="card-actions justify-end">
            </div>
        </div>
        </div>
    )
}

export default Testimaonalcard
