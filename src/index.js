import React from 'react'
import ReactDOM from 'react-dom'

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
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);