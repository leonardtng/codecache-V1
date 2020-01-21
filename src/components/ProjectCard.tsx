import React from 'react';
import '../css/ProjectCard.css';

interface Props {
  id: number;
  img: string;
  name: string;
}

const ProjectCard: React.FC<Props> = (props) => {
  return (
    <div className="col-md-3">
      <div className="cards" id={props.id.toString()}>
        <div className="card card-dimensions">
          <img className="card-img-top image-dimensions" src={props.img} alt="ProjectCard" />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="../App.tsx" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard