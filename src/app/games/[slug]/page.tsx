import {gameService} from "@/services";
import {Games} from "@/layouts/games";

type PageProps = {
    params: {
        slug: string;
    };
    searchParams: {
        cat: string;
    }
};

export async function generateMetadata({ params }:PageProps) {
    return {
        title: params.slug,
    }
}

export default async function Page ({ params, searchParams }:PageProps) {
    const isByCategory = searchParams.cat;
    const slug = params.slug;

    let title = 'Filtered by ' + (isByCategory ? 'category' : 'provider') + ': ' + slug;

    const list = isByCategory
        ? await gameService.getListByCat(slug)
        : await gameService.getListByProvider(slug);

    return <Games list={list} title={title} />
}