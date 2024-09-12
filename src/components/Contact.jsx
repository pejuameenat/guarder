import React, { useRef } from 'react';

// TODOform validation
 
function Contact(){
  const inputRefs = useRef([])
  console.log(inputRefs.current);
  
  const emRef = useRef(null)
  function formValidation(e) {
    e.preventDefault()
    inputRefs.current.map((child)=>{
      if(
        (child === 'input' && child.value !== '') ||
        (child === 'textarea' && child.value !== '')
      ) {
        child.value.toLowerCase()
        child.style.border = '2px solid #f00'
      }
      //bug
      if(child.value !== '') return
      emRef.current.classList.remove('hide')
    })
  }
return (
  <section className="section" id="contact">
    <div className="container container2">
      <h2 className="common-h2">GET IN TOUCH</h2>
      <form>
        <div className="form-wrapper" >
          <input type="text" ref={(el)=>{inputRefs.current[0] = el}} placeholder="Full Name" required />
          <input type="email" ref={(el)=> {inputRefs.current[1] = el}} placeholder="Email" required />
          <input type="text" ref={(el)=>{inputRefs.current[2]= el}} placeholder="Phone Number" required />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            ref={(el)=>{inputRefs.current[3]= el}}
          ></textarea>
          <em className="em-class hide" ref={emRef}>Input fields are required!</em>
          <button type="submit" id="submit" className="btn-quote" onClick={formValidation}>
            SEND
          </button>
        </div>
      </form>
    </div>
  </section>
)
}

export default Contact;