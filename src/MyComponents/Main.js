import React, { useState } from "react";


const BackgroundContent = (props) => {
    

    const [placeholder, setPlaceholder] = useState("Celsius");
    
    const [temp1, setTemp1] = useState("Kelvin");
    const [temp2, setTemp2] = useState("Fahrenheit");
    
    const [output1, setOutput1] = useState(0.0);
    const [output2, setOutput2] = useState(0.0);
    const [inputTempType, setInputTempType]=useState("Celsius");

    const [inputTemp, setinputTemp] = useState("")
    
    
    const handleClick = () => {
        if (isNaN(inputTemp) || inputTemp===""){
            alert("Input is not a valid number!!");
            return;
        }
        else
            if (inputTempType === "Celsius") {
                const output1 = parseFloat(inputTemp) + 273;
                setOutput1(output1.toFixed(1).concat("°"))
                const output2 = (inputTemp * 9 / 5) + 32;
                setOutput2(output2.toFixed(1).concat("°"))

            } else if (inputTempType === "Fahrenheit") {
                const output1 = parseFloat(inputTemp - 32) * 5 / 9 + 273.15;
                setOutput1(output1.toFixed(1).concat("°"))
                const output2 = parseFloat(inputTemp - 32) * 5 / 9;
                setOutput2(output2.toFixed(1).concat("°"))

            } else if (inputTempType === "Kelvin") {
                const output1 = parseFloat(inputTemp) - 273.15;
                setOutput1(output1.toFixed(1).concat("°"))
                const output2 = (parseFloat(inputTemp) - 273.15) * 9 / 5 + 32;
                setOutput2(output2.toFixed(1).concat("°"))

            } else {
                console.error("error")
            }
        }
    
    const handleInputChange = (event) => {
        
        setinputTemp(event.target.value)

    }
        
        // Set headings for Temperature Type

        const handleSelectChange=(event)=>{
            const newPlaceholder=event.target.value;
            setPlaceholder(newPlaceholder)

            setOutput1(0);
            setOutput2(0);

            if(event.target.value==="Celsius"){
                const newTemp1="Kelvin";
                setTemp1(newTemp1)
                const newTemp2="Fahrenheit";
                setTemp2(newTemp2)
                setInputTempType("Celsius");
                
            }else if(event.target.value==="Fahrenheit"){
                const newTemp1="Kelvin";
                setTemp1(newTemp1)
                const newTemp2="Celsius";
                setTemp2(newTemp2)
                setInputTempType("Fahrenheit");
                
                
            }else if(event.target.value==="Kelvin"){
                const newTemp1="Celsius";
                setTemp1(newTemp1)
                const newTemp2="Fahrenheit";
                setTemp2(newTemp2)
                setInputTempType("Kelvin");
                
            }else{
                console.log("Error")
            }

        }
    return (

        <div className="container background-image">
            
                <div className="overlay">
                    <h1>Your go-to Temperature Converter!</h1>
                </div>
                <div className="converter">
                    <div className="innerDiv">
                        <div><h2>FROM</h2></div>

                        <select name="temp" 
                        className="selecttemp" 
                        onChange={handleSelectChange}
                        >
                            {props.myArray.map((myArray) => (
                                <option key={myArray.id} value={myArray.type}>
                                    {myArray.type}
                                </option>
                            ))}
                        </select>

                        <input 
                        className="selectinput" type="number" name="result" onChange={handleInputChange} placeholder={placeholder} />

                        <button className="convert-Btn" onClick={handleClick}>Convert</button>
                        

                        <div className="grid-container">
                            <div className="temp1">{temp1}<div><input className="tempoutput" value={output1} type="text" name="result" readOnly /></div></div>
                            
                            <div className="temp2">{temp2}<div><input className="tempoutput" value={output2}  type="text" name="result" readOnly /></div></div>
                        </div>

                    </div>

                </div>
                <div className="copyright">Umerr &copy;Copyright 2023 All Rights Reserved.</div>

        </div>


    )
}

export default BackgroundContent;