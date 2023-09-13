import { useLocale } from 'next-intl';
import { IdValue } from 'components/entities/functional';
import { usePathname, useRouter } from 'next-intl/client';
import { CSSProperties, FC } from 'react';
import OASelect from '.';

const langs = [
  {
    id: 1,
    value: 'RU',
  },
  {
    id: 2,
    value: 'EN',
  },
];

interface OALangSelectProps {
  className?: string;
  style?: CSSProperties;
  id?: string;
}
const OALangSelect: FC<OALangSelectProps> = (props) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChangeLang = (value?: IdValue) => {
    const updatedLocale = value?.value.toLowerCase();
    router.replace(pathname, { locale: updatedLocale });
  };

  return (
    <OASelect
      className={props.className}
      values={langs}
      value={langs.find((item) => item.value.toLocaleLowerCase() === locale)}
      onChange={handleChangeLang}
      style={props.style}
      id={props.id}
    />
  );
};

export default OALangSelect;
