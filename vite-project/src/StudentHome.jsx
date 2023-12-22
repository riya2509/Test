import StudentDetails from "./StudentDetails";

function StudentHome() {
  const Username = "Riya Gupta";
  const phoneNumber = 9546007043;
  return (
    <div>
      <StudentDetails name={Username} phoneNumber={phoneNumber} />
    </div>
  );
}

export default StudentHome;
