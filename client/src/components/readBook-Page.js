import styleCss from "./readBook.module.css";
import { useNavigate } from 'react-router-dom';

function ReadPage() {

    const home = useNavigate()
    const arah = () => {
        home("/homesub")
    }

    return (
        <div className={styleCss.latar}>

            <div className={styleCss.content}>
                <div className={styleCss.contentUp}>
                    <img onClick={arah} className={styleCss.logo} src="assets/icon2.png" alt="logo" />
                </div>

                <div className={styleCss.down}>
                    <img className={styleCss.book} src="assets/bookread.png" alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default ReadPage;