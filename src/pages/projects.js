import Maintenance from '../assets/under-maintenance.png';

const Projects = () => {

    return(

       <div className="Projects">
        
            <div className="projects__main">
                <img src={Maintenance} alt="under maintenance" class="under-construction"/>
                <h1 className="under-construction">Coming Soon!</h1>
                <p className="under-construction">This page is currently under construction as I am still polishing my projects list. Don't worry, you'll get to see them soonest! </p>
            </div>
        </div>
    )

}

export default Projects