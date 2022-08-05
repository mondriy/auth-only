import { FC, PropsWithChildren } from 'react';
import { Label, StyledCheckbox } from './CheckBox.style';

type CheckBoxType = {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckBox: FC<PropsWithChildren<CheckBoxType>> = ({
  checked,
  onChange,
  children,
}) => {
  return (
    <div>
      <StyledCheckbox
        checked={checked}
        onChange={onChange}
        id='input-checkbox'
        type='checkbox'
      />
      <Label htmlFor='input-checkbox'>{children}</Label>
    </div>
  );
};

export default CheckBox;
