import React from "react";

class ClassConcept extends React.Component{
    constructor(props){
        super(props);
        console.log("I'm Constructor in this class!!!!")
        this.state = {
            planet : "earth",
        }
    }

    componentDidMount(){
        console.log("I'm ComponentsDidMount in out side constructor!!1");
        this.setState({
            planet : "Mars",
        })
    }

    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.description}</h2>
                <h1>{this.state.planet}</h1>
            </div>
        );
    }
    
}

export default ClassConcept;