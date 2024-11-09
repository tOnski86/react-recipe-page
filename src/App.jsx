import Banner from './components/Banner';
import Header from './components/Header';
import Preparation from './components/Preparation';
import Ingredients from './components/Ingredients';
import Instructions from './components/Instructions';
import Nutrition from './components/Nutrition';

function App() {
  return (
    <div className='md:max-w-2xl md:my-12 bg-white md:rounded-2xl'>
      <Banner />
      <div className='px-8'>
        <Header />
        <Preparation />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </div>
    </div>
  );
}

export default App;
