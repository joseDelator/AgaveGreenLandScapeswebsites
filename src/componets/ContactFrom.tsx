
import { FaPhoneAlt } from 'react-icons/fa'
import emailjs from 'emailjs-com';
import { useState } from 'react';
const ContactFrom = () => {
  const [Isopen, setIsopen] = useState(false)
  const [isValid, setIsValid] = useState(true);
  function sendEmail(e:any) {
    e.preventDefault();
    if(isValid)  {

    emailjs.sendForm('service_h7upjm5', 'template_6e74qbd', e.target, 'gwdwOGaTyvmpHBN6G')
      .then((result) => {
          setIsopen(true)
          e.target.reset() //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
    }
  }
  function isValidEmail(email:string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email != ""){
      setIsValid(regex.test(email));
    }else{
      setIsValid(true)
    }
    
  }
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
      <form className="card-body" onSubmit={e =>sendEmail(e)} >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input type="text" placeholder="Email" name='email' className={isValid? "input input-bordered":"input input-bordered input-error"}
          onChange={e=> isValidEmail(e.target.value)}  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name='name' className="input input-bordered" required/>


          <textarea className="textarea input-bordered"
           placeholder="Tell us how we can help you" name="message" required/>
          <label className="label">
          <a href="tel:+1-707-703-3660" className="btn btn-ghost normal-case text-sm"> Call us <FaPhoneAlt className="m-2"/>(707) 703-3660</a>  
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
      
    </div>

    {!isValid&&
    <div className="alert alert-error shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" 
    viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Error! Please Enter Valid Email Address.</span>
  </div>
</div>
}
      <input type="checkbox" id="my-modal" className="modal-toggle" checked={Isopen} readOnly />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">We'll reach out to you in the coming days!</h3>
            <p className="py-4">feel free to give us a call </p>
            <a href="tel:+1-707-703-3660" className="btn btn-ghost normal-case text-sm">
            <FaPhoneAlt className="m-2"/>(707) 703-3660</a>
            <div className="modal-action">
              <button  onClick={e=>setIsopen(false)} className="btn">Yay!</button>
            </div>
        </div>
<input type="checkbox" id="my-modal" className="modal-toggle" checked={Isopen} readOnly />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">We'll reach out to you in the coming days!</h3>
    <p className="py-4">feel free to give us a call </p>
    <a href="tel:+1-707-703-3660" className="btn btn-ghost normal-case text-sm">
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
