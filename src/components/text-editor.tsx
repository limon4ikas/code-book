import MDEditor from '@uiw/react-md-editor';

const TextEditor: React.FunctionComponent = () => {
  return (
    <div>
      <MDEditor.Markdown source={'# Header'} />
    </div>
  );
};

export default TextEditor;
