import {Games} from "@/layouts/games";
import {gameService} from "@/services";

export default async function Page() {
    const list = await gameService.getList();

    return <Games list={list} />
}