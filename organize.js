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
    //1. check the srcpath is present or not
    if(srcpath == undefined){
        //console.log(srcpath); //undefined return
        srcpath =process.cwd();//the process.cwd()method return the current working directory of node.js process
       console.log("source path is",
        srcpath);

    }
    //2. create the directory - Organized_files
    let organisedfiles = path.join(srcpath,"Organised_files");
    //console.log("Organized files folder path is",organisedfiles);
    if(fs.existsSync(organisedfiles)==false){//organizedfiles naam ka folder nhi h to bna do warna rehne do
    fs.mkdirSync(organisedfiles);
    }
    else{
        console.log("folder already exist");
    }
    //4. read all the content of the directory-basically read the name of files present in directory
    let allfiles =fs.readdirSync(srcpath);
    console.log(allfiles);

    //5. traverse over all the files and classify on the basis of extention(.pdf,.mp3,.mp4,.exe)
    for(let i=0;i<allfiles.length;i++){
       // let ext =allfiles[i].split(".")[1]; //1. isliye kyuki hi=ume .exe,.mo4,.mp3 chaiye
       let ext =path.extname(allfiles[i]); 
       console.log(ext);
    }
}

//3. create Organised_files folder in downloads folder
let srcpath ="C:\\Users\\Manish\\OneDrive\\Desktop\\hello world\\node\\fileOrganizer\\downloads"
organize(srcpath);
