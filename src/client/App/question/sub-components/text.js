import React from 'react';

const Text = (props) => {
    let { updateAnswer } = props; 
    return(
        <>
            <input 
                onChange={(e)=>updateAnswer(e.target.value)} 
                type="text" 
                id="name" 
                name="name" 
                required minlength="4" 
                maxlength="20" 
                size="20"
            >
            </input>
       </>
    );
};

export default Text;