import { Cell } from '../state';
import CodeCell from './code-cell';
import TextEditor from './text-editor';

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FunctionComponent<CellListItemProps> = ({ cell }) => {
  const child = cell.type === 'code' ? <CodeCell /> : <TextEditor />;

  return <div>{child}</div>;
};

export default CellListItem;
