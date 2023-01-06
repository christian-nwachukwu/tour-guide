import Dubai from "../assets/dubai.jpg";
import Effiel from "../assets/effiel.jpg";
import Moscow from "../assets/moscow.jpg";
import Rome from "../assets/rome.jpg";
import DestinationData from "./DestinationData";
import "./Destination.css";


const Destination = () => {
    return(
        <div className="destination">
            <h1>Travel Destinations</h1>
            <p>You have the opportunity
             to see popular travel sites.</p>

            <DestinationData
                className="first-des"
                heading="Destination Name, Location"
                text="Components can be passed as props,
                which stands for properties.
                Props are like function arguments, 
                and you send them into the component 
                as attributes.
                You will learn more about props in 
                the next chapter."
                img1={Dubai}
                img2={Moscow}
            />

            <DestinationData
                className="first-des-reverse"
                heading="2nd Destination Name, Location"
                text="Components can be passed as props,
                which stands for properties.
                Props are like function arguments, 
                and you send them into the component 
                as attributes.
                You will learn more about props in 
                the next chapter."
                img1={Effiel}
                img2={Rome}
            />
        </div>
    );
}

export default Destination;