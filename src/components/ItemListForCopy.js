import { useContext, useEffect, useState } from "react";
import { CheckContext } from "../pages/Houseware";
import '../components/ItemListForCopy.css';

function ItemListForCopy() {

    const {checkList} = useContext(CheckContext);

    let string = '';
    

    const checkListToString = () => {

        if(checkList.length < 1) {
            return '';
        }

        for(var key in checkList) {
            let newItem = `[${checkList[key]['name']['name-KRko']}] \n색상 : ${checkList[key]['variant']? checkList[key]['variant']: '(없음)'} \n리폼 여부 : ${checkList[key]['isDIY']? '가능': '불가능'} \n획득처 : ${checkList[key]['source']} \n카탈로그 여부 : ${checkList[key]['isCatalog']? '가능': '불가능'} \n\n`;
            // console.log(key);
            string += newItem;
        }

        return string;
    };

    return (
        <div className="Container">
            <textarea name='checkList' value={checkListToString()} rows='10' readOnly></textarea>
        </div>
    )
}

export default ItemListForCopy;