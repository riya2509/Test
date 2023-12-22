import propTypes from "prop-types";
function StudentDetails(props) {
  return (
    <div>
      {" "}
      UserName : {props.name} phoneNumber: {props.phoneNumber}
    </div>
  );
}

StudentDetails.propTypes = {
  name: propTypes.string,
  phoneNumber: propTypes.number,
};
export default StudentDetails;
