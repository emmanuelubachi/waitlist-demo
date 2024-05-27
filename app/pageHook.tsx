'use client'

import React from 'react'
import { useState } from 'react'

import { PiWarningCircleThin } from 'react-icons/pi'
import { TbArrowsJoin2 } from 'react-icons/tb'

import Link from 'next/link'
import Image from 'next/image'

import {
  AnimatePresence,
  motion,
  useTransform,
  useMotionValue,
  useSpring
} from 'framer-motion'
import { Snowfall } from 'react-snowfall'
import { Controller, useForm } from 'react-hook-form'

function PageHook() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenModel, setIsOpenModel] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0) // going to set this value on mouse move

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isDirty, isValid },
    reset
  } = useForm()

  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  )

  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 20]),
    springConfig
  )

  // const handleMouseMove = event => {
  //   const halfWidth = event.target.offsetWidth / 2
  //   x.set(event.nativeEvent.offsetX - halfWidth) // set the x value, which is then used in transform and rotate
  // }

  const validateEmail = (mail: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailRegex.test(mail)
  }

  const handleOpenModel = () => {
    setIsOpenModel(true)
    setTimeout(() => {
      setIsOpenModel(false)
    }, 4000)
  }

  const onSubmit = async (data: any) => {
    try {
      let res = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(data.email)
      })
      if (res.ok) {
        reset()
        handleOpenModel()
      }

      // if (!res.ok) {
      //   reset()
      //   throw new Error({ message: 'Email already exists' })
      // }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='relative z-50 flex h-full w-full items-center justify-center p-3'>
      <Snowfall
        snowflakeCount={200}
        color='grey'
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: -9
        }}
        speed={[0.5, 0.0]}
        radius={[1, 3]}
      />

      <div className='mt-5'>
        <div className='space-y-4'>
          <div className='space-y-2 text-center'>
            <div className='flex justify-center'>
              <Image
                width={128}
                height={128}
                alt='shake head'
                src={'/img/shake.gif'}
                className='w-32'
              />
            </div>

            <div className='flex items-center justify-center'>
              <span>🔥</span>
              <div className='relative bg-transparent  p-[1px]'>
                <div className='p-2 '>
                  <span className='absolute inset-0 overflow-hidden rounded-3xl px-3'>
                    <motion.span
                      className='absolute aspect-square w-[500%] 
                      bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-20'
                      initial={{
                        rotate: -90
                      }}
                      animate={{
                        rotate: 90
                      }}
                      transition={{
                        duration: 3.8,
                        ease: 'linear',
                        repeat: Infinity,
                        repeatType: 'reverse'
                      }}
                      style={{
                        translateX: '-50%',
                        translateY: '-10%',
                        zIndex: -1
                      }}
                    />
                  </span>
                  <span
                    className='bg-gradient-to-tr from-black to-neutral-600 
                  bg-clip-text text-transparent'
                  >
                    Templates & Resources!
                  </span>
                </div>
              </div>
            </div>

            <h1
              className='mx-auto bg-gradient-to-tr  
            from-black to-neutral-600 bg-clip-text 
            text-3xl font-bold capitalize text-transparent 
            sm:text-5xl md:max-w-2xl lg:max-w-3xl xl:text-6xl/none 
            dark:bg-gradient-to-r dark:from-white dark:to-neutral-800 '
            >
              Join The Waitlist for My Courses Today!
            </h1>
            <p
              className='mx-auto  max-w-[600px] bg-gradient-to-tr 
            from-black to-neutral-600 bg-clip-text text-center 
            text-[16px] leading-7 text-transparent dark:bg-gradient-to-br 
            dark:from-white dark:to-neutral-700 '
            >
              Discover an Array of Incredible Courses and Be Prepared for an
              Exciting Wave of New Resources on the Horizon. Sign up to Our
              Waitlist to be notified when we launch!
            </p>
          </div>

          <div className='w-full   space-y-2 '>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='mx-auto flex max-w-lg flex-col lg:flex-row lg:space-x-2'
            >
              <Controller
                name='email'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <input
                    {...field}
                    type='email'
                    placeholder='Email'
                    className={` flex-1 rounded-lg  border border-neutral-400 bg-opacity-20 py-2.5 pl-5 shadow-md outline-none 
                    
                    placeholder:text-neutral-500   focus-within:border-none focus:border-2 focus:border-neutral-100  dark:border dark:border-white/20 dark:text-white ${
                      isDirty && !isValid
                        ? 'bg-[#f5a524] '
                        : isDirty && isValid
                          ? 'bg-green-500'
                          : ''
                    }`}
                  />
                )}
                rules={{
                  required: 'Email is required!',
                  validate: value =>
                    validateEmail(value) || ' Invalid email format'
                }}
              />

              <button
                disabled={isSubmitting}
                className='font-InterMedium mt-4 flex w-full items-center justify-center gap-x-3 rounded-md border border-b-0 border-l-0  border-r-0 border-t-gray-700 bg-black  bg-gradient-to-tr from-black from-50% via-black/40 via-45%  to-gray-600/40 px-2 py-2.5 text-sm text-gray-200 shadow-md  disabled:cursor-not-allowed lg:mt-0 lg:w-36 dark:text-gray-500 '
                type='submit'
              >
                <TbArrowsJoin2 className='text-[#383127]' />
                {isSubmitting ? (
                  'loading '
                ) : (
                  <span className='shrink-0'>Join Waitlist</span>
                )}
              </button>

              {/* {people.map((testimonial, idx) => (
                <div
                  className=" relative group"
                  key={testimonial.name}
                  onMouseEnter={() => setHoveredIndex(testimonial.id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  

                  <div>
                    <Link href={testimonial.href}>
                      <Image
                        onMouseMove={handleMouseMove}
                        height={100}
                        width={100}
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="object-cover  hidden lg:block rounded-full h-11 w-6  group-hover:scale-105 group-hover:z-30   relative transition duration-500"
                      />
                    </Link>
                  </div>
                </div>
              ))} */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHook
