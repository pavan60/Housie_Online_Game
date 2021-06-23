import React from 'react';

class AdminPlayerList extends React.Component {
    state = {  }
    render() { 

        var playerList = [];
        playerList.push(<li> Player 1</li>)

        return ( 
            <div className="AdminPlayerListClass">
                <div className="startgame">
                    <button className="startGameButton" key="startGameKey"> START GAME </button>
                </div>
                <div className="PlayersListClass">
                    <ul className="Player_UL_class">
                        {playerList}
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default AdminPlayerList;