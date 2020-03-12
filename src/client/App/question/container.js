import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { decodeHtml } from '../../../utils/helpers.js';
import Multiple from './sub-components/multiple.js';
import TrueFalse from './sub-components/boolean.js';
import Text from './sub-components/text.js';

 const Quiz = (props) => {

    let { 
        question,
        randomizeQuestionIndex, 
        answerQuestion,
    } = props;

    let [answer, updateAnswer] = useState('');

    const handleNext = (question) => {
        //TODO:  clear answer
        answerQuestion(question.correct_answer, answer);
        updateAnswer('');
        randomizeQuestionIndex();
    }
    const getInput = (question) =>{
        switch(question.type){
            case 'multiple':
                return <Multiple question={question} updateAnswer={updateAnswer}/>;
            case 'boolean':
                return <TrueFalse question={question} updateAnswer={updateAnswer} />;
            case 'text':
                return <Text question={question} updateAnswer={updateAnswer} />;
            default:
                return null;
        }
    }

    //TODO - rename currentQuestion
    return(
        <Container>
            <Row className="justify-content-md-center">
                <Col xs="4">
                    <h5>{decodeHtml(question.question)}</h5>
                    {getInput(question)}
                    <Button variant="primary" onClick={()=> handleNext(question)}>Next</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Quiz;