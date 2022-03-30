import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "../context/AuthProvider";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import AdminHome from "./pages/adminHome/AdminHome";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import UserHome from "./pages/userHome/UserHome";
const TheLayout = () => {
  return (
    <div>
      <Header></Header>
      <AuthProvider></AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/user" element={<UserHome></UserHome>}></Route>
          <Route path="/admin" element={<AdminHome></AdminHome>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          {/*  <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route>
          </Route> */}
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
};

export default TheLayout;
