import { ReactElement, cloneElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';

interface Props extends LinkProps{
  children: ReactElement;
}

export default function ActiveLink({ children, ...rest }: Props) {
  const { asPath } = useRouter()

  const className = asPath === rest.href ? "active" : '';

  return (
    <Link href="/" {...rest}>
      {cloneElement(children, { className })}
    </Link>
  )
}
