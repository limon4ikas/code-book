import React from 'react';
import MonacoEditor, { OnChange } from '@monaco-editor/react';

interface CodeEditorProps {
  initialValue: string;
  onChange(value: string | undefined): void;
}

const CodeEditor: React.FunctionComponent<CodeEditorProps> = ({
  initialValue,
  onChange,
}) => {
  const handleEditorChange: OnChange = (value) => {
    onChange(value);
  };

  return (
    <MonacoEditor
      onChange={handleEditorChange}
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
