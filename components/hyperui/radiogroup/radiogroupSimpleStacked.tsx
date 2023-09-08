const RadioGroupSimpleStacked = () => {
    return ( 
        <fieldset className="space-y-4">
  <legend className="sr-only">Delivery</legend>

  <div>
    <input
      type="radio"
      name="DeliveryOption"
      value="DeliveryStandard"
      id="DeliveryStandard"
      className="peer hidden"
      checked
    />

    <label
      htmlFor="DeliveryStandard"
      className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
    >
      <p className="text-gray-700">Standard</p>

      <p className="text-gray-900">Free</p>
    </label>
  </div>

  <div>
    <input
      type="radio"
      name="DeliveryOption"
      value="DeliveryPriority"
      id="DeliveryPriority"
      className="peer hidden"
    />

    <label
      htmlFor="DeliveryPriority"
      className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
    >
      <p className="text-gray-700">Next Day</p>

      <p className="text-gray-900">£9.99</p>
    </label>
  </div>
</fieldset>
     );
}
 
export default RadioGroupSimpleStacked;