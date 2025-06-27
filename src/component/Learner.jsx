import Score from "./Score";

function Learner ({ learner }) {
  return (
    <div>
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      <h4>Scores:</h4>
      <ul>
        {learner.scores.map((score, i) => (
          <Score key={i} score={score} />
        ))}
      </ul>
    </div>
  );
};

export default Learner;
