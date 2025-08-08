export default function ExperienceSection({ Title, Objects = [] }) 
{
  return (
    <div>
      <h1 className="text-2xl dark:text-zinc-200 text-zinc-600 pt-4">{Title}</h1>
      <hr className="w-[95%] sm:w-[100%] h-0.25 my-4 bg-gray-300 dark:bg-zinc-600 border-0 rounded-full"></hr>
      {
        (() => {
          //#region Image Object
          if (Objects.length > 0) 
            {
                let content = Objects.map((value, index)  =>
                    (
                        <div key={`ExperienceSection_${index}`} className="flex flex-col flex-1  pr-5 pb-4">
                          <div className=" flex flex-1">
                            <div className=" flex flex-[0.9]">
                            <div className="dark:text-zinc-200 text-zinc-600 text-base font-medium leading-normal whitespace-normal">
                              {value.Company} - {value.Role}
                              <p className="pl-4">{value.Location}</p>
                            </div>
                            </div>
                            <div className=" flex flex-[0.1] justify-end">
                            <p className="dark:text-zinc-400 text-zinc-500 pl-8 pr-4 text-sm font-normal leading-3.7 overflow-x-hidden overflow-y-scroll">
                               {value.Time}
                            </p>
                            </div>                            
                          </div>
                          <div className="flex flex-1">
                            <p className="dark:text-zinc-400 text-zinc-500 pl-8 pr-4 text-sm font-normal leading-3.7 overflow-x-hidden overflow-y-scroll break-after-all">
                              {value.Description}
                            </p>
                          </div>
                        </div>
                    ));
                
                return (
                <div className={`flex flex-col justify-end max-w-screen pl-4`}>
                    {content}
                    {console.log(content)}
                </div>
                );
          }
          //#endregion
        })()
      }
    </div>
  );
}