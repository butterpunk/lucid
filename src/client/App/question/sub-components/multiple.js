import React, { useState } from 'react';
import { decodeHtml } from '../../../../utils/helpers.js';

const Multiple = (props) => {
    let {question, updateAnswer} = props;
    let [radioValue, setRadioValue] = useState('');

    const handleChange = (val) => {
        setRadioValue(val);
        updateAnswer(val);
    }
    const questions = question.incorrect_answers.map((item, index)=> {
            return (
                <div key={index}>
                    <input  type="radio" id={item} name='selection' value={item} checked={radioValue === item}/>
                    <label htmlFor={item}>{decodeHtml(item)}</label>
                </div>
            );
    });

    return(
        <form onClick={(e)=>handleChange(e.target.value)}>
            {questions}
        </form>
    );
};

export default Multiple;