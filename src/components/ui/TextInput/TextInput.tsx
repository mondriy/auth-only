import { forwardRef } from 'react';
import { Container, Error, Label, StyledInput } from './TextInput.style';

type TextInputType = {
  value?: string;
  label?: string;
  type?: 'text' | 'password' | 'email';
  error?: boolean;
  errorMesage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = forwardRef<HTMLInputElement, TextInputType>(
  (
    { value, label, type, error, errorMesage, onChange, ...inputProps },
    ref
  ) => {
    return (
      <Container>
        <Label>
          {label}
          <StyledInput
            ref={ref}
            type={type}
            value={value}
            onChange={onChange}
            error={error ? error : false}
            {...inputProps}
          />
        </Label>
        {error && <Error>{errorMesage}</Error>}
      </Container>
    );
  }
);

export default TextInput;
