import React from 'react';
import './css/displaynumcss.css';

class DisplayNumber extends React.Component {
    state = {  }
    render() { 

        var i,display_nums=[],key_val;
        for(i=1;i<=90;i++){
            key_val = "display_num_"+i;
            display_nums.push(<div className="Display_num" id = {key_val} key = {key_val} >{i}</div>);
        }

        return ( 
            <React.Fragment>
            {/* <h2>DisplayNumber</h2>  */}
            <div className="display_num_container">
                {display_nums}
            </div>
            </React.Fragment>
        );
    }
}
 
export default DisplayNumber;