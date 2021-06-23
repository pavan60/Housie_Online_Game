import React from 'react';
import './css/runningnumbercss.css';

class RunningNumber extends React.Component {
    state = { 
    }

    generate_random_value(e){
        console.log(e.target);
        console.log(e.currentTarget);

        var sel_div = e.currentTarget;
        sel_div.querySelector("h2").innerHTML = 60;
    }

    render() { 

        return ( 

        <React.Fragment> 
            <div className="RunningNumber_div" onClick={(e) => this.generate_random_value(e)} >
                <h2> </h2>
            </div>
        </React.Fragment>
        
        );
    }
}
 
export default RunningNumber;