import { useState, useEffect } from 'react';
import { getAllHousewareList } from '../apis/HousewareAPI';
import HousewareItem from '../components/HousewareItem';

function Houseware() {

    const [housewareList, setHousewareList] = useState([]);
    // const [houseware, setHouseware] = useState({});

    useEffect(
        () => {
            async function fetchData() {


                if (localStorage.getItem('acnhHouseware') != null) {

                    console.log('데이터가 이미 있다.')

                    // console.log(Object.keys(houseware));
                } else {

                    const temp = await getAllHousewareList();

                    localStorage.setItem('acnhHouseware', JSON.stringify(temp));

                    console.log('데이터가 없었다...')
                }

                const houseware = (JSON.parse(localStorage.getItem('acnhHouseware')));


                // console.log(temp);

                const arr = [];
                for (var key in houseware) {
                    arr.push(houseware[key]);
                }

                // console.log(arr);

                setHousewareList(arr);



            }

            fetchData();
            // console.log(houseware);
            // console.log(housewareList);
            // console.log(housewareList[0]);
            // console.log(housewareList[0][0]['internal-id']);
        },
        []
    )

    return (
        <>
            <h1>Houseware</h1>
            <div>
                {housewareList.map(item => <HousewareItem key={item[0]['internal-id']} item={item} />)}
            </div>
        </>
    );
}

export default Houseware;