import { useEffect, useState } from 'react'
import './App.css'
import { Microphone } from 'phosphor-react'
import axios from 'axios'
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition'
import Navbar from './components/Navbar'
import FinalPage from './components/FinalPage'
import Footer from './components/Footer'

function App() {
  const [imageLink1, setImageLink1] = useState(
    'https://replicate.com/api/models/borisdayma/dalle-mini/files/7f987d1c-a6c2-4236-a761-6b3b685385d4/output_0.png'
  )
  const [imageLink2, setImageLink2] = useState(
    'https://replicate.com/api/models/borisdayma/dalle-mini/files/7f987d1c-a6c2-4236-a761-6b3b685385d4/output_0.png'
  )
  const [imageLink3, setImageLink3] = useState(
    'https://replicate.com/api/models/borisdayma/dalle-mini/files/7f987d1c-a6c2-4236-a761-6b3b685385d4/output_0.png'
  )
  const [imageLink4, setImageLink4] = useState(
    'https://replicate.com/api/models/borisdayma/dalle-mini/files/7f987d1c-a6c2-4236-a761-6b3b685385d4/output_0.png'
  )

  let listOfLinks = [
    'https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://replicate.com/api/models/borisdayma/dalle-mini/files/7f987d1c-a6c2-4236-a761-6b3b685385d4/output_0.png',
    'https://replicate.com/api/models/borisdayma/dalle-mini/files/7f987d1c-a6c2-4236-a761-6b3b685385d4/output_0.png',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
  ]

  let listOfText = ['Sentence 1', 'Sentence 2', 'Sentence 3', 'Sentence 4']

  const makePostRequest = async (path, queryObj, loc) => {
    axios.post(path, queryObj).then(res => {
      let result = res.data
      let imglink = result.output_link
      setImageLink1(imglink.image)
    })
  }

  const replaceAllN = (text, number) => {
    let replaceText = text
    console.log(replaceText.includes('\n'))
    console.log(number)
  }

  let queryObj = null
  const handleClick = n => {
    let stringQuery = document.getElementById(`text_${n}`)?.innerText
    let numberQuery = document.getElementById(`queryText${n}`).value
    let count = (stringQuery.match(/\n/g) || []).length
    console.log(count)

    queryObj = { queryText: stringQuery }
    console.log('test log')
    //makePostRequest('/getimg', queryObj, n)
  }

  const [active, setActive] = useState(false)
  const handleStorifyButton = () => {
    setActive(!active)
  }

  const [data, setdata] = useState({
    result: 'API is not working properly'
  })

  useEffect(() => {
    fetch('/data').then(res =>
      res.json().then(data => {
        setdata({
          result: data.result
        })
      })
    )
  }, [])

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition()

  const SpecialInp = ({ typeOfInput, n }) => {
    return (
      <span className='inline-block pl-3 pr-3'>
        <div className='flex items-center border-2 border-gray-600 p-1 leading-3 rounded-xl'>
          <input
            className='border-dashed min-w-[80px] max-w-[120px] outline-none text-[28px]'
            type='text'
            id={`queryText${n}`}
            name='queryText'
            placeholder={`queryText${n}`}
          />
          <Microphone
            onClick={
              listening
                ? SpeechRecognition.stopListening
                : SpeechRecognition.startListening
            }
          />
        </div>
      </span>
    )
  }

  return (
    <div className=''>
      <Navbar apiStatus={data.result} />
      <div id='1' className='grid grid-cols-2'>
        {/*First oanel*/}
        <div className='2 h-screen flex items-center'>
          <div>
            <div className='text-[28px]'>
              <p id='text_1' className='leading-[4rem] pl-3'>
                {/*This is where a sentence will be made*/}
                One day, the mermaid
                <SpecialInp n={1} typeOfInput={'Noun'} />
                was swimming when she saw a mysterious cave
                {/*This is where a sentence will be ended*/}.
              </p>
            </div>
            <div className='flex justify-center pt-10'>
              <button
                className='text-[28px] pl-1 pr-1 hover:bg-green-200 border-2 rounded-lg border-gray-700'
                onClick={() => handleClick(1)}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
        <div id='image side' className='flex justify-center items-center'>
          <img
            className='rounded-lg'
            src={imageLink1}
            alt={imageLink1}
            width={384}
            height={384}
          />
        </div>
        {/*Second oanel*/}
        <div id='2' className='2 h-screen flex items-center'>
          <div>
            <div className='text-[28px]'>
              <p id='text_2' className='leading-[4rem] pl-3'>
                {/*This is where a sentence will be made*/}
                She decided to go investigate. Mermaid
                <SpecialInp typeOfInput={'Adverb'} />
                swam
                <SpecialInp typeOfInput={'Adverb'} />
                towards the entrance of the cave.
                {/*This is where a sentence will be ended*/}.
              </p>
            </div>
            <div className='flex justify-center pt-10'>
              <button
                className='text-[28px] pl-1 pr-1 hover:bg-green-200 border-2 rounded-lg border-gray-700'
                onClick={handleClick}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
        <div id='image side' className='flex justify-center items-center'>
          <img
            className='rounded-lg'
            src={imageLink2}
            alt={imageLink2}
            width={384}
            height={384}
          />
        </div>
        {/*Third oanel*/}
        <div id='3' className='2 h-screen flex items-center'>
          <div>
            <div className='text-[28px]'>
              <p id='' className='leading-[4rem] pl-3'>
                {/*This is where a sentence will be made*/}
                The cave was mostly dark, but inside it she saw something
                <SpecialInp typeOfInput={'Adjective'} />
                {/*This is where a sentence will be ended*/}.
              </p>
            </div>
            <div className='flex justify-center pt-10'>
              <button
                className='text-[28px] pl-1 pr-1 hover:bg-green-200 border-2 rounded-lg border-gray-700'
                onClick={handleClick}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
        <div id='image side' className='flex justify-center items-center'>
          <img
            className='rounded-lg'
            src={imageLink3}
            alt={imageLink3}
            width={384}
            height={384}
          />
        </div>
        {/*Fourth oanel*/}
        <div id='3' className='2 h-screen flex items-center'>
          <div>
            <div className='text-[28px]'>
              {/*This is where a sentence will be made*/}
              <div className='leading-[4rem] pl-3'>
                <p id='text_3'>
                  The cave was mostly dark, but inside it she saw something
                  <SpecialInp id='inp' n={3} typeOfInput={'Adjective'} />
                </p>
              </div>
              {/*This is where a sentence will be ended*/}
            </div>
            <div className='flex justify-center pt-10'>
              <button
                className='text-[28px] pl-1 pr-1 hover:bg-green-200 border-2 rounded-lg border-gray-700'
                onClick={() => handleClick(3)}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
        <div id='image side' className='flex justify-center items-center'>
          <img
            className='rounded-lg'
            src={imageLink4}
            alt={imageLink4}
            width={384}
            height={384}
          />
        </div>
      </div>
      <a href='#result' className='flex justify-center'>
        <button
          className='text-4xl rounded-xl hover:border-[4px] border-white bg-gradient-to-r p-2 from-[#7928ca] to-[#ff0080] transition-all duration-300 hover:from-[#ff0080] hover:to-[#5451ff]'
          onClick={handleStorifyButton}
        >
          Storify!
        </button>
      </a>
      <div id='result' className='h-[3.5rem]'></div>
      {active ? (
        <FinalPage
          id='result'
          listOfLinks={listOfLinks}
          listOfText={listOfText}
        />
      ) : undefined}
      <Footer />
    </div>
  )
}

export default App
