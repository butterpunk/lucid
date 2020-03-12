import { connect } from 'react-redux';
import { getAllQuestions } from "../../actions/questions.js";
import { getNextItem } from "../../reducers";

import App from './container.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const mapStateToProps = (state) => ({
    item: getNextItem(state)
});

export default  connect(
    mapStateToProps, { 
        getAllQuestions,
    }
  )(App);