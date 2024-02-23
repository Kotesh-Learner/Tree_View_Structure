import { useState } from "react";
import ArrayList from "./Array";
import { FaMinus, FaPlus } from "react-icons/fa";

const ObjectItem = ({ item }) => {
  const [displayChildren, setDisplayChildren] = useState({});

  const handleToggleChildren = (getCurrentId) => {
    setDisplayChildren({
      ...displayChildren, 
      [getCurrentId]: !displayChildren[getCurrentId],
    });
  };
  console.log(displayChildren);

  return (
    <div>
      <li >
        <div className="item-label">
          <p>{item.label}</p>
          {item && item.children && item.children.length > 0 ? (
            <span onClick={() => handleToggleChildren(item.id)}>
              {displayChildren[item.id] ? (
                <FaMinus color="#ffff" size={25} />
              ) : (
                <FaPlus color="#ffff" size={25} />
              )}
            </span>
          ) : null}
        </div>
        {item &&
        item.children &&
        item.children.length > 0 &&
        displayChildren[item.id] ? (
          <ArrayList list={item.children} />
        ) : null}
      </li>
    </div>
  );
};

export default ObjectItem;
