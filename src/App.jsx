import GoogleLoginButton from "./components/GoogleLoginButton";
import "./App.css";
import LogoutButton from "./components/LogoutButton";
import WriteRoutineButton from "./components/WriteRoutineButton";
import GetRoutine from "./components/GetRoutine";
import DeleteRoutineButton from "./components/DeleteRoutineButton";
import CheckSessionButton from "./components/CheckSessionButton";
import GetDateRoutineButton from "./components/GetDateRoutineButton";
import DateRoutineCheckButton from "./components/DateRoutineCheckButton";
import UpdateCommentButton from "./components/UpdateComment";
import GetCalendarButton from "./components/GetCalendarButton";
import GetGoogleDataButton from "./components/GetGoogleDataButton";

function App() {
  return (
    <>
      <h1>Google Login Example</h1>
      <GoogleLoginButton />
      <LogoutButton />
      <WriteRoutineButton />
      <GetRoutine />
      <DeleteRoutineButton />
      <CheckSessionButton />
      <GetDateRoutineButton />
      <DateRoutineCheckButton />
      <UpdateCommentButton />
      <GetCalendarButton />
      <GetGoogleDataButton />
    </>
  );
}

export default App;
