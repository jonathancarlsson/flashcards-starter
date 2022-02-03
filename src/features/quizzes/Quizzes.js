import { useSelector } from "react-redux";
import { selectQuizzes } from "./quizzesSlice";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";

export default function Quizzes() {
  const quizzes = useSelector(selectQuizzes);
  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes).map((quiz) => (
          <Link key={quiz.id} to={ROUTES.quizRoute(quiz.id)}>
            <li className="quiz">{quiz.name}</li>
          </Link>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}


/*
15.

Lastly, import your selector in src/features/quizzes/Quizzes.js and 
src/features/quizzes/Quiz.js and make sure those components are displaying 
the correct data:

    The Quizzes component should render a Link for each quiz value in the
     quizzes slice of state.
    The Quiz component uses the react-router-dom method useParams() 
    to determine the quizId to render. Therefore, it needs the full set 
    of quizzes to find the appropriate quiz object to render.


*/