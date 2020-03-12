import { connect } from 'react-redux';
import { answerQuestion, randomizeQuestionIndex } from "../../../actions/quiz.js";

import { getQuestion } from "../../../reducers";
import Question from './container.js';

const mapStateToProps = (state) => ({
    question: getQuestion(state)
});

export default  connect(
    mapStateToProps, { 
        answerQuestion,
        randomizeQuestionIndex,
    }
  )(Question);