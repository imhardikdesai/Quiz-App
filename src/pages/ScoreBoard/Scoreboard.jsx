import { useContext } from "react";
import "./Scoreboard.css";
import { AiOutlineHome, AiOutlineEye } from "react-icons/ai";
import { BiReset } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import quizContext from "../../context/quizContext";
import { Link as ReachLink } from "react-router-dom";
import ScoreRemark from "../../components/ScoreRemark/ScoreRemark";
import { motion } from "framer-motion";

const Scoreboard = (props) => {
    const context = useContext(quizContext);
    const { setNext, setScore, setAnswerList, setUsedLifelines } = context;
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
        setUsedLifelines({
            fiftyFifty: false,
            audience: false,
            showAnswer: false
        });
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const scoreVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="main dark-scoreboard-main">
                <div className="score-container">
                    <motion.div
                        className="score dark-score"
                        variants={scoreVariants}
                    >
                        Your Score <br />
                        <span>
                            {percentage.toFixed(2)} <small>%</small>
                        </span>
                    </motion.div>
                    <ScoreRemark percentage={percentage} />
                </div>

                {/* Table */}
                <motion.div
                    className="point-table dark-point-table"
                    variants={itemVariants}
                >
                    <div className="semi-table dark-semi-table">
                        <div
                            style={{ backgroundColor: "#9F7AEA" }}
                            className="circle"
                        ></div>
                        <div className="mx-2">
                            <div className="point-info dark-point-info">Attempted</div>
                            <div className="point dark-point">
                                {Attempted.toFixed(2)}%
                            </div>
                        </div>
                    </div>
                    <div className="semi-table dark-semi-table">
                        <div
                            style={{ backgroundColor: "#9F7AEA" }}
                            className="circle"
                        ></div>
                        <div className="mx-2">
                            <div className="point-info dark-point-info">Total Questions</div>
                            <div className="point dark-point">
                                {total_que}
                            </div>
                        </div>
                    </div>
                    <div className="semi-table dark-semi-table">
                        <div
                            style={{ backgroundColor: "#28ae61" }}
                            className="circle"
                        ></div>
                        <div className="mx-2">
                            <div className="point-info dark-point-info">Correct</div>
                            <div className="point dark-point dark-point-correct">
                                {correct_que}
                            </div>
                        </div>
                    </div>
                    <div className="semi-table dark-semi-table">
                        <div
                            style={{ backgroundColor: "#EE5453" }}
                            className="circle"
                        ></div>
                        <div className="mx-2">
                            <div className="point-info dark-point-info">Wrong</div>
                            <div className="point dark-point dark-point-wrong">
                                {wrong_que}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="footer dark-footer"
                    variants={containerVariants}
                >
                    <motion.div
                        className="text-center"
                        onClick={handleGoHome}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        variants={itemVariants}
                    >
                        <div
                            style={{ backgroundColor: "#BE709F" }}
                            className="home-btn dark-action-btn"
                        >
                            <AiOutlineHome />
                        </div>
                        <div className="footer-text dark-footer-text">Home</div>
                    </motion.div>
                    <motion.div
                        className="text-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        variants={itemVariants}
                    >
                        <div
                            style={{ backgroundColor: "#9F7AEA" }}
                            className="home-btn dark-action-btn"
                        >
                            <BsShare />
                        </div>
                        <div className="footer-text dark-footer-text">Share Score</div>
                    </motion.div>
                    <motion.div
                        className="text-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        variants={itemVariants}
                    >
                        <ReachLink to="/review">
                            <div
                                style={{ backgroundColor: "#BF8D6F" }}
                                className="home-btn dark-action-btn"
                            >
                                <AiOutlineEye />
                            </div>
                        </ReachLink>
                        <div className="footer-text dark-footer-text">Review Answer</div>
                    </motion.div>
                    <motion.div
                        className="text-center"
                        onClick={handlePlayAgain}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        variants={itemVariants}
                    >
                        <div
                            style={{ backgroundColor: "#5492B3" }}
                            className="home-btn dark-action-btn"
                        >
                            <BiReset />
                        </div>
                        <div className="footer-text dark-footer-text">Play Again</div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Scoreboard;