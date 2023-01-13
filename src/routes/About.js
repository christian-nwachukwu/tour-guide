import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/photo-16.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/About";

function About (){
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero-about"
                heroImg={AboutImg}
                title="About"
                btnClass="hind"
            />
            <AboutUs />
            <Footer />
        </>
    )
}

export default About;