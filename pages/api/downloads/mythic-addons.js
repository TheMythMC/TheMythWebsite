import fs from 'fs'

export default function handler(req, res) {
    let tmp = new Map(); 
    
    fs.readdirSync(__dirname + "/../../../../../public/jars/mythic-addons").forEach(file => {
       let array = file.split('/')
        
        tmp.set(( '/jars/mythic-addons/' + array[array.length-1]), array[array.length-1])
    })

    res.status(200).json(strMapToObj(tmp))
}
function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
      // We don’t escape the key '__proto__'
      // which can cause problems on older engines
      obj[k] = v;
    }
    return obj;
  }