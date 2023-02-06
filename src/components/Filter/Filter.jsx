import { Label, Input } from './Filter.styled';

import { useDispatch } from 'react-redux';
import { setQuery } from 'redux/contactsSlice';
// import { getFilter } from 'redux/contactsSelectors';

const Filter = () => {
  // const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = (query) => {
    dispatch(setQuery(query))
  }
    return (
        <Label htmlFor="">
            Find contacts by name
            <Input type="text" onChange={(e) => onChangeFilter(e.target.value)} placeholder="Enter search name" />
        </Label>
    );
}

export default Filter;