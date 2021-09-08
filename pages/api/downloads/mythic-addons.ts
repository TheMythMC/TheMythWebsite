import fs from 'fs'
import { NextApiResponse } from 'next';
import { NextApiRequest } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    let tmp: string[] = [];


    fs.readdirSync(__dirname + "/../../../../../public/jars/mythic-addons").forEach(file => {
       let array = file.split('/')
        
        tmp.push(('/jars/mythic-addons/' + array[array.length -1]));
    })

    res.status(200).json(JSON.parse(JSON.stringify(tmp)));
}
