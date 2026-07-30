import * as vscode from 'vscode';

/**
 * Minimal activation entrypoint — replace with your extension's commands, views, and services.
 */
export function activate(context: vscode.ExtensionContext): void {
  const disposable = vscode.commands.registerCommand('sedeaExtensionTemplate.hello', () => {
    void vscode.window.showInformationMessage('Sedea extension template is active.');
  });
  context.subscriptions.push(disposable);
}

export function deactivate(): void {
  // Release resources when the extension deactivates.
}
