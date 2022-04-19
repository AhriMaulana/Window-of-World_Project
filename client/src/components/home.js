import styleCss from "./home.module.css";
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Subscribe from "./popup"

function HomePage() {

    const [popupShow, setPopupShow] = React.useState(false);

    const home = useNavigate()
    const arah = () => {
        home("/home")
    }
    
    const subscribe = useNavigate()
    const Click = () => {
        subscribe("/subscribe")
    }

    const out = useNavigate()
    const push = () => {
        out("/")
    }


    return (
        <div className={styleCss.latar}>


            <div className={styleCss.sideBar}>
                <img onClick={arah} className={styleCss.wow} src="assets/icon2.png" alt="Logo" />

                <div>
                    <img className={styleCss.foto} src="assets/profil.png" alt="Logo" />

                    <p className={styleCss.name}>Egi Satria Senja</p>

                    <p className={styleCss.status}>Not Subscribed Yet</p>

                    <hr className={styleCss.garis} />
                </div>

                <div className={styleCss.proSub}>
                    <div className={styleCss.profile}>
                        <img className={styleCss.profico} src="assets/profico.png" alt="Logo" />
                        <button className={styleCss.tagpro}>Profile</button>
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

                    <div onClick={() => setPopupShow(true)} className={styleCss.bookList}>
                        <div className={styleCss.bookGroup}>
                            <img className={styleCss.book1} src="assets/book1.png" alt="Logo" />
                            <p className={styleCss.judul}>Serangkai</p>
                            <p className={styleCss.pengarang}>Valerie Patkar</p>
                        </div>

                        <div onClick={() => setPopupShow(true)} className={styleCss.bookGroup}>
                            <img className={styleCss.book1} src="assets/book2.png" alt="Logo" />
                            <p className={styleCss.judul}>Z1 - Sd/Mi Buku Siswa Tematik Terpadu</p>
                            <p className={styleCss.pengarang}>Afi Yustiyana</p>
                        </div>

                        <div onClick={() => setPopupShow(true)} className={styleCss.bookGroup}>
                            <img className={styleCss.book1} src="assets/book3.png" alt="Logo" />
                            <p className={styleCss.judul}>Kabar Rahasia Dari Alam Kubur</p>
                            <p className={styleCss.pengarang}>DR. Kamil Yusuf Al-Atum</p>
                        </div>

                        <div onClick={() => setPopupShow(true)} className={styleCss.bookGroup}>
                            <img className={styleCss.book1} src="assets/book4.png" alt="Logo" />
                            <p className={styleCss.judul}>Tess on the Road</p>
                            <p className={styleCss.pengarang}>Rachel Hartman</p>
                        </div>
                    </div>
                </div>
            </div>

            <Subscribe
                show={popupShow}
                onHide={() => setPopupShow(false)}
            />

        </div>
    )
}

export default HomePage;