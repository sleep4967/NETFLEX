import Page from "../../components/Page/Page"

function MyPage() {
    const {likedMovieIds, toggleLikeMovie} = useMovies();
  return (
    <Page>
        <h1>마이 페이지</h1>

        <section>
            <h2>내가 좋아하는 영화들</h2>
            <ul>
                {likedMovieIds.map(movieId => (<li key={movieId}>
                    <span>영화 {movieId}</span>
                    <button onClick={() => toggleLikeMovie(movieId)}></button>취소</li>))}
                <li>영화 2</li>
            </ul>
        </section>
    </Page>
  )
}
export default MyPage