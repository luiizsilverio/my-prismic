import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import TechImg from '../../public/images/techs.svg';
import styles from '@/styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sujeito - Apaixonado por tecnologia</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Levando você ao próximo nível!</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quos, quasi quas eius magni quisquam dolore a distinctio labore vero expedita excepturi alias sequi.
            </span>
            <Link href="/">
              <button>COMEÇAR AGORA!</button>
            </Link>
          </section>
          <img src="/images/banner-conteudos.png" alt="Conteúdos Sujeito programador" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2>Aprenda a criar aplicativos para Android e iOS</h2>
            <span>
              Você vai descobrir o jeito mais moderno de desenvolver apps nativos para iOS e Android, construindo aplicativos do zero até apps mais complexos.
            </span>
          </section>
          <img src="/images/financasApp.png" alt="Desenvolvimento Mobile" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <img src="/images/webDev.png" alt="Desenvolvimento Web" />
          <section>
            <h2>Aprenda a criar sistemas web</h2>
            <span>
              Criar sistemas web, sites usando as tecnologias mais modernas e requisitadas pelo mercado.
            </span>
          </section>
        </div>

        <footer className={styles.nextLevel}>
          <Image src={TechImg} alt="Tecnologias" />
          <h2>Mais de <span>5 mil</span> já levaram sua carreira ao próximo nivel.</h2>
          <span>E você, vai perder a chance de evoluir de uma vez por todas?</span>
          <Link href="#">
            <button>COMEÇAR AGORA!</button>
          </Link>
        </footer>
      </main>
    </>
  )
}
