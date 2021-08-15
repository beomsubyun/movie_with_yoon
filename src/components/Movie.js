import React from "react";
import "./Movie.css";

function Movie({ id, backgroundPoster, title, avgRating, genre }) {
  const containerStyle = {
    backgroundImage: `url(${backgroundPoster})`,
  };

  const genreSorted = genre.slice(0, 2);

  return (
    <div className="movies__container" style={containerStyle}>
      <div className="gradation"></div>
      <div className="movies__info">
        <h2 className="movies__title">{title}</h2>
        <div className="movies__info__sub">
          <p>{`${genreSorted[0]}, ${genreSorted[1]}`}</p>
          <div className="rate__container">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.21468 0.878116C7.30449 0.601722 7.69551 0.601722 7.78532 0.878115L9.1165 4.97508C9.15666 5.09868 9.27185 5.18237 9.40182 5.18237H13.7096C14.0002 5.18237 14.1211 5.55426 13.886 5.72508L10.4009 8.25714C10.2957 8.33353 10.2517 8.46894 10.2919 8.59255L11.6231 12.6895C11.7129 12.9659 11.3965 13.1957 11.1614 13.0249L7.67634 10.4929C7.57119 10.4165 7.42881 10.4165 7.32366 10.4929L3.83858 13.0249C3.60347 13.1957 3.28712 12.9659 3.37693 12.6895L4.70811 8.59255C4.74827 8.46894 4.70428 8.33353 4.59913 8.25714L1.11405 5.72508C0.878932 5.55426 0.999764 5.18237 1.29038 5.18237H5.59818C5.72815 5.18237 5.84334 5.09868 5.8835 4.97508L7.21468 0.878116Z"
                fill="#9E9EA4"
              />
            </svg>
            <p>{avgRating}/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
