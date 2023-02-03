import Head from 'next/head'
import {BsFillMoonStarsFill, BsTypeUnderline} from 'react-icons/bs'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {ImProfile} from 'react-icons/im'
import { useState } from 'react'
import Image from 'next/image'
import michael from '../public/michael.jpg'

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
    <div className={darkMode ? "dark" : ""}>
    
      <Head>
        <title>Michael Bosciglio Portfolio</title>
      </Head>

      <main className='px-10 text-black bg-gray-200 font-mukta dark:bg-gray-800 dark:text-white'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl text-black dark:text-white'></h1>
            <ul className='flex items-center'>
              <li>
              <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-6xl py-2 font-medium'>Michael Bosciglio</h2>
            <h3 className='text-2xl py-2 font-medium'>Software Developer</h3>
            <p className='leading-2'>
              I am a software developer with a passion for creating and designing.
            </p>
            <p>
              Here you will find my projects and resume.
            </p>
          </div>

          <div className='flex justify-center pb-10 rounded'>
            <Image src={michael}/>
          </div>

          <div className='text-5xl flex justify-center gap-12 py-2'>
            <AiFillGithub 
            className='cursor-pointer' 
            type="button"
            onClick={() => {
              window.open("https://github.com/MichaelBosciglio", "_blank");
            }}
            />

            <ImProfile 
            className='cursor-pointer object-contain w-10 h-12'
            type="button"
            onClick={() => {
              window.open("my-resume.pdf", "_blank");
            }}
            />

            <AiFillLinkedin 
            className='cursor-pointer' 
            type="button"
            onClick={() => {
              window.open("https://www.linkedin.com/in/michael-bosciglio-594705197/", "_blank");
            }}
            />
          </div>
        </section>
        </main>
    </div>
    </>
  )
}
