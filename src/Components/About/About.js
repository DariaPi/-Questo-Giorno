import { useState } from "react";
import restaurantData from "../../data/restaurantData";
import AboutItem from "./AboutItem";

const About = () => {
    const [aboutItemPic, setAboutItemPic] = useState(0);
    const [aboutPreviousPic, setAboutPreviousPic] = useState(restaurantData.length-1);
    const [aboutNextPic, setAboutNextPic] = useState(1);

    const {img, txt} = restaurantData[aboutItemPic];
    const previousBtn = () => {
        setAboutItemPic (about => {
            about --;
            if (about < 0) {about = restaurantData.length - 1};
            return (about);
        });
        setAboutPreviousPic (about => {
            about --;
            if (about < 0) {about = restaurantData.length - 1};
            return (about);
        });
        setAboutNextPic (about => {
            about --;
            if (about < 0) {about = restaurantData.length - 1};
            return (about);
        });
    }

    const nextBtn = () => {
        setAboutItemPic (about => {
            about ++;
            if (about > restaurantData.length - 1) {about = 0};
            return (about);
        });
        setAboutPreviousPic (about => {
            about ++;
            if (about > restaurantData.length - 1) {about = 0};
            return (about);
        });
        setAboutNextPic (about => {
            about ++;
            if (about > restaurantData.length - 1) {about = 0};
            return (about);
        });
    }

    return (
        <div className="App container">
            <h1>Questo giorno</h1>
            <div className="aboutBox">
                <AboutItem aboutItemPic={aboutPreviousPic}/>
                <button className="aboutBtn" onClick={previousBtn}>&laquo;</button>
                <img className="aboutPic" src={`./${img}.jpg`} alt={img} width="500px"/>
                <button className="aboutBtn" onClick={nextBtn}>&raquo;</button>
                <AboutItem aboutItemPic={aboutNextPic}/>
            </div>
            <p className="AbtTxt">{txt}</p>
        </div>
    )
}

export default About;

// Источник: https://schengen.rest/eng