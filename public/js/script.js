'use strict';

const formOnSubmit = async (e) => {
  try {
    e.preventDefault();
    const name = e.target.name.value;
    const data = await postData('http://localhost:8000/test', { name });
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
};

const btn1Click = async (e) => {
  try {
    e.preventDefault();
    const data = await getData('http://localhost:8000/test');
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
};

form.addEventListener('submit', formOnSubmit);
btn1.addEventListener('click', btn1Click);