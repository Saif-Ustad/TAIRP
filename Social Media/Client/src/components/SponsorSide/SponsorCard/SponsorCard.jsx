import "./SponsorCard.scss";
import SponsorImg from "../../../images/sponsor.jfif";

function SponsorCard() {
    return (
        <div className="sponsorCard">
            <div className="title">
                <h3>Sponsored </h3>
                <h5>Create Ad</h5>
            </div>
            <img src={SponsorImg} alt="sponsorImg" />
            <div className="subTitle">
                <h3>Lackme</h3>
                <h5>www.lackme.com</h5>
            </div>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
            </h5>
        </div>
    );
}

export default SponsorCard;