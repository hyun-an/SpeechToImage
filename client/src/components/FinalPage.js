const FinalPage = ({ listOfLinks, listOfText }) => {
  return (
    <div className='h-screen'>
      <h1 className='text-5xl font-light text-center mb-10'>
        Your Story Has Been Created!
      </h1>
      <div className='grid grid-cols-2'>
        <div id='story text' className='flex justify-center items-center'>
          <div>
            {listOfText.map((item, index) => (
              <p key={index} className='text-[28px] p-4'>
                {item}
              </p>
            ))}
          </div>
        </div>
        <div id='images' className='flex justify-center items-center'>
          <div className='space-y-5'>
            <div className='flex space-x-5'>
              <img src={listOfLinks[0]} alt='img' height={320} width={320} />
              <img src={listOfLinks[1]} alt='img' height={320} width={320} />
            </div>
            <div className='flex space-x-5'>
              <img src={listOfLinks[2]} alt='img' height={320} width={320} />
              <img src={listOfLinks[3]} alt='img' height={320} width={320} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinalPage
