const InputWithLabelInInput = () => {
    return ( 
        {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<label
  htmlFor="UserEmail"
  className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
>
  <span className="text-xs font-medium text-gray-700"> Email </span>

  <input
    type="email"
    id="UserEmail"
    placeholder="anthony@rhcp.com"
    className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />
</label>
     );
}
 
export default InputWithLabelInInput;