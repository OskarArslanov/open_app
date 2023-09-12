import { useLocale } from 'next-intl';
import { IdValue } from '@/entities/functional';
import { usePathname, useRouter } from 'next-intl/client';
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
const OALangSelect = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChangeLang = (value?: IdValue) => {
    const updatedLocale = value?.value.toLowerCase();
    router.replace(pathname, { locale: updatedLocale });
  };

  return (
    <OASelect
      values={langs}
      value={langs.find((item) => item.value.toLocaleLowerCase() === locale)}
      onChange={handleChangeLang}
    />
  );
};

export default OALangSelect;
