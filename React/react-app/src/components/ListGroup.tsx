import { useState } from "react";

interface Props{
  items: String[];
  heading: String;
  onSelectItem: (item: String) => void;
}
function ListGroup({items,heading,onSelectItem}:Props) {
  const getMessage = () => {
    return items.length === 0 && <p>Item Not found</p>;
  };
  // this is called hook: with the help of hook we tell the react that this component has data or state that going to change overtime
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {/* to render a dynamic list we need wrap it with {} */}
        {items.map(
          (
            item,
            index
          ) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={index}
              onClick={
                () => {
                  setSelectedIndex(index);
                  onSelectItem(item);
                }
              }>
              {item}
            </li>
          )
        )}
      </ul>
    </>
  );
}
export default ListGroup;
