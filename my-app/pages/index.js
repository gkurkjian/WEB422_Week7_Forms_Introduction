import BasicNameForm from "./components/1.BasicNameForm";
import NameFormUseState from "./components/2.NameFormUseState";
import NameFormUseEffect from "./components/3.NameFormUseEffect";
import NameFormHookUseForm from "./components/4.NameFormHookUseForm";
import NameFormHookUseFormUseEffect from "./components/5.NameFormHookUseFormUseEffect";
import NameFormUseHookFormDetail from "./components/6.NameFormHookFormDetail";
import NameFormHookFormValidation from "./components/7.NameFormHookFormValidation";
import NameFormHookFormValidationMoreAttributes from "./components/8.NameFormHookFormValidationMoreAttributes";


export default function Home() {
  return (
    <>
      <h1>Form Introduction by Using React/Next.js</h1> <br /><br />
      <BasicNameForm /> <br />
      <NameFormUseState /> <br />
      <NameFormUseEffect /> <br />
      <NameFormHookUseForm /> <br />
      <NameFormHookUseFormUseEffect /> <br />
      <NameFormUseHookFormDetail /> <br />
      <NameFormHookFormValidation /> <br />
      <NameFormHookFormValidationMoreAttributes /> <br />
    </>
  );
}
