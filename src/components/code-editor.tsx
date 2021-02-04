import './code-editor.css';
import { useRef } from 'react';
import MonacoEditor, { OnMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string): void;
}

const CodeEditor: React.FunctionComponent<CodeEditorProps> = ({
  initialValue,
  onChange,
}) => {
  const editorRef = useRef<any>(null);

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;

    // Get value out to bundler
    editor.onDidChangeModelContent(() => {
      onChange(editorRef.current.getValue());
    });
  };

  const handleFormatClick = () => {
    const unformatted = editorRef.current.getModel().getValue();
    const formatted = prettier
      .format(unformatted, {
        parser: 'babel',
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, '');
    editorRef.current.setValue(formatted);
  };

  return (
    <div className="editor-wrapper">
      <button
        className="button button-format is-primary is-small"
        onClick={handleFormatClick}
      >
        Format
      </button>
      <MonacoEditor
        onMount={handleEditorDidMount}
        value={initialValue}
        theme="vs-dark"
        height="100%"
        language="javascript"
        options={{
          wordWrap: 'on',
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default CodeEditor;
