import React from "react";

//SPREAD ES6
// const A = [1,2,3];
// const B = [1,2,...A,6]; // B = [1,2,1,2,3,6]

function App(){
    const [info, setInfo] = React.useState({
        firstName: "",
        lastName: "",
        email:""
    });

    function handleChange(event){
        const {name, value} = event.target;

            // USING SPREAD OPERATOR ES6
        setInfo(previousValue =>({...previousValue, 
                                    [name]:value // name = event.target.fName ||
                                                 // name = event.target.lName ||
                                                 // name = event.target.email ||
                                }));
    }

    return(
        <div>
            <h1>Hello {info.fName} {info.lName}</h1>
            <p>{info.email}</p>
            <form>
                <input onChange={handleChange} type="text" name="fName" placeholder="First name" ></input>
                <input onChange={handleChange} type="text" name="lName" placeholder="Last name" ></input>
                <input onChange={handleChange} type="email" name="email" placeholder="Email"></input>
            </form>
        </div>
    );
}


export default App;