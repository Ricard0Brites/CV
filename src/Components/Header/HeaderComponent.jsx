import { useState, useEffect } from 'react';

export default function Header() 
{

  /* Data */
    const Name = "Ricardo Brites";
    const Role = "Gameplay Programmer";
    const Location = "Leiria, Portugal";

    /* Dark Coloring */
    const Dark_PrimarBGColor = 'bg-zinc-600';
    const Dark_PrimaryTextColor = 'text-zinc-600';
    const Dark_SecondaryTextColor = 'text-zinc-500';
    const Dark_PrimaryStrokeColor = 'text-zinc-600';

    const Dark_PrimaryBGHoverColor = 'bg-zinc-500';
    const Dark_SecondaryBorderColor = 'border-zinc-600';


    /* Light Coloring */
    const Light_PrimaryBGColor = 'bg-zinc-200';
    const Light_PrimaryTextColor = 'text-zinc-200';
    

    const Light_PrimaryBGHoverColor = 'bg-zinc-300';
    const Light_PrimaryStrokeColor = 'stroke-zinc-300';
    const Light_SecondaryTextColor = 'text-zinc-300';
    const Light_SecondaryBorderColor = 'border-zinc-300';

    /* Sizing */
    const HeaderHeight = 'h-14'

    
  // Get initial dark mode state from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark'; // If saved, use that
    // If not saved, fallback to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Effect to apply/remove the dark class on the html tag based on darkMode
  useEffect(() => 
  {
    if (darkMode)
    {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');  // Save dark mode in localStorage
    }
    else 
    {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // Save light mode in localStorage
    }
  }, [darkMode]);  // When darkMode changes, update the class and localStorage

  const [showHeader, SetShowHeader] = useState(true);
  const [scrollY, SetScrollY] = useState(0);
  window.addEventListener('scroll', () => 
  {
    if(window.scrollY > scrollY && showHeader)
    {
      SetShowHeader(false);
      SetScrollY(window.scrollY);
    }
    
    if(window.scrollY < scrollY && !showHeader)
    {
      SetShowHeader(true);
      SetScrollY(window.scrollY);
    }
  });

  const PrimaryBGColor = darkMode ? Dark_PrimarBGColor : Light_PrimaryBGColor;
  const PrimaryTextColor = !darkMode ? Dark_PrimaryTextColor : Light_PrimaryTextColor; /* Inverted - We want light text on dark BG and vice-versa */
  const SecondaryTextColor = !darkMode ? Dark_SecondaryTextColor : Light_SecondaryTextColor; /* Inverted - We want light text on dark BG and vice-versa */
  const PrimaryHoverColor = darkMode ? Dark_PrimaryBGHoverColor : Light_PrimaryBGHoverColor;
  const SecondaryBorderColor = darkMode ? Dark_SecondaryBorderColor : Light_SecondaryBorderColor;

/* Icons */
const MoonIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className={`size-6 ${Light_PrimaryStrokeColor}`}><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>;  
const SunIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`size-6 ${Dark_PrimaryStrokeColor}`}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>;
const PrinterIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" /></svg>;

  return (
<div className='no-print'>
  <div className={`static ${HeaderHeight} w-full`}></div>

  <header
    className={`
      fixed top-0  
      ${HeaderHeight}
      w-full
      ${PrimaryBGColor}
      ${SecondaryBorderColor}
      transition-transform duration-500 ${showHeader ? "translate-y-0" : "-translate-y-full"}
      z-[9999]
    `}
  >
    <div className="flex justify-between items-center h-full px-4">
      {/* Left side */}
      <a href="/" className={`flex flex-col justify-center`}>
        <h1 className={`${Dark_PrimaryTextColor} dark:${Light_PrimaryTextColor}  hover:text-zinc-500 hover:dark:text-zinc-300 text-l font-bold transition ease-in-out duration-300`}>
          {Name}
        </h1>
        <p className={`text-xs ${SecondaryTextColor}`}>
          {Role} · {Location}
        </p>
      </a> 
      <button
          onClick={() => window.print()}
          className={`p-2 rounded-full ${Dark_PrimaryTextColor} dark:${Light_PrimaryTextColor}  hover:text-zinc-500 hover:dark:text-zinc-300 transition ease-in-out duration-300`}
          aria-label="Download CV"
        >
        {PrinterIcon}
      </button>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/Ricard0Brites"
          target="_blank"
          rel="noopener noreferrer"
          className={`${Dark_PrimaryTextColor} dark:${Light_PrimaryTextColor}  hover:text-zinc-500 hover:dark:text-zinc-300 transition ease-in-out duration-300`}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ricard0brites/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${Dark_PrimaryTextColor} dark:${Light_PrimaryTextColor}  hover:text-zinc-500 hover:dark:text-zinc-300 transition ease-in-out duration-300`}
        >
          LinkedIn
        </a>
        <a
          onClick={()=>{window.open("mailto:ricardobrites.work@gmail.com");}}
          className={`${Dark_PrimaryTextColor} dark:${Light_PrimaryTextColor}  hover:text-zinc-500 hover:dark:text-zinc-300 transition ease-in-out duration-300 cursor-pointer`}
        >
          Email
        </a>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full ${PrimaryBGColor} transition ease-in-out duration-300`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? MoonIcon : SunIcon}
        </button>
      </div>
    </div>
  </header>
</div>
  );
}
