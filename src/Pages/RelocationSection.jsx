export default function RelocationSection({ Title, Text }) 
{
  return (
    <div>
      <h1 className="text-2xl dark:text-zinc-200 text-zinc-600 pt-4">{Title}</h1>
      <hr className="w-[95%] sm:w-[100%] h-0.25 my-4 bg-gray-300 dark:bg-zinc-600 border-0 rounded-full"></hr>
       <div className="pl-4" dangerouslySetInnerHTML={{__html: Text }}></div>
       <ul  className="">
              <li className="dark:text-zinc-200 text-zinc-600 text-base font-medium leading-normal whitespace-normal">
               Canada <span className="text-zinc-500 dark:text-zinc-500 text-sm">(Visa Needed)</span>
                <ul>
                  
                  <li className="dark:text-zinc-400 text-zinc-500">
                    &emsp;  Eligible for IEC Young Professionals and Working Holiday programs (no LMIA required).
                    &emsp;<a className="link no-print" href="https://ircc.canada.ca/english/work/iec/selections.asp?country=pt&cat=yp" target="_blank" rel="noopener noreferrer">Young Professionals Visa Pool</a>
                    &emsp;<a className="link no-print" href="https://ircc.canada.ca/english/work/iec/selections.asp?country=pt&cat=wh" target="_blank" rel="noopener noreferrer">Working Holiday Visa Pool</a>
                  </li>
                </ul>
              </li>
              <li><br /></li>
               <li className="dark:text-zinc-200 text-zinc-600 text-base font-medium leading-normal whitespace-normal">
               United States of America <span className="text-zinc-500 dark:text-zinc-500 text-sm">(Visa Needed)</span>
              </li>
              
              {
                /*
                <li><br /></li>
                <li className="dark:text-zinc-200 text-zinc-600 text-base font-medium leading-normal whitespace-normal">
                  European Union
                  <ul>
                    <li className="text-zinc-500 dark:text-zinc-500">
                      &emsp; Eligible to work without visa.
                    </li>
                    </ul>
                </li>
                 */
              }
            </ul>
    </div>
  );
}