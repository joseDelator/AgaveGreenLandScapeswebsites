import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
const ContactFrom = () => {
    return (
        <div className="hero min-h-screen bg-base-200" id="Contact" >
  <div  className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-primary font-bold">Contact us!</h1>
      <p className="py-6">We are proud to offer a variety of landscaping options for any size project.
       We bring to projects our high quality and unique  approach of working with you to find the perfect 
       balance between feasibility, sustainability, and individuality for any landscaping project. </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Messege</span>
          </label>
          <textarea className="textarea input-bordered" placeholder="Tell us how we can help you"></textarea>
          <label className="label">
          <a href="tel:+1-707-703-3660" className="btn btn-ghost normal-case text-sm"> Call us <FaPhoneAlt className="m-2"/>(707) 703-3660</a>  
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default ContactFrom
