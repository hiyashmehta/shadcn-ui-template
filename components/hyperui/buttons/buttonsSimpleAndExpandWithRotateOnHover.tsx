const ButtonsSimpleAndExpandWithRotateOnHover = () => {
    return ( 
        {/* Base - Right */}

<a
  className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
  href="/download"
>
  Download
</a>

{/* Border - Right */}

<a
  className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
  href="/download"
>
  Download
</a>

{/* Base - Left */}

<a
  className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500"
  href="/download"
>
  Download
</a>

{/* Border - Left */}

<a
  className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
  href="/download"
>
  Download
</a>
     );
}
 
export default ButtonsSimpleAndExpandWithRotateOnHover;