const getCharactersData = async (url) => {
    let error = null;
    let isLoaded = false;
    let items = [];

    await fetch(url)
        .then((res) => res.json())
        .then(
            (result) => {
                isLoaded = true;
                items = result.results;
            },

            (resultError) => {
                isLoaded = true;
                error = resultError;
            },
        );

    if (error) {
        return error.message;
    } else if (!isLoaded) {
        return console.log("loading...");
    } else {
        return items;
    }
};

export default getCharactersData;
