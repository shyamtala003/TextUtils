import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";

const TextForm = () => {
  const [text, settext] = useState("Leave text here");

  let handleOnChange = (event) => {
    settext(event.target.value);
  };

  let handleToupper = () => {
    let newText = text.toUpperCase();
    settext(newText);
  };

  let handleTolower = () => {
    let newText = text.toLowerCase();
    settext(newText);
  };

  let handleToCapitalize = () => {
    let newText = text.split(" ");
    newText = newText.map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    settext(newText.join(" "));
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
  };

  return (
    <>
      <Container className="mt-4">
        <Form.Control
          as="textarea"
          style={{
            height: "100px",
          }}
          value={text}
          onChange={handleOnChange}
        />{" "}
        <Button
          variant="primary"
          className="m-2"
          type="button"
          onClick={handleToupper}
        >
          Uppercase{" "}
        </Button>{" "}
        <Button
          variant="secondary"
          className="m-2"
          type="button"
          onClick={handleTolower}
        >
          Lowercase{" "}
        </Button>{" "}
        <Button
          variant="success"
          className="m-2"
          type="button"
          onClick={handleToCapitalize}
        >
          Capitalize{" "}
        </Button>{" "}
        <Button
          variant="warning"
          className="m-2"
          type="button"
          onClick={handleToRemoveSpaces}
        >
          Remove Spaces
        </Button>
      </Container>

      <Container>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} charecters
        </p>
      </Container>
    </>
  );
};

export default TextForm;
