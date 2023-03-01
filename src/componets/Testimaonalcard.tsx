import React from 'react'
interface Props{
    tag: string, 
    message:JSX.Element,
    image:string
}
const Testimaonalcard = ({image, message,  tag}:Props) => {
    return (
        <div className="card w-full sm:w-96 h-full bg-base-100 shadow-xl text-neutral">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
                <div className="rating">
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star"  />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" />
                    <input type="radio" name="rating-1" className="mask mask-star" checked />
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
