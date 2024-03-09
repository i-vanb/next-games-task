import styles from "./Games.module.css";
import {GameInfo} from "@/interfaces/game.type";
import {CardImg} from "@/component/Card/CardImg";
import Link from "next/link";

export const Games = (props: GamesProps) => {
    const {list, title} = props;

    return (
        <div>
            {title &&
                <div>
                    <h2>{title}</h2>
                    <Link href="/">Clear filter</Link>
                </div>
            }
            <div className={styles.list}>
                {list.map(item => <Card key={item.identifier} {...item} />)}
            </div>
        </div>
    )
}

type GamesProps = {
    list: Array<GameInfo>;
    title?: string;
}

const Card = (props: GameInfo) => {
    const { title, seo_title, categories, provider, identifier} = props;
    return (
        <div className={styles.item}>
            <h3>
                <Link title="follow the game" href={`/games/${provider}/${seo_title}`}>
                    {title}
                </Link>
            </h3>
            <CardImg id={identifier} />
            <div className={styles.links}>
                <span>categories: </span>
                {categories.map((category, index) =>
                    <Link title="follow the category" href={`/games/${category}?cat=1`} key={index}>{category}</Link>
                )}
            </div>
            <p className={styles.subtitle}>provider: <Link href={`/games/${provider}`}>{provider}</Link></p>
        </div>
    )
}