
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import './App.css';
const App = () => {
  return (
    <div className='ml-4 mt-40 wrapper'>
      <div className='text-center '>
        <h1 className='text-6xl text-black'>Amazing todo 😃</h1>
        <div className='grid'>
          <div className='row'>
            <Link to={'/todo'}>
            <Button className='mt-20'>Start my todo ⏩ </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;
