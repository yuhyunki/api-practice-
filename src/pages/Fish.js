import { useState, useEffect } from 'react';
import { getAllFishList } from "../apis/FishAPI";
import FishItem from '../components/FishItem';
import './Fish.css';

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
            <div className="Fish">
                <h1 className="currentFish">지금 잡을 수 있는 물고기 목록</h1>
                <div className="FishList">
                    {fishList.map(fish => <FishItem key={fish.id} fish={fish} />)}

                </div>
            </div>
        </>
    );
}

export default Fish;