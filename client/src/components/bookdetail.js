import styleCss from "./bookDetail.module.css";
import { useNavigate } from 'react-router-dom';

function BookDetail() {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/addbook")
    }

    const readBook = useNavigate()
    const Click = () => {
        readBook("/readbook")
    }

    const home = useNavigate()
    const arah = () => {
        home("/homesub")
    }

    const profile = useNavigate()
    const handle = () => {
        profile("/profile")
    }

    const out = useNavigate()
    const push = () => {
        out("/")
    }

    const subscribe = useNavigate()
    const kirim = () => {
        subscribe("/subscribe")
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
                        <button onClick={handle} className={styleCss.tagpro}>Profile</button>
                    </div>

                    <div className={styleCss.subscribe}>
                        <img className={styleCss.bilico} src="assets/bilico.png" alt="Logo" />
                        <button onClick={kirim} className={styleCss.tagsub}>Subscribe</button>
                    </div>
                    <hr className={styleCss.garis} />
                </div>

                <div className={styleCss.outMenu}>
                    <img className={styleCss.logout} src="assets/logout.png" alt="Logo" />
                    <button onClick={push} className={styleCss.tagout}>Logout</button>
                </div>
            </div>

            <div className={styleCss.content}>
                <div className={styleCss.contentUp}>

                    <div className={styleCss.kiri}>
                        <img className={styleCss.bookDetail} src="assets/book4.png" alt="Logo" />
                    </div>

                    <div className={styleCss.kanan}>
                        <p className={styleCss.header}>Tess on the Road</p>
                        <p className={styleCss.pengarang}>Rachel Hartman</p>

                        <p className={styleCss.date}>Publication date   </p>
                        <p className={styleCss.dateDetail}>April 2020</p>

                        <p className={styleCss.page}>Pages</p>
                        <p className={styleCss.pageDetail}>436</p>

                        <p className={styleCss.isbn}>ISBN</p>
                        <p className={styleCss.isbnDetail}>9781789807554</p>

                    </div>

                </div>

                <div className={styleCss.down}>
                    <p className={styleCss.h1}>About This Book</p>
                    <p className={styleCss.detail}>
                        In the medieval kingdom of Goredd, women are expected to be ladies, men are their protectors, and dragons get to be whomever they want. Tess, stubbornly,
                        is a troublemaker.
                        You can’t make a scene at your sister’s wedding and break a relative’s nose with one punch (no matter how pompous he is) and not suffer the consequences.
                        As her family plans to send her to a nunnery, Tess yanks on her boots and sets out on a journey across the Southlands, alone and pretending to be a boy.
                        <br /><br />
                        Where Tess is headed is a mystery, even to her. So when she runs into an old friend, it’s a stroke of luck. This friend is a quigutl—a subspecies
                        of dragon—who gives her both a purpose and protection on the road. But Tess is guarding a troubling secret.
                        Her tumultuous past is a heavy burden to carry, and the memories she’s tried to forget threaten to expose her to the world in more ways than one.
                        <br /><br />
                        Returning to the fascinating world she created in the award-winning and New York Times bestselling Seraphina, Rachel Hartman introduces readers to
                        a new character and a new quest, pushing the boundaries of genre once again in this wholly original fantasy.
                    </p>
                </div>

                <div className={styleCss.buttonGroup}>
                    <div onClick={handleClick} className={styleCss.buttonAdd}>
                        <label className={styleCss.addGroup}>
                            <p className={styleCss.tagAdd}>Add My List</p>
                            <img className={styleCss.add} src="assets/listico.png" alt="logo" />
                        </label>
                        <button className={styleCss.tambah} type="file" id="acnu" hidden ></button>
                    </div>

                    <div onClick={Click} className={styleCss.buttonRead}>
                        <label className={styleCss.readGroup}>
                            <p className={styleCss.tagRead}>Read Book</p>
                            <img className={styleCss.read} src="assets/readico.png" alt="logo" />
                        </label>
                        <button className={styleCss.tambah} type="file" id="acnu" hidden ></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BookDetail;