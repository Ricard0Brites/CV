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
    {slug: "Cplusplus", rating:5, DisplayText:"C++"},
    {slug: "Csharp", rating:4, DisplayText:"C#"},
    // {slug: "Opengl", rating:2, DisplayText:"OpenGL"},
    {slug: "Javascript", rating:4, DisplayText:"Javascript"},
    // {slug: "Typescript", rating:3, DisplayText:"Typescript"},
    {slug: "Python", rating:3, DisplayText:"Python"},
    {slug: "Dotnet", rating:4, DisplayText:".NET"},
    {slug: "azuresqldatabase", rating:3, DisplayText:"SQL"},
    // {slug: "Unity", rating:3, DisplayText:"Unity"},
    // {slug: "Jira", rating:4, DisplayText:"Jira"},
    // {slug: "Confluence", rating:4, DisplayText:"Confluence"},
    // {slug: "Figma", rating:3, DisplayText:"Figma"},
    {slug: "Git", rating:3, DisplayText:"Git"},
    //{slug: "Github", rating:3, DisplayText:"Github"},
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


  GetFrontEnd() {
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
              Name={'Ricardo Brites - 24'}
              PhotoObj={Photo}
              Description={<div className="flex flex-col gap-3 font-sans">
        {/* Visa Badge: Adaptive for Light/Dark mode */}
        <div>
          <span className="
            inline-block
            px-3
            py-1
            rounded-md
            text-xs
            font-bold
            uppercase
            tracking-wider
            bg-green-600
            text-white
            dark:bg-green-500/20
            dark:text-green-400 
            dark:border
            dark:border-green-500/30"
          >
            IEC Working Holiday Visa — 24 Months Remaining
          </span>
        </div>

        <h3 className="text-lg font-bold leading-tight">
          AAA Gameplay Programmer 
          <span className="font-normal opacity-60">|</span> 
          <nbsp> </nbsp>3+ Years Experience 
          <span className="font-normal opacity-60">|</span> 
          <nbsp> </nbsp>Shipped: Decimated
        </h3>

        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          Versed in <strong>C++ and Linear Algebra</strong>, with a track record of engineering and iterating on 
          complex systems within interdisciplinary AAA environments.
        </p>

        <div className="mt-2 flex items-center gap-2 font-semibold text-sm">
          <span>Actively seeking relocation opportunities.</span>
          <span>Can relocate within 21 days.</span>
        </div>
      </div>
    }
            />
          </div>

          <div className='print-only break-inside-avoid'>
            <ExperienceSection Title={"Contact"} Objects=
            {
              [ 
                this.#ExperienceEntryObject("Email", "", "ricardobrites.work@gmail.com", "", "", ""),
                this.#ExperienceEntryObject("GitHub", "", "github.com/ricard0brites", "", "", ""),
                this.#ExperienceEntryObject("LinkedIn", "", "linkedin.com/in/ricard0brites/", "", "", ""),
              ]
            } />
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
                this.#ExperienceEntryObject("Fracture Labs", "https://store.epicgames.com/en-US/p/decimated-de8da4", "Gameplay Engineer - Decimated", "Remote", "09/2022 - 09/2025", 
                  <ul>
                    <li class="bullet-li">Architected a <strong> networked player survival system</strong> (Health, Hunger, Hydration, Blood) utilizing <strong>UE Replication</strong> for server-client synchronization and integrated <strong>PlayFab</strong> for persistent cloud-based saving.</li>
                    
                    <li class="bullet-li">Engineered a custom <strong>sound-implementation pipeline</strong> to accelerate SFX iteration; <strong>Mentored the sound designer</strong> in <strong>Unreal Engine</strong> workflows, enabling independent project-wide sound integration.</li>
                    
                    <li class="bullet-li">Refined weapon systems and gameplay stats to align with design specifications.</li>
                    
                    <li class="bullet-li"> Authored a <strong>sound pipeline</strong> to support gunplay features and designer-led iteration.</li>
                    
                    <li class="bullet-li">Optimized vehicle and engine audio architecture, achieving an <strong>850% performance gain</strong> by resolving idle-instance overflows through an instance management system.</li>
                    
                    <li class="bullet-li"><strong>Developed UI components</strong>, including a material-based circular vehicle dashboard and a real-time dynamic map with replicated player and world indicators.</li>
                    
                    <li class="bullet-li">Refactored the Input System, consolidating actions into a scalable framework with rebindable controls and authored <strong>technical documentation</strong> to improve team-wide onboarding.</li>
                    
                    <li class="bullet-li">Automated backend maintenance via <strong>PlayFab cloud scripts</strong>, enabling global player stat resets and improving efficiency for QA workflows and live-ops debugging.</li>
                    
                    <li class="bullet-li">Implemented core features within standalone Unreal Engine plugins, managing <strong>Build.cs dependencies</strong> and ensuring clean module separation.</li>
                </ul>),
                this.#ExperienceEntryObject("Arxi", "https://www.arxi.pt/en_US", "Web Development Intern", "", "03/2019 - 07/2019", "Designed and developed a fully functional web store using Django.")
              ]
            }/>
          </div>
          <div className='break-inside-avoid'>
            <ExperienceSection Title={"Education"} Objects=
            {
              [ 
                this.#ExperienceEntryObject("Polytechnic Institute of Leiria School of Technology and Management", "https://www.ipleiria.pt/curso/licenciatura-em-jogos-digitais-e-multimedia/", "Bachelor's Degree in Game Development", "", "09/2020 - 07/2024", "Practice-focused degree covering game programming, computer graphics, game design, and AI with industry tools such as Unreal Engine, Unity, and C++"),
                this.#ExperienceEntryObject("Domingos Sequeira High School", "http://www.esds.edu.pt/images/ano20232024/oferta_formativa_CP_2024_25.pdf#page=12&zoom=150%", "Computer Systems Management and Programming", "", "09/2016 - 07/2019", "Technical secondary education focused on software development, system administration, and database management. Covered programming fundamentals (C, VB, SQL), network configuration, operating systems, and IT project workflows.")
              ]
            } />
          </div>

          <div className='break-inside-avoid no-print'>
            <RelocationSection Title={'Relocation & Work Authorization'}/>
          </div>

          <div className='break-inside-avoid'>
            <ExperienceSection Title={"Communication"} Objects=
            {
              [ 
                this.#ExperienceEntryObject("Portuguese","", "Native", "", "", ""),
                this.#ExperienceEntryObject("English", "", "Fluent", "CEFR C2", "", ""),
              ]
            } />
          </div>

          <div className='break-inside-avoid print-only'>
            <RelocationSection Title={'Relocation & Work Authorization'}/>
          </div>

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
                this.#ProjectEntryObject(UnrealBehaviorTreeImage, "AI",
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