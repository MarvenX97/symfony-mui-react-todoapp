import React, {Component, createContext} from 'react';

export  const TodoContext = createContext();

class TodoContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {name: 'bara orged'},
                ],
        };
    }
    //read
        readToDo(){

        }
    //create
        createToDo(){

        }
    //update
        updateToDo(){

        }
    //remove
        removeToDo(){

        }

    render() {
        return (
           <TodoContext.Provider value={{
               ...this.state,
                createToDo: this.createToDo.bind(this),
                updateToDo: this.updateToDo.bind(this),
                removeToDo: this.removeToDo.bind(this),
           }}>
               {this.props.children}
           </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;