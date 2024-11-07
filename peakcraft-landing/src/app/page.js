"use client"
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
const smallImage = require('../assets/images/Mountain-Small.png');
import { useRouter } from "next/navigation";


export default function Home() {

  const handleApply = () => {
    window.location.href = 'https://peak-apply.paperform.co/';
  }

  const router = useRouter();

  const projects = [
    {
      id: 1,
      icon: '/images/chatbot.png',
      domain: 'Turing Tribe',
      title: 'Natural Language Processing for Ethiopian Languages',
      description: `This project develops NLP tools for Ethiopian
       languages like Amharic and Afan Oromo, enabling better
        translation, speech recognition, and text processing to
         bridge the digital language gap.`,
      location: '#',
    },
    {
      id: 2,
      icon: '/images/gear.png',
      domain: 'Machine Mavericks',
      title: 'Autonomous Plant Caretaker',
      description: `Meet the Robot Plant Caretaker:
       a simple robot that automates watering,
        monitors soil moisture, and navigates between 
        plants to keep your garden healthy with minimal effort.`,
      location: '#',
    },
    {
      id: 3,
      icon: '/images/lock.png',
      domain: 'Cyber Crew',
      title: 'Phishing Detection tool',
      description: `Introducing the Phishing Detection Tool:
       a smart solution that scans emails and websites
        to identify potential phishing attempts, alerting
         users in real-time to protect against fraud and identity theft.`,
      location: '#',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="h-[100vh] w-full flex flex-col justify-center">
        {/* background */}
        <picture>
          <source media="(max-width: 480px)" srcSet="/images/Mountain-Small.png"/>

          <Image
            src="/images/Mountain.jpg" 
            alt=""
            width={2880} // Set width for large screens
            height={2082} // Set height for large screens
            className="absolute -z-10 top-0 left-0 lgd:-top-24"
          />
        </picture>


        <div className="px-4 flex flex-col items-center  mb-56 mdd:w-[80%] mdd:self-center mdd:mb-0 mdd:mt-60 lgd:w-1/3 lgd:self-start lgd:ml-20 lgd:mt-2">
          {/* Motto */}
          <picture>
            <source media="(max-width: 1024px)" srcSet="/images/Motto.png" />

            <Image
              src="/images/Motto-Large.png" 
              alt=""
              width={1106}
              height={286} 
              className="mb-3"
            />
          </picture>

          <p className="text-center font-poppins font-light px-8 mdd:text-2xl mdd:mt-6 lgd:text-start lgd:px-2 lgd:text-lg lgd:mt-0">Join Hawassa University&apos;s vibrant community,
             where bold ideas spark, 
             teamwork thrives, and we rise together!
          </p>
          <div className="flex w-full justify-evenly absolute bottom-[10%] mdd:relative mdd:bottom-0 mdd:justify-center mdd:space-x-10 mdd:mt-10 lgd:justify-start lgd:mt-3 lgd:space-x-4">
            <button className="bg-accentRed text-lg text-white font-poppins font-semibold w-fit px-14 py-2 rounded-full mdd:text-3xl  mdd:px-20 mdd:py-5 lgd:text-base lgd:px-16 lgd:py-2" onClick={handleApply}>Apply</button>
            <button className="bg-transparen border-white border-2 text-white font-poppins font-semibold w-fit px-10 py-2 rounded-full mdd:text-3xl  mdd:px-14 mdd:py-5 lgd:text-base lgd:min-w-fit lgd:py-2 lgd:px-12" onClick={() => {router.push('About Us')}}>Learn More</button>
          </div>
        </div>

        <div className="">
          <div className="h-2  bg-accentNavy absolute bottom-0 w-full glowNavy"></div>
          <div className="h-2  bg-accentRed absolute bottom-0  w-[90%] glowRed"></div>
          <div className="h-2 bg-accentOrange absolute bottom-0 w-[30%] left-[40%] glowOrange"></div>
          <div className="h-2 bg-accentTeal absolute bottom-0 w-[40%] glowTeal"></div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="h-full mt-20">
        <div className="flex flex-col lgd:flex-row lgd:pl-24 lgd:space-x-32">
          <div className="bg-[url(/images/Earnit.png)] bg-contain bg-no-repeat h-[40%] bg-center flex flex-col justify-center items-center mdd:h-[50%] lgd:bg-cover lgd:w-[30%] lgd:aspect-square">
            <Image alt="" 
              src='/images/crown.gif'
              width={500}
              height={500}
              className="mdd:w-[70%] lgd:w-[100%]"
              />
          </div>

        <div className="px-10 text-center flex flex-col items-center mdd:px-32 lgd:text-start lgd:items-start lgd:w-[50%] lgd:px-0 relative lgd:justify-center">
          <h1 className="font-alata font-semibold text-xl py-5 mdd:text-4xl">Sharpen your skills and ascend the throne of success.</h1>
          <p className="text-sm mdd:text-xl lgd:pr lgd:text-sm font-light lgd:pr-8">
          At Peak Craft, we blend competition with 
          support in a fun, growth-focused environment.
           Join us to hone your skills and rise to the
            top with teams committed to achievements.
             Let’s build your legacy together!
          </p>
          <button onClick={() => {router.push('/LeaderBoard')}} className="w-full py-3 bg-accentOrange rounded-full font-semibold mt-5 flex items-center justify-center space-x-2 mdd:w-3/4 mdd:mt-12 mdd:text-xl mdd:py-6 lgd:w-1/2 lgd:py-3 lgd:text-sm lgd:mt-6">
            <h1>Crown Bearers</h1> 
            <Image alt="" width={50} height={50} className="size-9" src="/images/RightArrow.png"/>
          </button>
        </div>
      </div>
      <div className="h-2 bg-accentOrange w-full glowOrange mt-32"></div>
      </section>

      {/* Domains section */}
      <section className="h-[100vh] flex flex-col justify-center relative items-center  mdd:mt-20 lgd:flex-row lgd:justify-center">
        <div className="px-10 lgd:order-2 lgd:w-full lgd:mr-32 relative">
          {/* <div className="absolute bg-accentTeal top-[40%] left-[40%] -z-10 self-center aspect-square w-32 rounded-full glowTeal"></div> */}
          <Image alt=""
            width={702}
            height={672}  
            src='/images/capsules.png'
          />
        </div>

        <div className="px-10 text-center flex flex-col items-center mdd:px-32 lgd:text-start lgd:items-start lgd:pl-28 lgd:px-0 relative">
          <h1 className="font-alata font-semibold text-xl py-5 mdd:text-4xl">Pick your Domain, Fuel Your Passion!</h1>
          <p className="text-sm mdd:text-xl lgd:pr lgd:text-sm font-light lgd:pr-8">
            Whether it’s  Development, Cybersecurity,
             or Robotics. Explore what excites you by
              joining our specialized domains, dive into
               engaging projects, and grow your skills
                with a supportive community. Let your
                 interests lead the way!
          </p>
          <button onClick={() => {router.push('/Domains')}} className="w-full py-3 bg-accentTeal rounded-full font-semibold mt-5 flex items-center justify-center space-x-2 mdd:w-3/4 mdd:mt-12 mdd:text-xl mdd:py-6 lgd:w-1/2 lgd:py-3 lgd:text-sm lgd:mt-6">
            <h1>Explore Domains</h1> 
            <Image alt="" width={50} height={50} className="size-9" src="/images/RightArrow.png"/>
          </button>
        </div>
        <div className="h-2 bg-accentTeal absolute bottom-0 w-full glowTeal"></div>
      </section>

      {/* Events Section */}
      <section className=" h-[100vh] flex flex-col justify-center relative items-center  mdd:mt-20 lgd:flex-row lgd:justify-center">
        <div className="px-10 lgd:ml-20">
          <Image alt=""
            width={687}
            height={672}  
            src='/images/Disco.png'
          />
        </div>

        <div className="px-10 text-center flex flex-col items-center mdd:px-32 lgd:text-start lgd:items-start lgd:px-0 lgd:ml-10">
          <h1 className="font-alata font-semibold text-xl py-5 mdd:text-4xl">Get in on the Fun with Our <br/> Events!</h1>
          <p className="text-sm px-4 mdd:text-xl lgd:text-sm font-light lgd:px-0 lgd:w-[65%]">
          Experience a blend of thrilling activities and engaging experiences.
           From lively socials to interactive workshops, our events promise a 
           great time and unforgettable moments!
          </p>
          <button onClick={() => {router.push('/Events')}} className="w-full py-3 bg-accentRed rounded-full font-semibold mt-5 flex items-center justify-center space-x-2 mdd:w-3/4 mdd:mt-12 mdd:text-xl mdd:py-6 lgd:w-2/5 lgd:py-3 lgd:text-sm lgd:mt-6">
            <h1>Events Timeline</h1> 
            <Image alt="" width={50} height={50} className="size-9" src="/images/RightArrow.png"/>
          </button>
        </div>
        <div className="h-2 bg-accentRed absolute bottom-0 w-full glowRed"></div>
      </section>



      {/* Projects Section */}
      <section className="flex flex-col items-center mt-20">
        <div className="px-10">
          <Image alt=""
            src='/images/projects.png'
            className="w-[100%]"
            width={600}
            height={225}
          />
          <h1 className="text-2xl font-alata text-center">Take a look at some of our endeavors</h1>
        </div>
        <div className="flex flex-col items-center mt-32 px-16 space-y-32 mdd:flex-row  mdd:space-x-5  lgd:space-x-20 lgd:px-24 mdd:items-center mdd:space-y-0">
          {projects.map((project) => 
            <ProjectCard project={project} key={project.id}/>
          )}
        </div>
        <button onClick={() => {router.push('/Projects')}} className="w-4/5 py-3 bg-accentNavy rounded-full font-semibold mt-12 flex items-center justify-center space-x-2 mdd:w-3/4 mdd:mt-12 mdd:text-xl mdd:py-6 lgd:w-1/5 lgd:py-3 lgd:text-sm lgd:mt-12">
            <h1>More Projects</h1> 
            <Image alt="" width={50} height={50} className="size-9" src="/images/RightArrow.png"/>
        </button>
        <div className="h-2 bg-accentNavy w-full glowNavy mt-32 "></div>
      </section>

      <section className="h-[100vh] flex flex-col justify-center relative items-center  mdd:mt-20 lgd:flex-row lgd:justify-center">
        <div className="pl-10 lgd:order-2 lgd:w-full lgd:mr-32">
          <Image alt=""
            width={702}
            height={672}  
            src='/images/finalCTA.png'
          />
        </div>

        <div className="px-10 text-center flex flex-col items-center mdd:px-32 lgd:text-start lgd:items-start lgd:px-">
          <h1 className="font-alata font-semibold text-xl py-5 mdd:text-4xl">Come alive by joining <br/>
          our club</h1>
          <p className="text-sm mdd:text-xl lgd:pr lgd:text-sm font-light">
          Let go of your zombie like state, shake things up,
           be part of our active community and reach for the
            peaks not 6 feet under. Don’t know what it takes
             to join us? Click below and find out.
          </p>
          <button onClick={() => {router.push('/Criteria')}} className="w-full py-3 bg-[#818282] rounded-full font-semibold mt-5 flex items-center justify-center space-x-2 mdd:w-3/4 mdd:mt-12 mdd:text-xl mdd:py-6 lgd:w-1/2 lgd:py-3 lgd:text-sm lgd:mt-6">
            <h1>Members&apos; Criteria</h1> 
            <Image alt="" width={50} height={50} className="size-9" src="/images/RightArrow.png"/>
          </button>
        </div>
      </section>

    </div>
  );
}
