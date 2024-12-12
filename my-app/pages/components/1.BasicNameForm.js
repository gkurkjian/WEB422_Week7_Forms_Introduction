export default function BasicNameForm() {

    function submitForm(e) {
        e.preventDefault();
        console.log("1.BasicNameForm.js --> form submitted");
    }
    return (
        <>
            <form onSubmit={submitForm}>
                <h4>1.BasicNameForm.js</h4>
                Full Name: <br />
                <input type="text" name="fullName"/>
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}