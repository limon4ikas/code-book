import Editor from '@monaco-editor/react';

const CodeEditor: React.FunctionComponent = () => {
  return (
    <Editor
      height="500px"
      defaultLanguage="javascript"
      defaultValue="// some comment"
    />
  );
};

export default CodeEditor;
