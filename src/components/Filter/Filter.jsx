import PropTypes from 'prop-types';
import { Input, Label, Span } from './Filter.styled';

export const Filter = ({ filter, handleFilter }) => {
  return (
    <Label>
      <Span>Find contacts by name</Span>
      <Input type="text" value={filter} onChange={handleFilter} />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};