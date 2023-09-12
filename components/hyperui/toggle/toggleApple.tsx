const ToggleApple = () => {
    return ( 
        <label htmlFor="AcceptConditions" className="relative h-8 w-14 cursor-pointer">
  <input type="checkbox" id="AcceptConditions" className="peer sr-only" />

  <span
    className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-blue-500"
  ></span>

  <span
    className="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-gray-300 ring-[6px] ring-inset ring-white transition-all peer-checked:start-8 peer-checked:w-2 peer-checked:bg-white peer-checked:ring-transparent"
  >
  </span>
</label>
     );
}
 
export default ToggleApple;