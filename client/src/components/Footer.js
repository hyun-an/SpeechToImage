const Footer = () => {
  return (
    <div className='h-20 text-center flex flex-col justify-center items-center'>
      <div className='text-2xl'>
        &copy;UCI AI Creative Labs, {new Date().getFullYear()}
      </div>
      <div>
        Made with care by{' '}
        <code>Ariel Han, Ray An, Ulia Zaman, and Jasmine Jeong.</code>
      </div>
    </div>
  )
}

export default Footer
