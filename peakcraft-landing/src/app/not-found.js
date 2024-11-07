"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    const handleHome = () => {
        router.push('/');
    }
    return (
    <div className="flex justify-center pt-32 pb-12">
         <div className="lgd:w-1/3 text-center ">
            <Image width={2944} height={1738} src={'/images/404message.png'}/>
            <div className="flex justify-center">
            <button className="w-[80%] py-3 bg-accentOrange rounded-full font-semibold mt-5 flex items-center justify-center space-x-2 mdd:w-3/4 mdd:mt-12 mdd:text-xl mdd:py-6 lgd:w-1/2 lgd:py-3 lgd:text-sm lgd:mt-6" onClick={handleHome}>
                <h1>Return Home</h1>
                <Image alt="" width={50} height={50} className="size-9" src="/images/RightArrow.png"/>
            </button>
            </div>
        </div>
    </div>
    );
  }