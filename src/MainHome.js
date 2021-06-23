import React from 'react';
import PlayerTicket from './PlayerTicket';
import UserHome from './UserHome';

class MainHome extends React.Component {
    state = {  }
    render() { 

        let check_page = "main_home";

        if(check_page === "main_home"){
            return (<UserHome ></UserHome>);
        }else{
            return (<PlayerTicket></PlayerTicket>);
        }
    }
}
 
export default MainHome;