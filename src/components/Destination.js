import Dubai from "../assets/dubai.jpg";
import Effiel from "../assets/effiel.jpg";
import Moscow from "../assets/moscow.jpg";
import Rome from "../assets/rome.jpg";
import "./Destination.css";

const Destination = () => {
    return(
        <div className="destination">
        <h1>Travel Destinations</h1>
        <p>You have the opportunity
             to see popular travel sites.</p>
        <div className="first-des">
            <div className="desc-text">
                <h2>Destination Name, Location</h2>
                <p>Components can be passed as props,
                    which stands for properties.
                    Props are like function arguments, 
                    and you send them into the component 
                    as attributes.
                    You will learn more about props in 
                    the next chapter.
                </p>
            </div>

            <div className="image">
                <img alt="" src={Moscow}/>
                <img alt="" src={Rome}/>
            </div>
        </div>
    </div>
    );
}

export default Destination;