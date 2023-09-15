import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { CSSProperties, FC } from 'react';
import OASelect from '@/features/OASelect';
import { IdValue } from '@/entities/functional';

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

interface Props {
  className?: string;
  style?: CSSProperties;
  id?: string;
}
const OALangSelectWidget: FC<Props> = (props) => {
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

export default OALangSelectWidget;
