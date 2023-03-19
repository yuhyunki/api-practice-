import { useContext, useState } from 'react';
import { CheckContext } from '../pages/Houseware';
import itemStyle from './HousewareItem.module.css';

function HousewareItem({ item }) {

    const { checkList, setCheckList } = useContext(CheckContext);

    const [index, setIndex] = useState(0);

    let arr = [];

    const onClickHandler = (e) => {
        setIndex(item.findIndex(i => i.variant == e.target.value))
    }

    const onChangeHandler = e => {
        if (e.target.checked) {
            setCheckList([
                ...checkList, item[index]
            ]);

        } else {
            const i = checkList.indexOf(item[index]);
            const x = checkList.splice(i, 1);

            setCheckList([
                ...checkList.slice(0, i), ...checkList.slice(i)
            ]);

        }
    }

    return (
        <div className={itemStyle.Whole}>
            <div className={itemStyle.Container}>
                <img src={item[index]['image_uri']} style={{ width: '100px' }} />
                <div className={itemStyle.Info}>
                    <div className={itemStyle.Texts}>
                        <h3>{item[index]['name']['name-KRko']}</h3>
                        <h4>DIY : {item[index]['isDIY'] ? '가능' : '불가능'}</h4>
                        <h4>카탈로그 : {item[index]['isCatalog'] ? '가능' : '불가능'}</h4>
                    </div>
                    <div className={itemStyle.Checkbox}>
                        <input
                            type={'checkbox'}
                            value={item[index]['name']['name-KRko']}
                            onChange={onChangeHandler}
                            style={{ zoom: '1.5' }}
                        />
                    </div>
                </div>
            </div>
            <div >
                {item.map(variation => <button value={variation.variant} onClick={onClickHandler} className={itemStyle.Variants}>{variation.variant}</button>)}
            </div>
        </div>
    )
}

export default HousewareItem;