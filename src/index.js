import React from "react";
import { render } from "react-dom";
import Main from "./Components/Main";
import "./styles/stylesheet.css"
//const tasks = ["Take the trash out", 'Shovel the driveway', 'Walk the dog']

// const element = React.createElement('h1', null, 'Hello World!');
// const element = React.createElement('ol', null, tasks.map((task, index) =>
//   React.createElement('li', {key: index}, task)
// ));

// const element = 
// <div>
//   <h1>Task list</h1>
//   <ol> 
//   {tasks.map((task, index) => <li key={index}>{task}</li>)}
//   {/* <li>{tasks[0]}</li>
//   <li>{tasks[1]}</li>
//   <li>{tasks[2]}</li> */}
//   </ol>
// </div>

// class List extends Component {
//   render() {
//     return(
//       <ol> 
//         {this.props.tasks.map((task, index) => <li key={index}>{task}</li>)}
//       </ol>
//     )
//   }
// }

// class Title extends Component {
//   render() {
//     return <h1>{this.props.title}</h1>
//   }
// }

// class Main extends Component {
//   render() {
//     return <div>
//               <Title title={'toDos'}/>
//               <List tasks = {['Mow the law', 'Walk the dog']}/>
//               <List tasks = {['Hose the driveway', 'Finish the laundry']}/>
//            </div>
    
//   }
// }
render(<Main/>, document.getElementById('root'));
