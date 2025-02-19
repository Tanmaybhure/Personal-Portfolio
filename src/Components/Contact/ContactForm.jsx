import React,{useRef} from 'react'
import PrimaryBtn from '../SharedComponent/Buttons/PrimaryBtn'
import emailjs from 'emailjs-com';

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          'service_n2x6obh',    // EmailJS service ID
          'template_8c7a4xb',   // EmailJS template ID
          form.current,
          'Ivpj8cMABMcUJ_ew3'        // EmailJS user ID
        )
        .then(
          (result) => {
            console.log(result.text);
            alert('Message sent successfully!');
          },
          (error) => {
            console.log(error.text);
            alert('Failed to send message. Please try again later.');
          }
        );
  
      e.target.reset();
    };
  
  return (
   <>
    <form ref={form} id='Contact' onSubmit={sendEmail} className="bg-[#06080a] order-2 lg:order-1 relative overflow-visible gap-8 w-full lg:w-[670px] z-10 py-8 px-4 md:p-14 lg:px-6 xl:px-14 flex flex-col rounded-xl ">
        <div className="flex flex-col relative items-start px-1  gap-4">
          <h1
            className="font-bold text-left Hero-Title leading-[1.2]"
            style={{ fontSize: "clamp(30px, 4vw, 45px)" }}
          >
        Let’s work together!          </h1>
          <p
                style={{ fontSize: "clamp(16px, 5vw, 16px)" }}
                className=" text-left  text-[#dddddd] font-light "
              >
               I code and made softwares  and i love what i do. Just simple like that!
              </p>

        </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="from_name"
               
                placeholder="Enter Your Name"
                className=" bg-transparent border border-[#8750f7]  p-3 rounded-md "
              />
            </div>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                name="email"
                
                placeholder="Enter Your Email"
                className="bg-transparent rounded-md  border border-[#8750f7]  p-3"
              />
            </div>

           

            <div className="flex flex-col col-span-full gap-3">
              <input
                type="text"
                name="subject"
               
                placeholder="Enter Your Subject"
                className="bg-transparent rounded-md  border border-[#8750f7]  p-3"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <textarea
              name="message"
            
              rows={5}
              placeholder="Your Message"
              className="resize-none bg-transparent rounded-md  border border-[#8750f7]  p-3"
            />
          </div>

          {/* <label className="relative flex-1 items-center gap-2 max-h-3 flex" htmlFor="t&c">
            <input
              className="border-[#B9832B] w-fit border p-1 rounded-lg"
              required
              id="t&c"
              type="checkbox"
            />
            <span className="text-[#AB9DCD]">
              I agree with{' '}
              <a href="/terms-and-condition" target="_blank" className="hover:underline cursor-pointer text-[#554075]">
                Terms of Use
              </a>{' '}
              and{' '}
              <a href="/privacy-policy" target="_blank" className="hover:underline cursor-pointer text-[#554075]">
                Privacy Policy
              </a>
            </span>
          </label> */}

          <PrimaryBtn className="items-center justify-center gap-3" Text={'Send Message'} />
           
      

          
        </form>
   </>
  )
}

export default ContactForm
