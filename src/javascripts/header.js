import renderToDom from './helpers/renderToDOM';

const header = () => {
  const domString = `
    <div class="header">
      <h1 class="headerText">Bear Watcher</h1>
      <img src="https://entreedestinations.com/wp-content/uploads/2019/11/C16-KBBC-Standing-Bear.jpg" alt="Bear" width=100%>;
    </div>
  `;

  renderToDom('#headerContainer', domString);
};

export default header;
