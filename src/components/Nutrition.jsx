function Nutrition() {
  return (
    <div>
      <h2 className='text-brown text-3xl font-normal font-youngSerif'>
        Nutrition
      </h2>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className='grid grid-cols-2'>
        <p>Calories</p>
        <p>277kcal</p>

        <p>Carbs</p>
        <p>0g</p>

        <p>Protein</p>
        <p>20g</p>

        <p>Fat</p>
        <p>22g</p>
      </div>
    </div>
  );
}

export default Nutrition;
