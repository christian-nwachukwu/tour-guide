import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home (){
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1670731951987-3eb3c219f7fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExNnw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                title="Your Journey Your Story"
                text="Choose Your Favorite Destinations."
                buttonText="Travel Plans"
                btnClass="show"
                url="/"
            />
            <Destination />
            <Trip />
            <Footer />
        </>
    )
}

export default Home;