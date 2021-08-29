import renderToDom from './helpers/renderToDOM';

const bearArray = [
  {
    name: 'Fluffy',
    image: 'https://media.istockphoto.com/photos/grizzly-bear-portrait-picture-id148950398?k=6&m=148950398&s=612x612&w=0&h=1XLayjGUrQKrOlxI9sBYLxW345WdCrv1ak4K-q4JFV8='
  },
  {
    name: 'Smokey',
    image: 'http://justfunfacts.com/wp-content/uploads/2017/09/kodiak-bear.jpg'
  }
];

const bearProfileCard = (array) => {
  let domString = '';
  array.forEach((bear) => {
    domString += `
        <div class="card" style="width: 18rem;">
          <img src="${bear.image}" class="card-img-top" alt="image of ${bear.name}">
          <div class="card-body">
            <h5 class="card-title">${bear.name}</h5>
            <div id="fish-catch-buttons">
              <a href="#" class="btn btn-outline-light">Fish Catch Attempt</a>
              <a href="#" class="btn btn-outline-light">Fish Catch Success!</a>
             </div>
            <p class="card-text">Fish Catch Timestamps</p>
            </div>
        </div>`;
  });
  renderToDom('#cardContainer', domString);
  // document.getElementById('#bear-form').reset;
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const newBear = {
    name: document.querySelector('#bearName').value,
    image: document.querySelector('#imageLink').value
  };
  bearArray.push(newBear);
  bearProfileCard(bearArray);
  document.querySelector('#formContainer').reset();
};

export { bearArray, bearProfileCard, handleFormSubmit };
