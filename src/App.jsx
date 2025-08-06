import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css'

import Header from './Components/Header/HeaderComponent'
import ProjectSection from './Pages/ProjectSection'

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

  #ProjectEntryObject(Image, Title, Description, Link) {
    return { Image: [Image], Title: [Title], Description: [Description], Link: [Link] };
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
          <ProjectSection Title="Projects"  Objects={
            [
              this.#ProjectEntryObject(
                "src/assets/GameEngineProjectCover.png",
                "Game Engine",
                `
                Custom lightweight 2D focused C++ Game Engine based on OpenGL
                <br></br>Built core systems: rendering pipeline, event system, input handling, collision detection, and entity management.
                <br></br>Optimized rendering for real-time performance, achieving 1500+ FPS uncapped in test environments.
                <br></br>Focused on modularity and maintainability for scalability.
                `,
                "https://github.com/Ricard0Brites/Game-Engine/tree/main")
            ]} />
        </div>
      </div>
    );
  }

  GetDevelopment() {
    return (
      <div className='w-full'>
        <Header />
        <div className='pl-40 pr-40'>
          {Badges.htmlBadge()}
        </div>
      </div>
    );
  }
}