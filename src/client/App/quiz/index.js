import { connect } from 'react-redux';
import { startQuiz} from "../../../actions/quiz.js";
import { getQuiz } from '../../../reducers/index.js';
import Quiz from './container.js';

const mapStateToProps = (state) => ({
    quiz: getQuiz(state)
});

export default  connect(
    mapStateToProps, {
        startQuiz
    }
  )(Quiz);