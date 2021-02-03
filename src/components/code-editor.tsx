import MonacoEditor from '@monaco-editor/react';

interface CodeEditorProps {
  initialValue: string;
}

const CodeEditor: React.FunctionComponent<CodeEditorProps> = ({
  initialValue,
}) => {
  return (
    <MonacoEditor
      value={initialValue}
      theme="vs-dark"
      height="500px"
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
      }}
    />
  );
};

export default CodeEditor;
