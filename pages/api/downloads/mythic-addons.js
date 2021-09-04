import fs from 'fs'

export default function handler(req, res) {
    let tmp = [];
    
    fs.readdirSync(__dirname + "/../../../../../public/jars/mythic-addons").forEach(file => {
       let array = file.split('/')
        
        tmp.push(('/jars/' + array[array.length -1]));
    })

    res.status(200).json(JSON.parse(JSON.stringify(tmp)));
}
