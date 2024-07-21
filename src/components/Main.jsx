
import React, { useState } from 'react';

function MainComponent(){

   let [todayDate="23/5/2023",setDate]=useState('')
   let [count=0 ,setCount]=useState('')
   let [Inputname,setName]=useState('')
let  student1={
        name:"vishal",
        age:"23"
    }

 let    student2={
         name:"gaurav",
        age:"26"
    }

 let    student3={
         name:"Anish",
        age:"20"
    }

    const heandleInputValue= (e) => {
        setName(e.target.value);
      }
    
    return(
        <>
           <Greeting word="Good Morning Sir!" name={student1.name} age={student1.age} />
           <Greeting word="Good AfterNoon Sir!" name={student2.name} age={student2.age} onChange={()=>setDate("23/5/2023")}  />
           <Greeting word="Good Evening Sir!" name={Inputname} age={student3.age}  onChange={()=>setDate("23/5/2023")} />
           <button onClick={()=>setCount(count+1)}>click </button>
           <p>count is  : {count}</p>
           <button  onClick={()=>setDate("23/5/2023"+2)} >
             change date 
          </button>
          <h1>Today date is : {todayDate}</h1>

          <input type="text" placeholder="enter name" value={Inputname} onChange={heandleInputValue}/>
          <p> name is : {Inputname}</p>
          </>
    );
}

export default MainComponent;

function Greeting(props){
  return(
    <div>
        <h1>Student says  : {props.word} , student name is :{props.name}
             and student age is : {props.age}</h1>
    </div>
  );
}


// objects :  documents : 
// json format : 
// key-value pair . 

// it is represented by {} . 