import Dubai from "../assets/dubai.jpg";
import Effiel from "../assets/effiel.jpg";
import Moscow from "../assets/moscow.jpg";
import Rome from "../assets/rome.jpg";
import { Component } from "react";
import "./Destination.css";

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="desc-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>

                <div className="image">
                    <img alt="img" src={this.props.img1}/>
                    <img alt="img" src={this.props.img2}/>
                </div>
            </div>
        )
    }
}

export default DestinationData;