import axios from "axios";

export const getAllMarvelProducts = async (typeProduct) => {
    var result = [];
    let today = new Date();
    await axios({
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/${typeProduct}?api_key=a4e5d80efb3a4da13c7d7dc831c8e64a&language=en-US&page=1&with_companies=420&sort_by=primary_release_date.desc`
    })
    .then(res => {
        result = res.data.results.filter(film => {
            let dateFilm = new Date(film.release_date);
            return dateFilm.getTime() >= today.getTime();
        })
    })
    return result.reverse();
}

export const calDaysBetweenDates = (finalDate) => {
    let today = new Date();
    let dateFilm = new Date(finalDate);
    let differenceInTime = dateFilm.getTime() - today.getTime();
    let differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
}