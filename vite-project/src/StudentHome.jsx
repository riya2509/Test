import StudentDetails from "./StudentDetails";
// import { useNavigate } from "react-router-dom";

function StudentHome() {
  const name = "Riya Gupta";
  return (
    <div>
      <StudentDetails name={name} />
    </div>
  );
}

export default StudentHome;
