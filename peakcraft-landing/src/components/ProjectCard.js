import Image from 'next/image';

const ProjectCard = ({project}) => {
    return (
        <div className='bg-background px-12 pt-24 flex flex-col  items-center rounded-[14px] text-center aspect-[3/5] relative shadow-3xl mdd:pt-20'>
            <Image 
              src={project.icon}
              width={300}
              height={300}
              className=' w-[50%] h-auto absolute -top-20'
            />
            <div className='text-center flex flex-col items-center h-full space-y-4'>
                <h2 className='text-sm'>From {project.domain}</h2>
                <h1 className='text-xl'>{project.title}</h1>
                <p className='text-sm font-light'>{project.description}</p>
                <a href={project.location} className='absolute bottom-8 right-12 font-semibold text-sm'>See More</a>
            </div>
        </div>
    )
}

export default ProjectCard;