import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function NameFormHookFormValidation() {

    const { register, handleSubmit, setValue, watch, formState: { errors }} = useForm({
        defaultValues: {
            fullName: ""
        }
    });

    const watchUserName = watch("fullName");


    useEffect(() => {
        setValue("fullName", "Homer Simpson");
    }, [setValue]);

    function submitForm(data) {
        console.log(data);
    };

    return (
        <>
            <h4>7.NameFormHookFormValidations.js</h4>

            {/* This is the new and better version. Not From The WEB422 Website! If you want to see the old version it's here: https://github.com/gkurkjian/WEB422-Week6-Practice/blob/main/pages/components/7NameFormHookFormValidation.js */}
            <form onSubmit={handleSubmit(submitForm)}>
                <label>Full Name:</label> <br />
                {watchUserName} <br />
                <input {...register("fullName", 
                    { 
                        required: "Name is required!", 
                        minLength: { value: 2, message: "Name must be at least 2 characters!" }
                    })}/>  <br />
                {errors.fullName && <div style={{ color: "red" }}>{errors.fullName.message}</div>} <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}