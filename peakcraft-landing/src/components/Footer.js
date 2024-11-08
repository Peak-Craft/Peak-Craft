import Image from 'next/image';

const Footer = () => {
    return (
        <div className='w-full bg-[url(/images/Footerbg-small.png)] mdd:bg-[url(/images/Footerbg.png)] bg-no-repeat bg-cover pb-5'>
 
          
          <div className='px-12 py-20'>
            <div className='w-full text-white flex flex-col items-center mdd:flex-row mdd:justify-around'>
                <div>
                  <div>
                      <div className='mb-6'>
                        <h1 className='text-4xl font-alata mb-1 text-center'>Still Got Questions?</h1>
                        <p className='text-center mdd:text-start'>Send it here and we&apos;ll reply</p>
                      </div>
                      <div className='border-white border-[1px] rounded w-full aspect-video p-5 relative mb-8'>
                         <textarea 
                           placeholder='Your message'
                           className='bg-transparent no-resize focus:outline-none w-full'
                        />
                        <button>
                            <Image alt='' height={30} width={30} className='absolute bottom-3 right-3' src='/images/send.png'/>
                        </button>
                      </div>
                  </div>
              </div>
              <div className='mdd:self-end mdd:space-y-6'>
                <div className='mb-8'>
                  <h1 className='font-semibold text-center mb-2'>Our Socials</h1>
                  <div className='flex space-x-4'>
                    <a href='https://t.me/PeakCraftCommunity'>
                      <Image alt='' width={40} height={40} src='/images/Telegram.png'/>
                    </a> 
                    <a href='https://www.linkedin.com/company/peak-craft-club'>
                      <Image alt='' width={40} height={40} src='/images/LinkedIn.png'/>
                    </a>
                    <a href='https://github.com/Peak-Craft'>
                      <Image alt='' width={40} height={40} src='/images/GitHub.png'/>
                    </a>
                    <a href='informaticsclub@hu.edu.et'>
                      <Image alt='' width={40} height={40} src='/images/Post.png'/>
                    </a>
                  </div>
                </div>
                <div className='flex flex-col items-center space-y-2 mb-6'>
                    <Image alt='' width={50} height={50} src='/images/hulogo.png'/>
                    <h1 className='font-light'>Entity of Hawassa University</h1>
                </div>
              </div>
              <div>
                <div className='flex flex-col items-center'>
                  <Image alt='' width={332} height={160} className='w-32 h-auto' src='/images/logo+text.png'/>
                  <h1>Reach Peaks Upon Peaks!</h1>
                </div>
                <div className=' flex flex-col items-center mt-5'>
                  <h1 className='leading-8'>Hawassa, Ethiopia,</h1>
                  <h1 className='leading-8'>Hawassa University,</h1>
                  <h1 className='leading-8'>Institute of Technology Campus</h1>
                  <h1 className='leading-8'>Faculty Head: +251922106610</h1>
                  <h1 className='leading-8'>Club President: +251911367837</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center text-sm font-light'>
            <h1>Peak Craft Entity of Hawassa University</h1>
            <h1>2024 All rights reserved </h1>
          </div>
        </div>
    )
}

export default Footer;
