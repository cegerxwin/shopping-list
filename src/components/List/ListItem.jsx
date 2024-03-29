import PropTypes from "prop-types";
import Button from "../UI/Button";
import ListItemEdit from "./ListItemEdit";
import { useState } from "react";

function ListItem({
  listIngrediate,
  listAmount,
  lid,
  setShoppingListData,
  shoppingListData,
}) {
  const [updateState, setUpdateState] = useState(false);
  const [updateStateItem, setUpdateStateItem] = useState(
    ...shoppingListData.filter((item) => item.id === lid)
  );
  const handleDelete = (item) => {
    setShoppingListData(
      shoppingListData.filter(
        (shoppingListData) => shoppingListData.id !== item
      )
    );
  };

  function handleUpdateState() {
    setUpdateState(true);
    setUpdateStateItem(...shoppingListData.filter((item) => item.id === lid));
  }

  return updateState === true ? (
    <ListItemEdit
      key={lid}
      lid={lid}
      listIngrediate={listIngrediate}
      listAmount={listAmount}
      setShoppingListData={setShoppingListData}
      shoppingListData={shoppingListData}
      updateState={updateState}
      setUpdateState={setUpdateState}
      updateStateItem={updateStateItem}
      setUpdateStateItem={setUpdateStateItem}
    />
  ) : (
    <li className="py-4">
      <div className="grid grid-cols-13 items-center">
        <input
          id={`shoppingList${lid}`}
          name={`shoppingList${lid}`}
          type="checkbox"
          className="col-start-1 col-end-2 w-4 h-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
        />
        <label
          htmlFor={`shoppingList${lid}`}
          className="col-start-2 col-end-10 flex justify-between gap-5 ml-3 text-gray-900">
          <span className="text-lg font-medium">{listIngrediate}</span>
        </label>
        <span className="col-start-10 col-end-11">{listAmount}</span>
        <Button
          onClick={handleUpdateState}
          className="col-start-11 col-end-12 w-24 inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-400 text-white text-sm font-medium rounded-md">
          Edit
        </Button>
        <Button
          onClick={() => handleDelete(lid)}
          className="items-end col-start-12 col-end-13 w-24 inline-flex px-4 py-2 bg-red-500 hover:bg-red-400 text-white text-sm font-medium rounded-md">
          Delete
        </Button>
      </div>
    </li>
  );
}

export default ListItem;

ListItem.propTypes = {
  listIngrediate: PropTypes.string,
  listAmount: PropTypes.string,
  ingrediate: PropTypes.string,
  amount: PropTypes.number,
  lid: PropTypes.string,
  handleDelete: PropTypes.func,
  setShoppingListData: PropTypes.func,
  shoppingListData: PropTypes.array,
  setUpdateState: PropTypes.func,
};
