import styled from "styled-components";

const InputForm = styled.input`
  font-size: 1.4rem;
  line-height: ${(props) =>
    props.multiline && props.row ? `${2 * props.row}00%` : ""};
  width: ${(props) => (props.fullWidth ? "100%" : "")};
  padding: ${(props) =>
    props.size === "sm" ? "1rem 1.2rem" : "1.8rem 1.2rem"};
  pointer-events: ${(props) => (props.disabled ? "none" : "")};
  border: 1px solid
    ${(props) => {
      if (props.disabled) return "#E0E0E0";
      else if (props.error) return "#D32F2F";
    }};
  border-radius: 8px;
  outline: none;
  background: ${(props) => (props.disabled ? "#F2F2F2" : "white")};
  &::placeholder {
    font-weight: 500;
    font-size: 1.4rem;
  }
  &:hover {
    border: 1px solid #333333;
  }
  &:focus {
    border: 1px solid ${(props) => (props.error ? "#D32F2F" : "#2962FF")};
  }
`;

const Label = styled.label`
  color: ${(props) => (props.error ? "#D32F2F" : "#333333")};
`;
const HelperText = styled.p`
  color: ${(props) => (props.error ? "#D32F2F" : "#828282")};
`;

const TextArea = styled.textarea`
  font-size: 1.4rem;
  resize: none;
  padding: 1.8rem 1.2rem;
  border: 1px solid
    ${(props) => {
      if (props.disabled) return "#E0E0E0";
      else if (props.error) return "#D32F2F";
    }};
  border-radius: 8px;
  outline: none;
  &::placeholder {
    font-family: "Noto sans JP";
    font-weight: 500;
    font-size: 1.4rem;
  }
`;
function Input(props) {
  return (
    <>
      <Label {...props}>{props.label || "Label"}</Label>
      <br />
      {props.multiline ? (
        <TextArea rows={props.row} placeholder="placeholder" />
      ) : (
        <>
          {props.startIcon && <i className="fas fa-phone-alt fa-2x"></i>}
          <InputForm
            {...props}
            placeholder={props.placeholder || "placeholder"}
            value={props.value || ""}
          />
          {props.endIcon && <i className="fas fa-lock fa-2x"></i>}
        </>
      )}
      <br />
      {props.helperText && (
        <HelperText {...props}>{props.helperText}</HelperText>
      )}
    </>
  );
}
export default Input;
