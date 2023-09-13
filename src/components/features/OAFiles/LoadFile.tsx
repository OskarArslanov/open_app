import { FunctionComponent, useRef, useState } from 'react';
import styled from '@emotion/styled';
import OAAlert, { OAAlertType } from '../OAAlert';

interface VVLoadFileProps {
  children?: React.ReactNode;
  onChange?: (e: File[]) => void;
  multiple?: boolean;
  className?: string;
  style?: React.CSSProperties;
  accept?:
    | 'image/*'
    | 'image/*, application/pdf'
    | 'video/mp4'
    | '.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    | string;
  sizeInMb?: number;
  // name?: string;
  // label?: string;
  // required?: boolean;
  dataTestId?: string;
  disabled?: boolean;
}

const StyledLabel = styled.label({
  cursor: 'pointer',
  display: 'flex',
  boxShadow: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '16px',
  color: 'var(--color-primary)',
  WebkitTouchCallout: 'none',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none',
});

const LoadFile: FunctionComponent<VVLoadFileProps> = (props) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [alert, setAlert] = useState<OAAlertType>();
  const fileUpload = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    ref.current?.click();
  };

  const handleLoaded = (e: React.ChangeEvent<HTMLInputElement>) => {
    const images = e.target.files;
    let list = Object.values(images!);
    if (props.sizeInMb) {
      const largeFiles: File[] = [];
      list = list.filter((item) => {
        const isLarge = item.size > props.sizeInMb! * 1024 * 1024;
        if (isLarge) largeFiles.push(item);
        return !isLarge;
      });
      if (largeFiles.length > 0) {
        const message = `Файлы ${largeFiles
          .map((item) => item.name)
          .join(', ')} слишком большие!`;
        setAlert({ type: 'error', message });
      }
    }
    props.onChange?.(list);
  };
  return (
    <div className={props.className} style={props.style}>
      <OAAlert alert={alert} onClose={() => setAlert(undefined)} />
      <StyledLabel onClick={fileUpload} htmlFor="upload">
        {props.children}
      </StyledLabel>
      <input
        disabled={props.disabled}
        ref={ref}
        type="file"
        id="upload"
        accept={props.accept || 'image/*'}
        hidden
        multiple={props.multiple}
        onChange={handleLoaded}
        data-testid={props.dataTestId || 'load-file'}
      />
    </div>
  );
};

export default LoadFile;
