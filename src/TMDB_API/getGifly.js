import {options, gifly_URI} from "./URI";

const getGifly = (search_word) => {
    let uri = `${gifly_URI}${search_word}`
    return fetch(uri, options)
        .then((response) => response.json())
        .then((data) => {
            return data.data[0].images.original.url

    })
        .catch((error) => {
            console.error("Get data error:", error);
            return [];
        });
};

export default getGifly;

