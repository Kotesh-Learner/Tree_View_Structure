import ObjectItem from "./object";

const ArrayList = ({ list = [] }) => {
  return (
    <ul className="list-container">
      {list && list.length ? (
        list.map((listItem,id) => <ObjectItem key={id} item={listItem} />)
      ) : (
        <p>No Data Found</p>
      )}
    </ul>
  );
};

export default ArrayList;
