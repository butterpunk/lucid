import React, { useEffect } from 'react';
import Question from './question';
import Quiz from './quiz';

 const App = (props) => {

    let {
        getAllQuestions,
        item, 
    } = props;

    useEffect(() => {
        //this is our entry point - get all questions from server and radomize index
        getAllQuestions();
    //https://github.com/facebook/create-react-app/issues/6880
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    if(item.page_type === 'quiz'){
        return <Quiz />;
    }else if(item.page_type === 'question'){
        return <Question />;
    }else{
        return null;
    }
};

export default App;