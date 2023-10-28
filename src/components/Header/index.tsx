import Image from 'next/image';
import Link from 'next/link';

import LogoSvg from '@/../public/images/logo.svg';
import ActiveLink from '../ActiveLink';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <a>
          <Image src={LogoSvg} alt="Sujeito logo" />
        </a>

        <nav>
          <ActiveLink href="/">
            <span>Início</span>
          </ActiveLink>
          <Link href="/posts">
            Conteúdo
          </Link>
          <Link href="/sobre">
            Quem somos
          </Link>
        </nav>

        <a href="https://github.com/luiizsilverio" type='button' className={styles.comecarBtn}>
          COMEÇAR
        </a>
      </div>
    </div>
  )
}
