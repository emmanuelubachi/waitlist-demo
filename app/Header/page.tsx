'use client'

import { useTheme } from 'next-themes'
import Link from 'next/link'
import React, { useState } from 'react'

import {
  PiTwitterLogoThin,
  PiInstagramLogoThin,
  PiGithubLogoThin
} from 'react-icons/pi'

import { twMerge } from 'tailwind-merge'

let Icons = [
  { name: <PiTwitterLogoThin />, href: 'http://twitter.com/manuel' },
  { name: <PiInstagramLogoThin />, href: 'https://instagram.co/manuelubachi' },
  { name: <PiGithubLogoThin />, href: 'https://github.com/emmanuelubachi' }
]

export default function Headpage() {
  // const [checked, setChecked] = useState(false)

  return (
    <div className='mx-auto mt-11 flex max-w-lg justify-between px-9 md:max-w-lg md:px-8 lg:mt-16'>
      <div className='flex items-center gap-x-3'>
        {/* <Switch checked={checked} setChecked={setChecked} /> */}
        <p className='hidden text-sm text-black md:block'>
          Download a Template
        </p>
      </div>
      {/* Map Through the icons*/}
      <div className='flex gap-x-6'>
        {Icons.map((each, index) => (
          <div key={index}>
            <Link href={each.href}>{each.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

// const Switch = ({ checked, setChecked }) => {
//   let { resolvedTheme, setTheme } = useTheme()
//   let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

//   let toggleTheme = e => {
//     setChecked(e.target.checked)
//     setTheme(otherTheme)
//   }

//   return (
//     <form className='itm flex space-x-4'>
//       <label
//         htmlFor='checkbox'
//         className={twMerge(
//           'relative flex h-7 w-[60pc] cursor-pointer items-center rounded-full border border-transparent ps-1 shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] transition duration-200',
//           checked ? 'bg-cyan-500' : 'border-slate-800 bg-[#07070A]'
//         )}
//       >
//         <div
//           className={twMerge(
//             'z-10 block h-[20px] rounded-full bg-white shadow-md'
//           )}
//         ></div>
//         <input
//           type='checkbox'
//           checked={checked}
//           onChange={toggleTheme}
//           className='hidden'
//           id='checkbox'
//         />
//       </label>
//     </form>
//   )
// }
