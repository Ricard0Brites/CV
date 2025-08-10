import { Component } from 'react'
import * as icons from"simple-icons"

export default class SkillsSection extends Component 
{
    
    #Skills = [];
    
    constructor(props) 
    {
        super(props);
        
        this.#Skills = props.Data;
        
        this.state = 
        {
            NumOfSkillsPerRow : this.#GetNumOfSkillIconsPerRow()
        }
        window.addEventListener('resize', ()=>
        { 
            this.setState({NumOfSkillsPerRow: this.#GetNumOfSkillIconsPerRow()});
        });
    }

    #GetNumOfSkillIconsPerRow()
    {
        if(window.innerWidth >= 1280) return 5;
        if(window.innerWidth >= 768) return 4;
        if(window.innerWidth >= 640) return 4;
        return 3;
    }

    #TryGetSimpleIcon(slug)
    {
        if(slug == '') 
            return null;

        try
        {
            const Cache = icons['si' + slug];

            if(!Cache) throw(Error);
            else
                return Cache.svg;
        }
        catch(Error)
        {
            console.log(Error);
        }
    }
    #MakeEntry(Slug, Rating, Key) 
    {
        let SVG = this.#TryGetSimpleIcon(Slug);

        return (
            <div key={'Skill_' + Key} className="group inline-flex flex-col items-center relative w-[75px]">
                {/* Icon */}
                <div
                    key={`Skill_${Key}`}
                    className="dark:text-zinc-200 dark:fill-zinc-200 text-zinc-600 fill-zinc-600  h-[75px] w-[75px] m-4 transition-transform duration-300 ease-in-out group-hover:scale-75"
                >
                    {typeof SVG === 'string' ? (<div dangerouslySetInnerHTML={{ __html: SVG }} />) :(<div className='h-full w-full'><i title={Slug} className={`text-7xl devicon-${Slug.toLowerCase()}-plain`} /></div>)}
                </div>

                {/* Dots container */}
                <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className={`h-2 w-2 rounded-full ${i < Rating ? 'bg-zinc-600 dark:bg-white' : 'bg-gray-300 dark:bg-zinc-600'}`}
                        />
                    ))}
                </div>
            </div>
        );
    }
    
    #GetAllEntriesHTML()
    {
        let content = [];
        let counter = 0;
        for(let entry of this.#Skills)
        {
            content.push(this.#MakeEntry(entry.slug, entry.rating, counter++));
        }
        return content;
    }
    render()
    {
        
        return(
            <div>
                
                <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
          
                <h1 className="text-2xl dark:text-zinc-200 text-zinc-600 pt-4">{this.props.Title}</h1>
                <hr className="w-[95%] sm:w-[100%] h-0.25 my-4 bg-gray-300 dark:bg-zinc-600 border-0 rounded-full"></hr>
                    <div className='flex flex-col pl-4 max-w-full flex-wrap justify-evenly pr-4'>
                        <div className='grid'
                        style={{ gridTemplateColumns: `repeat(${this.state.NumOfSkillsPerRow}, minmax(0, 1fr))` }}
                        >
                            {
                                this.#GetAllEntriesHTML()
                            }
                        </div>
                        
                    </div>
            </div>
        );
    }
}