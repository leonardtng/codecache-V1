import React from 'react';
import ProjectCard from './ProjectCard';
import '../css/ProjectSpace.css';
import projects from '../data/projects'

const ProjectSpace: React.FC = () => {
  const ProjectItems = projects.map((project) =>
    <div key={project.id.toString()}>
      <ProjectCard id={project.id} img={project.img} name={project.name}/>
    </div>
  );
  return (
    <div className='row'>
      {ProjectItems}
    </div>
  )
}

export default ProjectSpace