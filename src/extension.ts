'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vscode-hello" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('Test terminal api.');
        console.log("Create new terminal.");
        const term = vscode.window.createTerminal({cwd: "/home/user/projects"});
        term.show();
        term.sendText("clear && echo Terminal was created with help extension api and will be hidden after 5 sec." +
        " Then we will show terminal again after 5 sec. Then we will distroy terminal after 5 sec.");
        setTimeout(function() {
            term.hide();
            setTimeout(function() {
                const listener = (t: Terminal) => {
                    console.log("Who");
                };
                // term.processId.then(id => {
                //     vscode.window.onDidCloseTerminal(async (term) => {
                //         const curId = await term.processId;
                //         if (curId === id) {
                //             console.log("test ", id);
                //         }
                //     }, id);
                // });
                term.dispose();
                term.show();
                setTimeout(
                    function(){term.dispose();},5000);
            }, 5000);
        }, 5000);
        

    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}