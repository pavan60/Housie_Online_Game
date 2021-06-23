import React from 'react';
import './css/userhomecss.css';

class UserHome extends React.Component {
    state = {  }

    async handleCreateRoom(e){
        console.log(e.target);

        // let response = await fetch("http://localhost:8765/createRoom/5858",{method:'POST',mode:'no-cors'});
        // let data = await response.text();
        // console.log("data ",data);
        var roomid,text_div;
        text_div = document.getElementsByClassName("inp_txt_box_1")[0];
        roomid = text_div.value;
        console.log(roomid);

        let response = await fetch("http://localhost:8765/createRoom/"+roomid,{method:'POST' })
        
        let data = await response.text();

        await console.log(data);
        
    }

    async handleJoinRoom(){
        var roomid,text_div,playerName;
        text_div = document.getElementsByClassName("inp_txt_box_1")[0];
        roomid = text_div.value;

        text_div = document.getElementsByClassName("inp_txt_box_2")[0];
        playerName = text_div.value;

        console.log(roomid+" "+playerName);

        let response = await fetch("http://localhost:8765/joinroom/"+roomid+"/"+playerName,{method:'POST'})
        let data = await response.text();

        await console.log(data);
    }

    render() { 

        return ( 
            <React.Fragment>
                <div className="main_class">
                    <div className="info_class">
                        <h3>Create a Room or Join a Room </h3>
                        <input className="inp_txt_box_1" id="room_id_val" type="textbox" placeholder="enter room id"/>
                        <input className="inp_txt_box_2" id="room_id_val" type="textbox" placeholder="enter your name"/>
                    </div>
                    <div className="btn_class">
                        <button className="btn_create" key="create_button" onClick={(e) => this.handleCreateRoom(e)}> CREATE </button>
                        <button className="btn_join" key="join_button" onClick={(e) => this.handleJoinRoom(e)}> JOIN </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default UserHome;