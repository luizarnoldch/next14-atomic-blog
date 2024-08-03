import HeroTitle from '../_components/HeroTitle';
import HeroImage from '../_components/HeroImage';

type Props = {};

const Welcome = (props: Props) => {
  return (
    <section className='h-dvh flex flex-col items-center justify-center pt-32 md:pt-8 w-full'>
      <div className='container mx-auto md:my-0 text-center'>
        <h1 className=' md:mb-16'> Bienvenido al Blog de Atomic</h1>
      </div>
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
