import React, { Suspense, useRef, useState } from 'react'
import emailsj from '@emailjs/browser'
import conf from '../conf/conf'
import { fromJSON } from 'postcss'
import { Fox } from '../models/Fox'
import { Canvas } from "@react-three/fiber";
const Contact = () => {

  const formRef = useRef(null)
  const [form, setForm] = useState({name:"",email:"",message:""})
  const [isLoading, setIsLoading] = useState(false)

  const handelChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleFocus = (e) => {
    
  }

  const handleBlur = () => {}
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    emailsj.send(
      conf.emailjs_serviceID,
      conf.emailjs_templetID,
      {
        from_name: form.name,
        to_name: "Nilesh",
        from_email: form.email,
        to_email: 'nileshpandey200311@gmail.com',
        message : form.message
      },
      conf.emailjs_publicID
    ).then(()=>{
      setIsLoading(false);
      setForm({name:'',email:'',message:''})

    }).catch((error)=>{
      setIsLoading(false)
      console.log(error)
    })
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>

        <form 
        className='w-full flex flex-col gap-7 mt-14'
        onSubmit={handleSubmit}
        ref={formRef}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input 
            type='text'
            name='name'
            className='input'
            placeholder='Enter your name'
            required
            value={form.name}
            onChange={handelChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input 
            type='email'
            name='email'
            className='input'
            placeholder='xyz@gmail.com'
            required
            value={form.email}
            onChange={handelChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message 
            <textarea 
            type='text'
            name='message'
            rows={4}
            className='input'
            placeholder='Let me know how I can help you!'
            required
            value={form.message}
            onChange={handelChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
          </label>
          <button 
            type='submit'
            className='btn'
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0,0,5]
          }}
        >
          <Suspense fallback={null}>

          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
