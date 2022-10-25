import PropTypes from 'prop-types';
import { ListItem,List,Button,Contact } from './PhoneBookList.styled';


export const ContactList = ({ filteredContacts, ContactDel }) => {
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Contact>
            {name}: {number}
          </Contact>
          <Button type="button" onClick={() => ContactDel(id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  ContactDel: PropTypes.func.isRequired,
};