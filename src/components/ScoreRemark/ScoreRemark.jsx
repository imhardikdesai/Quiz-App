const ScoreRemark = ({ percentage }) => {
    const generateRemark = () => {
        const reviews = [
            {
                color: "#ff4d4f",
                remark: "Poor",
                message: "Need serious improvement.",
                lowest: 0,
                highest: 19,
            },
            {
                color: "#ff7a45",
                remark: "Below Average",
                message: "Keep practicing.",
                lowest: 20,
                highest: 39,
            },
            {
                color: "#ffa940",
                remark: "Average",
                message: "You're getting there!.",
                lowest: 40,
                highest: 59,
            },
            {
                color: "#ffc53d",
                remark: "Good",
                message: "Nice work! Keep it up.",
                lowest: 60,
                highest: 79,
            },
            {
                color: "#73d13d",
                remark: "Very Good!",
                message: "Almost perfect!.",
                lowest: 80,
                highest: 89,
            },
            {
                color: "#52c41a",
                remark: "Excellent!",
                message: "Outstanding performance!.",
                lowest: 90,
                highest: 100,
            },
        ];

        const pickRemark = reviews.find(
            (rev) => percentage >= rev.lowest && percentage <= rev.highest
        );

        return pickRemark;
    };

    const remarkData = generateRemark();

    return (
        <div className="remark-container">
            <span
                style={{
                    color: remarkData.color,
                    fontSize: "30px",
                    fontWeight: "bolder",
                    letterSpacing: "-1px",
                }}
            >
                {remarkData.remark}
            </span>
            <span
                style={{
                    fontSize: "15px",
                }}
            >
                {remarkData.message}
            </span>
        </div>
    );
};

export default ScoreRemark;
