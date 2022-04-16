import { useState } from 'react';
import styles from './Todo.module.css'
const Todo=()=>{
    const[input,setInput]=useState('');
    const[list,setList]=useState([]);
    const[date,setDate]=useState('');
    const[date1,setDate1]=useState('');
    const[show,setShow]=useState('')

    const changeHandler=(event)=>{
        const value=event.target.value;
        setInput(value);
    }

    const changeHandler1=(event)=>{
        const value=event.target.value;
        setDate(value);
    }

    const changeHandler2=(event)=>{
        const value=event.target.value;
        setDate1(value);
    }

    const clickHandler=()=>{
        const items=[...list];
        items.push(input);
        setList(items);
        setInput("");

    }

    const clickHandler2=()=>{
    if(date<date1){
    setShow("submitted on time");
    }
    else if(date>date1){
        setShow("submitted after due date")
    }
    else{
        setShow("submitted");
    }
    }

    const listitems=list.map((item,index)=>{
        return(
            <table border="1px" className={styles.table}>
            <thead>
                <tr>
                <th>Task</th>
                <th>Task completion date</th>
                <th>Due Date</th>
                <th>Remove entry</th>
                </tr>
            </thead>
                <tbody>
            <tr>
            <td key={index} id={index}>{item}</td>
            <td>{date}</td>
            <td>{date1}</td>
            <td><button 
            onClick={clickHandler2}>Delete</button></td>
            </tr>
            </tbody>
            </table>
        )
    })
    return(
        <>
        <div className={styles.main}>

        <input 
        onChange={changeHandler} 
        placeholder="Add task"
        className={styles.entry} 
        type="text"
        value={input}/>

        <input 
        onChange={changeHandler1}
        className={styles.date} 
        type="date"
        value={date}/>

        <input 
        onChange={changeHandler2}
        className={styles.date1} 
        type="date"
        value={date1}/>

        <button 
        onClick={clickHandler}
         className={styles.btn1}>Add to list</button>
        </div>

        <ol className={styles.list}>
            <li>{listitems}</li>
        </ol>

        <p className={styles.msg}>{show}</p>

        </>
    )
}
export default Todo;