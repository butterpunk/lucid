import React from 'react';
import { decodeHtml } from '../../../../utils/helpers.js';

const Multiple = (props) => {
    let {question, updateAnswer} = props;

    const questions = question.incorrect_answers.map((item, index)=> {
            return (
                <div key={index}>
                    <input  type="radio" id={item} name='selection' value={item} />
                    <label htmlFor={item}>{decodeHtml(item)}</label>
                </div>
            );
    });

    return(
        <div onClick={(e)=>updateAnswer(e.target.value)}>
            {questions}
        </div>
    );
};

export default Multiple;