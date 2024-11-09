function Nutrition() {
  return (
    <div className="className='mb-8 pb-8">
      <h2 className='text-brown text-3xl font-normal font-youngSerif mb-4'>
        Nutrition
      </h2>
      <p className='mb-4'>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>

      <table className='min-w-full'>
        <tbody>
          <tr className='border-b-[1px] border-stone-100'>
            <td className='px-6 py-2'>Calories</td>
            <td className='pr-6 py-2 text-brown font-bold'>277kcal</td>
          </tr>
          <tr className='border-b-[1px] border-stone-100'>
            <td className='px-6 py-2'>Carbs</td>
            <td className='pr-6 py-2 text-brown font-bold'>0g</td>
          </tr>
          <tr className='border-b-[1px] border-stone-100'>
            <td className='px-6 py-2'>Protein</td>
            <td className='pr-6 py-2 text-brown font-bold'>20g</td>
          </tr>
          <tr>
            <td className='px-6 py-2'>Fat</td>
            <td className='pr-6 py-2 text-brown font-bold'>22g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Nutrition;
