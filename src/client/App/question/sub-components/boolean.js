import React, {useState} from 'react';

const TrueFalse = (props) => {
    let { updateAnswer } = props;
    let [radioValue, setRadioValue] = useState('');

    const handleChange = (val) => {
        setRadioValue(val);
        updateAnswer(val);
    }

    return(
        <form  onClick={(e)=>handleChange(e.target.value)}>
            <div>
                <input type="radio" id="true" name="selection" value="true" checked={radioValue === 'true'} />
                <label htmlFor="true">True</label>
            </div>
            <div>
                <input type="radio" id="false" name="selection" value="false" checked={radioValue === 'false'} />
                <label htmlFor="false">False</label>
            </div>
        </form>
    )
}

export default TrueFalse;