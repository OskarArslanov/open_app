'use client';
import Link from 'next/link';
import styles from './styles.module.css';
import {
  usePathname,
  useParams,
  useRouter,
  useSearchParams,
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from 'next/navigation';

const navbarData = [
  { name: 'О нас', href: 'about' },
  { name: 'Платформа', href: 'platform' },
  { name: 'Портфолио', href: 'portfolio' },
  { name: 'Контакты', href: 'contacts' },
];

const OANavbar = () => {
  const segment = useSelectedLayoutSegment();
  console.log(segment);
  return (
    <nav className={styles.navbar}>
      {navbarData.map((item) => {
        const isActive = item.href === segment;
        return (
          <Link
            href={item.href}
            shallow
            key={item.name}
            className={`${styles.navbar_link} ${isActive && styles.navbar_link__active}`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default OANavbar;
