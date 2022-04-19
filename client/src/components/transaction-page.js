import React, { useState } from "react";
import { Table, Popover, Overlay } from "react-bootstrap"
import styleCss from "./transaction.module.css";
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

function Example() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <div ref={ref}>
            <img onClick={handleClick} src="assets/Polygon.png" alt="logo" />

            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref}
                containerPadding={20}
            >
                <Popover id="popover-contained">
                    <Popover.Body>
                        <div>
                            <button className={styleCss.button}>Approve</button>
                        </div>
                        <div>
                            <button className={styleCss.button1}>Cancel</button>
                        </div>

                    </Popover.Body>
                </Popover>
            </Overlay>
        </div>
    );
}

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
        addBook("/add-book")
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
                        <div onClick={Click} className={styleCss.add}>
                            <img className={styleCss.book} src="assets/dropbook.png" alt="logo" />
                            <p className={styleCss.addBook}>Add Book</p>
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


function TranscationPage() {

    return (
        <div className={styleCss.latar}>
            <div className={styleCss.navbar}>

                <div className={styleCss.kiri}>
                    <img className={styleCss.wow} src="assets/icon2.png" alt="Logo" />
                </div>

                <div className={styleCss.kanan}>
                    <Tool />
                </div>

            </div>

            <div>
                <Table striped bordered hover className={styleCss.table}>

                    <tbody className={styleCss.tbody}>
                        <tr>
                            <th style={{ color: '#FF0000' }}>No</th>
                            <th style={{ color: '#FF0000' }}>Users</th>
                            <th style={{ color: '#FF0000' }}>Bukti Transfer</th>
                            <th style={{ color: '#FF0000' }}>Remaining Active</th>
                            <th style={{ color: '#FF0000' }}>Status User</th>
                            <th style={{ color: '#FF0000' }}>Status Payment</th>
                            <th style={{ color: '#FF0000' }}>Action</th>
                        </tr>

                        <tr className={styleCss.trow}>
                            <td>1</td>
                            <td>Radif</td>
                            <td>BCA.jpg</td>
                            <td>24/hari</td>
                            <td style={{ color: '#0ACF83' }}>Active</td>
                            <td style={{ color: '#0ACF83' }}>Approve</td>
                            <td className={styleCss.drop}><Example /></td>
                        </tr>
                        <tr className={styleCss.trow}>
                            <td>2</td>
                            <td>Nasahul</td>
                            <td>BNI.jpg</td>
                            <td>29/hari</td>
                            <td style={{ color: '#0ACF83' }}>Active</td>
                            <td style={{ color: '#0ACF83' }}>Approve</td>
                            <td className={styleCss.drop}><Example /></td>
                        </tr>
                        <tr className={styleCss.trow}>
                            <td>3</td>
                            <td>Maria</td>
                            <td>BSI.jpg</td>
                            <td>0/hari</td>
                            <td style={{ color: '#FF0742' }}>Not Active</td>
                            <td style={{ color: '#FF0742' }}>Cancel</td>
                            <td className={styleCss.drop}><Example /></td>
                        </tr>
                        <tr className={styleCss.trow}>
                            <td>4</td>
                            <td>Tony</td>
                            <td>BCA.jp</td>
                            <td>0/hari</td>
                            <td style={{ color: '#FF0742' }}>Not Active</td>
                            <td style={{ color: '#F7941E' }} >Pending</td>
                            <td className={styleCss.drop}><Example /></td>
                        </tr>
                        <tr className={styleCss.trow}>
                            <td>5</td>
                            <td>Nathaniel</td>
                            <td>BNI.jp</td>
                            <td>5/hari</td>
                            <td style={{ color: '#0ACF83' }}>Active</td>
                            <td style={{ color: '#0ACF83' }}>Approve</td>
                            <td className={styleCss.drop}><Example /></td>
                        </tr>
                        <tr className={styleCss.trow}>
                            <td>6</td>
                            <td>Hery</td>
                            <td>BCA.jpg</td>
                            <td>0/hari</td>
                            <td style={{ color: '#FF0742' }}>Not Active</td>
                            <td style={{ color: '#FF0742' }}>Cancel</td>
                            <td className={styleCss.drop}><Example /></td>
                        </tr>
                    </tbody>
                </Table>

            </div>
        </div>
    )
}

export default TranscationPage;