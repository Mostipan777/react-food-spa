import { useState } from 'react';

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="searh input-group mb-3">
      <input
        type="search"
        className="form-control"
        placeholder="search"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        onKeyDown={handleKey}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={handleSubmit}
      >
        Searh
      </button>
    </div>
  );
}

export default Search;
