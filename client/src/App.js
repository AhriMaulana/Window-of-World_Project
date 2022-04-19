import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "./contex/userContext";
import Landing from './landing-page'
import HomePage from "./components/home";
import Subscribe from './components/subscribe-page'
import HomeSubscribe from "./components/home-subscribe";
import ProfilePage from "./components/profile";
import BookDetail from "./components/bookdetail";
import ReadPage from "./components/readBook-Page"
import TranscationPage from "./components/transaction-page"
import AddBookPage from "./components/add-book"

// Get API config & setAuthToken here ...
import { API, setAuthToken } from './config/api'

// Init token on axios every time the app is refreshed here ...
if (localStorage.token) {
    setAuthToken(localStorage.token)
}

function App() {

    //let navigate = useNavigate();

    // Init user context here ...
    //const [state, dispatch] = useContext(UserContext)

    // Redirect Auth here ...
    //useEffect(() => {
        //if (!state.isLogin) {
            //navigate('/')
        //} else {
            //if (state.user.status === "admin") {
                //navigate('/home')
           // } else if (state.user.status === "customer") {
                //navigate('/homesub')
           // }
       // }
   // }, [state])

    // Create function for check user token here ...
   // const checkUser = async () => {
        //try {
            //const response = await API.get('/check-auth')

            //if (response.status === 404) {
                //return dispatch({
                    //type: "AUTH_ERROR"
                //})
            //}

           // let payload = response.data.data.user
            //payload.token = localStorage.token

            //return dispatch({
               // type: "USER_SUCCESS",
                //payload
            //})
        //} catch (error) {
           // console.log(error);
        //}
    //}

    // Call function check user with useEffect didMount here ...
    //useEffect(() => {
       // checkUser()
   // }, [])

    return (
       
        <Router>
            <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route exact path="/home" element={<HomePage />} />
                <Route exact path="/homesub" element={<HomeSubscribe />} />
                <Route exact path="/subscribe" element={<Subscribe />} />
                <Route exact path="/profile" element={<ProfilePage />} />
                <Route exact path="/bookdetail" element={<BookDetail />} />
                <Route exact path="/addbook" element={<ProfilePage />} />
                <Route exact path="/readbook" element={<ReadPage />} />
                <Route exact path="/transaction" element={<TranscationPage />} />
                <Route exact path="/add-book" element={<AddBookPage />} />
            </Routes>
        </Router>
        

    );
}


export default App;
