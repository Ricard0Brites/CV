import React, { Component, useEffect } from 'react'
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
    {slug: "Dotnet", rating:4, DisplayText:".NET"},
    {slug: "Opengl", rating:2, DisplayText:"OpenGL"},
    {slug: "Python", rating:3, DisplayText:"Python"},
    {slug: "azuresqldatabase", rating:3, DisplayText:"SQL"},
    {slug: "Unity", rating:3, DisplayText:"Unity"},
    {slug: "Jira", rating:4, DisplayText:"Jira"},
    {slug: "Confluence", rating:4, DisplayText:"Confluence"},
    {slug: "Figma", rating:3, DisplayText:"Figma"},
    {slug: "Git", rating:3, DisplayText:"Git"},
    {slug: "Github", rating:3, DisplayText:"Github"},
    {slug: "Perforce", rating:4, DisplayText:"Perforce"},
    {slug: "Html5", rating:3, DisplayText:"HTML"},
    {slug: "Css", rating:3, DisplayText:"CSS"},
    //{slug: "Tailwindcss", rating:3, DisplayText:"Tailwind"},
    {slug: "Javascript", rating:4, DisplayText:"Javascript"},
    {slug: "Typescript", rating:3, DisplayText:"Typescript"},
    {slug: "React", rating:3, DisplayText:"React"},
    {slug: "Nodedotjs", rating:3, DisplayText:"Node.JS"},
    //  {slug: "Django", rating:3, DisplayText:"Django"},
    // {slug: "Googledrive", rating:3},
    // {slug: "Googleauthenticator", rating:3},
    // {slug: "Notion", rating:4},
    {slug: "Linux", rating:5, DisplayText:"Linux Terminal"},
    {slug: "Windows11", rating:5, DisplayText:"Windows"},
    {slug: "Visualstudio", rating:4, DisplayText:"Visual Studio"},
    {slug: "Vscode", rating:3, DisplayText:"Visual Studio Code"},
    // {slug: "Pycharm", rating:3},
    // {slug: "Ssh", rating:4},
];


export default class App extends Component 
{
   componentDidMount() {
    this.scrollToHashWithRetry();
    window.addEventListener("hashchange", this.scrollToHashWithRetry);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.scrollToHashWithRetry);
  }

  scrollToHashWhenReady = () => {
  const id = window.location.hash.slice(1);
  if (!id) return;

  const tryScroll = () => {
    const el = document.getElementById(id);
    if (!el) {
      // Element not yet in DOM → try again soon
      setTimeout(tryScroll, 50);
      return;
    }

    // Wait for layout/paint before scrolling
    requestAnimationFrame(() => {
      // Optionally repeat once to ensure smooth scroll
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth" });
      });
    });
  };
    tryScroll();
  };

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
   * @param { string } Description - Description of functions eg: "Mopped the floors"
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
              Description={`Generalist Unreal Engine Developer with 3+ years of professional experience and a published AAA Web3 game. Proficient in Gameplay Ability System, Gameplay Tags, 
                multiplayer replication, and UI development. Experienced with Perforce and Atlassian tools. Fast learner focused on building maintainable, performant game systems.`}
            />
          </div>

          <div className='break-inside-avoid'>
            <ExperienceSection Title={"Experience"} Objects=
            {
              [ 
                this.#ExperienceEntryObject("Fracture Labs", "https://decimated.net/", "Game Engineer", "Remote", "2022-2025", 
                  `<ul>
                      <li class='bullet-li'>Implemented the player survival stat system (Water, Food, Blood, Health) with fully replicated logic and synchronized UI.</li>

                      <li class='bullet-li'>Expanded the weapon system with new gameplay stats, UI-exposed data, interaction logic, and a modular sound-implementation pipeline supporting gunplay features and designer iteration.</li>

                      <li class='bullet-li'>Built internal systems enabling the sound designer to integrate menu and UI SFX efficiently, accelerating iteration workflows.</li>

                      <li class='bullet-li'>Optimized the vehicle and engine audio pipeline, eliminating idle-instance overflow and improving performance and clarity by ~850% through dynamic instance management.</li>

                      <li class='bullet-li'>Created the complete circular gauge vehicle dashboard UI (Speed, Fuel, Nitro) using custom materials.</li>

                      <li class='bullet-li'>Overhauled the entire input system, consolidating actions and integrating them into a scalable settings framework with clean rebinding support.</li>

                      <li class='bullet-li'>Conducted technical research and produced internal documentation for the redesigned input system, improving onboarding and cross-team understanding.</li>

                      <li class='bullet-li'>Designed and implemented the in-game map UI with dynamic player markers, objective indicators, and real-time updates driven by replicated game data.</li>

                      <li class='bullet-li'>Developed PlayFab cloud scripts to reset and manage player stats across all accounts, improving debugging, QA workflows, and live-ops maintenance.</li>

                      <li class='bullet-li'>Implemented features inside standalone Unreal Engine plugins, managing build.cs dependencies, avoiding forbidden references, and maintaining clean module separation.</li>
                 
                  </ul>`),
                this.#ExperienceEntryObject("Arxi", "https://www.arxi.pt/en_US", "Web Development Intern", "Leiria - Portugal", "2019-2019", "Designed and developed a fully functional web store using Django.")
              ]
            }/>
          </div>
          <div className='break-inside-avoid'>
            <ExperienceSection Title={"Education"} Objects=
            {
              [ 
                this.#ExperienceEntryObject("Polytechnic Institute of Leiria School of Technology and Management", "https://www.ipleiria.pt/curso/licenciatura-em-jogos-digitais-e-multimedia/", "Bachelor's Degree in Game Development", "Leiria - Portugal", "2020-2024", "Practice-focused degree covering game programming, computer graphics, game design, and AI with industry tools such as Unreal Engine, Unity, and C++"),
                this.#ExperienceEntryObject("Domingos Sequeira High School", "http://www.esds.edu.pt/images/ano20232024/oferta_formativa_CP_2024_25.pdf#page=12&zoom=150%", "Computer Systems Management and Programming", "Leiria - Portugal", "2016-2019", "Technical secondary education focused on software development, system administration, and database management. Covered programming fundamentals (C, VB, SQL), network configuration, operating systems, and IT project workflows.")
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
          
          <div className='break-inside-avoid'>
            <SkillsSection 
              Title={"Skills"} 
              Data = {SkillsList} 
            />
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
                    Implemented core gameplay systems including the fully replicated player survival stats (Water, Food, Blood, Health) with synchronized UI.
                    <br></br>Expanded the weapon framework with new gameplay attributes, designer-exposed data, improved interaction logic, and a modular audio pipeline for firearms.
                    <br></br>Optimized vehicle and engine audio, reducing idle-instance overflow and improving runtime performance and clarity by ~850% through dynamic instance control.
                    <br></br>Built the circular vehicle dashboard UI (speed, fuel, nitro) using custom materials and events.
                    <br></br>Reworked the input system, centralizing actions and enabling clean, scalable key-rebinding support.
                    <br></br>Developed the in-game map UI with dynamic player markers and replicated objective indicators.
                    <br></br>Created PlayFab cloud scripts for account stat resets and maintenance workflows.
                    <br></br>Modified multiple Unreal Engine plugin features while maintaining clean module separation and proper build.cs dependency hygiene.`,
                  "https://store.epicgames.com/en-US/p/decimated-de8da4"),
                this.#ProjectEntryObject(UnrealBehaviorTreeImage, "Replicated AI Pathing And Enemy Detection",
                  `Built an AI system featuring replicated pathing, perception-based enemy detection, and state-driven behavior (patrolling, suspicious, and alert).
                  <br></br>Developed using Unreal Engine's Behavior Trees with a custom C++ asynchronous task callable in blueprints running at adjustable intervals for optimized performance.
                  <br></br>Implemented dynamic floating UI to display NPC awareness states in real time.
                  <br></br>Integrated with Unreal's Game Animation Sample project, 
                  combining C++ logic, Blueprints, and replicated behaviors for networked multiplayer scenarios.`,
                  "https://github.com/Ricard0Brites/AI_Demo"),
                this.#ProjectEntryObject(
                  GameEngineCover,
                  "C++ Game Engine",
                  `
                  Custom lightweight 2D focused C++ Game Engine using OpenGL
                  <br></br>Built core systems: rendering pipeline, event system, input handling, collision detection, and entity management.
                  <br></br>Optimized rendering for real-time performance, achieving 1500+ FPS uncapped in development environments.
                  `,
                  "https://github.com/Ricard0Brites/Game-Engine/tree/main"),
                  this.#ProjectEntryObject(
                  CVCover,
                  "Curriculum Website",
                  `
                    <br></br>Developed a responsive single-page portfolio showcasing projects, skills, and experience.
                    <br></br>Implemented React components styled with TailwindCSS.
                  `,
                  "https://github.com/Ricard0Brites/cv-website/tree/one-pager"),
                this.#ProjectEntryObject(
                  JSONEditorCover,
                  "WPF JSON Editor (MVVM)",
                  `
                  JSON Editor application built with WPF in C# using the MVVM pattern.
                  <br></br>Implements data binding, commands, and observable collections for responsive UI updates.
                  <br></br>Supports creating, editing, and validating JSON structures with real-time feedback.
                  `,
                  "https://github.com/Ricard0Brites/JSON_Editor/tree/main")
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