import { UseFormReturn, FieldValues, RegisterOptions } from 'react-hook-form';

export const handleErrors = (
  context: UseFormReturn<FieldValues>,
  value: string,
  name?: string,
  label?: string,
  rules?: RegisterOptions,
) => {
  if (!name) return undefined;
  const errors: string[] = [];

  const minLengthInvalid =
    !!rules?.minLength && value.length < Number(rules.minLength);
  if (minLengthInvalid) {
    const message = `${label} - количество символов должно быть более ${rules.minLength}`;
    errors.push(message);
    context.setError(name, { type: 'minLength', message });
  }

  const requiredInvalid = !!rules?.required && value.length < 1;
  if (requiredInvalid) {
    const message = `${label} - поле обязательно к заполнению`;
    errors.push(message);
    context.setError(name, { type: 'required', message });
  }

  const maxLengthNotOk =
    !!rules?.maxLength && value.length > Number(rules.maxLength);
  if (maxLengthNotOk) {
    const message = `${label} - количество символов не более ${rules.maxLength}`;
    errors.push(message);
    context.setError(name, { type: 'maxLength', message });
  }
  const isValid = errors.length === 0;

  // if (errors.length) console.log(errors);
  if (isValid) context.clearErrors(name);
  return isValid;
};
