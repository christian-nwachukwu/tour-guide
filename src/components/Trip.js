import "./Trip.css";
import TripData from "./TripData";
import Dest1 from "../assets/apisobd.jpg";
import Dest2 from "../assets/uae.jpg";
import Dest3 from "../assets/toronto.jpg";

function Trip() {
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
                <p>You can discover unique places
                    or destinations using Google maps</p>
            <div className="tripcard">
                <TripData
                    image={Dest1}
                    heading="Trip to Indonesia"
                    text="This is because we're rendering 
                    the content JSX only once using the 
                    ReactDOM.render method when the page 
                    is loaded. And we're not calling it again
                     – so even though the value of counter is 
                     updating, it's not getting displayed on 
                     the UI. So let's fix this."    
                />

                <TripData
                    image={Dest2}
                    heading="Trip to The Emirates"
                    text="This is because we're rendering 
                    the content JSX only once using the 
                    ReactDOM.render method when the page 
                    is loaded. And we're not calling it again
                     – so even though the value of counter is 
                     updating, it's not getting displayed on 
                     the UI. So let's fix this."    
                />

                <TripData
                    image={Dest3}
                    heading="Trip to Toronto, Canada"
                    text="This is because we're rendering 
                    the content JSX only once using the 
                    ReactDOM.render method when the page 
                    is loaded. And we're not calling it again
                     – so even though the value of counter is 
                     updating, it's not getting displayed on 
                     the UI. So let's fix this."    
                />
            </div>
        </div>
    );
}

export default Trip;