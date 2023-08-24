import "./Home.scss";
import Hero from "../Hero/Hero";
import Trend from "../Trend/Trend";
import Movies from "../Movies/Movies";
import Banner from "../Banner/Banner";

function Home() {

    return (
        <>
        <Hero />
        <Trend />
        <Movies />
        <Banner />
        </>
    );
}

export default Home;