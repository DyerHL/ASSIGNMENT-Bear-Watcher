import renderToDom from './helpers/renderToDOM';

const bearForm = () => {
  let domString = '';
  domString = `
  <label for="exampleFormControlInput1" class="form-label">Add a Bear</label>
    <form id="bear-form">
      <div class="mb-3">
        <input type="name" class="form-control" id="bearName" placeholder="Bear Name">
      </div>
      <div class="mb-3">
        <input class="form-control" id="imageLink" placeholder="Image URL">
      </div>
      <button type="submit" class="btn btn-outline-light">Submit</button>
    </form>
    `;
  renderToDom('#formContainer', domString);
};

export default bearForm;
