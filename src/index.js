import React from 'react';
import ReactDOM from 'react-dom';
import Comments from './Comments';

function checkMail(someMail){
    if (someMail.indexOf('@') === true) {
        return someMail;
    };
    return 'put the right email address';
};


const App = () => { 
    return (
        <div>
            <h3>Hi world</h3>
            <input type='text' id='mail'></input>
            <label type='text'></label>
            <button onClick = {() => alert(checkMail('somemail'))}>Click HERE!</button>
            <div>
                <Comments name='Ivan' comment='test' />
                <Comments name='Jelena' comment='Hello' />
            </div>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);