import Data from '../components/Data'
import Image from '../image/imageBlack.jpg'

const Render = () => {
  return (
    <div className='flex  items-center justify-center h-[100vh]'>
    <div className='lg:border lg:shadow-2xl border-gray-300 rounded-lg items-center  lg:w-[60%] m-auto w-[80%] lg:px-10 py-2 gap-5 lg:grid lg:grid-cols-[60%,1fr]'>
        <Data/>
        <img className='object-cover hidden lg:flex bg-red-50 h-[80%] w-[100%] rounded-md' src={Image} alt="" />
    </div>
    </div>
  )
}

export default Render