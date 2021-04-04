import { Row } from 'react-bootstrap';

function TextFilter(column, colIndex, { sortElement, filterElement }) {
    return (
      <div style={ { display: 'flex', flexDirection: 'column' } }>
        <Row className="ml-1">{ column.text }{ sortElement }</Row>
        { filterElement }
      </div>
    );
}

export default TextFilter;