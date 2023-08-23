import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/Home.page";
import NavigationBar from "./components/Navigation.component";
import LoginPage from "./pages/LoginPage/Login.page";
import NotFoundPage from "./pages/NotFound/NotFound.page";
import DetailPage from "./pages/DetailPage/Detail.page";
import SearchPage from "./pages/SearchPage/Search.page";
import BookMarkPage from "./pages/BookmarkPage/Bookmark.page";
import AccountPage from "./pages/AccountPage/Account.page";
import KakaoLoginPage from "./pages/LoginPage/KakaoLogin.component";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/social/kakao" element={<KakaoLoginPage />} />

        <Route element={<NavigationBar />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/bookmark" element={<BookMarkPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Route>

        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
