import Alert from "react-bootstrap/Alert";

const ToastAlert = ({ showAlert, alertData }) => (
  <div style={{ height: "40px" }}>
    {showAlert && (
      <Alert key="success" variant="success">
        <strong>{alertData.type}!</strong> {alertData.msg}
      </Alert>
    )}
  </div>
);
export default ToastAlert;
