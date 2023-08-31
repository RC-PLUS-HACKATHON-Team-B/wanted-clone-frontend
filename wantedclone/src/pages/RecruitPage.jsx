import { useState } from "react";
import '../pages/RecruitPage.css';

const RecruitPage = () => {

    const [occupation, setOccupation] = useState("전체");
    const [isSelectButtonClicked, setIsSelectButtonClicked] = useState(false);

    console.log(occupation);

    const handleSelectButtonClick = () => {
        setIsSelectButtonClicked(!isSelectButtonClicked);
    }

    return (
        <div className="RecruitPage">
            <div className="select_category_container">
                <div className="select_occupation">
                    <p className="selected_occupation">{occupation}</p>
                    <span className="select_button" onClick={handleSelectButtonClick}>
                        <svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" className={`moreicon ${isSelectButtonClicked ? 'clicked' : ''}`}>
                            <path fill="#767676" fillRule="nonzero" d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"></path>
                        </svg> 
                    </span>
                </div>
                {isSelectButtonClicked === true ? <SelectJobList setOccupation={setOccupation} setIsSelectButtonClicked={setIsSelectButtonClicked}/> : <></>}
                <div></div>
            </div>
            <div>

            </div>
        </div>
    )
};

export const SelectJobList = (props) => {

    const occupationList = ["전체", "개발", "경영·비즈니스", "마케팅·광고", "디자인", "영업", "고객서비스·리테일", "미디어", "엔지니어링·설계", "게임 제작", "HR", "금융", "제조·생산", "물류·무역", "교육", "의료·제작·바이오", "식·음료", "법률·법집행기관", "건설·시설", "공공·복지"];

    const selectOccupation = (it) => {
        props.setOccupation(it);
        props.setIsSelectButtonClicked(false);
    }

    return (
        <div className="SelectJobList">
            {occupationList.map((it, idx) => (
                <div className="occupation_select_option" key={idx} onClick={() => selectOccupation(it)}>{it}</div>
            ))}
        </div>
    )
};

export default RecruitPage;