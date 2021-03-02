import React, {Component} from 'react';
import ReactDom from 'react-dom';
import TodoContextProvider from "./contexts/TodoContext";
import TodoTable from "./components/TodoTable";

class App extends Component {
  render() {
    return (
      <TodoContextProvider>
        <TodoTable>

        </TodoTable>
      </TodoContextProvider>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('root'));