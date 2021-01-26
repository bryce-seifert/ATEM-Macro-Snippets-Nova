
exports.activate = function() {
    // Do work when the extension is activated
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}

const atemSnippets = require("./snippets/snippets.json");

class CompletionProvider {

    provideCompletionItems(editor, context) {
        let snippets = [];
        
        for (let snippet in atemSnippets) {
            let item = new CompletionItem(atemSnippets[snippet].prefix, CompletionItemKind.Tag);
            console.log(atemSnippets[snippet].description);
    
            item.documentation = atemSnippets[snippet].description;
            item.insertText = atemSnippets[snippet].body;
            item.insertTextFormat = InsertTextFormat.Snippet;
            
            snippets.push(item)
        }
        
        return snippets;
    };
}


nova.assistants.registerCompletionAssistant("xml", new CompletionProvider());

