import { useForm } from "react-hook-form";
import { act, useEffect } from "react";

export default function NameFormUseHookFormDetail() {

    const { register, handleSubmit, setValue, watch } = useForm({

    // register: for taking each object property on included in the <input> field for TODO or update
    // handleSubmit: to pass the object into another function that'll console.log() the data
    // setValue: to set the default value of the object
    // watch: it's to watch the property of the user while typing in the field, which in our case we used it in fullName field
        defaultValues: {
            fullName: "",
            address: "",
            campus: "",
            program: "",
            parking: "",
            active: false
        }
    });

    // Here, we included a watch property at line 10 in useForm() field. This will help the user see its typing fullName in <input> field
    //which we included on line 56
    const watchUserName = watch("fullName");

    useEffect(() => {
        let data = {
            fullName: "Homer Simpson",
            address: "123 Main St, Springfield U.S.A",
            campus: "Newham",
            program: ["CPA", "CPP"],
            parking: "Semester",
            active: true
        }

        // setting the value on each form field form data{} object using "for in" loop
        for(const prop in data) {
            setValue(prop, data[prop])
        }
    }, [setValue]);  

    // // Just test this in inspect, it'll display each letter that you text instantly in console :)
    // useEffect(() => {
    //     console.log("useName changed: ", watchUserName);
    // }), [watchUserName];

    function submitForm(data) {
        console.log("TODO, submit this to an API endpoint");
        console.log(JSON.stringify(data));
        console.log(data);
    }

    return (
        <>
            <h4>6.NameFormHookFormDetail.js</h4>

            <form onSubmit={handleSubmit(submitForm)}>
                User Name: <br />
                {watchUserName} <br />
                <input {...register("fullName")} /> <br /><br />

                Address:  <br />
                <textarea {...register("address")} /> <br /><br />

                Campus: <br />
                <select {...register("campus")}>
                    <option value="king">King</option>
                    <option value="satY">Seneca ar York</option>
                    <option value="newnham">Newnham</option>
                    <option value="markham">Markham</option>
                </select> <br /><br />

                Program:  <br />
                <select {...register("program")}>
                    <option value="DAD">Database Application Developer</option>
                    <option value="CPA">Computer Programming &amp; Analysis</option>
                    <option value="CPP">Computer Programming</option>
                    <option value="DSA">Honours Bachelor of Data Science and Analytics</option>
                </select>  <br /><br />

                Parking: <br />
                    <input type="radio" value="daily" {...register("parking")} /> Daily<br />
                    <input type="radio" value="semester" {...register("parking")} /> Semester<br />
                    <input type="radio" value="year" {...register("parking")} /> Academic Year<br /><br />

                <input type="checkbox" {...register("active")}/>Currently Active <br /><br />

                <button type="submit">Update User</button> 
            </form>
        </>
    )
}