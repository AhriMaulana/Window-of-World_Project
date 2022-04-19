import styleCss from "./profile.module.css";
import { useNavigate } from 'react-router-dom';

function ProfilePage() {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/profile")
    }

    const out = useNavigate()
    const push = () => {
        out("/")
    }

    const subscribe = useNavigate()
    const Click = () => {
        subscribe("/subscribe")
    }

    const home = useNavigate()
    const arah = () => {
        home("/homesub")
    }

    const detail = useNavigate()
    const kirim = () => {
        detail("/bookdetail")
    }


    return (
        <div className={styleCss.latar}>


            <div className={styleCss.sideBar}>
                <img onClick={arah} className={styleCss.wow} src="assets/icon2.png" alt="Logo" />

                <div>
                    <img className={styleCss.foto} src="assets/profil.png" alt="Logo" />

                    <p className={styleCss.name}>Egi Satria Senja</p>

                    <p className={styleCss.status}>Subscribed</p>

                    <hr className={styleCss.garis} />
                </div>

                <div className={styleCss.proSub}>
                    <div className={styleCss.profile}>
                        <img className={styleCss.profico} src="assets/profico.png" alt="Logo" />
                        <button onClick={handleClick} className={styleCss.tagpro}>Profile</button>
                    </div>

                    <div className={styleCss.subscribe}>
                        <img className={styleCss.bilico} src="assets/bilico.png" alt="Logo" />
                        <button onClick={Click}  className={styleCss.tagsub}>Subscribe</button>
                    </div>
                    <hr className={styleCss.garis} />
                </div>

                <div className={styleCss.outMenu}>
                    <img className={styleCss.logout} src="assets/logout.png" alt="Logo" />
                    <button onClick={push} className={styleCss.tagout}>Logout</button>
                </div>
            </div>

            <div className={styleCss.content}>
                <p className={styleCss.header}>Profile</p>

                <div className={styleCss.procon}>
                    <div className={styleCss.proki}>

                        <div className={styleCss.p1}>
                            <img className={styleCss.mail} src="assets/mail.png" alt="logo" />
                            <div className={styleCss.tag}>
                                <p className={styleCss.email}>egissenja@gmail.com</p>
                                <p className={styleCss.tagmail}>Email</p>
                            </div>
                        </div>

                        <div className={styleCss.p1}>
                            <img className={styleCss.mail} src="assets/gender.png" alt="logo" />
                            <div className={styleCss.tag}>
                                <p className={styleCss.email}>Male</p>
                                <p className={styleCss.tagmail}>Gender</p>
                            </div>
                        </div>

                        <div className={styleCss.p1}>
                            <img className={styleCss.mail} src="assets/telepon.png" alt="logo" />
                            <div className={styleCss.tag}>
                                <p className={styleCss.email}>0812-8623-8911</p>
                                <p className={styleCss.tagmail}>Mobile phone</p>
                            </div>
                        </div>

                        <div className={styleCss.p1}>
                            <img className={styleCss.mail} src="assets/pin.png" alt="logo" />
                            <div className={styleCss.tag}>
                                <p className={styleCss.email}>Perumahan Permata Bintaro Residence C-3</p>
                                <p className={styleCss.tagmail}>Address</p>
                            </div>
                        </div>

                    </div>

                    <div className={styleCss.proka}>
                        <img className={styleCss.pp} src="assets/pp.png" alt="logo" />
                        <button className={styleCss.edit}>Edit Profile</button>
                    </div>
                </div>

                <div className={styleCss.book}>
                    <p className={styleCss.header}>List Book</p>

                    <div className={styleCss.bookList}>
                        <div className={styleCss.bookGroup}>
                            <img onClick={kirim} className={styleCss.book1} src="assets/book4.png" alt="Logo" />
                            <p className={styleCss.judul}>Tess on the Road</p>
                            <p className={styleCss.pengarang}>Rachel Hartman</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfilePage;