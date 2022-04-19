import styleCss from "./addbook.module.css";
import React, { useState } from "react";
import { Popover, Overlay } from "react-bootstrap"
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { API } from '../config/api'

function Tool() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    const addBook = useNavigate()
    const Click = () => {
        addBook("/transaction")
    }

    const out = useNavigate()
    const push = () => {
        out("/")
    }

    return (
        <div ref={ref}>
            <img onClick={handleClick} src="assets/ppadmin.png" alt="logo" />

            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref}
                containerPadding={20}
            >
                <Popover id="popover-contained">
                    <Popover.Body>
                        <div className={styleCss.add}>
                            <img className={styleCss.book} src="assets/dropbook.png" alt="logo" />
                            <p className={styleCss.addBook}>Edit Book</p>
                        </div>

                        <hr className={styleCss.garis} />

                        <div onClick={push} className={styleCss.out}>
                            <img className={styleCss.outDrop} src="assets/logoutdrop.png" alt="logo" />
                            <p className={styleCss.log}>Logout</p>
                        </div>

                    </Popover.Body>
                </Popover>
            </Overlay>
        </div>
    );
}

function AddBookPage() {
    console.clear();
    let navigate = useNavigate();
    const [preview, setPreview] = useState(null); //For image preview

    // Store data with useState here ...
    const [form, setForm] = useState({
        title: "",
        publicationDate: "",
        pages: "",
        author: "",
        isbn: "",
        about: "",
        bookFile: ""
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
            formData.set("title", form.title)
            formData.set("publicationDate", form.publicationDate)
            formData.set("pages", form.pages)
            formData.set("author", form.author)
            formData.set("isbn", form.isbn)
            formData.set("about", form.about)
            formData.set("bookFile", form.bookFile[0], form.bookFile[0].name)

            // Insert product data here ...
            const response = await API.post('/book', formData, config)

            console.log(response);

            navigate("/transaction");
        } catch (error) {
            console.log(error);
        }
    };

    const addBook = useNavigate()
    const Click = () => {
        addBook("/transaction")
    }

    return (
        <div className={styleCss.latar}>
            <div className={styleCss.navbar}>

                <div className={styleCss.kiri}>
                    <img onClick={Click} className={styleCss.wow} src="assets/icon2.png" alt="Logo" />
                </div>

                <div className={styleCss.kanan}>
                    <Tool />
                </div>

            </div>

            <div className={styleCss.formGroup}>
                <p className={styleCss.head}>Add Book</p>

                <form onSubmit={handleSubmit} className={styleCss.addForm}>
                    {preview && (
                        <div>
                            <img
                                src={preview}
                                style={{
                                    maxWidth: "150px",
                                    maxHeight: "150px",
                                    objectFit: "cover",
                                }}
                                alt="preview"
                            />
                        </div>
                    )}
                    <input type="text" id="Title" name="title" onChange={handleChange} placeholder="Title" className={styleCss.input} />
                    <input type="text" id="Publication Date" name="publicationDate" onChange={handleChange} placeholder="Publication Date" className={styleCss.input} />
                    <input type="text" id="Page" placeholder="Page" name="pages" onChange={handleChange} className={styleCss.input} />
                    <input type="text" id="Author" placeholder="Author" name="author" onChange={handleChange} className={styleCss.input} />
                    <input type="text" id="Isbn" placeholder="ISBN" name="isbn" onChange={handleChange} className={styleCss.input} />
                    <textarea type="text" id="About" placeholder="About This Book" name="about" onChange={handleChange} className={styleCss.about} />
                    <label className={styleCss.fileGroup}>Attache Book File</label>
                    <input type="file" id="acnu" name="bookFile" onChange={handleChange} className={styleCss.input1} />
                    <button className={styleCss.tambah} type="submit" id="acnu" >Add Book</button>
                </form>
            </div>


        </div>
    )
}

export default AddBookPage;