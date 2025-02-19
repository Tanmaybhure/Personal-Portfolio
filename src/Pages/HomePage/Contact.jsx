import React from 'react'
import ContactForm from '../../Components/Contact/ContactForm'
import { Mail,PhoneCall,MapPin } from 'lucide-react'
function Contact() {
  return (
   <>
        <div className='flex flex-col items-center gap-20 justify-center lg:justify-start lg:flex-row w-screen px-2 md:px-6 py-20 lg:!py-10 !pb-24 lg:px-10 xl:p-28 '>

        <ContactForm/>

        <div className='h-full justify-start order-1 lg:order-2 flex  lg:max-w-[400px] xl:max-w-[500px] flex-col gap-10 lg:justify-center'>

            <div className='flex items-center gap-5'>
                <div className='PrimaryBtnGredient p-4 rounded-full'>
                    <Mail/>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-sm'>Phone</p>
                    <p className='text-sm  md:text-xl font-semibold'>+91 7559354552</p>
                </div>
            </div>
            <div className='flex items-center  gap-5'>
                <div className='PrimaryBtnGredient p-4 rounded-full'>
                    <PhoneCall/>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-sm'>Email</p>
                    <p className='text-sm  md:text-xl font-semibold'>tanmaybhure2004@gmail.com</p>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <div className='PrimaryBtnGredient p-4  rounded-full'>
                    <MapPin/>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-sm'>Address</p>
                    <p className=' text-sm md:text-xl font-semibold'>Pimpri Chinchwad College of Engineering, Nigdi, Akurdi, Pune</p>
                </div>
            </div>

        </div>

        </div>
   </>
  )
}

export default Contact
