import { useEffect, useState } from "react";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout/RootLayout";
import HomePage from "./pages/HomePage/HomePage";
import LogInPage from "./pages/LogInPage/LogInPage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import movieDetailPageLoader from "./pages/MovieDetailPage/MovieDetailPage.loader";
import MyPage from "./pages/MyPage/MyPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

const routes = [
  {path: "/", element: <RootLayout />, children: [
    {path: "", element: <HomePage />},
    {path: "sign-up", element: <SignUpPage />},
    {path: "log-in", element: <LogInPage />},
    {path: "my-page", element: <MyPage />},
    {path: "movies/:movieId", element: <MovieDetailPage />, loader: movieDetailPageLoader},
    ]
  }
]
const router = createBrowserRouter(routes);

function Router() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  
  const signUp = (newUser) => {
    const newUsers = [...users, newUser];
    setUsers(newUsers);
  };
  
  const logIn = ({ id, password }) => {
    const user = users.find((user) => user.id === id);
    if (!user) return alert("존재하지 않는 ID입니다.");
    if (user.password !== password) return alert("잘못된 비밀번호입니다.");
    
    alert("로그인 되었습니다.");
    setCurrentUser(user);
  };
  

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout currentUser={currentUser} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUpPage signUp={signUp} />} />
          <Route path="/log-in" element={<LogInPage logIn={logIn} />} />
          <Route
            path="/my-page"
            element={
              <MyPage
                likedMovieIds={likedMovieIds}
                toggleLikeMovie={toggleLikeMovie}
              />
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <MovieDetailPage
                checkIsLiked={checkIsLiked}
                toggleLikeMovie={toggleLikeMovie}
              />
            }
            loader={movieDetailPageLoader}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Router(){
  return <RouterProvider router={router}/>
}

export default Router