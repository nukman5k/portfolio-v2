import Image from "next/image";

const DevImg = ({ containerStyles, imgStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="developer" className={`${imgStyles}`} />
    </div>
  )
}

export default DevImg