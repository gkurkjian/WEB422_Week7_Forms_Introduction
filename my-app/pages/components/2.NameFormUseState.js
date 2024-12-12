import { useState } from "react";

export default function NameFormUseState() {

    const [ fullName, setFullName ] = useState('Homer Simpson');  // Set default name will be "Homer Simpson"

    function submitForm(e) {
        e.preventDefault();
        console.log("2.NameFormUseState --> name submitted");
        console.log("Full Name = " + fullName)
    }

    return (
        <>
        <form onClick={submitForm}>
            <h4>2.NameFormUseState.js</h4>
            Full Name:  <br />
            <input type="text" value={fullName} onChange={e => {setFullName(e.target.value)}} name="fullName"/> <br /><br />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}