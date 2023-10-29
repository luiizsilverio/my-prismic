import Image from 'next/image';
import Link from 'next/link';

import LogoSvg from '@/../public/images/logo.svg';
import ActiveLink from '../ActiveLink';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <ActiveLink href="/">
          <Image src={LogoSvg} alt="Sujeito logo" className={styles.logo} />
        </ActiveLink>

        <nav>
          <ActiveLink href="/">
            <span>Início</span>
          </ActiveLink>
          <ActiveLink href="/posts">
            <span>Conteúdo</span>
          </ActiveLink>
          <ActiveLink href="/sobre">
            <span>Quem somos</span>
          </ActiveLink>
        </nav>

        <a href="https://github.com/luiizsilverio" type='button' className={styles.comecarBtn}>
          COMEÇAR
        </a>
      </div>
    </div>
  )
}
