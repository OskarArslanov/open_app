import { CSSProperties, FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import OAAlert, { OAAlertType } from '../OAAlert';

interface OAFormProps {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  onSubmit: (data: any) => void;
  onChangeValues?: (data: any) => void;
  error?: string;
  id?: string;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const OAForm: FC<OAFormProps> = (props) => {
  const methods = useForm();
  const [alert, setAlert] = useState<OAAlertType>();
  const handleChange = () => {
    props.onChangeValues?.(methods.getValues());
  };

  const handleSubmit = (data: any) => {
    const errorFields = Object.values(methods.formState.errors);
    const errorsMessages = errorFields.map((item) => item?.message);
    if (errorsMessages.length) {
      setAlert({ type: 'error', message: errorsMessages[0]?.toString() });
    }
    methods.handleSubmit(props.onSubmit)(data);
  };

  return (
    <FormProvider {...methods}>
      <OAAlert onClose={() => setAlert(undefined)} alert={alert} />
      <Form
        style={props.style}
        onSubmit={handleSubmit}
        onChange={handleChange}
        className={props.className}
        data-testId={props.id}
      >
        {props.children}
      </Form>
    </FormProvider>
  );
};

export default OAForm;
