const Score = ({score}) => {
    return (
        <li>
            <strong>Date:</strong> {score.date} |
            <strong>Score:</strong> {score.score}
        </li>
    )
}

export default Score;