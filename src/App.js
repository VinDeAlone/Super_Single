import logo from './logo.svg';
import './App.css';
import { GeneralInfoComponent } from './Components/Main/InternalComponents/GeneralInfoComponent';
import { MainComponent } from './Components/Main/MainComponent';

function App() {
  return (
    <div>
      <div className='text-center' style={{fontSize : "50px", color : "rgb(255, 21, 255)"}}><b>Super Single</b></div>
      <hr/>
      <div>
        <MainComponent/>
      </div>
    </div>
  );
}

export default App;
