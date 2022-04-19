import LoginPop from "./components/signin"
import SignUp from "./components/signup"
import React from 'react';
import styleCss from "./style.module.css";

function Landing() {
  const [modalShow, setModalShow] = React.useState(false);
  const [popupShow, setPopupShow] = React.useState(false);

  return (
    <div>
      <div className={styleCss.back}>
        <img src="assets/background.png" className={styleCss.latar} alt="Logo" />

        <img src="assets/icon.png" className={styleCss.icon} alt="Logo" />

        <div className={styleCss.content}>
          <p className={styleCss.text1}>
            Sign-up now and subscribe to enjoy all the cool<br />
            and latest books - The best book rental service<br />
            provider in Indonesia
          </p>
          <button onClick={() => setPopupShow(true)} className={styleCss.signUp}>Sign Up</button>
          <button onClick={() => setModalShow(true)} className={styleCss.signIn}>Sign In</button >
        </div>
      </div>




      <LoginPop
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <SignUp
        show={popupShow}
        onHide={() => setPopupShow(false)}
      />


    </div>

  );
}


export default Landing;
