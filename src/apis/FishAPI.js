export function getAllFishList() {

    return new Promise((resolve, reject) => {

        fetch('https://acnhapi.com/v1/fish')
        .then(res => resolve(res.json()))
    });

}

