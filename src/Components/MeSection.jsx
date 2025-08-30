var SectionCounter = 0;

export default function AboutMeSection({ Title, Name, PhotoPath, Description }) 
{
    

  return (

    <div>
        <h1 className="text-2xl dark:text-zinc-200 text-zinc-600 pt-4">{Title}</h1>
        <hr className="w-[95%] sm:w-[100%] h-0.25 my-4 bg-gray-300 dark:bg-zinc-600 border-0 rounded-full"></hr>

        <div className="flex flex-row">
            
            {/* Photo Column */}
            <div className="flex ml-4 w-[300px] min-w-1/10">
                <img className="self-center rounded-xl" src={`${PhotoPath}`}></img>
            </div>

            {/* Content Column */}
            <div className="
            flex flex-col            
            ml-4
            overflow-scroll
             max-w-9/12
             max-h-150
            ">
                <div className="text-xl font-bold ">
                    {Name}
                </div>
                <div className="ml-4 mt-4">
                    {Description}
                </div>
            </div>
        </div>
    </div>
  );
}