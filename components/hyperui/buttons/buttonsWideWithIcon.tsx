const ButtonsWideWithIcon = () => {
    return ( 
        {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

{/* Base */}

<a
  className="group flex items-center justify-between gap-4 rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
  href="/download"
>
  <span
    className="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500"
  >
    Find out more
  </span>

  <span
    className="shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500"
  >
    <svg
      className="h-5 w-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>
</a>

{/* Border */}

<a
  className="group flex items-center justify-between gap-4 rounded-lg border border-current px-5 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
  href="/download"
>
  <span className="font-medium transition-colors group-hover:text-white">
    Find out more
  </span>

  <span
    className="shrink-0 rounded-full border border-indigo-600 bg-white p-2 group-active:border-indigo-500"
  >
    <svg
      className="h-5 w-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>
</a>
     );
}
 
export default ButtonsWideWithIcon;