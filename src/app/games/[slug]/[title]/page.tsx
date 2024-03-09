import {gameService} from "@/services";
import {Game} from "@/layouts/game";

type PageProps = {
    params: StaticParams
};

type StaticParams = {
    slug: string;
    title: string;
}

export async function generateMetadata({ params }:PageProps) {
    return {
        title: params.title,
    }
}

export async function generateStaticParams() {
    const games = await gameService.getList();
    const params:Array<StaticParams> = [];
    games.forEach(game => {
       params.push({slug: game.provider, title: game.seo_title});
       game.categories.forEach(category => params.push({slug: category, title: game.seo_title}))
    });
    return params;
}

export default async function GameInfo ({params}:PageProps) {
    const {title} = params;
    const game = await gameService.getItem(title);

    return <Game {...game} />
}