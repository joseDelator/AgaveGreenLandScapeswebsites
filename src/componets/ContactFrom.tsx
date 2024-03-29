
import { FaPhoneAlt } from 'react-icons/fa'
import emailjs from 'emailjs-com';
import { useState } from 'react';
const ContactFrom = () => {
  const [Isopen, setIsopen] = useState(false)
  function sendEmail(e:any) {
    e.preventDefault();  
    emailjs.sendForm('service_h7upjm5', 'template_6e74qbd', e.target, 'gwdwOGaTyvmpHBN6G')
      .then((result) => {
          setIsopen(true)
          e.target.reset() //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }
    return (
  <div className="hero min-h-screen bg-base-200" id="Contact" >
  <div  className="hero-content flex-col lg:flex-row-reverse ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl text-accent font-bold">Contact us!</h1>
      <p className="py-6">We are proud to offer a variety of landscaping options for any size project.
       We bring to projects our high quality and unique  approach of working with you to find the perfect 
       balance between feasibility, sustainability, and individuality for any landscaping project. </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={e =>sendEmail(e)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Email" name='email' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea className="textarea input-bordered"
           placeholder="Tell us how we can help you" name="message" required/>
          <label className="label">
          <a href="tel:+1-707-703-3660" className="btn btn-secondary  normal-case text-sm"><FaPhoneAlt className="m-2"/>(707) 703-3660</a>  
          </label>
          <label className="label">
          <a href="mailto:agavegreenlandscapes@gmail.com" className="btn btn-neutral normal-case text-sm">Agavegreenlandscapes@gmail.com</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
      
    </div>
<input type="checkbox" id="my-modal" className="modal-toggle" checked={Isopen} readOnly />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">We'll reach out to you in the coming days!</h3>
    <p className="py-4">feel free to give us a call </p>
    <a href="tel:+1-707-703-3660" className="btn btn-secondary normal-case text-sm p-0">
     <FaPhoneAlt className="m-2"/>(707) 703-3660</a>
    <div className="modal-action">
      <button  onClick={e=>setIsopen(false)} className="btn">Yay!</button>
    </div>
  </div>
</div>
  </div>
</div>
    )
}

export default ContactFrom
