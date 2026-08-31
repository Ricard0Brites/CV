import { Link } from "react-router-dom";

export default function ExperienceSection({ Title, Objects = [] }) 
{
  return (
    <div>
      {/* Web Version */}
      <div className="no-print">
        <h1 className="text-2xl dark:text-zinc-200 text-zinc-600 pt-4">{Title}</h1>
      <hr className="w-[95%] sm:w-[100%] h-0.25 my-4 bg-gray-300 dark:bg-zinc-600 border-0 rounded-full"></hr>
      {
        (() => {
          //#region Image Object
          if (Objects.length > 0) 
            {
                let content = Objects.map((value, index)  =>
                  {
                    return (
                        <div key={`ExperienceSection_${index}`} className="flex flex-col flex-1  pr-5 pb-4">
                          <div className=" flex flex-1">
                            <div className=" flex flex-[0.9]">
                              <a href={value.Link.length > 0 ? value.Link : undefined} target="_blank" rel="noopener noreferrer" className={`${value.Link.length > 0 ? "link" : ""}`}>
                                <div className="dark:text-zinc-200 text-zinc-600 text-sm leading-normal whitespace-normal">
                                  {value.Company} - {value.Role}
                                  <p className="pl-4">{value.Location}</p>
                                </div>
                              </a>
                            </div>
                            <div className=" flex flex-[0.1] justify-end">
                            <p className="dark:text-zinc-400 text-zinc-500 pl-8 pr-4 w-50 text-sm font-normal leading-3.7 overflow-x-hidden overflow-y-scroll">
                              {value.Time}
                            </p>
                            </div>                            
                          </div>
                          <div className="flex flex-1">
                            <ul>
                              <li className="bullet-li dark:text-zinc-400 text-zinc-500 pl-8 pr-4 text-xs font-normal leading-3.7 overflow-x-hidden overflow-y-scroll break-after-all">{ value.Description }</li>
                            </ul>
                          </div>
                        </div>                        
                    )
                });
                
                return (
                <div className={`flex flex-col justify-end max-w-screen pl-4`}>
                    {content}
                </div>
                );
          }
          //#endregion
        })()
      }
      </div>
      {/* Print Version */}
      <div className="print-only">
        <h1 className="font-bold dark:text-zinc-200 text-zinc-600">{Title}</h1>
      <hr className="w-[95%] sm:w-[100%] h-0.25 my-2 bg-gray-300 dark:bg-zinc-600 border-0 rounded-full"></hr>
      {
        (() => {
          //#region Image Object
          if (Objects.length > 0) 
            {
                let content = Objects.map((value, index)  =>
                  {
                    return (
                        <div key={`ExperienceSection_${index}`} className="flex flex-col flex-1 pr-5 pb-2">
                          <div className=" flex flex-1">
                            <div className=" flex flex-[0.9]">
                              <a href={value.Link.length > 0 ? value.Link : undefined} target="_blank" rel="noopener noreferrer" className={`${value.Link.length > 0 ? "link" : ""}`}>
                                <div className="dark:text-zinc-200 text-zinc-600 text-xs leading-normal whitespace-normal">
                                  {value.Company} - {value.Role}
                                  <p className="pl-4">{value.Location}</p>
                                </div>
                              </a>
                            </div>
                            <div className=" flex flex-[0.1] justify-end">
                            <p className="dark:text-zinc-400 text-zinc-500 pl-8 pr-4 text-xs font-normal leading-3.7 w-40 overflow-x-hidden overflow-y-scroll">
                              {value.Time}
                            </p>
                            </div>                            
                          </div>
                          <div className="flex flex-1">
                            <p className="dark:text-zinc-400 text-zinc-500 pl-8 pr-4 text-xs font-normal leading-3.7 overflow-x-hidden overflow-y-scroll break-after-all" >{ value.Description }</p>
                          </div>
                        </div>                        
                    )
                });
                
                return (
                <div className={`flex flex-col justify-end max-w-screen pl-4`}>
                    {content}
                </div>
                );
          }
          //#endregion
        })()
      }
      </div>
    </div>
  );
}