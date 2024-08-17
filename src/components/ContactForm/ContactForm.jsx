import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0v0rq1j',
        'template_9jz4313',
        form.current,
        '-VED3o7CxunngaC5E'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error);
          alert('Failed to send message, please try again.');
        }
      );
  };

  return (
    <div className='contactFormWrap relative w-full'>
      <form
        ref={form}
        onSubmit={sendEmail}
        className='grid gap-[1.875rem] md:grid-cols-2 grid-cols-1'
      >
        <div className='fieldBox w-full col-span-2'>
          <label className='text-[1rem] text-white font-Poppins font-medium px-[10px] md:px-[1.125rem] mb-[10px] block'>
            Write a Message
          </label>
          <textarea
            name='message'
            className='border-2 border-solid border-[#a9a9a9] focus:border-[rgba(255,255,255,.5)] focus:outline-0 bg-[transparent] rounded-[10px] md:rounded-[.9375rem] lg:rounded-[1.25rem] w-full h-[8rem] md:h-[13.125rem] p-[1.125rem] text-white'
          ></textarea>
        </div>
        <div className='fieldBox w-full'>
          <label className='text-[1rem] text-white font-Poppins font-medium px-[10px] md:px-[1.125rem] mb-[10px] block'>
            Your Name
          </label>
          <input
            type='text'
            name='user_name'
            className='border-2 border-solid border-[#a9a9a9] focus:border-[rgba(255,255,255,.5)] focus:outline-0 bg-[transparent] rounded-[10px] md:rounded-[.9375rem] lg:rounded-[1.25rem] w-full h-[2.5rem] md:h-[3.875rem] p-[10px] md:p-[1.125rem] text-white'
          ></input>
        </div>
        <div className='fieldBox w-full'>
          <label className='text-[1rem] text-white font-Poppins font-medium px-[10px] md:px-[1.125rem] mb-[10px] block'>
            Your Email
          </label>
          <input
            type='email'
            name='user_email'
            className='border-2 border-solid border-[#a9a9a9] focus:border-[rgba(255,255,255,.5)] focus:outline-0 bg-[transparent] rounded-[10px] md:rounded-[.9375rem] lg:rounded-[1.25rem] w-full h-[2.5rem] md:h-[3.875rem] p-[10px] md:p-[1.125rem] text-white'
          ></input>
        </div>
        <div className='fieldbtn mt-0 md:mt-[1.875rem] w-full col-span-2'>
          <button
            className='bg-white text-accent text-[1rem] font-Poppins font-bold uppercase rounded-[5px] md:rounded-[10px] md:px-6 lg:px-10 xl:px-11 px-7 md:py-[1.125rem] py-[14px] hover:bg-accent2 hover:text-white text-center inline-block'
            type='submit'
          >
            Contact Me
          </button>
        </div>
      </form>
      {/* Contact Form Wrap */}
    </div>
  );
};

export default ContactForm;
