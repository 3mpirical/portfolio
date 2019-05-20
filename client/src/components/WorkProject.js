import React from "react";


class WorkProject extends React.Component {
    state = { mousedOver: false }

    vidRef = React.createRef();

    onMouseOver = (event) => {
        this.vidRef.current.play()
    }

    onMouseEnter = (event) => {
        this.vidRef.current.play()
    }

    onMouseLeave = (event) => {
        this.vidRef.current.pause()
    }


    render() {
        const { project, currentProject, index, setCurrentProject } = this.props;
        return (
            <div 
                className={
                    currentProject === index
                    ? "project project__selected"
                    : "project"
                }
                onClick={() => setCurrentProject(index)}
            >
                <div 
                    className="project__image-container" 
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave} >
                    <video 
                        loop
                        src={require(`../videos/${project.video}`)} 
                        alt="project" 
                        className="project__video-thumbnail"
                        ref={this.vidRef}
                    ></video>
                </div>
            </div>
        )
    }
}


export { WorkProject };