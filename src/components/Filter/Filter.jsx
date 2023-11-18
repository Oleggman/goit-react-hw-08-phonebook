import { useDispatch, useSelector } from "react-redux";
import { InputFilter, FilterTitle, FilterBox } from "./Filter.styled";
import { selectFilter } from "redux/contacts/selectors";
import { changeFilter } from "redux/contacts/filterSlice";

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <FilterBox>
      <FilterTitle>Find contact by name</FilterTitle>
      <InputFilter
        placeholder="Filter..."
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))} />
    </FilterBox>
  );
}