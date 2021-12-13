import React from "react";


function App(){
    const [info, setInfo] = React.useState({
        firstName: "",
        lastName: "",
        email:""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setInfo(previousValue =>{
            if(name === "fName"){
                return{
                    firstName: value,
                    lastName: previousValue.lastName,
                    email: previousValue.email
                };
            }else if(name === "lName"){
                return{
                    firstName: previousValue.firstName,
                    lastName: value,
                    email: previousValue.email
                };
            }else if(name === "email"){
                return{
                    firstName: previousValue.firstName,
                    lastName: previousValue.lastName,
                    email: value
                };
            }
        })
    }

    return(
        <div>    
            <h1>Hello {info.firstName} {info.lastName}</h1>
            <p>{info.email}</p>
            <input onChange={handleChange} type="text" name="fName" placeholder="First name" ></input>
            <input onChange={handleChange} type="text" name="lName" placeholder="Last name" ></input>
            <input onChange={handleChange} type="email" name="email" placeholder="Email"></input>
        </div>
    );
}


export default App;