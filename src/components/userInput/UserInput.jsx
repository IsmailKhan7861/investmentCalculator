import styles from "./UserInput.module.css";
import React from "react";
import {useState} from "react";

const InitialInput = {
    'current-savings':10000,
    'yearly-contribution':1200,
    'expected-return':7,
    'duration':10
}

const UserInput = (props) =>{

    //managing states 

    // const [currSaving,setSaving] = useState(10000);
    // const [currYearly,setYearly] = useState(1200);
    // const [currReturn,setReturn] = useState(7);
    // const [currDuration,setDuration] = useState(10);
      // const submitHandler = (event) =>{
    //     console.log("FORM SUBMITTTED")
    //     event.preventDefault();
    //     //reset after submit
    //     setSaving("")
    //     setDuration("")
    //     setReturn("")
    //     setYearly("")
    // }

    // const resetHandler = (event) =>{
    //     console.log("RESET FORM ")
    //     setSaving("")
    //     setDuration("")
    //     setReturn("")
    //     setYearly("")
    // }
    // const changeHandler = (identifier,value) =>{
    //   if(identifier === "current-saving"){
    //       setSaving(value)
    //   }
    //   else if(identifier === "yearly-contribution"){
    //     setYearly(value)
    //   }
    //   else if(identifier === "expected-return"){
    //     setReturn(value)
    //   }
    //   else {
    //     setDuration(value)
    //   }
    // }


    const [userInput,setUserInput]= useState(InitialInput)

     const submitHandler = (event) =>{
        console.log("FORM SUBMITTTED")
        event.preventDefault();   
        props.onCalculate(userInput)     
    }

    const resetHandler = (event) =>{
        console.log("RESET FORM ")
        setUserInput(InitialInput)
        
    }


  
   
    const changeHandler = (input,value) =>{
        console.log(input,value)
        setUserInput(prevState =>{
            return {
                ...prevState, 
                [input]:value
            }
        })
    }


    return(
        <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>


            <input type="number" id="current-savings" onChange={(event)=>changeHandler("current-savings",event.target.value)} value = {userInput['current-savings']}/>
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>


            <input type="number" id="yearly-contribution" onChange={(event)=>changeHandler("yearly-contribution",event.target.value)} value={userInput['yearly-contribution']} />
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>


            <input type="number" id="expected-return"  onChange={(event)=>changeHandler("expected-return",event.target.value)} value = {userInput['expected-return']}/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>


            <input type="number" id="duration" onChange={(event)=>{changeHandler("duration",event.target.value)}} value={userInput['duration']}/>


          </p>
        </div>
        <p className={styles.actions}>
          <button onClick = {resetHandler} type="reset" className={styles.buttonAlt}>
            Reset
          </button>
          <button  type="submit" className={styles.button}>
            Calculate
          </button>
        </p>
      </form>
    )
}
export default UserInput;