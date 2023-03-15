import { useState, useEffect } from 'react';
import { getAllFishList } from "../apis/FishAPI";
import FishItem from '../components/FishItem';

function Fish() {

    const [fishList, setFishList] = useState([]);

    useEffect(
        () => {
            async function fetchData() {

                const temp = await getAllFishList();

                const arr = [];
                for (var key in temp) {
                    arr.push(temp[key]);
                }

                setFishList(arr);
            }

            fetchData();
        },
        []
    )

    return (
        <>
            <h1>fish</h1>
            <div>
                {fishList.map(fish => <FishItem key={fish.id} fish={fish} />)}

            </div>
        </>
    );
}

export default Fish;