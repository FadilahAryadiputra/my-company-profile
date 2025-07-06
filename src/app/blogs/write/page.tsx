import FormWrite from './_components/FormWrite'

export default function Home() {
  return (
    <main>
      <section className='bg-second min-h-[calc(100vh-80px-297px)] w-full'>
        <div className='container mx-auto p-4 text-white'>
          <div className='flex flex-col items-center my-16 gap-12 p-4 mx-0 lg:mx-20'>
            <div className='bg-gray-300 w-full flex flex-col gap-3 md:gap-6 justify-center items-center py-6 md:py-8 rounded-2xl'>
              <div className='text-black font-bold text-lg md:text-2xl mx-4 text-center text-shadow-md text-shadow-gray-400'>
                What&apos;s on your mind?
              </div>
            </div>
            <div className='w-full px-24'>
              <FormWrite />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
