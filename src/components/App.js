import '../assets/css/app.css';
import ConterWrapper from './ContentWrapper';
import  SliderBar  from './SiderBar.js';

function App() {
  return (
    <div className="app" id="wrapper">
      < SliderBar />
      < ConterWrapper />
    </div>
  );
}

export default App;
