import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function NameFormHookFormValidationMoreAttributes() {
    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            age: 0,
        },
    });

    const watchUserName = watch(["firstName", "lastName"]);

    useEffect(() => {
        // This is a simple way to store values for each attribute
        setValue("firstName", "Homer");
        setValue("lastName", "Simpson");
        setValue("age", 42);

        // This example uses a `for...in` loop to iterate and fill the attributes
        /*
        let data = {
            firstName: "Homer",
            lastName: "Simpson",
            age: 42,
        };

        for (const prop in data) {
            setValue(prop, data[prop]);
        }
        */
    }, [setValue]);

    function submitForm(data) {
        console.log(data);
        // console.log(Object.keys(errors)); // Debugging purposes
    }

    return (
        <>
            <h4>8.NameFormHookFormValidationMoreAttributes.js</h4>

            <form onSubmit={handleSubmit(submitForm)}>
                {/* First Name errors handled with validation (required, minLength, maxLength) */}
                <span className={errors.firstName && "inputError"}>First Name:</span> <br />
                {watchUserName.join(" ")} <br />
                <input {...register("firstName", { required: true, minLength: 2, maxLength: 20 })} /> <br />

                {errors.firstName?.type === 'required' && <span> First Name is required</span>}
                {errors.firstName?.type === 'minLength' && <span> First Name must be at least 2 characters</span>}
                {errors.firstName?.type === 'maxLength' && <span> First Name must not exceed 20 characters</span>}
                <br /><br />

                {/* Last Name error handled using Regular Expressions (must contain only letters) */}
                <span className={errors.lastName && "inputError"}>Last Name:</span> <br />
                <input {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })} /> <br />

                {errors.lastName?.type === 'required' && <span> Last Name is required</span>}
                {errors.lastName?.type === 'pattern' && <span> Last Name must contain only letters (no numbers or special characters)</span>}
                <br /><br />

                {/* Age validation (Only even numbers between 18 and 80 are allowed) */}
                <span className={errors.age && "inputError"}>Age:</span> <br />
                <input
                    type="number"
                    {...register("age", {
                        min: 18,
                        max: 80,
                        validate: {
                            onlyEven: (v) => v % 2 === 0 || "Only even age values are accepted"
                        }
                    })}
                /> <br />

                {errors.age?.type === "min" && <span> Age must be at least 18</span>}
                {errors.age?.type === "max" && <span> Age must not exceed 80</span>}
                {errors.age?.type === "onlyEven" && <span> Only even age values are accepted</span>}
                <br /><br />

                {/* Disables the submit button if there are errors */}
                <button type="submit" disabled={Object.keys(errors).length > 0}>
                    Update User
                </button>
            </form>
        </>
    );
}
