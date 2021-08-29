import header from '../header';
import { bearArray, handleFormSubmit, bearProfileCard } from '../river';
import bearForm from '../bearForm';

const domEvents = () => {
  header();
  bearForm();
  bearProfileCard(bearArray);
  document.querySelector('#formContainer').addEventListener('submit', handleFormSubmit);
};

export default domEvents;
