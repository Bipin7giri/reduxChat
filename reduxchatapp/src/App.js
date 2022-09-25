import logo from './logo.svg';
import './App.css';
import UserOne from './components/UserOne';
import UserTwo from './components/UserTwo';

function App() {
  return (
    <div className='flex justify-center '>
      <UserOne />
      <UserTwo />
    </div>
  );
}

export default App;
