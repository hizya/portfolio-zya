import Image from 'next/image';
import { RoughNotation } from 'react-rough-notation';

const skills = [
  {
    name: 'Javascript',
    color: '#fef9c3',
    img: '/tech/javascript.png',
  },
  {
    name: 'HTML5',
    color: '#ffedd5',
    img: '/tech/html.png',
  },
  {
    name: 'CSS3',
    color: '#e0f2fe',
    img: '/tech/css.png',
  },
  {
    name: 'React JS',
    color: '#ecfeff',
    img: '/tech/reactjs.png',
  },
  {
    name: 'Redux',
    color: '#f0e8fb',
    img: '/tech/redux.png',
  },
  {
    name: 'Typescript',
    color: '#e0f2fe',
    img: '/tech/typescript.png',
  },
  {
    name: 'Git',
    color: '#ffedd5',
    img: '/tech/git.png',
  },
  {
    name: 'Three JS',
    color: '#f4f4f5',
    img: '/tech/threejs.svg',
  },
  {
    name: 'Next JS',
    color: '#f1f5f9',
    img: '/tech/next.svg',
  },
];
function ValueProject() {
  return (
    <section className="relative isolate">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className=" w-full px-10 ">
        <div className="mx-auto max-w-xl mt-16 sm:mt-24">
          <div className=" w-full ring-1 h-full ring-inset ring-gray-900/10 p-2 bg-gray-900/5 lg:p-4 lg:rounded-2xl rounded-md">
            <div className=" w-full  h-full gap-10 rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10">
              <div>
                <p className=" text-center p-4 font-semibold text-lg uppercase text-gray-700">
                  <RoughNotation
                    color="orange"
                    type="underline"
                    show={true}
                    padding={[2, 2]}
                  >
                    <span className=" p-2 ">My Skills</span>
                  </RoughNotation>
                </p>
                <ul className="p-2.5 grid grid-cols-3 grid-rows-3 items-center justify-center">
                  {skills.map((skill, index) => {
                    return (
                      <li
                        key={index}
                        className=" p-4 max-w-28 space-y-3 mx-auto"
                      >
                        <div
                          className=" rounded-full flex flex-col items-center p-2.5 w-full xs:p-3.5"
                          style={{
                            backgroundColor: `${skill.color}`,
                          }}
                        >
                          <Image
                            src={skill.img}
                            alt="skill"
                            width={240}
                            height={240}
                            quality={100}
                            className=" object-cover min-w-4"
                          />
                        </div>
                        <p className=" text-center text-gray-500 text-xs">
                          {skill.name}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <p className=" text-center p-4 font-semibold text-lg uppercase text-gray-700">
                  <RoughNotation
                    color="#fca5a5"
                    type="highlight"
                    show={true}
                    padding={[2, 2]}
                  >
                    <span className=" p-2 uppercase">about me</span>
                  </RoughNotation>
                </p>
                <p className="px-6 py-4 text-gray-600 leading-9 text-sm xs:text-base xs:leading-10">
                  I am a seasoned{' '}
                  <RoughNotation
                    color="#fde68a"
                    type="highlight"
                    show={true}
                  >
                    full-stack
                  </RoughNotation>{' '}
                  developer boasting a rich background of
                  <RoughNotation
                    color="#fca5a5"
                    type="underline"
                    show={true}
                  >
                    {' '}
                    two{' '}
                  </RoughNotation>
                  years in the field. My passion lies in the creation of{' '}
                  <RoughNotation
                    color="red"
                    type="box"
                    show={true}
                  >
                    dynamic
                  </RoughNotation>{' '}
                  and{' '}
                  <RoughNotation
                    color="#2d64eb"
                    type="box"
                    show={true}
                  >
                    engaging
                  </RoughNotation>{' '}
                  websites and applications. I specialize in utilizing
                  cutting-edge technologies, with a primary focus on
                  <RoughNotation
                    color="#2d64eb"
                    type="underline"
                    show={true}
                  >
                    <span> React (Next.js)</span>
                  </RoughNotation>
                  and{' '}
                  <RoughNotation
                    color="#2d64eb"
                    type="underline"
                    show={true}
                  >
                    <span>WordPress.</span>
                  </RoughNotation>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </section>
  );
}

export default ValueProject;
