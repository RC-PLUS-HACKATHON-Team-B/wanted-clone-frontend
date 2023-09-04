import { useEffect, useRef, useState } from 'react';
import '../pages/RecruitDetailPage.scss'

const RecruitDetailPage = () => {

    const [isClicked, setIsClicked] = useState(false);

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const handleClickHeart = () => {
        setIsClicked(!isClicked);
        // 하트 추가하는 통신 코드 구현 필요
    };

    const dummyData = {
        imageSrcList: ["", "", "", "", ""],
        companyname: "한국앤컴퍼니",
        companyplace: "경기 • 한국",
        taglist: ["테스트1", "테스트2", "테스트3", "테스트4", "테스트5"],
        job_simple_description: "테스트 테스트 테스트",
        major_task: "테스트테스트테스트",
        qualification_requirement: "테스트입니다.",
        preferential_treatment: "testtesttest",
        benefits_welfare: "test입니다",
        skill_tag_list: ["테스트6", "테스트7", "테스트8"],
        duedate: "2023.10.19",
        workplace: "테스트 테스트 테스트입니다",
        recommendreward: 500000,
        applyreward: 500000,
        heart: 100
    }


    // 이미지 배열 length - 1 (4는 테스트 값)
    const TOTAL_SLIDES = dummyData.imageSrcList.length - 1;

    const NextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) {
          setCurrentSlide(0);
        } else {
          setCurrentSlide(currentSlide + 1);
        }
    };

    const PrevSlide = () => {
        if (currentSlide === 0) {
          setCurrentSlide(TOTAL_SLIDES);
        } else {
          setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        slideRef.current.style.transition = 'all 0.5s ease-in-out';
        slideRef.current.style.transform = `translateX(-${currentSlide * 7}00px)`;
    }, [currentSlide]);

    // 이미지 배열 length (5는 테스트 값)
    const containerWidth = dummyData.imageSrcList.length * 700;

    return (
        <div className="RecruitDetailPage">
            <div className='left-container'>
                <div className='imagecontainer' style={{width: `${containerWidth}px`}} ref={slideRef}>
                    {dummyData.imageSrcList.map((it, idx) => {
                        return (
                            <div className='imagebox' key={idx}>
                                <img src={it} alt=""/>
                            </div>
                        )
                    })}
                </div>
                <button onClick={PrevSlide} className="prev_button"><svg width="24" height="24" viewBox="0 0 12 12"><path fill="#b5b5b5" d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"></path></svg></button>
                <button onClick={NextSlide} className='next_button'><svg width="24" height="24" viewBox="0 0 12 12"><path fill="#b5b5b5" d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"></path></svg></button>
                <div className='jobheader'>
                    <p className='jobname'>{"SAP SCM(CO/FI)"}</p>
                    <div className='companyinfo'>
                        <p className='companyname'>{dummyData.companyname}</p>
                        <div className='vertical_bar'></div>
                        <p className='companyplace'>{dummyData.companyplace}</p>
                    </div>
                    <div className='taglist'>
                        {dummyData.taglist.map((it, idx) => (
                            <Tag  tagtext={it} key={idx} backgroundColor={"#f3f5f8"}/> 
                        ))}
                    </div>
                </div>
                <div className='job_info'>
                    <p className='job_simple_description'>
                        {dummyData.job_simple_description}
                    </p>
                    <div className='job_detail_description'>
                        <div className='major_task'>
                            <p className='option_title'>주요업무</p>
                            <p className='option_info'>{dummyData.major_task}</p>
                        </div>
                        <div className='qualification_requirement'>
                            <p className='option_title'>자격요건</p>
                            <p className='option_info'>{dummyData.qualification_requirement}</p>
                        </div>
                        <div className='preferential_treatment'>
                            <p className='option_title'>우대사항</p>
                            <p className='option_info'>{dummyData.preferential_treatment}</p>
                        </div>
                        <div className='benefits_welfare'>
                            <p className='option_title'>혜택 및 복지</p>
                            <p className='option_info'>{dummyData.benefits_welfare}</p>
                        </div>
                        <div className='require_skill_stack'>
                            <p className='option_title'>기술스택 • 툴</p>
                            <div className='skill_tag_list'>
                                {dummyData.skill_tag_list.map((it, idx) => (
                                    <Tag tagtext={it}key={idx} backgroundColor={"#e4f4ec"}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='horizontal_bar'></div>
                <div className='job_work_place'>
                    <div className='info_box'>
                        <p className='info_text'>마감일</p>
                        <p className='info_data'>{dummyData.duedate}</p>
                    </div>
                    <div className='info_box'>
                        <p className='info_text'>근무지역</p>
                        <p className='info_data'>{dummyData.workplace}</p>
                    </div>
                </div>
            </div>
            <div className='right-container'>
                <div className='rewardcontainer'>
                    <p className='rewardtitle'>채용보상금</p>
                    <div className='rewardamount'>
                        <div className='reward'>
                            <p className='rewardtarget'>추천인</p>
                            <p className='rewardmoney'>{dummyData.recommendreward}</p>
                        </div>
                        <div className='reward'>
                            <p className='rewardtarget'>지원자</p>
                            <p className='rewardmoney'>{dummyData.applyreward}</p>
                        </div>
                    </div>
                    <button className='bookmarkbutton'>북마크하기</button>
                    <button className='applybutton'>지원하기</button>
                    <button className='heartbutton' onClick={handleClickHeart}>
                        {isClicked ? <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 24 24"><path d="M11.9999 6.49201L13.4848 5.00461C15.5225 2.9634 18.8529 2.9634 20.8905 5.00445C22.9308 7.04707 22.9308 10.3876 20.8928 12.4291L13.4587 19.9397L13.4565 19.9419C13.067 20.332 12.5427 20.5339 11.9999 20.5261C11.4563 20.5339 10.9319 20.3321 10.5402 19.9397L3.10804 12.4311C1.06908 10.3875 1.06908 7.04719 3.10835 5.00445C5.14712 2.96345 8.47614 2.96345 10.5151 5.00461L11.9999 6.49201Z" fill="#f00"></path></svg>
                        :
                        <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 24 24"><path d="M11.9999 6.49201L13.4848 5.00461C15.5225 2.9634 18.8529 2.9634 20.8905 5.00445C22.9308 7.04707 22.9308 10.3876 20.8928 12.4291L13.4587 19.9397L13.4565 19.9419C13.067 20.332 12.5427 20.5339 11.9999 20.5261C11.4563 20.5339 10.9319 20.3321 10.5402 19.9397L3.10804 12.4311C1.06908 10.3875 1.06908 7.04719 3.10835 5.00445C5.14712 2.96345 8.47614 2.96345 10.5151 5.00461L11.9999 6.49201Z" fill="#e1e2e3"></path></svg>
                        }
                        {dummyData.heart}
                    </button>
                </div>
                <div className='predictcontainer'>
                    <p className='predicttitle'>wanted ai 합격예측</p>
                    <p className='predictsubtitle'>서류 합격률이 궁금하다면?</p>
                    <div className='passpredict'>
                        <p className='passtitle'>서류 합격률</p>
                        <div className='predictbar'></div>
                        <div className='wantedcareer'>
                            <div className='wantedcareer_item'>
                                <p className='itemtext'>직무</p>
                                <div className='itemdatabox' style={{backgroundColor: "rgba(7,186,156,.08)"}}>
                                    <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 24 24"><path d="M2.36985 10.2148L2.25037 10.2955C1.69687 10.7316 1.80023 11.6354 2.48582 11.9138L8.71718 14.4442L6.03963 20.7894C5.68658 21.6256 6.59796 22.4317 7.38475 21.9791L21.6304 13.7852L21.7499 13.7045C22.3034 13.2684 22.2 12.3646 21.5145 12.0862L15.2818 9.55452L17.9606 3.2106C18.3137 2.37443 17.4023 1.56834 16.6155 2.02089L2.36985 10.2148Z" fill="#07BA9C"></path></svg>
                                    <p className='itemdata'>??</p>
                                </div>
                            </div>
                            <div className='vertical_bar'></div>
                            <div className='wantedcareer_item'>
                                <p className='itemtext'>연차</p>
                                <div className='itemdatabox' style={{backgroundColor: "rgba(112,115,124,.05)"}}>
                                    <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 24 24"><path d="M2.36985 10.2148L2.25037 10.2955C1.69687 10.7316 1.80023 11.6354 2.48582 11.9138L8.71718 14.4442L6.03963 20.7894C5.68658 21.6256 6.59796 22.4317 7.38475 21.9791L21.6304 13.7852L21.7499 13.7045C22.3034 13.2684 22.2 12.3646 21.5145 12.0862L15.2818 9.55452L17.9606 3.2106C18.3137 2.37443 17.4023 1.56834 16.6155 2.02089L2.36985 10.2148Z" fill="#C4C4C4"></path></svg>
                                    <p className='itemdata'>??</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='update_button'>
                        <p>이력서 업데이트하기</p>
                        <svg width="14" height="14" viewBox="0 0 12 12"><path fill="currentColor" d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"></path></svg>
                    </button>
                </div>
                <div className='interview_predict_banner'>
                    <div className='banner_text'>
                        <p className='banner_text_title'>이 포지션의 면접 예상 질문 확인하기</p>
                        <button className='banner_text_button'>
                            <p>AI 면접코칭 받기</p>
                            <svg width="10" height="12" viewBox="0 0 12 12"><path fill="#3366ff" d="M3.345 9.72a.75.75 0 0 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25a.75.75 0 0 0-1.06 1.06L7.065 6l-3.72 3.72z"></path></svg>
                        </button>
                    </div>
                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fposition%2Fwanted-plus.png&w=256&q=100" alt="" />
                </div>
            </div>
        </div>
    )
};

export const Tag = ({tagtext, backgroundColor}) => {
    return (
        <div className='Tag' style={{backgroundColor: backgroundColor}}>
            {`${tagtext}`}
        </div>
    );
};


export default RecruitDetailPage;