import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';
import PicBg1 from './assets/bg2.jpg';
import PicBg2 from './assets/bg3.jpg';

function App() {
  return (
    <div className="App">
      <Header title='This is My title' descr='This is My Description!'/>
      <Layout id='first' title='Layout 1' descr='Description Layout 1' urlBg={PicBg1}/>
      <Layout id='second' title='Layout 2' descr='Description Layout 2' colorBg='pink'/>
      <Layout id='third' title='Layout 3' descr='Description Layout 3' urlBg={PicBg2}/>
      <Footer />
    </div>
  );
}

export default App;
