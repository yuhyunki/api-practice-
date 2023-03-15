import { Link } from 'react-router-dom';

function FishItem({ fish }) {

    return (
        <div>
            <h3>{fish.name['name-KRko']}</h3>
        </div>
    )
}

export default FishItem;