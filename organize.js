const fs =require("fs"); //fs Module
const path =require("path"); //path module

let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}

function organize(srcpath){
    if(srcpath == undefined){
        //console.log(srcpath); //undefined return
        srcpath =process.cwd();//the process.cwd()method return the current working directory of node.js process
       console.log("source path is",
        srcpath);

    }
    let organisedfiles = path.join(srcpath,"Organised_files");
    //console.log("Organized files folder path is",organisedfiles);
    if(fs.existsSync(organisedfiles)==false){//organizedfiles naam ka folder nhi h to bna do warna rehne do
    fs.mkdirSync(organisedfiles);
    }
    else{
        console.log("folder already exist");
    }
    
}
organize();
