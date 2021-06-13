import React, {useState, useEffect, createContext } from "react";


export const AnimePopularContext = createContext();

export const PopularProvider = (props) => {
	const [popular, setPopular] = useState([]);

    const GetPopAnime = async () => {
		const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/favorite`)
        .then(data => data.json());

	  	setPopular(temp.top.slice(0, 7));
	}

    useEffect(() => {
		GetPopAnime();
	}, []);



    return (
        <AnimePopularContext.Provider value={[popular, setPopular]}  >
           {props.children}
        </AnimePopularContext.Provider>
    )
}
