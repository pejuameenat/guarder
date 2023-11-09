import React from 'react';

// TODOform validation
function formValidation(value){
  const inputValue =  document.querySelectorAll('input');
  const textArea= document.querySelector('textarea')
  inputValue.forEach(input=>{
      value = input.value.toLowerCase()
      input.style.border = '2px solid #f00';
      textArea.style.border = '2px solid #f00';
  })
  if(value && textArea)return 
  const em = document.querySelector('.em-class')
  em.classList.remove('hide')

}
function Contact(){
return(
    <section className='section' id="contact">
        <div className="container container2">
            <h2 className='common-h2'>GET IN TOUCH</h2>
                <form>
                     <div className='form-wrapper'>
                        <input type="text"  placeholder='Full Name' required/>
                        <input type="email" placeholder='Email' required/>
                        <input type="text"  placeholder='Phone Number' required/>
                        <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                        <em className="em-class hide">Input fileds are required!</em>
                        <button type="submit" id="submit" className="btn-quote" onClick={formValidation}>SEND</button>
                    </div>
               </form>
            </div>
    </section>
)
}

export default Contact;