import React from 'react';
import './Pomodoro.css';
import Button from '@material-ui/core/Button';


function Pomodoro(){
    return(
        <>
        <div id = "Container">
            <h2>Home</h2>
            <p>Welcome to the Pomodoro!</p>

            <div id = "middle_container">
                <div class = "button_bar">
                    <Button>Pomodoro</Button>

                </div>

            </div>

        </div>


        </>
    );
}

export default Pomodoro;