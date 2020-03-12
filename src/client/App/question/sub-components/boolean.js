import React from 'react';

const TrueFalse = (props) => {
    let { updateAnswer } = props;
    return(
        <div  onClick={(e)=>updateAnswer(e.target.value)}>
            <div>
                <input type="radio" id="true" name="selection" value="true" />
                <label for="true">True</label>
            </div>
            <div>
                <input type="radio" id="false" name="selection" value="false" />
                <label for="false">False</label>
            </div>
        </div>
    )
}

export default TrueFalse;