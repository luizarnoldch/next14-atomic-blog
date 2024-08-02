import Image from 'next/image';
import NextjsIcon from '@/icons/NextJS';
import AWSIcon from '@/icons/AWS';
import Golang from '@/icons/Golang';
import ReactIcon from '@/icons/React';

type Props = {}

const HeroImage = (props: Props) => {
  return (
    <div className="relative size-60 md:size-96 mx-auto mt-20 md:mt-0 z-10">
      <Image
        src="/images/hero.png"
        alt="Reference Image"
        fill
        sizes="auto"
        className="rounded-full object-cover"
        priority
      />
      <div className="absolute size-16 md:size-24 bg-white rounded-full -top-4 -left-4 p-2">
        <Golang className="w-full h-full" />
      </div>
      <div className="absolute size-16 md:size-24 bg-white rounded-full -top-4 -right-4 p-2">
        <AWSIcon className="w-full h-full" />
      </div>
      <div className="absolute size-16 md:size-24 bg-white rounded-full -bottom-4 -left-4 p-2">
        <ReactIcon className="w-full h-full" />
      </div>
      <div className="absolute size-16 md:size-24 bg-white rounded-full -bottom-4 -right-4 p-2">
        <NextjsIcon className="w-full h-full" />
      </div>
    </div>
  );
}

export default HeroImage;
