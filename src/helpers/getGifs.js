

export const getGifs = async( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=10&api_key=Mdo31WFMfC9ko6oEFt0B7DK6v4BX9ARy`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs;
}