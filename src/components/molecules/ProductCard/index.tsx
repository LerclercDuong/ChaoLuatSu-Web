import React from "react";
import { JSX } from "react";
import styles from "./SemesterCard.module.scss";
import { useNavigate } from "react-router-dom";
// import { subject } from "../../constants/subject";

interface SemesterCardProps {
    semesterNumber: number;
    numberOfSubject: number;
    numberOfExam: number;
}

const SemesterCard: React.FC<SemesterCardProps> = ({ semesterNumber, numberOfSubject, numberOfExam }): JSX.Element => {
    const navigate = useNavigate(); // Hook để điều hướng

    const handleExploreClick = () => {
        navigate(`/semester/${semesterNumber}`); // Điều hướng đến đường dẫn mong muốn
    };
    return (
        <React.Fragment>
            <div className={styles.card}>
                {/* Phần hình ảnh nền và người */}
                <div className={styles.imageSection}>
                    {/* Hình nền với các biểu tượng */}
                    <div className={styles.background}>
                        <img
                            src="FU-planet.svg"
                            alt="Laravel Logo"
                            className={styles.logo}
                        />
                        <span className={styles.expertBadge}>FPTU</span>
                        <span className={styles.laravelProBadge}>Cóc source</span>
                        <div className={styles.curveLine}></div>
                    </div>
                    {/* Hình người */}
                    <img
                        src="FU-planet.svg"
                        alt="Instructor"
                        className={styles.instructorImage}
                    />
                </div>

                {/* Phần thông tin */}
                <div className={styles.infoSection}>
                    <div className={styles.categoryAndRating}>
                        <span className={styles.category}>Exam</span>
                        <div className={styles.rating}>
                            <span className={styles.star}>★</span>
                            <span>(5 Reviews)</span>
                        </div>
                    </div>
                    <h2 className={styles.title}>Semester {semesterNumber}</h2>
                   {/* <p className={styles.author}>{subject[semesterNumber-1]?.length} subject</p> */}
                    <div className={styles.footer}>
                        <button className={styles.enrollButton} onClick={handleExploreClick}>EXPLORE →</button>
                        <span className={styles.price}>{numberOfExam} Exam</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SemesterCard;