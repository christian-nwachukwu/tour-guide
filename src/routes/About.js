import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/photo-16.jpg";
import Footer from "../components/Footer";

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
            <Footer />
        </>
    )
}

export default About;