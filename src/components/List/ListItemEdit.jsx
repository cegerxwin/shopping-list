import PropTypes from "prop-types";
import Button from "../UI/Button";

function ListItemEdit({
  lid,
  listIngrediate,
  listAmount,
  setShoppingListData,
  shoppingListData,
  setUpdateState,
  updateStateItem,
  setUpdateStateItem,
}) {
  function handleChange({ target: { name, value } }) {
    setUpdateStateItem({
      ...updateStateItem,
      [name]: value,
    });
  }

  function handleSaveItem() {
    setShoppingListData(
      shoppingListData.map((item) => {
        if (item.id === lid) {
          item = updateStateItem;
          return item;
        } else {
          return item;
        }
      })
    );
    setUpdateState(false);
  }

  return (
    <li className="py-4">
      <div className="flex items-center justify-around">
        <input
          id={`shoppingList${lid}`}
          name={`shoppingList${lid}`}
          type="checkbox"
          className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
        />

        <input
          type="text"
          name="ingrediate"
          defaultValue={listIngrediate}
          onChange={handleChange}
          className="pb-3 w-28 focus border-b-2 p-2 border-teal-500 appearance-none bg-transparent  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
        <input
          type="text"
          name="amount"
          defaultValue={listAmount}
          onChange={handleChange}
          className="pb-3 w-10 focus border-b-2 p-2 border-teal-500 appearance-none bg-transparent  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
        <Button
          onClick={handleSaveItem}
          className="inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-white text-sm font-medium rounded-md">
          Update
        </Button>
      </div>
    </li>
  );
}

export default ListItemEdit;

ListItemEdit.propTypes = {
  listIngrediate: PropTypes.string,
  listAmount: PropTypes.string,
  ingrediate: PropTypes.string,
  lid: PropTypes.string,
  handleUpdate: PropTypes.func,
  setShoppingListData: PropTypes.func,
  shoppingListData: PropTypes.array,
  setUpdateState: PropTypes.func,
  setUpdateStateItem: PropTypes.func,
  updateStateItem: PropTypes.object,
};
