import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <section>
        <form className="formCard">
          <label htmlFor="text">
            Nome
            <input type="text" placeholder="Placeholder" data-testid="name-input" />
          </label>

          <label htmlFor="text">
            <textarea data-testid="description-input" />
          </label>

          <label htmlFor="number">
            <input type="number" data-testid="attr1-input" />
          </label>

          <label htmlFor="number">
            <input type="number" data-testid="attr2-input" />
          </label>

          <label htmlFor="number">
            <input type="number" data-testid="attr3-input" />
          </label>

          <label htmlFor="image">
            <input type="text" data-testid="image-input" />
          </label>

          <label htmlFor="select">
            <select name="" id="" data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>

          <label htmlFor="checkbox">
            <input type="checkbox" name="" id="" data-testid="trunfo-input" />
          </label>

          <label htmlFor="button">
            <input type="button" value="" data-testid="save-button" />
          </label>
        </form>
      </section>
    );
  }
}

export default Form;
