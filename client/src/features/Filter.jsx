import "./styles/Filter.css";

export const Filter = () => {
  return (
    <>
      <div className={"filters-container"}>
        <div className={"sorted-by-filter"}>
          <h4>Sorted By</h4>
        </div>
        <div className={"offers-filter"}>
          <h4>Offers</h4>
        </div>
        <div className={"category-filter"}>
          <h4>Category</h4>
        </div>
      </div>
    </>
  );
};
