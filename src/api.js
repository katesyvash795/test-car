import axios from 'axios';

// Создайте функцию, которая выполнит запрос к мок-серверу и вернет данные о машинах
const fetchCars = async () => {
  try {
    const response = await axios.get('https://65cd0e5fdd519126b8400af5.mockapi.io/catalog/Advert');
    return response.data ; // Возвращаем данные о машинах из ответа сервера
  } catch (error) {
    console.error('Error fetching cars:', error);
    return []; // Возвращаем пустой массив в случае ошибки
  }
};

export default fetchCars;
