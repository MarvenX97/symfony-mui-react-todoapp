import React, {useContext, useState} from 'react';
import {TodoContext} from "../contexts/TodoContext";
import {IconButton, Table, TableBody, TableHead, TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {TextFields} from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";

function TodoTable() {
  const context = useContext(TodoContext);
  const [addTodo, setAddTodo] = useState('');
  return (
    <form onSubmit={(event)=> {context.createToDo({name: addTodo}, event)}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Task
            </TableCell>
            <TableCell align="right">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <TextField value={addTodo} onChange={(event)=>{setAddTodo(event.target.value)}} label="New Task" fullWidth={true}/>
            </TableCell>
            <TableCell align="right">
              <IconButton type="submit">
                <AddIcon/>
              </IconButton>
            </TableCell>
          </TableRow>
          {context.todos.slice().reverse().map((todo,index) =>
            (
              <TableRow key={'todo'+index}>
                <TableCell>
                  {todo.name}
                </TableCell>
                <TableCell align="right">
                  <IconButton>
                    <EditIcon/>
                  </IconButton>
                  <IconButton>
                    <DeleteIcon/>
                  </IconButton>
                  <IconButton>
                    <VisibilityIcon/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          <TableRow>

          </TableRow>
        </TableBody>
      </Table>
    </form>

  );
}

export default TodoTable;