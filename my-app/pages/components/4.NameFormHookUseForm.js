// For this module I installed:  npm i react-hook-form
import { useForm } from "react-hook-form";

export default function NameformHookUseForm() {
    const { register, handleSubmit } = useForm ({
        defaultValues: {
            fullName: "Homer Simpson",  // default properties included in useForm() by mentioning the defaultValues: { ... }
        },
    })

    function submitForm(data) {
        console.log(`4.NameFormHookUseForm.js name submitted - useName: ${data.fullName}`)  // here will target the value the user entered which will be fullName
        //console.log(data);  // here will bring the entire prototype of the data. Basically taking the JSON data and push it to API
    }

    return (
        <>
            <h4>4.NameFormHookUseForm.js</h4>

            <form onClick={handleSubmit(submitForm)}>
                Full Name:  <br />
                <input type="text" {...register('fullName')}></input> <br /><br />  {/* Here we're interperting with line 7 as a default name. Any updates will come from line 12 */}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}