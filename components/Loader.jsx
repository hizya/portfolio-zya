import Image from 'next/image'

function Loader({ setLoading }) {
  return (
    <div className=" relative h-full w-full">
      <div className=" absolute w-20 h-20">
        <Image fill src={'/images/image-1.jpg'} alt="image" />
      </div>
      <div className=" absolute">
        <Image fill src={'/images/image-2.jpg'} alt="image" />
      </div>
      <Image
        src={'/dashboard-preview.jpg'}
        alt="image"
        width={400}
        height={300}
        className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className=" absolute w-20 h-20">
        <Image fill src={'/images/image-4.jpg'} alt="image" />
      </div>
      <div className=" absolute w-20 h-20">
        <Image fill src={'/images/image-5.jpg'} alt="image" />
      </div>
    </div>
  )
}

export default Loader
