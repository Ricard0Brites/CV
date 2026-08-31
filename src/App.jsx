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
    {slug: "Unrealengine", rating:5, DisplayText:"Unreal Engine"},
    {slug: "GameplayAbilitySystem", rating: 5, DisplayText:"Gameplay Ability System"},
    {slug: "Cplusplus", rating:5, DisplayText:"C++"},
    // {slug: "Csharp", rating:4, DisplayText:"C#"},
    // {slug: "Opengl", rating:2, DisplayText:"OpenGL"},
    // {slug: "Javascript", rating:4, DisplayText:"Javascript"},
    // {slug: "Typescript", rating:3, DisplayText:"Typescript"},
    // {slug: "Python", rating:3, DisplayText:"Python"},
    // {slug: "Dotnet", rating:4, DisplayText:".NET"},
    // {slug: "azuresqldatabase", rating:3, DisplayText:"SQL"},
    // {slug: "Unity", rating:3, DisplayText:"Unity"},
    {slug: "Jira", rating:4, DisplayText:"Jira"},
    {slug: "Confluence", rating:4, DisplayText:"Confluence"},
    // {slug: "Figma", rating:3, DisplayText:"Figma"},
    // {slug: "Git", rating:3, DisplayText:"Git"},
     {slug: "Github", rating:3, DisplayText:"Github"},
    {slug: "Perforce", rating:5, DisplayText:"Perforce"},
    // {slug: "Html5", rating:3, DisplayText:"HTML"},
    // {slug: "Css", rating:3, DisplayText:"CSS"},
    // {slug: "Tailwindcss", rating:3, DisplayText:"Tailwind"},
    // {slug: "React", rating:3, DisplayText:"React"},
    // {slug: "Nodedotjs", rating:3, DisplayText:"Node.JS"},
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
                this.#ExperienceEntryObject("Portuguese","", "Native", "", "", ""),
                this.#ExperienceEntryObject("English", "", "Fluent", "CEFR C2", "", ""),
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
            No sponsorship required
          </span>

          <span className={`
            inline-block
            px-2
            py-[0.15]
            rounded-md
            text-sm
            font-bold
            bg-green-600
            text-white
            dark:bg-green-500/20
            dark:text-green-400 
            dark:border
            dark:border-green-500/30
            print-only
            `}
          >
            No sponsorship required
          </span>
        </div>

            <ul>
              <li class="bullet-li"> Gameplay Engineer with experience building multiplayer gameplay and tools using C++ and Unreal Engine. </li>
              <li class="bullet-li"> Contributed and shipped a AAA title and supported live-ops. </li>
              <li class="bullet-li"> Strong background in gameplay systems (controls, abilities, UI), networking, and tools/pipeline development </li>
            </ul>
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
                this.#ExperienceEntryObject("Independent", "", "Freelancing", "Remote", "10/2026 - present", 
                  <ul>
                    <li class="bullet-li">Developed tooling to create and dynamically integrate VR weapons into PlayFab.</li>

                </ul>),
                this.#ExperienceEntryObject("Fracture Labs", "https://store.steampowered.com/app/1354980/Decimated/", "Gameplay Engineer", "Remote", "07/2022 - 07/2025", 
                  <ul>
                    <li class="bullet-li">Refactored <strong>input controls</strong> consolidating in-place systems into a tailored scalable framework with rebind capabilities.</li>
                    
                    <li class="bullet-li">Designed, implemented, optimized, and debugged <strong>core multiplayer survival systems</strong>, leveraging Unreal Engine replication and PlayFab.</li>
                    
                    <li class="bullet-li">Designed and implemented a custom <strong>sound-implementation pipeline with Gameplay Ability System</strong>.</li>
                    
                    <li class="bullet-li">Reduced idle audio instances by <strong>~90%</strong> by designing and implementing a sound instance management system.</li>

                </ul>)
              ]
            }/>
          </div>
          <div className='break-inside-avoid'>
            <ExperienceSection Title={"Education"} Objects=
            {
              [ 
                this.#ExperienceEntryObject("IPL ESTG", "https://www.ipleiria.pt/curso/licenciatura-em-jogos-digitais-e-multimedia/", "Bachelor's Degree in Game Development", "Leiria, Portugal", "09/2020 - 07/2024", ""),
                this.#ExperienceEntryObject("ESDS", "http://www.esds.edu.pt/images/ano20232024/oferta_formativa_CP_2024_25.pdf#page=12&zoom=150%", "Secondary Computer Systems Management and Programming", "Leiria, Portugal", "09/2016 - 07/2019", "")
              ]
            } />
          </div>

          <div className='break-inside-avoid no-print'>
            <RelocationSection Title={'Relocation & Work Authorization'}/>
          </div>

            {this.#GetCommunication()}
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