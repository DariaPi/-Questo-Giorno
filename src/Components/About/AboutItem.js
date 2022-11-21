import restaurantData from "../../data/restaurantData";

const AboutItem = ({aboutItemPic}) => {
    const {img} = restaurantData[aboutItemPic];

    return (
        <div>   
            <img src={`./${img}.jpg`} alt={img} className="otherPic" width="400px"/>
        </div>
    )
}

export default AboutItem;