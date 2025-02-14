import BasicNameForm from "./components/1.BasicNameForm";
import NameFormUseState from "./components/2.NameFormUseState";
import NameFormUseEffect from "./components/3.NameFormUseEffect";
import NameformHookUseForm from "./components/4.NameFormHookUseForm";

export default function Home() {
  return (
    <>
      <h1>Form Introduction by Using React/Next.js</h1> <br /><br />
      <BasicNameForm /> <br />
      <NameFormUseState /> <br />
      <NameFormUseEffect /> <br />
      <NameformHookUseForm /> <br />
    </>
  );
}
