// import React, { useState, useEffect } from "react";
// import DetailsPage from "../../components/detailPage/DetailsPage";
// import { useDispatch, useSelector } from "react-redux";
// import "./random.css";
// // import { fetchAnimes } from "../../redux/actions/animeAction";

// const AnimeDetails = () => {
//   const dispatch = useDispatch();
//   const [query, setQuery] = useState("k");

//   const random = () => {
//     let num = Math.floor(Math.random() * 100);
//     return num;
//   };

//   useEffect(() => {
//     setId(random());
//     // dispatch(fetchAnimes(query, id));
//   }, [query]);
//   return (
//     <div>
//       <div className="a-container">
//         <div className="cover">
//           <img
//             src="https://4anime.to/static/Dr1FzAv.jpg"
//             alt="background"
//             className="bg"
//           />
//         </div>

//         <div className="s-list">
//           <DetailsPage
//             className="SearchCard__style"
//             key={mal_id}
//             title={title}
//             img={image_url}
//             synopsis={synopsis}
//             type={type}
//             score={score}
//             episodes={episodes}
//             rated={rated}
//           />
//         </div>
//         <div className="details"></div>
//       </div>
//     </div>
//   );
// };

// export default AnimeDetails;
