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
    //{slug: "GameplayAbilitySystem", rating: 5, DisplayText:"Gameplay Ability System"},
    {slug: "Cplusplus", rating:5, DisplayText:"C++"},
    {slug: "Csharp", rating:4, DisplayText:"C#"},
    {slug: "Opengl", rating:2, DisplayText:"OpenGL"},
    {slug: "Javascript", rating:4, DisplayText:"Javascript"},
    {slug: "Typescript", rating:3, DisplayText:"Typescript"},
    //{slug: "Python", rating:3, DisplayText:"Python"},
    //{slug: "Dotnet", rating:4, DisplayText:".NET"},
    //{slug: "azuresqldatabase", rating:3, DisplayText:"SQL"},
    //{slug: "Unity", rating:3, DisplayText:"Unity"},
    {slug: "Jira", rating:4, DisplayText:"Jira"},
    {slug: "Confluence", rating:4, DisplayText:"Confluence"},
    {slug: "Figma", rating:3, DisplayText:"Figma"},
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

  GetAboutMe()
  {
    return <div className='break-inside-avoid'>
            <AboutMeSection 
              Title={"About Me"}
              Name={''}
              PhotoObj={Photo}
              Description={<div className="flex flex-col gap-1 font-sans">
        {/* Visa Badge: Adaptive for Light/Dark mode */}
            <ul>
              <li class="bullet-li">Unreal Engine Engineer with over 4 years of professional game development experience, including gameplay systems, UI, tools, and automated content pipelines. </li>
              <li class="bullet-li">Strong C++ foundation with practical experience in Unreal Engine, debugging, system optimization, and cross-disciplinary collaboration. </li>
              <li class="bullet-li">Self-motivated problem solver comfortable taking ownership of ambiguous technical challenges, translating design requirements into maintainable implementations, and delivering production-ready solutions.</li>
            </ul>
      </div>
    }
            />
          </div>;
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

          {this.GetAboutMe()}

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
                this.#ExperienceEntryObject("Independent", "", "Freelancing", "Remote", "10/2025 - Present", 
                  <ul>
                    <li class="bullet-li">Developed automated Unreal Engine content pipelines to generate Blueprint and texture instances from base assets and mesh lists</li>
                    <li class="bullet-li">Integrated automated asset creation workflows with PlayFab content management, reducing manual production effort and improving communication across technical disciplines.</li>
                    <li class="bullet-li">Developed tooling to improve content configuration, increase supportability, and streamline asset management workflows in a production environment.</li>

                </ul>),
                this.#ExperienceEntryObject("Fracture Labs", "https://store.steampowered.com/app/1354980/Decimated/", "Gameplay Engineer", "Remote", "07/2022 - 07/2025", 
                  <ul>
                    <li class="bullet-li">Implemented over 80% of the project's user interface, including core HUD features, dynamic UI, and menus.</li>
                    <li class="bullet-li">Developed dynamic, parameter-driven Unreal Engine materials for runtime UI elements.</li>
                    <li class="bullet-li">Bridged gameplay systems and user interfaces, implementing the underlying logic and data flows required to support player-facing features.</li>
                    <li class="bullet-li">Designed, implemented, and debugged core networked multiplayer survival systems.</li>
                    <li class="bullet-li">Refactored existing input systems into a scalable, unified input architecture, enabling configurable controls and input rebinding.</li>
                    <li class="bullet-li">Optimized CPU and memory usage by engineering a sound instance management system that reduced idle audio instances by approximately 90%.</li>
                    <li class="bullet-li">Implemented data-driven audio integration workflows, allowing content configuration through Unreal Engine assets without requiring code changes.</li>
                    <li class="bullet-li">Engineered server-side scripts supporting QA and live-operations workflows, improving development and testing productivity.</li>
                    <li class="bullet-li">Diagnosed and resolved module dependency issues while maintaining clean architectural boundaries and module separation.</li>
                    <li class="bullet-li">Collaborated with design, art, and engineering departments to translate requirements into functional technical implementations.</li>
                    <li class="bullet-li">Mentored a fellow developer by providing technical guidance, coaching, and proactive communication.</li>
                </ul>)
              ]
            }/>
          </div>
          <div className='break-inside-avoid'>
            <ExperienceSection Title={"Education"} Objects=
            {
              [ 
                this.#ExperienceEntryObject("University of Leiria", "https://www.ipleiria.pt/curso/licenciatura-em-jogos-digitais-e-multimedia/", "Bachelor's Degree in Game Development", "Leiria, Portugal", "09/2020 - 07/2024", ""),
                this.#ExperienceEntryObject("ESDS", "http://www.esds.edu.pt/images/ano20232024/oferta_formativa_CP_2024_25.pdf#page=12&zoom=150%", "Secondary Computer Systems Management and Programming", "Leiria, Portugal", "09/2016 - 07/2019", "")
              ]
            } />
          </div>

            {/*
          <div className='break-inside-avoid no-print'>
            <RelocationSection Title={'Relocation & Work Authorization'}/>
          </div>
            */}

            {this.#GetCommunication()}
          </div>
      </div>
    );
  }
  
  GetSecondaryFrontEnd() 
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

          {this.GetAboutMe()}
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
                this.#ExperienceEntryObject("Independent", "", "Freelancing", "Remote", "10/2025 - Present", 
                  <ul>
                    <li class="bullet-li">Automated Content Pipeline Development (Unreal Engine).</li>
                    <li class="bullet-li">Procedural Asset Generation (Blueprints & Textures).</li>
                    <li class="bullet-li">PlayFab Content Management Integration.</li>
                    <li class="bullet-li">Asset Management & Configuration Tooling.</li>
                    <li class="bullet-li">Production Workflow Automation.</li>
                    <li class="bullet-li">Cross-Disciplinary Technical Integration.</li>
                    <li class="bullet-li">Development Tooling & Pipeline Optimization.</li>
                </ul>),
                this.#ExperienceEntryObject("Fracture Labs", "https://store.steampowered.com/app/1354980/Decimated/", "Gameplay Engineer", "Remote", "07/2022 - 07/2025", 
                  <ul>
                    <li class="bullet-li">Department Ownership (UI Development).</li>
                    <li class="bullet-li">Core Gameplay & Multiplayer Systems Ownership.</li>
                    <li class="bullet-li">User Interface Architecture & Development.</li>
                    <li class="bullet-li">UI and Gameplay Interaction Systems.</li>
                    <li class="bullet-li">Backend Player & Item Data Management.</li>
                    <li class="bullet-li">Development Pipeline & Tooling.</li>
                    <li class="bullet-li">System Architecture, Refactoring & Optimization.</li>
                    <li class="bullet-li">Performance Optimization (CPU & Memory).</li>
                    <li class="bullet-li">Audio Systems & Resource Management.</li>
                    <li class="bullet-li">Server-Side Scripting & Tooling.</li>
                    <li class="bullet-li">Module & Asset Dependency Analysis.</li>
                    <li class="bullet-li">Cross-Department Collaboration.</li>
                    <li class="bullet-li">Technical Mentorship.</li>
                    <li class="bullet-li">Autonomous Task Execution.</li>
                    <li class="bullet-li">Technical Documentation.</li>
                    <li class="bullet-li">Quality Assurance & Debugging.</li>
                    <li class="bullet-li">SCRUM & Agile Development.</li>
                    <li class="bullet-li">Development Progress Reporting.</li>
                </ul>)
              ]
            }/>
          </div>
          <div className='break-inside-avoid'>
            <ExperienceSection Title={"Education"} Objects=
            {
              [ 
                this.#ExperienceEntryObject("University of Leiria", "https://www.ipleiria.pt/curso/licenciatura-em-jogos-digitais-e-multimedia/", "Bachelor's Degree in Game Development", "Leiria, Portugal", "09/2020 - 07/2024", ""),
                this.#ExperienceEntryObject("ESDS", "http://www.esds.edu.pt/images/ano20232024/oferta_formativa_CP_2024_25.pdf#page=12&zoom=150%", "Secondary Computer Systems Management and Programming", "Leiria, Portugal", "09/2016 - 07/2019", "")
              ]
            } />
          </div>

            {/*
          <div className='break-inside-avoid no-print'>
            <RelocationSection Title={'Relocation & Work Authorization'}/>
          </div>
            */}

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