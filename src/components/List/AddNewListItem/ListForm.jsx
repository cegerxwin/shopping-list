import { useState } from "react";
import PropTypes from "prop-types";
import lists from "../../../data/List/listFormData.json";
import ListFormItem from "./ListFormItem";
import ErrorModal from "../../UI/ErrorModal";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  ingrediate: "",
  amount: "",
};

function ListForm({ shoppingListData, setShoppingListData }) {
  const [shopInput, setShopInput] = useState(initialState);
  const [isShowError, setIsShowError] = useState(false);

  function handleChange({ target: { name, value } }) {
    setShopInput({
      ...shopInput,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isFormValid = Object.values(shopInput).every(
      (value) => value.trim() !== ""
    );

    if (!isFormValid) {
      setIsShowError(true);
      return;
    }

    const newShopInput = {
      id: uuidv4(),
      ...shopInput,
      ingrediate: shopInput.ingrediate,
      amount: shopInput.amount,
    };

    setShoppingListData([newShopInput, ...shoppingListData]);
    setShopInput(initialState);
  }
  return (
    <form className="w-full max-w-sm mx-auto px-4 py-2" onSubmit={handleSubmit}>
      <div className="flex items-center border-b-2 border-teal-500 py-2 mb-5 w-[352px]">
        <div className="flex flex-col">
          {lists.listsFormData.map((list) => (
            <ListFormItem
              key={list.name}
              onChange={handleChange}
              value={shopInput[list.name]}
              {...list}
            />
          ))}
        </div>
        <div className="ml-auto">
          <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
            Add
          </button>
        </div>
      </div>
      <ErrorModal
        isShowError={isShowError}
        setIsShowError={setIsShowError}
        message="All fields must be filled and must not contain blank characters."
      />
    </form>
  );
}

export default ListForm;

ListForm.propTypes = {
  shoppingListData: PropTypes.array,
  setShoppingListData: PropTypes.func,
};
