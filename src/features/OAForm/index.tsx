import { CSSProperties, FC, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';

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
  const [error, setError] = useState<any[]>();
  const [hasError, setHasError] = useState(false);
  const handleChange = () => {
    const errorFields = Object.values(methods.formState.errors);
    const errorsMessages = errorFields.map((item) => item?.message);
    setError(errorsMessages);
    setHasError(!!errorsMessages.length);
    props.onChangeValues?.(methods.getValues());
  };

  useEffect(() => {
    if (props.error) {
      setError([props.error]);
      setHasError(!![props.error].length);
    }
  }, [props.error]);

  return (
    <FormProvider {...methods}>
      <Form
        style={props.style}
        onSubmit={methods.handleSubmit(props.onSubmit)}
        onChange={handleChange}
        className={props.className}
        data-testId={props.id}
      >
        {props.children}
        {hasError && (
          <p
            style={{
              color: 'red',
              fontSize: '12px',
            }}
          >
            {error?.[0]}
          </p>
        )}
      </Form>
    </FormProvider>
  );
};

export default OAForm;
