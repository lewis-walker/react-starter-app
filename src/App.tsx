import React from 'react';
import './App.css';
import makeStyles from '@material-ui/styles/makeStyles/makeStyles'

import classNames from 'classnames'
import { CSSProperties } from '@material-ui/styles'

type ToDoItemType = {
  dueDate: String,
  description: String,
  done: boolean
}

const todoList: Array<ToDoItemType> = [
  {dueDate: 'Today', description: 'Just get it done', done: true},
  {dueDate: 'Today', description: 'Just get it done', done: true},
  {dueDate: 'Today', description: 'Just get it done', done: true},
  {dueDate: 'Today', description: 'Just get it done', done: true},
  {dueDate: 'Today', description: 'Just get it done', done: true},
  {dueDate: 'Today', description: 'Just get it done', done: true},
  {dueDate: 'Today', description: 'Just get it done', done: true},
  {dueDate: 'Today', description: 'Just get it done', done: true}
]

const useStyles = makeStyles({
  toDoRow: {
    '&:hover': {
    } as CSSProperties,
  },

  descriptionCol: {
  },

  dueDateCol: {
  },

  doneCol: {
  },

  col: {
  },

  container: {
  },

  title: {
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: 'rgba(0, 0, 0, 0.25)'
  }
})

const ToDoItem: React.FC<{item: ToDoItemType}> = props => {
  let classes = useStyles()

  return (
    <div className={classes.toDoRow}>
      <span className={classNames(classes.dueDateCol, classes.col)}>{props.item.dueDate}</span>
      <span className={classNames(classes.descriptionCol, classes.col)}>{props.item.description}</span>
      <div className={classNames(classes.doneCol, classes.col)}>
        <label htmlFor="done-checkbox">Done</label>
        <input type="checkbox" id="done-checkbox" checked={props.item.done}/>
      </div>
    </div>
  )
}


const App: React.FC = () => {
  let classes = useStyles()

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Todo List</h1>
      {todoList.map(todo => <ToDoItem item={todo}/>)}
    </div>
  );
}

export default App;
