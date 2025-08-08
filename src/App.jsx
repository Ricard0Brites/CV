import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css'

import Header from './Components/Header/HeaderComponent'
import ProjectSection from './Pages/ProjectSection'
import ExperienceSection from './Pages/ExperienceSection'


export default class App extends Component {

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
  #ExperienceEntryObject(CompanyName, Role, Location, Time, Description)
  {
    return {
      Company: CompanyName,
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

          

          <ExperienceSection Title={"Experience"} Objects=
          {
            [ 
              this.#ExperienceEntryObject("Fracture Labs", "Game Engineer", "Remote", "2022-2025", 
                `
                  Led development of the user interface for the game Decimated.
                  Built and maintained backend systems, optimized existing codebases, conducted technical research, produced internal documentation,
                  debugged and resolved complex issues, and managed user account systems via PlayFab.
                `),
              this.#ExperienceEntryObject("Arxi", "Web Development Intern", "Leiria - Portugal", "2019-2019", "Designed and developed a fully functional web application using Django.")
            ]
          }/>

          <ExperienceSection Title={"Education"} Objects=
          {
            [ 
              this.#ExperienceEntryObject("Polytechnic Institute of Leiria School of Technology and Management", "Bachelor's Degree in Game Development", "Leiria - Portugal", "2020-2024", "Practice-focused degree covering game programming, computer graphics, game design, and AI with industry tools such as Unreal Engine, Unity, and C++"),
              this.#ExperienceEntryObject("Dominguos Sequeira High School", "Computer Systems Management and Programming", "Leiria - Portugal", "2016-2019", "Technical secondary education focused on software development, system administration, and database management. Covered programming fundamentals (C, VB, SQL), network configuration, operating systems, and IT project workflows.")
            ]
          } />

          <ExperienceSection Title={"Languages"} Objects=
          {
            [ 
              this.#ExperienceEntryObject("Portuguese", "Fluent", "", "", ""),
              this.#ExperienceEntryObject("English", "Fluent", "", "", ""),
            ]
          } />

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
                "https://github.com/Ricard0Brites/Game-Engine/tree/main")
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