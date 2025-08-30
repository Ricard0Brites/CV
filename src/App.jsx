import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css'

import Header from './Components/Header/HeaderComponent'
import ProjectSection from './Components/ProjectSection'
import ExperienceSection from './Components/ExperienceSection'
import SkillsSection from './Components/SkillsSection';
import RelocationSection from './Pages/RelocationSection';
import AboutMeSection from './Components/MeSection';

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
    {slug: "Tailwindcss", rating:3, DisplayText:"Tailwind"},
    {slug: "Javascript", rating:4, DisplayText:"Javascript"},
    {slug: "Typescript", rating:3, DisplayText:"Typescript"},
    {slug: "React", rating:3, DisplayText:"React"},
    {slug: "Nodedotjs", rating:3, DisplayText:"Node.JS"},
    {slug: "Django", rating:3, DisplayText:"Django"},
   // {slug: "Googledrive", rating:3},
    //{slug: "Googleauthenticator", rating:3},
   //{slug: "Notion", rating:4},
    {slug: "Linux", rating:5, DisplayText:"Linux Terminal"},
    {slug: "Windows11", rating:5, DisplayText:"Windows"},
    {slug: "Visualstudio", rating:4, DisplayText:"Visual Studio"},
    {slug: "Vscode", rating:3, DisplayText:"Visual Studio Code"},
    //{slug: "Pycharm", rating:3},
    //{slug: "Ssh", rating:4},
];


export default class App extends Component 
{
  render() {
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
        <Route path="/" element={this.GetFrontEnd()} />
        <Route path="Development/" element={this.GetDevelopment()} />
      </Routes>

      </div>
    );
  }

  /**
   * 
   * @param { string }Image - Path To Image
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

          <AboutMeSection Title={"About Me"} Name={'Ricardo Brites - 24'} PhotoPath={'src\\assets\\RicardoBritesPhoto.png'} Description={'Adaptable C++ developer focused on clean, maintainable systems. Passionate about learning, problem-solving, and contributing to meaningful game experiences.'}/>
          <ExperienceSection Title={"Experience"} Objects=
          {
            [ 
              this.#ExperienceEntryObject("Fracture Labs", "https://decimated.net/", "Game Engineer", "Remote", "2022-2025", 
                `
                  Led development of the user interface for the game Decimated.
                  Built and maintained backend systems, optimized existing codebases, conducted technical research, produced internal documentation,
                  debugged and resolved complex issues, and managed user account systems via PlayFab.
                `),
              this.#ExperienceEntryObject("Arxi", "https://www.arxi.pt/en_US", "Web Development Intern", "Leiria - Portugal", "2019-2019", "Designed and developed a fully functional web application using Django.")
            ]
          }/>

          <ExperienceSection Title={"Education"} Objects=
          {
            [ 
              this.#ExperienceEntryObject("Polytechnic Institute of Leiria School of Technology and Management", "https://www.ipleiria.pt/curso/licenciatura-em-jogos-digitais-e-multimedia/", "Bachelor's Degree in Game Development", "Leiria - Portugal", "2020-2024", "Practice-focused degree covering game programming, computer graphics, game design, and AI with industry tools such as Unreal Engine, Unity, and C++"),
              this.#ExperienceEntryObject("Dominguos Sequeira High School", "http://www.esds.edu.pt/images/ano20232024/oferta_formativa_CP_2024_25.pdf#page=12&zoom=150%", "Computer Systems Management and Programming", "Leiria - Portugal", "2016-2019", "Technical secondary education focused on software development, system administration, and database management. Covered programming fundamentals (C, VB, SQL), network configuration, operating systems, and IT project workflows.")
            ]
          } />

          <RelocationSection Title={'Relocation & Work Authorization'}/>

          
          <div className='print-only'>
          <br />
          <br />
          <br />
          <br />
          </div>

          <ExperienceSection Title={"Communication"} Objects=
          {
            [ 
              this.#ExperienceEntryObject("Portuguese","", "Native", "", "", ""),
              this.#ExperienceEntryObject("English", "", "Fluent", "CEFR C2", "", ""),
            ]
          } />

          <SkillsSection 
            Title={"Skills"} 
            Data = {SkillsList} 
          />

          <ProjectSection Title="Projects"  Objects=
          {
            [
              this.#ProjectEntryObject(
                "src/assets/GameEngineProjectCover.png",
                "C++ Game Engine",
                `
                Custom lightweight 2D focused C++ Game Engine based on OpenGL
                <br></br>Built core systems: rendering pipeline, event system, input handling, collision detection, and entity management.
                <br></br>Optimized rendering for real-time performance, achieving 1500+ FPS uncapped in test environments.
                <br></br>Focused on modularity and maintainability for scalability.
                `,
                "https://github.com/Ricard0Brites/Game-Engine/tree/main"),
                this.#ProjectEntryObject(
                "src/assets/CVWebsiteProjectCover.png",
                "Curriculum Website",
                `
                  <br></br>Developed a responsive single-page portfolio showcasing projects, skills, and experience.
                  <br></br>Implemented React components styled with TailwindCSS.
                `,
                "https://github.com/Ricard0Brites/cv-website/tree/one-pager"),
              this.#ProjectEntryObject(
                "src/assets/JSONEditorProjectCover.png",
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