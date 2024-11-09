function Ingredients() {
  return (
    <div className='mb-8 pb-8 border-b-[1px]  border-stone-100'>
      <h2 className='text-brown text-3xl font-normal font-youngSerif mb-4'>
        Ingredients
      </h2>
      <ul className='marker:text-brown list-disc *:pb-2 px-7'>
        <li className='pl-4'>2-3 large eggs</li>
        <li className='pl-4'>Salt, to taste</li>
        <li className='pl-4'>Pepper, to taste</li>
        <li className='pl-4'>1 tablespoon of butter or oil</li>
        <li className='pl-4'>
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>
    </div>
  );
}

export default Ingredients;
