import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/photo-16.jpg";

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
        </>
    )
}

export default About;