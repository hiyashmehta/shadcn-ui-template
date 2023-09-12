const ToggleMaterial = () => {
    return ( 
        <label htmlFor="AcceptConditions" className="relative h-8 w-12 cursor-pointer">
  <input type="checkbox" id="AcceptConditions" className="peer sr-only" />

  <span className="absolute inset-0 m-auto h-2 rounded-full bg-gray-300"></span>

  <span
    className="absolute inset-y-0 start-0 m-auto h-6 w-6 rounded-full bg-gray-500 transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0"
  >
    <span
      className="absolute inset-0 m-auto h-4 w-4 rounded-full bg-gray-200 transition"
    >
    </span>
  </span>
</label>
     );
}
 
export default ToggleMaterial;