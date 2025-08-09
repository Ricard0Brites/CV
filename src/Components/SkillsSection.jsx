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
        if(!SVG)
        {
            return null;
        }


        return (
        <div 
        key={`Skill_${Key}`}
        className='dark:fill-zinc-200 h-[75px] w-[75px] m-4'
        dangerouslySetInnerHTML={{ __html: SVG }}></div>);
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