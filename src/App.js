import './App.css';
import MyProject from './Pages/MyProject/MyProject';
import Servics from './Pages/Servics/Servics';
import Skills from './Pages/Skills/Skills';
import Summary from './Pages/Summary/Summary';
import TopBanner from './Pages/TopBanner/TopBanner';
import TopNavigason from './Pages/TopNavigason/TopNavigason';

function App() {
  return (
    <div>
      <TopNavigason></TopNavigason>
      <TopBanner></TopBanner>
      <Servics></Servics>
      <Skills></Skills>
      <Summary></Summary>
      <MyProject></MyProject>
    </div>
  );
}

export default App;
