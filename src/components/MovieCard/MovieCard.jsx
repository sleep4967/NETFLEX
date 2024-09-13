import { Link } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`} className="decoration-[none] text-white relative transition-[top_200ms]">
      {/* 영화 이미지 */}
      <img src={IMAGE_BASE_URL + movie.backdrop_path} className="w-full h-[100px] bg-white" />

      {/* 영화 제목 */}
      <h6 className="m-0">{movie.title}</h6>
    </Link>
  );
}

export default MovieCard;