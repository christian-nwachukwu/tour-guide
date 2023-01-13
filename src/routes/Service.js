import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServeImg from "../assets/de-Lourve-tour.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service (){
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero-service"
                heroImg={ServeImg}
                title="Service"
                btnClass="hind"
            />
            <Trip />
            <Footer />
        </>
    )
}

export default Service;