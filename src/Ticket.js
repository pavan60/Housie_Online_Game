import React from 'react';
import './css/ticketcss.css';

class Ticket extends React.Component {
    state = { 
        five_count : 0
     }

    handleClick1(e){
        console.log("clicked button");
        console.log(e.target.id);
    }
    handleClick2(e){
        console.log("clicked button");
        console.log(e.target.id);
    }
    handleClick3(e){
        console.log("clicked button");
        console.log(e.target.id);
    }

    render() { 

        let row1 =[],row2=[],row3=[];
        var key_cnt = 0;
        for(var i=1;i<=9;i++){
            var keyid1 = "row1_"+key_cnt;
            var keyid2 = "row2_"+key_cnt;
            var keyid3 = "row3_"+key_cnt;
            
            row1.push(<button className = "row1" id={keyid1} key={keyid1} onClick={this.handleClick1}></button>);
            row2.push(<button className = "row2" id={keyid2} key={keyid2} onClick={this.handleClick2}></button>);
            row3.push(<button className = "row3" id={keyid3} key={keyid3} onClick={this.handleClick3}></button>);

            key_cnt = key_cnt+1;
        }
        return ( 
            <React.Fragment>
                {/* <h2>Ticket</h2>  */}
                <div>
                    <div>
                        {row1}
                    </div>
                    <div>
                        {row2}
                    </div>
                    <div>
                       {row3}
                    </div>  
                </div>
            </React.Fragment>
        );
    }
}
 
export default Ticket;