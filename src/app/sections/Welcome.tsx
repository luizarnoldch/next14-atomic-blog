import HeroTitle from '../_components/HeroTitle';
import HeroImage from '../_components/HeroImage';

type Props = {};

const Welcome = (props: Props) => {
  return (
    <section className='h-dvh flex items-center justify-center pt-16 w-full'>
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-around p-6'>
        <div className='flex flex-col w-full md:w-1/2 lg:w-2/5 h-full md:h-4/5 my-auto'>
          <HeroTitle />
        </div>
        <div className='w-full md:w-1/2 lg:w-2/5 mt-8 md:mt-0'>
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
