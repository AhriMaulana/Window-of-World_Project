import styleCss from "./popup.module.css";
import React from 'react';
import { Modal } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Subscribed(props) {

    return (
        <Modal
            {...props}
            size="xl"
            centered
        >
            <div>
                <p className={styleCss.page2}>
                    Thank you for subscribing to premium,
                    your premium package will be active after our admin approves your transaction,
                    thank you
                </p>
            </div>
        </Modal>
    );
}

export default Subscribed;