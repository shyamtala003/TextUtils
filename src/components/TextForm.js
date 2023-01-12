import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { useEffect } from "react";

const TextForm = ({ mode, setAlertData }) => {
  const [text, settext] = useState("Leave text here");
  const [disabledBtn, setDisabledBtn] = useState(false);

  let handleOnChange = (event) => {
    settext(event.target.value);
  };

  useEffect(() => {
    if (text.length === 0) {
      setDisabledBtn(true);
    } else {
      setDisabledBtn(false);
    }
  }, [text]);

  let handleToupper = () => {
    let newText = text.toUpperCase();
    settext(newText);
    setAlertData("text converted to uppercase", "success");
  };

  let handleTolower = () => {
    let newText = text.toLowerCase();
    settext(newText);
    setAlertData("text converted to lowercase", "success");
  };

  let handleToCapitalize = () => {
    let newText = text.toLowerCase();
    newText = newText.split(" ");
    newText = newText.map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    settext(newText.join(" "));
    setAlertData("text converted to capitalize", "success");
  };

  let handleToRemoveSpaces = () => {
    let newText = text.split(" ");
    newText = newText.filter((str) => {
      if (!str === "") {
        return str;
      } else {
        return str;
      }
    });
    settext(newText.join(" "));
    setAlertData("all unnecessary white space has been removed", "success");
  };

  return (
    <>
      <Container className="mt-4">
        <Form.Control
          as="textarea"
          style={{
            height: "100px",
            backgroundColor: mode === "light" ? "white" : "#495057",
            color: mode === "light" ? "black" : "white",
          }}
          value={text}
          onChange={handleOnChange}
        />{" "}
        <Button
          variant="primary"
          className="m-2"
          type="button"
          onClick={handleToupper}
          disabled={disabledBtn}
        >
          Uppercase{" "}
        </Button>{" "}
        <Button
          variant="secondary"
          className="m-2"
          type="button"
          onClick={handleTolower}
          disabled={disabledBtn}
        >
          Lowercase{" "}
        </Button>{" "}
        <Button
          variant="success"
          className="m-2"
          type="button"
          onClick={handleToCapitalize}
          disabled={disabledBtn}
        >
          Capitalize{" "}
        </Button>{" "}
        <Button
          variant="warning"
          className="m-2"
          type="button"
          onClick={handleToRemoveSpaces}
          disabled={disabledBtn}
        >
          Remove Spaces
        </Button>
      </Container>

      <Container>
        <h1 style={{ color: mode === "light" ? "black" : "white" }}>
          Your Text Summary
        </h1>
        <p style={{ color: mode === "light" ? "black" : "white" }}>
          {
            text.split(" ").filter((el) => {
              return el.length !== 0;
            }).length
          }{" "}
          words and {text.length} charecters
        </p>
      </Container>
    </>
  );
};

export default TextForm;
