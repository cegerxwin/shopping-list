import { useState } from "react";
import ListItem from "./ListItem";
import ListForm from "./AddNewListItem/ListForm";

function List() {
  const [shoppingListData, setShoppingListData] = useState([]);

  return (
    <div className="container max-w-4xl mx-auto h-screen bg-white">
      <div className="relative max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden top-16">
        <div className="px-4 py-2">
          <h1 className="text-gray-800 font-bold text-2xl uppercase">
            Shopping List
          </h1>
        </div>
        <ListForm
          shoppingListData={shoppingListData}
          setShoppingListData={setShoppingListData}
        />
        <ul className="divide-y divide-gray-200 px-4">
          {shoppingListData.map((item) => {
            return (
              <ListItem
                key={item.id}
                lid={item.id}
                listIngrediate={item.ingrediate}
                listAmount={item.amount}
                setShoppingListData={setShoppingListData}
                shoppingListData={shoppingListData}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default List;
