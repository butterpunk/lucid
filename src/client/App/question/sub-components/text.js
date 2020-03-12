import React, {useState} from 'react';

const Text = (props) => {
    let { updateAnswer } = props;
    let [textValue, setTextValue] = useState('');

    const handleChange = (val) => {
        setTextValue(val);
        updateAnswer(val);
    }
    return(
        <>
            <input 
                onChange={(e)=>handleChange(e.target.value)} 
                type="text" 
                id="name" 
                size="20"
                value={textValue}
            >
            </input>
       </>
    );
};

export default Text;