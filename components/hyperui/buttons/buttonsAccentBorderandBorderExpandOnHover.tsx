const ButtonsAccentBorderAndBorderExpandOnHover = () => {
    return ( 
        {/* Left */}

<a
  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
  >
    Download
  </span>
</a>

{/* Right */}

<a
  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-y-0 right-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
  >
    Download
  </span>
</a>

{/* Bottom */}

<a
  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
  >
    Download
  </span>
</a>

{/* Top */}

<a
  className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
  >
    Download
  </span>
</a>
     );
}
 
export default ButtonsAccentBorderAndBorderExpandOnHover;