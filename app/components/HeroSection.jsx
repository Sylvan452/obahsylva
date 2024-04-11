"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from "react-type-animation";


function HeroSection() {

  const handleDownloadCV = () => {
    const cvUrl = 'https://drive.google.com/file/d/1OVq3HqGYLDuGqu2hywn1KzTWNdjqjiZs/view?usp=sharing';
    window.open(cvUrl, '_blank');
  };
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left justify-self-start'>
          <h1 className='text-white mb-4 text-4xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-800'>Hello, I&apos;m{" "}</span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Sylva",
                1000,
                "Web Developer",
                1000,
                "Data Analyst",
                1000,
                "AI Engineer",
                1000,
                "Web3 Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xlg'>
            A Full Stack Software Engineer, who transitioned
            from journalism into the tech realm with
            hands-on experience in developing and
            maintaining robust web applications that
            leverage cutting-edge technologies to drive
            innovation in solving complex business
            problems.
            </p>
            <div>
              <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-pink-500 hover:bg-slate-200 text-black'>
              <a href="#contact">
                Hire ME</a>
                </button>
              <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 to-pink-500 hover:bg-slate-800 text-white mt-3' onClick={handleDownloadCV}>
                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                  Download CV
                  </span>
                </button>

            </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image
              src='/avatar.png'
              alt='hero-image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
