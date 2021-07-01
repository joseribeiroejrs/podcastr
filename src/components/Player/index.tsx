import Image from 'next/image'

import PlayingImg from '../../../public/playing.svg';
import ShuffleImg from '../../../public/shuffle.svg';
import PlayPreviousImg from '../../../public/play-previous.svg';
import PlayImg from '../../../public/play.svg';
import PlayNextImg from '../../../public/play-next.svg';
import RepeatImg from '../../../public/repeat.svg';

import styles from './styles.module.scss';

export const Player = () => {
	return (
		<div className={styles.playerContainer}>
			<header>
				<Image src={PlayingImg} alt="Tocando agora" />
				<strong>Tocando agora</strong>
			</header>
			<div className={styles.emptyPlayer}>
				<strong>Selecione um podcast para ouvir</strong>
			</div>
			<footer className={styles.empty}>
				<div className={styles.progress}>
					<span>00:00</span>
					<div className={styles.slider}>
						<div className={styles.emptySlider}></div>
					</div>
					<span>00:00</span>
				</div>
				<div className={styles.buttons}>
					<button type="button">
						<Image src={ShuffleImg} alt="Embaralhar" />
					</button>
					<button type="button">
						<Image src={PlayPreviousImg} alt="Tocar anterior" />
					</button>
					<button type="button" className={styles.playButton}>
						<Image src={PlayImg} alt="Tocar" />
					</button>
					<button type="button">
						<Image src={PlayNextImg} alt="Tocar próxima" />
					</button>
					<button type="button">
						<Image src={RepeatImg} alt="Repetir" />
					</button>
				</div>
			</footer>
		</div>
	)
}
