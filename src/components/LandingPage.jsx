import ContentPurpose from "./ContentPurpose";
import ContentProduct from "./ContentProduct";
import CTA from "./CTA";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import BackgroundBlurry from "./BackgroundBlurry";

const LandingPage = () => {
    return (
        <div >
            {/* Hero */}
            <BackgroundBlurry />
            <ContentPurpose />
            <ContentProduct />
            <CTA />
            <Testimonial />
            <Footer />
        </div>
    );
}

export default LandingPage;