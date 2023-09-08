const ProgressWithValue = () => {
    return ( 
        <div>
  <span id="ProgressLabel" className="sr-only">Loading</span>

  <span
    role="progressbar"
    aria-labelledby="ProgressLabel"
    aria-valuenow="50"
    className="block rounded-full bg-gray-200"
  >
    <span
      className="block h-4 rounded-full bg-indigo-600 text-center text-[10px]/4"
      style="width: 50%"
    >
      <span className="font-bold text-white"> 50% </span>
    </span>
  </span>
</div>
     );
}
 
export default ProgressWithValue;