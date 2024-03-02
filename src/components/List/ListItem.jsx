import PropTypes from "prop-types";
import Button from "../UI/Button";

function ListItem({
  listIngrediate,
  listAmount,
  lid,
  setShoppingListData,
  shoppingListData,
}) {
  const handleDelete = (item) => {
    setShoppingListData(
      shoppingListData.filter(
        (shoppingListData) => shoppingListData.id !== item
      )
    );
  };

  const handleUpdate = (item) => {
    setShoppingListData(
      shoppingListData.filter(
        (shoppingListData) => shoppingListData.id !== item.id
      )
    );
  };

  return (
    <li className="py-4">
      <div className="flex items-center justify-around">
        <input
          id={`shoppingList${lid}`}
          name={`shoppingList${lid}`}
          type="checkbox"
          className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
        />
        <label
          htmlFor={`shoppingList${lid}`}
          className="flex justify-between gap-5 ml-3 text-gray-900">
          <span className="text-lg font-medium">{listIngrediate}</span>
        </label>
        <span>{listAmount}</span>
        <Button
          onClick={() => handleUpdate(lid)}
          className="inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-white text-sm font-medium rounded-md">
          Update
        </Button>
        <Button
          onClick={() => handleDelete(lid)}
          className="inline-flex items-center px-4 py-2 bg-red-500 hover:bg-red-400 text-white text-sm font-medium rounded-md">
          Delete
        </Button>
      </div>
    </li>
  );
}

export default ListItem;

ListItem.propTypes = {
  list: PropTypes.object,
  listIngrediate: PropTypes.string,
  listAmount: PropTypes.string,
  ingrediate: PropTypes.string,
  amount: PropTypes.number,
  lid: PropTypes.string,
  handleDelete: PropTypes.func,
  setShoppingListData: PropTypes.func,
  shoppingListData: PropTypes.array,
};
