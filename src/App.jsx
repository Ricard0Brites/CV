import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css'

import Header from './Components/Header/HeaderComponent'
import ProjectSection from './Components/ProjectSection'
import ExperienceSection from './Components/ExperienceSection'
import SkillsSection from './Components/SkillsSection';
import RelocationSection from './Pages/RelocationSection';
import AboutMeSection from './Components/MeSection';

import Photo from '/src/assets/RicardoBritesPhoto.png';
import UnrealBehaviorTreeImage from '/src/assets/UnrealBehaviorTree.png';
import GameEngineCover from '/src/assets/GameEngineProjectCover.png';
import CVCover from '/src/assets/CVWebsiteProjectCover.png';
import JSONEditorCover from '/src/assets/JSONEditorProjectCover.png';
import Decimated from '/src/assets/Decimated.png';

const SkillsList = 
[
  {slug: "Cplusplus", rating:5, DisplayText:"C++"},
  {slug: "Opengl", rating:2, DisplayText:"OpenGL"},
    {slug: "Unrealengine", rating:5, DisplayText:"Unreal Engine"},
    //{slug: "Csharp", rating:4, DisplayText:"C#"},
    {slug: "Jira", rating:4, DisplayText:"Jira"},
    {slug: "Confluence", rating:4, DisplayText:"Confluence"},
    {slug: "Javascript", rating:4, DisplayText:"Javascript"},
    {slug: "Typescript", rating:3, DisplayText:"Typescript"},
    {slug: "Python", rating:3, DisplayText:"Python"},
    //{slug: "Dotnet", rating:4, DisplayText:".NET"},
    //{slug: "azuresqldatabase", rating:3, DisplayText:"SQL"},
    // {slug: "Unity", rating:3, DisplayText:"Unity"},
    // {slug: "Figma", rating:3, DisplayText:"Figma"},
    // {slug: "Git", rating:3, DisplayText:"Git"},
    // {slug: "Github", rating:3, DisplayText:"Github"},
    {slug: "Perforce", rating:5, DisplayText:"Perforce"},
    // {slug: "Html5", rating:3, DisplayText:"HTML"},
    // {slug: "Css", rating:3, DisplayText:"CSS"},
    // {slug: "Tailwindcss", rating:3, DisplayText:"Tailwind"},
    // {slug: "React", rating:3, DisplayText:"React"},
    //{slug: "Nodedotjs", rating:3, DisplayText:"Node.JS"},
    // {slug: "Django", rating:3, DisplayText:"Django"},
    // {slug: "Googledrive", rating:3},
    // {slug: "Googleauthenticator", rating:3},
    // {slug: "Notion", rating:4},
    // {slug: "Linux", rating:5, DisplayText:"Linux Terminal"},
    // {slug: "Windows11", rating:5, DisplayText:"Windows"},
    {slug: "Visualstudio", rating:4, DisplayText:"Visual Studio"},
    // {slug: "Vscode", rating:3, DisplayText:"Visual Studio Code"},
    // {slug: "Pycharm", rating:3},
    // {slug: "Ssh", rating:4},
];

export default class App extends Component 
{
  printDebugFlag = false;

  componentDidMount() 
  {
    const hash = window.location.hash;

    // Handle HashRouter + anchor
    const parts = hash.split("#");
    if (parts.length <= 0) return;
    const el = document.getElementById(decodeURIComponent(parts[1]));
    if (el) 
      el.scrollIntoView({ behavior: "smooth" });
  }

  render() 
  {
    return (
      <Router>
        {this.GetRoutings()}
      </Router>
    );
  }

  GetRoutings() {
    return (
      <div>
      <header>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>  
      </header>
      <Routes>
        <Route path="/CV/" element={this.GetFrontEnd()} />
        <Route path="Development/" element={this.GetDevelopment()} />
      </Routes>

      </div>
    );
  }

  /**
   * 
   * @param { object }Image - Image Object
   * @param { string } Title -Title of the Project 
   * @param { string } Description - Description of the project
   * @param { string } Link - Link for the project (can be another page, can be a link to gihub, etc...)
   * @returns { object }
   */
  #ProjectEntryObject(Image, Title, Description, Link) {
    return { Image: [Image], Title: [Title], Description: [Description], Link: [Link] };
  }

  /**
   * 
   * @param { string } CompanyName - Company Name eg: Riot Games
   * @param { string } Role - Role Name eg: Game Developer
   * @param { string } Location - Location eg: Remote, Portugal
   * @param { string } Time - Time eg: 2020-2021
   * @param { object } Description - Description of functions eg: "Mopped the floors"
   * @returns { object }
   */
  #ExperienceEntryObject(CompanyName, CompanyLink, Role, Location, Time, Description)
  {
    return {
      Company: CompanyName,
      Link: CompanyLink,
      Role: Role,
      Location: Location,
      Time: Time,
      Description: Description
    };
  }

  #GetCommunication()
  {
    return <div className='break-inside-avoid'>
            <ExperienceSection Title={"Communication"} Objects=
            {
              [ 
                //this.#ExperienceEntryObject("Portuguese","", "Native", "", "", ""),
                this.#ExperienceEntryObject("English", "", "Fluent", "CEFR-C2", "", ""),
              ]
            } />
          </div> ;
  }

  GetFrontEnd() 
  {
    return (
      <div>
        <Header />
        <div className='
        2xl:pl-40
        2xl:pr-40
        lg:pl-20 
        lg:pr-20 
        md:pl-20
        md:pr-20
        sm:pl-10
        sm:pr-10
        pl-5'>
          <div className='break-inside-avoid'>
            <AboutMeSection 
              Title={"About Me"}
              Name={''}
              PhotoObj={Photo}
              Description={<div className="flex flex-col gap-1 font-sans">
        {/* Visa Badge: Adaptive for Light/Dark mode */}
        <div>
          <span className={`
            inline-block
            px-3
            py-1
            rounded-md
            text-sm
            font-bold
            tracking-wider
            bg-green-600
            text-white
            dark:bg-green-500/20
            dark:text-green-400 
            dark:border
            dark:border-green-500/30
            no-print
            `}
          >
            IEC Working Holiday Visa (24 Months Remaining)
          </span>

          <span className={`
            inline-block
            px-3
            py-[0.25]
            rounded-md
            text-xs
            font-bold
            tracking-wider
            bg-green-600
            text-white
            dark:bg-green-500/20
            dark:text-green-400 
            dark:border
            dark:border-green-500/30
            print-only
            `}
          >
            IEC Working Holiday Visa (24 Months Remaining)
          </span>
        </div>
        <span> Gameplay Engineer with experience building multiplayer gameplay and tools using C++ and Unreal Engine.</span>
        <span> Contributed and shipped a web3 AAA title and supported live-ops. </span>
        <span> Strong background in gameplay systems (controls, abilities, UI), networking, and tools/pipeline development </span>
        <span> Effective cross-functional communicator and mentor who works in Agile Kanban teams.</span>
      </div>
    }
            />
          </div>
          
          <div className='break-inside-avoid'>
            <SkillsSection 
              Title={"Skills"} 
              Data = {SkillsList} 
            />
          </div>

          <div className='break-inside-avoid'>
            <ExperienceSection Title={"Experience"} Objects=
            {
              [ 
                this.#ExperienceEntryObject("Fracture Labs", "https://store.epicgames.com/en-US/p/decimated-de8da4", "Gameplay Engineer", "Remote", "07/2022 - 07/2025", 
                  <ul>
                    <li >Applied debugging skills to resolve complex engine-level issues.</li>
                    
                    <li >Wrote clean, robust, performant, and maintainable C++ code to supervise and maintain the modules and systems underpinning core features managing dependencies for clean module separation.</li>

                    <li >Engineered a custom audio implementation pipeline to facilitate designer-led iterations.</li>
                    
                    <li>Addressed technical limitations by engineering a custom instance management system, optimizing code for efficient operation and achieving an 8.5x reduction in idle-instance creation.</li>
                    
                    <li>Refactored the input system into a scalable framework with rebindable controls.</li>
                    
                    <li >Authored technical documentation.</li>
                </ul>)
              ]
            }/>
          </div>
          <div className='break-inside-avoid'>
            <ExperienceSection Title={"Education"} Objects=
            {
              [ 
                this.#ExperienceEntryObject("Polytechnic Institute of Leiria School of Technology and Management", "https://www.ipleiria.pt/curso/licenciatura-em-jogos-digitais-e-multimedia/", "Bachelor's Degree in Game Development", "Leiria", "09/2020 - 07/2024", "Practice-focused degree covering game programming, computer graphics, game design, and AI with industry tools such as Unreal Engine, Unity, and custom made C++ engines."),
                this.#ExperienceEntryObject("Domingos Sequeira High School", "http://www.esds.edu.pt/images/ano20232024/oferta_formativa_CP_2024_25.pdf#page=12&zoom=150%", "Computer Systems Management and Programming", "Leiria", "09/2016 - 07/2019", "Technical secondary education focused on software development, system administration, and database management.")
              ]
            } />
          </div>

          <div className='break-inside-avoid no-print'>
            <RelocationSection Title={'Relocation & Work Authorization'}/>
          </div>

            {this.#GetCommunication()}

          <div className='break-inside-avoid'>
            <ProjectSection Title="Projects" Objects=
            {
              [
                this.#ProjectEntryObject(Decimated, "Decimated",
                  `
                  --- Professionally Worked on as Gameplay Engineer ---
<pre> 
  - Multiplayer
  - Massive Open World
  - AAA
  - Shipped (01/2025)
</pre>`,
                  "https://store.epicgames.com/en-US/p/decimated-de8da4"),
                this.#ProjectEntryObject(UnrealBehaviorTreeImage, "AI Demo In Unreal Engine",
                  ` --- Personal Project ---
                  <br></br> AI system in Unreal Engine using perception. The Project demonstrates 
<pre> 
  - AI Pathing
  - State Driven behavior (Attack Enemy, Run To Cover)
  - Enemy Detection (Vision, Sound, and Damage)
  - Asynchronous Dynamic State Switching
  - Interaction
  - Weapon Mechanics 
  - Animations
  - Dynamic UI (Custom Shader)
</pre>`,
                "https://github.com/Ricard0Brites/Unreal_AI_Demo"),
                this.#ProjectEntryObject(
                  GameEngineCover,
                  "C++ Game Engine",
                  `
                  --- University Project ---
                  <br></br>
                  Custom lightweight C++ Game Engine made using OpenGL.
                  <br></br>Built systems: 
<pre> 
  - Entity management
  - Collision
  - Render
  - Event
  - Input
</pre>
                  `,
                  "https://github.com/Ricard0Brites/Game-Engine/tree/main")
              ]
            } />
          </div>
        </div>
      </div>
    );
  }

  GetDevelopment() {
    return (
      <div className='w-full'>
        <Header />
        <div className='pl-40 pr-40'>

        </div>
      </div>
    );
  }
}