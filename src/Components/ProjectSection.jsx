var SectionCounter = 0;

export default function ProjectSection({ Title, Objects = [] }) {
  let isLeft = true;


  function MakeEntry(Image, Title, Description, Link) 
  {
    let imageElement = 
    (
      <a onClick={()=>{open(Link)}} className="aspect-square">
        <img src={Image} className="
        object-contain
        rounded-xl 
        md:max-w-45 md:max-h-45
        sm:max-w-35 sm:max-h-35
        max-w-0 max-h-0"/>
      </a>
    );

    let textElement = 
    (
      <div className={`pl-4 flex flex-col max-h-100 `}>
          <p className="dark:text-zinc-200 text-zinc-600 text-base font-medium leading-normal whitespace-normal break-after-all pb-2"> {Title}</p>
          <p className="dark:text-zinc-400 text-zinc-500 pl-4 pr-4 text-sm font-normal leading-4 overflow-scroll break-after-all" dangerouslySetInnerHTML={{ __html: Description }}></p>
          <button
            className="
            flex 
            min-w-[120px]
            max-w-[200px]
            min-h-[32px]
            mt-4 h-8 px-4 
            cursor-pointer 
            items-center justify-center 
            overflow-hidden 
            rounded-full 
            bg-blue-500 text-white
            text-sm 
            font-medium
            leading-normal"
            onClick={()=>{window.open(Link, "_blank");}}
          >
           View Project
          </button>
      </div>
    );

    return (
      <div key={`ProjectSectionKey_${SectionCounter++}`} className={`flex ${isLeft ? "flex-row-reverse pl-4" : ""} justify-end`}>
        <div className={`pr-4 pl-4 overflow-hidden`}>
          {textElement}
        </div>
        <div className="flex items-center">
          {imageElement}
        </div>
      </div>

    );
  }

  let Content = [];
  for (let entryData of Objects) {
    Content.push(MakeEntry(entryData.Image, entryData.Title, entryData.Description, entryData.Link));
    isLeft = !isLeft;
  }

  return (
    <div className="no-print">
      <h1 className="text-2xl dark:text-zinc-200 text-zinc-600 pt-4">{Title}</h1>
      <hr className="w-[95%] sm:w-[100%] h-0.25 my-4 bg-gray-300 dark:bg-zinc-600 border-0 rounded-full"></hr>
      {
        (() => {
          //#region Image Object
          if (Objects.length > 0) {
            return (
              <div className={`flex flex-col justify-end max-w-screen`}>
                  {Content}
              </div>
            );
          }
          //#endregion
        })()
      }
    </div>
  );
}