import CheckBoxList from '../components/CheckBoxList'
import Form from '../components/Form'


const Data = () => {
  return (
    <div className='flex flex-col gap-8'>
    <h1 className='text-4xl font-medium'>Stay updated!</h1>

    <CheckBoxList/>
    <Form/>

    </div>
  )
}

export default Data