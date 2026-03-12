export default function RelocationSection({ Title, Text }) 
{
  return (
    <div>
      <h1 className="text-2xl dark:text-zinc-200 text-zinc-600 pt-4">{Title}</h1>
      <hr className="w-[95%] sm:w-[100%] h-0.25 my-4 bg-gray-300 dark:bg-zinc-600 border-0 rounded-full"></hr>
       <div dangerouslySetInnerHTML={{__html: Text }}></div>
       
       <ul className="pl-4">
              <li className="dark:text-zinc-200 text-zinc-600 text-base font-medium leading-normal whitespace-normal">
               Canada <span className="text-zinc-500 dark:text-zinc-500 text-sm"></span>
                <ul>
                  
                  <li className="dark:text-zinc-400 text-zinc-500">
                    Valid Open Work Visa
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