
import GoalItems from './GoalItems.js';


const GoalList = () =>{
    return(
        <div>
            <ul>
                <li><GoalItems titulo="FirstGoal" texto="mi primer gol"/></li>
                <li><GoalItems titulo="SecondGoal" texto="mi segundo gol"/></li>
                <li><GoalItems titulo="ThirdGoal" texto="mi tercer gol"/></li>
            </ul>
        </div>
    )
}
export default GoalList;