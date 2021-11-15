import Link from 'next/link';

import styles from './styles.module.scss';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className={styles.container}>
      <div className={styles.divisor} />
      <Link href={title === 'TEAMS' ? '/teams' : '/'} passHref>
        <h1>{title}</h1>
      </Link>
    </header>
  );
}
