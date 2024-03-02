'use client';
import Brain from '../components/Brain';
import { useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

function Experience() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0.3, 1], ['50%', '0%']);
  return (
    <section className="mx-auto max-w-screen-xl mb-24">
      {/* <div className=" mx-auto text-center px-5 h-screen">
        <h2 className=" text-2xl  sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wide text-gray-900">
          My personal <span className=" text-blue-600">experiences</span>.
        </h2>
        <p className="mt-4 text-gray-600 text-md sm:text-lg">
          Explore my portfolio where I&apos;ve translated ideas into engaging digital experiences.{' '}
        </p>
      </div> */}
    </section>
  );
}

export default Experience;
