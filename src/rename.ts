import fs from 'fs';

let path="../img";
let files = fs.readdirSync(path);
console.log(files);
for (let index = 0, len = files.length; index < len; index++) {
    let oldName=path+"/"+files[index];
    let newName=path+"/"+"home_ky_"+(index+1)+"_1.png";
    fs.rename(oldName,newName,function (err) {
        console.log(err);
    })
}