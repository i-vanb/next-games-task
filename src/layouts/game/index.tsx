import styles from "./Game.module.css";
import {GameInfo} from "@/interfaces/game.type";
import {CardImg} from "@/component/Card/CardImg";
import Link from "next/link";


export const Game = (props: GameInfo) => {
    const {title, seo_title, categories, provider, identifier} = props;
    return (
        <div className={styles.wrapper}>
            <h3>{title}</h3>
            <CardImg width={500} height={500} id={identifier}/>
            <div className={styles.list}>
                <span>categories: </span>
                {categories.map((category, index) => <Link title="follow the category" href={`/games/${category}?cat=1`}
                                                           key={index}>{category}</Link>)}
            </div>
            <p className={styles.subtitle}>provider: <Link href={`/games/${provider}`}>{provider}</Link></p>
        </div>
    )
}