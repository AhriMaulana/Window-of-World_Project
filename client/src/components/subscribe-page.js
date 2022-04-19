import styleCss from "./subscribe.module.css";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Subscribed from "./popup2"
import { API } from '../config/api'

function SubscribePage() {

    console.clear();
    let navigate = useNavigate();
    const [preview, setPreview] = useState(null); //For image preview

    // Store data with useState here ...
    const [form, setForm] = useState({
        transferProof: ""
    })

    // Handle change data on form
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.type === "file" ? e.target.files : e.target.value,
        });

        // Create image url for preview
        if (e.target.type === "file") {
            let url = URL.createObjectURL(e.target.files[0]);
            setPreview(url);
        }
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            // Create Configuration Content-type here ...
            // Content-type: multipart/form-data
            const config = {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            }

            // Create store data with FormData as object here ...
            const formData = new FormData()
            formData.set("transferProof", form.transferProof[0], form.transferProof[0].name)

            // Insert product data here ...
            const response = await API.post('/transaction', formData, config)

            console.log(response);

            navigate("/subscribe");
        } catch (error) {
            console.log(error);
        }
    };

    const [popupShow, setPopupShow] = React.useState(false);

    const home = useNavigate()
    const arah = () => {
        home("/homesub")
    }

    const out = useNavigate()
    const push = () => {
        out("/")
    }

    const subscribe = useNavigate()
    const Click = () => {
        subscribe("/subscribe")
    }

    const navigat = useNavigate()
    const handleClick = () => {
        navigat("/profile")
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

            <div className={styleCss.content1}>
                <p className={styleCss.header}>Premium</p>

                <div className={styleCss.pwo1}>
                    <p className={styleCss.pay1}>Pay now and acces all the latest books from</p>
                    <img className={styleCss.icow1} src="assets/Wow.png" alt="Logo" />
                </div>

                <div className={styleCss.pwo1}>
                    <img className={styleCss.icowo1} src="assets/Wow.png" alt="Logo" />
                    <p className={styleCss.no1}>: 0981312323</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} className={styleCss.acnu1} type="text" name="userId" placeholder="Input your account number" />
                    <div className={styleCss.file1}>
                        <label className={styleCss.fileGroup1}></label>
                        <input onChange={handleChange} className={styleCss.upload1} type="file" name="transferProof" />
                    </div>

                    <button type="submit" className={styleCss.send1}>Send</button>
                </form>
                
                

            </div>

            <Subscribed
                show={popupShow}
                onHide={() => setPopupShow(false)}
            />

        </div>
    )
}

export default SubscribePage;