import Alert from "react-bootstrap/Alert";

const ToastAlert = ({ showAlert, alertData }) =>
  showAlert && (
    <Alert key="success" variant="success">
      <strong>{alertData.type}!</strong> {alertData.msg}
    </Alert>
  );

export default ToastAlert;
