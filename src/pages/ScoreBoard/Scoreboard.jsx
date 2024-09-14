import { useContext } from "react";
import "./Scoreboard.css";
import { AiOutlineHome, AiOutlineEye } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import quizContext from "../../context/quizContext";
import { Link as ReachLink } from "react-router-dom";
import ScoreRemark from "../../components/ScoreRemark/ScoreRemark";

const Scoreboard = (props) => {
    const context = useContext(quizContext);
    const { setNext, setScore, setAnswerList } = context;
    const { total_que, correct_que, wrong_que } = props;
    let percentage = (correct_que / total_que) * 100;
    let Attempted = ((correct_que + wrong_que) / total_que) * 100;

    const handleGoHome = () => {
        window.location.reload();
    };

    const handlePlayAgain = () => {
        setNext(0);
        setScore({ rightAnswers: 0, wrongAnswers: 0 });
        setAnswerList([]);
    };

    return (
        <>
            <div className="main">
                <div className="score-container">
                    <div className="score">
                        Your Score <br />
                        <span>
                            {percentage.toFixed(2)} <small>%</small>
                        </span>
                    </div>
                    <ScoreRemark percentage={percentage} />
                </div>
                {/* Table */}
                <div className="point-table">
                    <div className="semi-table">
                        <div
                            style={{ backgroundColor: "#A45EDA" }}
                            className="circle"
                        ></div>
                        <div className="mx-2">
                            <div className="point-info">Attempted</div>
                            <div
                                style={{
                                    color: "/*#A45EDA*/#fff",
                                    width: "5.8rem",
                                    background: "#212832",
                                    padding: "0.5rem",
                                    borderRadius: "0.5rem",
                                }}
                                className="point"
                            >
                                {Attempted.toFixed(2)}%
                            </div>
                        </div>
                    </div>
                    <div className="semi-table">
                        <div
                            style={{ backgroundColor: "#A45EDA" }}
                            className="circle"
                        ></div>
                        <div className="mx-2">
                            <div className="point-info">Total Questions</div>
                            <div
                                style={{
                                    color: "#fff",
                                    width: "5.8rem",
                                    background: "#212832",
                                    padding: "0.5rem",
                                    borderRadius: "0.5rem",
                                }}
                                className="point"
                            >
                                {total_que}
                            </div>
                        </div>
                    </div>
                    <div className="semi-table">
                        <div
                            style={{ backgroundColor: "rgb(6 143 86)" }}
                            className="circle"
                        ></div>
                        <div className="mx-2">
                            <div className="point-info">Correct</div>
                            <div
                                style={{
                                    color: "/*rgb(6 143 86)*/#fff",
                                    background: "#212832",
                                    padding: "0.5rem",
                                    width: "5.8rem",
                                    borderRadius: "0.5rem",
                                }}
                                className="point"
                            >
                                {correct_que}
                            </div>
                        </div>
                    </div>
                    <div className="semi-table">
                        <div
                            style={{ backgroundColor: "rgb(223 75 75)" }}
                            className="circle"
                        ></div>
                        <div className="mx-2">
                            <div className="point-info">Wrong</div>
                            <div
                                style={{
                                    color: "/*rgb(223 75 75)*/#fff",
                                    width: "5.8rem",
                                    background: "#212832",
                                    padding: "0.5rem",
                                    borderRadius: "0.5rem",
                                }}
                                className="point"
                            >
                                {wrong_que}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="text-center" onClick={handleGoHome}>
                        <div
                            style={{ backgroundColor: "#BE709F" }}
                            className="home-btn"
                        >
                            <AiOutlineHome />
                        </div>
                        <div className="footer-text">Home</div>
                    </div>
                    <div className="text-center">
                        <div
                            style={{ backgroundColor: "#755ED3" }}
                            className="home-btn"
                        >
                            <BsShare />
                        </div>
                        <div className="footer-text">Share Score</div>
                    </div>
                    <div className="text-center">
                        <ReachLink to="/review">
                            <div
                                style={{ backgroundColor: "#BF8D6F" }}
                                className="home-btn"
                            >
                                <AiOutlineEye />
                            </div>
                        </ReachLink>
                        <div className="footer-text">Review Answer</div>
                    </div>
                    <div className="text-center" onClick={handlePlayAgain}>
                        <div
                            style={{ backgroundColor: "#5492B3" }}
                            className="home-btn"
                        >
                            <BiReset />
                        </div>
                        <div className="footer-text">Play Again</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Scoreboard;
