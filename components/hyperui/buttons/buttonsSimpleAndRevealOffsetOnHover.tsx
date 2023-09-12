const ButtonsSimpleAndRevealOffsetBorderOnHover = () => {
    return ( 
        {/* Base */}

<a
  className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-0 border border-red-600 group-active:border-red-500"
  ></span>
  <span
    className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
  >
    Download
  </span>
</a>

{/* Border */}

<a
  className="group relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring active:text-red-500"
  href="/download"
>
  <span className="absolute inset-0 border border-current"></span>
  <span
    className="block border border-current bg-white px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
  >
    Download
  </span>
</a>
     );
}
 
export default ButtonsSimpleAndRevealOffsetBorderOnHover;