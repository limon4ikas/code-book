import { useState } from 'react';
import bundle from '../bundler';
import CodeEditor from './code-editor';
import Preview from './preview';
import Resizable from './resizable';

const CodeCell: React.FunctionComponent = () => {
  const [input, setInput] = useState<string>('');
  const [code, setCode] = useState('');

  const handleClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <Resizable direction="vertical">
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <CodeEditor
          initialValue="const a = 1;"
          onChange={(value) => setInput(value)}
        />
        <Preview code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;