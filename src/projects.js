import React from 'react';
import './projects.css';
import { Button } from 'react-bootstrap';

class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.nextHandle = this.nextHandle.bind(this);
    }

    state = {
        source: require('./images/overdue.png'),
        name: "Overdue",
        about: "Counting your monthly expenses",
    }

    nextHandle() {
        alert("Working!")
        this.setState({
            source: require ('./images/linkedin.png'),
            name: "Time Traveler",
            about: "Counting your monthly expenses",
        });
    }

    render() {
        console.log("This should be printed in console!");
        return (
            <div className="App">
        
                <div style={{ left: 0, backgroundColor: '#fff'}} className="split">
                    <img src={this.state.source} className="mockupImg"></img>
                </div>
        
                <div style={{ right: 0, backgroundColor: '#0000' }} className="split">
                    <h1 className="title">{this.state.name}</h1>
                    <p className="about">{this.state.about}</p>
                </div>

                <Button onClick={ () => ({
                })} className="next">
                    Press This!
                </Button>
        
            </div>
            );
    }

}

export default Projects;
