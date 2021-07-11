import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { format, parseISO } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";
import { api } from "../../services/api";
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString";

import styles from './episode.module.scss';
import Image from "next/image";
import Link from "next/link";

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string;
  published_at: string;
  file: {
    duration: number;
    url: string;
  }
}

type EpisodeProps = {
  episode: Episode;
}

const Episode = ({ episode }: EpisodeProps) => {
  const router = useRouter();
  return (
    <div className={styles.episode}>
      <div className={styles.thumbnailContainer}>
        <Link href="/">
          <button type="button">
            <Image width={24} height={24} src="/arrow-left.svg" alt="Voltar" />
          </button>
        </Link>
        <Image width={700} height={400} src={episode.thumbnail} alt={episode.title} objectFit="cover" />
        <button type="button">
          <Image width={24} height={24} src="/play.svg" alt="Tocar" />
        </button>
      </div>

      <header>
        <h1>{episode.title}</h1>
        <span>{episode.members}</span>
        <span>{episode.publishedAt}</span>
        <span>{episode.durationAsString}</span>
      </header>

      <div className={styles.description} dangerouslySetInnerHTML={{ __html: episode.description }} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const { data } = await api.get(`/episodes/${slug}`)

  const episode = {
    ...data,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
    duration: Number(data?.file?.duration),
    durationAsString: convertDurationToTimeString(Number(data?.file?.duration)),
    url: Number(data?.file?.url),
  }

  return {
    props: {
      episode
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}

export default Episode;