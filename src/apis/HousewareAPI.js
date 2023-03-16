export function getAllHousewareList() {

    return new Promise((resolve, reject) => {

        fetch('https://acnhapi.com/v1/houseware')
        .then(res => resolve(res.json()))
    });

}

