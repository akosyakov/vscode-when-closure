import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    for (const command of [
        // Editor contexts
        'extension.editorFocus',
        'extension.editorTextFocus',
        'extension.textInputFocus',
        'extension.inputFocus',
        'extension.editorHasSelection',
        'extension.editorHasMultipleSelections',
        'extension.editorReadOnly',
        'extension.editorLangId',
        'extension.isInDiffEditor',
        // Operating system contexts
        'extension.isLinux',
        'extension.isMac',
        'extension.isWindows',
        // Debug mode contexts
        'extension.inDebugMode',
        'extension.debugConfigurationType',
        'extension.callStackItemType',
        'extension.debugType',
        // Mode contexts
        'extension.inSnippetMode',
        'extension.inQuickOpen',
        // Resource contexts
        'extension.resourceScheme',
        'extension.resourceFileName',
        'extension.resourceExtname',
        'extension.resourceLangId',
        // Explorer contexts
        'extension.explorerViewletVisible',
        'extension.explorerViewletFocus', // the same as extension.filesExplorerFocus in case of Theia
        'extension.filesExplorerFocus',
        'extension.openEditorsFocus', // always false in Theia, test negation
        'extension.explorerResourceIsFolder',
        // Editor widget contexts
        'extension.findWidgetVisible',
        'extension.suggestWidgetVisible',
        'extension.suggestWidgetMultipleSuggestions',
        'extension.renameInputVisible',
        'extension.referenceSearchVisible',
        // 'extension.config.editor.stablePeek', TODO -> https://github.com/theia-ide/theia/issues/4073
        // 'extension.quickFixWidgetVisible', such context does not exist anymore
        'extension.parameterHintsVisible',
        'extension.parameterHintsMultipleSignatures',
        // Integrated terminal contexts
        'extension.terminalFocus',
        // Global UI - notification contexts
        'extension.notificationFocus',  // always false in Theia, test negation
        'extension.notificationCenterVisible',  // always false in Theia, test negation
        'extension.notificationToastsVisible',
        // Global UI - search contexts
        'extension.searchViewletVisible',
        'extension.searchViewletFocus',
        'extension.inputBoxFocus',
        'extension.searchInputBoxFocus',
        'extension.replaceInputBoxFocus',
        'extension.patternIncludesInputBoxFocus',
        'extension.patternExcludesInputBoxFocus',
        'extension.replaceActive',
        'extension.hasSearchResult',
        // Global UI - shell contexts
        'extension.sidebarVisible', // left side bar visible in Theia
        'extension.sideBarFocus', // left side bar is focused in Theia
        'extension.panelFocus', // main area is focused in Theia
        // Global UI - console contexts
        'extension.inDebugRepl',
        // Global UI - editors contexts
        'extension.editorIsOpen',
        'extension.textCompareEditorVisible',
        // Global UI - workspace contexts
        'extension.workspaceFolderCount',
        // TODO configuration settings contexts -> https://github.com/theia-ide/theia/issues/4073
        // TODO active/focused view or panel contexts -> https://github.com/theia-ide/theia/issues/4104
    ]) {
        context.subscriptions.push(vscode.commands.registerCommand(command, () =>
            vscode.window.showInformationMessage(command)
        ));
    }
}

export function deactivate() { }
