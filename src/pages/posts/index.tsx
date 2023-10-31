import Head from 'next/head';
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

import ThumbImg from '@/../public/images/thumb.png';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Blog | Sujeito Programador</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="/posts">
            <figure>
              <Image
                src={ThumbImg}
                alt="Post título 1"
                width={720}
                height={410}
                quality={100}
              />
              <figcaption>
                <h2>Criando meu primeiro aplicativo</h2>
                <time dateTime='2021-07-14 00:00'>14 Julho 2021</time>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae eveniet nemo illo iure dolorem maxime excepturi enim. Aliquid dolores eligendi numquam dolor! Cum eligendi, autem, cumque, provident ex aliquam libero nesciunt tempora.</p>
              </figcaption>
            </figure>
          </Link>

          <div className={styles.navigation}>
            <div>
              <button>
                <FiChevronsLeft size={25} color="#FFF" />
              </button>
              <button>
                <FiChevronLeft size={25} color="#FFF" />
              </button>
            </div>
            <div>
              <button>
                <FiChevronRight size={25} color="#FFF" />
              </button>
              <button>
                <FiChevronsRight size={25} color="#FFF" />
              </button>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}
