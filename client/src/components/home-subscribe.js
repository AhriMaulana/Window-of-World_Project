import styleCss from "./style.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { API } from '../config/api'
import { useContext, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function HomeSubscribe() {

    const [book, setBook] = useState([]);
    const loadBook = async () => {
        try {
            const response = await API.get("/books");
            setBook(response.data.data.book);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        loadBook();
    }, []);

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/profile")
    }

    const subscribe = useNavigate()
    const Click = () => {
        subscribe("/subscribe")
    }

    const out = useNavigate()
    const push = () => {
        out("/")
    }

    const detail = useNavigate()
    const kirim = () => {
        detail("/bookdetail")
    }

    const home = useNavigate()
    const arah = () => {
        home("/homesub")
    }

    return (
        <div className={styleCss.latar}>

            <div className={styleCss.sideBar}>
                <img onClick={arah} className={styleCss.wow} src="assets/icon2.png" alt="Logo" />

                <div>
                    <img className={styleCss.foto} src="assets/profil.png" alt="Logo" />

                    <p className={styleCss.name}>Egi Satria Senja</p>

                    <p className={styleCss.status1}>Subscribed</p>

                    <hr className={styleCss.garis} />
                </div>

                <div className={styleCss.proSub}>
                    <div className={styleCss.profile}>
                        <img className={styleCss.profico} src="assets/profico.png" alt="Logo" />
                        <button onClick={handleClick} className={styleCss.tagpro}>Profile</button>
                    </div>

                    <div className={styleCss.subscribe}>
                        <img className={styleCss.bilico} src="assets/bilico.png" alt="Logo" />
                        <button onClick={Click} className={styleCss.tagsub}>Subscribe</button>
                    </div>
                    <hr className={styleCss.garis} />
                </div>

                <div className={styleCss.outMenu}>
                    <img className={styleCss.logout} src="assets/logout.png" alt="Logo" />
                    <button onClick={push} className={styleCss.tagout}>Logout</button>
                </div>
            </div>


            <div className={styleCss.content}>
                <img className={styleCss.frame} src="assets/frame.png" alt="Logo" />
                <div className={styleCss.book}>
                    <p className={styleCss.header}>List Book</p>

                    <Row>
                        {book.map((data) => (
                            <Col className='mb-5' key={data.id}>
                                <Link style={{ textDecoration: "none" }} to={{ pathname: '/book/${data.id}' }}>
                                    <div className={styleCss.bookList}>
                                        <img onClick={kirim} className='mb-2' style={{ maxwidth: "200px", height: "270px", borderRadius: "5px" }}
                                            src={`http://localhost:5000/uploads/${data?.bookFile}`} alt="logo" />
                                    </div>
                                    <h5 className='mb-2'>{data.title}</h5>
                                    <p className='mb-2'>{data.about}</p>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                    
                </div>
            </div>

        </div>
    )
}

export default HomeSubscribe;