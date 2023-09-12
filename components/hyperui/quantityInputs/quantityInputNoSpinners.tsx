const QuantityInputNoSpinners = () => {
    return ( 
        {/*
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]

  @layer components {
    .no-spinner {
      -moz-appearance: textfield;
    }

    .no-spinner::-webkit-outer-spin-button,
    .no-spinner::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }
*/}

<div>
  <label htmlFor="Quantity" className="sr-only"> Quantity </label>

  <div className="flex items-center gap-1">
    <button
      type="button"
      className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
    >
      &minus;
    </button>

    <input
      type="number"
      id="Quantity"
      value="1"
      className="h-10 w-24 rounded border-gray-200 [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
    />

    <button
      type="button"
      className="w-10 h-10 leading-10 text-gray-600 transition hover:opacity-75"
    >
      &plus;
    </button>
  </div>
</div>
     );
}
 
export default QuantityInputNoSpinners;