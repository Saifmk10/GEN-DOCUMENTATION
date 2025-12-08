import * as vscode from "vscode"


export  function folderCreated(){

    const watcher = vscode.workspace.createFileSystemWatcher("**/*");

    watcher.onDidCreate(async (path) =>{
        
        const status = await vscode.workspace.fs.stat(path)
        try {
            
            if(status.type == vscode.FileType.Directory){
                console.log("folder was created");
                vscode.window.showInformationMessage("A NEW FOLDER WAS CREATED");
            }
            else{
                vscode.window.showInformationMessage("A FILE WAS CREATED");
            }
        }
        catch(error){
            console.log("NEW ERROR", error)
        }
    })
}