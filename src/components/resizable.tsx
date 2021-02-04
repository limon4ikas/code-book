import './resizable.css';
import { ResizableBox } from 'react-resizable';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
}

const Resizable: React.FunctionComponent<ResizableProps> = ({
  direction,
  children,
}) => {
  return (
    <ResizableBox height={300} width={Infinity} resizeHandles={['s']}>
      {children}
    </ResizableBox>
  );
};

export default Resizable;
