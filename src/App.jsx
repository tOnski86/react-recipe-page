import Banner from './components/Banner';
import Header from './components/Header';
import Preparation from './components/Preparation';
import Ingredients from './components/Ingredients';
import Instructions from './components/Instructions';
import Nutrition from './components/Nutrition';

function App() {
  return (
    <>
      <Banner />
      <div className='px-8'>
        <Header />
        <Preparation />
        <Ingredients />
        <Instructions />
        <Nutrition />
      </div>
    </>
  );
}

export default App;

{
  /* <div className='*:pb-8 *:pt-8 *:border-b-2  *:border-stone-100'></div> */
}
