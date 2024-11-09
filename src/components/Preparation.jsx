function Preparation() {
  return (
    <div className='bg-rose-50 rounded-xl p-6 pb-4 mb-8'>
      <h2 className='text-rose-800 text-2xl font-semibold font-outfit mb-3'>
        Preparation time
      </h2>
      <ul className='marker:text-rose-800 list-disc *:pb-2 px-7'>
        <li className='pl-4'>
          <span className='font-bold'>Total:</span> Approximately 10 minutes
        </li>
        <li className='pl-4'>
          <span className='font-bold'>Preparation:</span> 5 minutes
        </li>
        <li className='pl-4'>
          <span className='font-bold'>Cooking:</span> 5 minutes
        </li>
      </ul>
    </div>
  );
}

export default Preparation;
