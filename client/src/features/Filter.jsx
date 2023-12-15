import "./styles/Filter.css";

export const Filter = () => {
  return (
    <>
      <div className={"filters-container"}>
        <h3>Filters</h3>
        {/*Sorted By Filter*/}
        <div className={"sorted-by-filter"}>
          <h5>Sorted By</h5>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="sorted-by" id="top-rated" />
              <label className="form-check-label" htmlFor="top-rated">
                Top Rated
              </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="sorted-by" id="price"  />
              <label className="form-check-label" htmlFor="price">
                Price
              </label>
          </div>
        </div>
        {/*Offers Filter */}
        <div className={"offers-filter"}>
          <h5>Offers</h5>
          <form>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="offers" id="referal-code"/>
              <label className="form-check-label" htmlFor="referal-code">
                Referral Code
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="offers" id="vouchers"/>
              <label className="form-check-label" htmlFor="vouchers">
                Vouchers
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="offers" id="discounted"/>
              <label className="form-check-label" htmlFor="discounted">
                Discounted
              </label>
            </div>
          </form>

        </div>
        {/*Category Filter*/}
        <div className={"category-filter"}>
          <h5>Category</h5>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="category" id="fast-food"/>
            <label className="form-check-label" htmlFor="fast-food">
              Fast Food
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="category" id="top-rated"/>
            <label className="form-check-label" htmlFor="japanese">
              Japanese
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="category" id="chinese"/>
            <label className="form-check-label" htmlFor="chinese">
              Chinese
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="category" id="bangladeshi"/>
            <label className="form-check-label" htmlFor="bangladeshi">
              Bangladeshi
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="category" id="others"/>
            <label className="form-check-label" htmlFor="others">
              Others
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
