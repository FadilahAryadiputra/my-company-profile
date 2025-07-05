import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className='bg-second px-24'>
      <div className='container mx-auto flex flex-col justify-between gap-2 p-4 text-white'>
        <div className='xs:grid-cols-2 mt-2 grid grid-cols-1 gap-4 xl:gap-16 text-sm md:grid-cols-4'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-2 items-center'>
              <div className='bg-white rounded-full size-6'></div>
              <div className='font-bold text-2xl'>ARIA</div>
            </div>
            <div>
              We&apos;re a team of strategic creator and digital innovator,
              united focus in out pursuit of mastery and joyful.
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-base font-bold">Pages</div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog List</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-base font-bold">Utility Pages</div>
            <ul>
              <li>Style Guide</li>
                <li>Instruction</li>
                <li>License</li>
                <li>Changelog</li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='text-base font-bold'>Subscribe</div>
            <div>
              <form action="">
                <div className="relative flex flex-col gap-2">
                  <Input type="email" placeholder="Email" className="bg-white text-black p-2 lg:p-6 rounded-l-full rounded-r-full"/>
                  <Button type="submit" className="hidden lg:block absolute top-2 right-2 hover:bg-neutral-600 rounded-l-full rounded-r-full">
                    Subscribe
                  </Button>
                  <Button type="submit" className="block lg:hidden hover:bg-neutral-600 rounded-l-full rounded-r-full">
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='relative flex w-full items-center py-2'>
          <div className='flex-grow border-t-1 border-white'></div>
        </div>
        <div className='flex flex-row items-center justify-center gap-2'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full border-2 border-white'>
            <span className='font-bold text-white'>FA</span>
          </div>
          <div className='flex flex-col justify-center text-xs'>
            <div>@ 2025 Fadilah Aryadiputra</div>
            <div>Based in Indonesia</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
