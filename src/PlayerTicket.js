import React from 'react';
import Ticket from './Ticket';
import RunningNumber from './RunningNumber';
import DisplayNumber from './DisplayNumber';
import './css/playerticketcss.css';

class PlayerTicket extends React.Component {
    state = {  }
    render() { 
        return ( 
        <React.Fragment>
        <div className="PT_Title">
            <h1>Havyansh Nandhan</h1> 
        </div>
        <div className="PT_Main">
            <div className="PT_Sub1">
                <Ticket></Ticket>
                <RunningNumber></RunningNumber>
            </div>
            <div className="PT_Sub2">
                <DisplayNumber></DisplayNumber>
            </div>
        </div>
        </React.Fragment>
        );
    }
}
 
export default PlayerTicket;