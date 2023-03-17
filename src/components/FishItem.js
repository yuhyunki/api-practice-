import { Link } from 'react-router-dom';

function FishItem({ fish }) {

    console.log(fish);

    return (
        <div>
            <img src={fish['icon_uri']}/>
            <h3>{fish.name['name-KRko']}</h3>
            <label>{fish.availability.location}</label>
        </div>
    )
}

export default FishItem;