import styleCss from "./popup.module.css";
import React from 'react';
import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Subscribe(props) {

    return (
        <Modal
            {...props}
            size="xl"
            centered
        >
            <div>
               <p className={styleCss.page}>please make a payment to read the latest books</p>
            </div>
        </Modal>
    );
}

export default Subscribe;