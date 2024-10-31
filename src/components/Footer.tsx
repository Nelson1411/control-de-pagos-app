function Footer() {
  return (
    <>
        <footer className='absolute bottom-0 pb-5 md:pl-52 w-full'>
          <div className='flex justify-center items-center'>
            <h3 className='font-paragraph text-md md:text-lg'>
              Proyecto creado por
              <a
                href="https://github.com/NelsonDev1411"
                className='text-[#7f5af0] pl-1'
                target='_blank'
                rel='noreferrer'
              >
                @NelsonDev1411
              </a>
            </h3>
          </div>
        </footer>
    </>
  )
}

export default Footer