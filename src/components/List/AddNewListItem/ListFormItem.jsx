import PropTypes from "prop-types";

function ListFormItem({ name, type, placeholder, value, onChange }) {
  return (
    <>
      <input
        className={`${
          name === "ingrediate"
            ? "pb-3 w-72 focus border-b-2 p-2 border-teal-500"
            : ""
        } appearance-none bg-transparent  text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default ListFormItem;

ListFormItem.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
