const ProductCardSimpleRounded = () => {
    return (  
        <a href="#" className="block group">
  <img
    src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    alt=""
    className="object-cover w-full rounded aspect-square"
  />

  <div className="mt-3">
    <h3
      className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
    >
      Simple Watch
    </h3>

    <p className="mt-1 text-sm text-gray-700">$150</p>
  </div>
</a>
    );
}
 
export default ProductCardSimpleRounded;