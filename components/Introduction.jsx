import Link from 'next/link';
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import { ArrowRight, ArrowUpRightFromSquare } from 'lucide-react';
import { buttonVariants } from './ui/button';
import Phone from '../components/Phone';
import Image from 'next/image';
import { RoughNotation } from 'react-rough-notation';

function Introduction() {
  return (
    <MaxWidthWrapper className=" mb-12 mt-15 sm:mt-20 lg:mt-36 flex justify-between items-center flex-col sm:flex-row gap-10">
      <div className=" sm:hidden ring-1 ring-inset ring-gray-900/10 p-2 bg-gray-900/5 rounded-md">
        <div className=" w-44">
          <Image
            src={'/images/main_photo.png'}
            alt="people"
            width={522}
            height={703}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col lg:gap-12 grow h-full justify-between items-center sm:items-start text-center sm:text-left">
        <div className=" h-full flex flex-col items-center sm:block">
          <div className=" bg-white max-w-fit backdrop-blur rounded-full transition-all px-7 py-2 shadow-md border border-gray-200 hover:border-gray-300 hover:bg-white/50 cursor-default">
            <p className=" text-sm font-semibold text-gray-700">
              Hi, I&apos;m Leon! A front-end developer
            </p>
          </div>
          <h1 className=" max-w-4xl text-3xl md:text-4xl lg:text-5xl xl:text-6xl  font-bold mt-10">
            Let&apos;s Bring Your{' '}
            <RoughNotation
              color="#2d64eb"
              type="highlight"
              show={true}
              padding={[2, 2]}
            >
              <span className=" text-white">
                Ideas
                <br />
              </span>{' '}
            </RoughNotation>
            <span className=" block mt-3.5">
              to
              <RoughNotation
                type="underline"
                show={true}
                color="#2d64eb"
              >
                <span> Life Together!</span>
              </RoughNotation>
            </span>
          </h1>
          <p className=" text-zinc-500 hidden sm:block max-w-prose sm:text-md lg:text-lg mt-5">
            I&apos;m a full-stack developer with 2 years of experience. I enjoy
            building sites & apps. My focus are React (Next.js) and WorldPress.
          </p>
        </div>
        <div className=" flex tracking-wide gap-12 text-xs xs:text-sm md:gap-16 lg:gap-20 md:text-base items-center mt-10">
          <Link
            href={'/'}
            target="_blank"
            className=" bg-primary inline-flex items-center gap-3 text-blue-50 p-3 font-semibold rounded-lg"
          >
            Contact Me
            <ArrowRight />
          </Link>
          <Link
            href={'/'}
            target="_blank"
            className=" border-2 border-blue-600 inline-flex items-center gap-3 text-blue-600 p-3 font-semibold rounded-lg"
          >
            My Resume
            <ArrowUpRightFromSquare />
          </Link>
        </div>
      </div>

      <div className="hidden sm:block ring-1 ring-inset ring-gray-900/10 p-2 bg-gray-900/5 lg:p-3.5 rounded-md">
        <div className="w-[25dvh]">
          <Image
            width={522}
            height={703}
            src={'/images/main_photo.png'}
            alt="people"
            className=" object-cover"
          />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Introduction;
