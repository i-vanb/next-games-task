import {GameInfo} from "@/interfaces/game.type";

class GameService {
    public getList = async ():Promise<Array<GameInfo>> => {
        const res = await fetch('https://nextjs-test-pi-hazel-56.vercel.app/data/games.json');
        if (!res.ok) throw new Error("Failed to fetch data");
        return await res.json();
    }

    public getItem = async (id:string):Promise<GameInfo> => {
        const list = await this.getList();
        const game = list.find((item:GameInfo) => item.seo_title === id);
        // if(!game) new Response('game not found', {status: 404})
        if(!game) throw new Error('Game not found');
        return game as GameInfo;
    }

    public getListByCat = async (cat:string):Promise<Array<GameInfo>> => {
        const list = await this.getList();
        const filtered = list.filter((item:GameInfo) => item.categories.includes(cat));
        if(!filtered.length) throw new Error('Category doesn\'t exist');
        return filtered as Array<GameInfo>;
    }

    public getListByProvider = async (provider:string):Promise<Array<GameInfo>> => {
        const list = await this.getList();
        const filtered = list.filter((item:GameInfo) => item.provider === provider);
        if(!filtered.length) throw new Error('Provider doesn\'t exist');
        return filtered as Array<GameInfo>;
    }
}

export default GameService;


