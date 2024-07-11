import React, { useRef } from 'react';

// TODOform validation
 
function Contact(){
  // const myRef = useRef(null)
  // console.log(myRef.current.children)
  function formValidation(e) {
    e.preventDefault()
    // myRef.current.children.map(child=>{
    //   if (
    //     (child === 'input' && child.value !== '') ||
    //     (child === 'textarea' && child.value !== '')
    //   ) {
    //     child.value.toLowerCase()
    //     child.style.border = '2px solid #f00'
    //   }
    //   //bug
    //   if (child.value !== '') return
    //   const em = document.querySelector('.em-class')
    //   em.classList.remove('hide')
    // })
  }
return (
  <section className="section" id="contact">
    <div className="container container2">
      <h2 className="common-h2">GET IN TOUCH</h2>
      <form onSubmit={formValidation}>
        <div className="form-wrapper" >
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Phone Number" required />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <em className="em-class hide">Input fields are required!</em>
          <button type="submit" id="submit" className="btn-quote">
            SEND
          </button>
        </div>
      </form>
    </div>
  </section>
)
}

export default Contact;