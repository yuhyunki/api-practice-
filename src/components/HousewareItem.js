import { Link } from 'react-router-dom';

function HousewareItem({ item }) {

    console.log(item);

    return (
        <div>
            {/* <h3>{houseware[0]['name']['name-KRko']}</h3> */}
            <h3>{item[0]['name']['name-KRko']}</h3>
        </div>
    )
}

export default HousewareItem;