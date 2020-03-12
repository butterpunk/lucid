import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Quiz = (props) => {
    let {
        quiz,
        startQuiz
    } = props;

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs="auto">
                    <p>Correct: <span className='bold'>{quiz.correct}</span></p>
                    <p>Wrong: <span className='bold'>{quiz.incorrect}</span></p>
                    <p>Questions Answered: <span className='bold'>{quiz.total_answered}</span></p>
                    <p>Final Score: <span className='bold'>{((quiz.correct/quiz.total_answered) * 100).toFixed(2)}%</span></p>
                    <Button variant="primary" onClick={()=>{ startQuiz() }}>Restart Quiz</Button>
                </Col>
            </Row>
        </Container>
    );
}
export default Quiz;