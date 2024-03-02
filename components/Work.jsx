import { useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'React Commerce',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi.',
    img: `/images/project_1.jpeg`,
    link: 'https://lama.dev',
    skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    color: '#BBACAF',
  },
  {
    id: 2,
    title: 'Next.js Medium Blog',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi.',
    // img: 'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    img: `/images/project_1.jpeg`,
    link: 'https://lama.dev',
    skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    color: '#977F6D',
  },
  {
    id: 3,
    title: 'Vanilla Book App',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi.',
    // img: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    img: `/images/project_1.jpeg`,
    link: 'https://lama.dev',
    skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    color: '#C2491D',
  },
  {
    id: 4,
    title: 'Spotify Music App',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi.',
    // img: 'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    img: `/images/project_1.jpeg`,
    link: 'https://lama.dev',
    skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    color: '#88A28D',
  },
];

const MyWorks = ({ item, index, targetScale, range, progress }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div
      ref={ref}
      className=" sticky overflow-hidden px-6 top-0 h-[100dvh] pt-20"
      style={{ scale }}
    >
      <motion.div
        className="ring-1 ring-inset relative md:rounded-xl ring-gray-900/10 p-2 md:p-3 bg-gray-900/5 rounded-md max-w-6xl mx-auto "
        style={{
          top: `calc(${index * 35}px)`,
          // opacity: scrollYProgress,
        }}
      >
        <div className=" bg-white md:px-6 overflow-hidden md:justify-between flex flex-col gap-8 sm:gap-10 md:gap-2 lg:gap-10 justify-center items-center rounded-md h-[36rem] md:flex-row py-5 md:py-10 lg:py-18 md:rounded-xl md:items-start w-full">
          <div className=" w-full md:flex md:flex-col px-8 md:px-0  sm:text-left sm:gap-4 md:py-8 md:h-full">
            <h4 className=" text-xl sm:text-2xl font-bold mb-1.5 md:mb-0">
              {item.title}
            </h4>
            <p className=" max-w-[32rem] font-semibold text-sm md:text-lg text-gray-600">
              {item.desc}
            </p>
            <div className=" flex gap-3 mt-6 flex-wrap cursor-default">
              {item.skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className=" shadow-lg border-2 border-black py-1.5 rounded p-2  text-xs sm:text-sm bg-black text-white hover:bg-white hover:text-black transition-all font-semibold"
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
            <div className=" mt-10 gap-10 hidden md:flex md:items-center md:mt-auto">
              <a
                href={item.link}
                className=" rounded-md text-sm text-blue-100 md:text-base md:py-2 md:px-3 font-semibold tracking-wide p-2 bg-blue-600 shadow-xl"
              >
                Go to Site
              </a>
              <a
                href={item.link}
                className=" inline-flex text-md items-center font-semibold"
              >
                Github Repository
                <ArrowRight className=" w-6 ml-1.5" />
              </a>
            </div>
          </div>
          <motion.div className="  w-3/4 sm:w-5/6 md:w-full md:rounded-xl relative h-full rounded-lg overflow-hidden flex">
            {/* <motion.img style={{ scale: imageScale }} src={item.img} alt="img" className="w-full h-full object-cover" /> */}
            <Image
              src={item.img}
              alt="img"
              fill
              style={{ scale: imageScale }}
              objectFit="cover"
            />
          </motion.div>
          <div className=" flex w-full px-8 items-center justify-between md:hidden ">
            <a
              href={item.link}
              className=" rounded-md font-semibold text-blue-100 tracking-wide p-2 bg-blue-600 shadow-xl text-md"
            >
              Go to Site
            </a>
            <a
              href={item.link}
              className=" inline-flex text-gray-700"
            >
              Github Repository
              <ArrowRight className=" w-6 ml-1.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

function Work() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section className="mx-auto max-w-screen-xl mt-32 sm:mt-56 mb-24">
      <div className=" mx-auto sm:text-left px-5">
        <p className=" text-sm text-gray-600 mb-2">My Work</p>
        <h2 className=" text-2xl  sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wide text-gray-900">
          My <span className=" text-blue-600">Outstanding </span>
          Work
        </h2>
        <p className="mt-4 text-gray-600 text-md sm:text-lg">
          Explore my portfolio where I&apos;ve translated ideas into engaging
          digital experiences.{' '}
        </p>
      </div>
      <div ref={container}>
        {projects.map((item, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;
          return (
            <MyWorks
              item={item}
              index={index}
              key={index}
              targetScale={targetScale}
              range={[index * 0.25, 1]}
              progress={scrollYProgress}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Work;
