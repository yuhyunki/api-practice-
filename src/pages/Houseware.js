import { useState, useEffect, createContext } from 'react';
import { getAllHousewareList } from '../apis/HousewareAPI';
import HousewareItem from '../components/HousewareItem';
import housewareStyle from './Houseware.module.css';
import InspoImage from '../components/InspoImage';
import ItemListForCopy from '../components/ItemListForCopy';

export const CheckContext = createContext(null);

function Houseware() {

    const [housewareList, setHousewareList] = useState([]);

    const [checkList, setCheckList] = useState([]);

    useEffect(
        () => {
            async function fetchData() {


                if (localStorage.getItem('acnhHouseware') != null) {

                    console.log('데이터가 이미 있다.')
                } else {

                    const temp = await getAllHousewareList();

                    localStorage.setItem('acnhHouseware', JSON.stringify(temp));

                    console.log('데이터가 없었다...')
                }

                const houseware = (JSON.parse(localStorage.getItem('acnhHouseware')));

                const arr = [];
                for (var key in houseware) {
                    arr.push(houseware[key]);
                }

                setHousewareList(arr);
            }

            fetchData();
        },
        []
    )

    return (
        <>
            <CheckContext.Provider value={{ checkList, setCheckList }}>
                <div className={housewareStyle.Container}>
                    <div className={housewareStyle.InspoContainer}>
                        <h1 className={housewareStyle.Title}>원하는 참고용 이미지를 올려보세요!</h1>
                        <InspoImage />
                        <ItemListForCopy />
                    </div>
                    <div className={housewareStyle.ItemList}>
                        <h1 className={housewareStyle.Title}>가구</h1>
                        {housewareList.map(item => <HousewareItem key={item[0]['internal-id']} item={item} />)}
                    </div>
                </div>
            </CheckContext.Provider>
        </>
    );
}

export default Houseware;