import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../assets/photo-18.jpg";
import Footer from "../components/Footer";

function Contact (){
    return(
        <>
            <Navbar />
            <Hero 
                cName="hero-contact"
                heroImg={ContactImg}
                title="Contact"
                btnClass="hind"
            />
            <Footer />
        </>
    )
}

export default Contact;