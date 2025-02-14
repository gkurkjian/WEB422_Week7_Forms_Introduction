import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function NameFormHookUseFormUseEffect() {
    const { register, handleSubmit, setValue } = useForm({ // as you see here, we added a setValue property and we removed the value in defaultValues on line 9
        // on 4NameFormHookForm.js component, we used the "Homer Simpson" in defaultValues, but in this component we put it in the hook useEffect()
        defaultValues: {
            fullName: ""
        },
    });

    useEffect(() => {
        setValue("fullName", "Homer Simpson")  // here we added the default value by using the setValue property
    }, []);

    function submitForm(data) {
        console.log(`5.NameFormHookUseFormUseEffect.js name submitted - useName: ${data.fullName}`)  // here will target the value the user entered which will be fullName
        console.log(data);
    }

    return (
        <>
            <h4>5.NameFormHookUseFormUseEffect.js</h4>

            <form onSubmit={handleSubmit(submitForm)}>
                Full Name:  <br />
                <input type="text" {...register('fullName')}></input> <br /><br />  {/* Here we're interperting with line 7 as a default name. Any updates will come from line 12 */}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}