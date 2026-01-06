const CatalogFilter = () => {
  return (
    <div>
      <p>Location</p>
      <input type="text" />
      <div>
        <h2>Filters</h2>
        <div>
          <h3>Vehicle equipment</h3>
          {/* тимчасово */}
          <p>AC</p>
          <p>Automatic</p>
          <p>Kitchen</p>
          <p>TV</p>
          <p>Bathroom</p>
        </div>
        <div>
          <h3>Vehicle type</h3>
          {/* тимчасово */}
          <p>Van</p>
          <p>Fully Integrated</p>
          <p>Alcove</p>
        </div>
      </div>
    </div>
  );
};

export default CatalogFilter;
