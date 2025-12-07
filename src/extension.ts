import * as vscode from "vscode"

// this is gonna activate the extension 
export function activate(context: vscode.ExtensionContext) {
	console.log("THE EXTENSION HAS BEEN ACTIVATED")

	const disposable = vscode.commands.registerCommand("gen-documentation.genDoc", async () => {
		let popUpMessage = await vscode.window.showInformationMessage("GEN-DOCUMENTATION LAUNCHED", "CANCEL", "LEARN MORE")
		console.log("USER PRESSED :", popUpMessage)

		try {
			if (popUpMessage == "CANCEL") {
				vscode.window.showInformationMessage("USER CANCELLED EXTENSION");
				return
			}
			if (popUpMessage == "LEARN MORE") {
				vscode.window.showInformationMessage("USER WANTS TO LEARN MORE");
				return
			}
		}
		catch (error) {
			console.log(error)
		}

	})

}
