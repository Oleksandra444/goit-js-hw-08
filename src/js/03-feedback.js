import throttle from 'lodash.throttle';

// -------------створюємо глобальну змінну для ключа Local Storage
const STORAGE_KEY = 'feedbackmsg';

// -------------ініціалізуємо дані з форми як пустий об'єкт
let formData = {};

// -------------отримуємо дані з форми за допомогою querySelector
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea[name="message"]'),
    email: document.querySelector('input[name="email"]'),
}
// -------------викликаємо функцію перевірки наявності даних в Local Storage
checkPrewiewUserData();

// -------------викликаємо слухача на відправку форми
refs.form.addEventListener('submit', onFormSubmit);

// -------------викликаємо слухача на заповнення інпуту і текстового поля, зберігаємо заповнені дані в ініціалізований об'єкт formData з ключем name і відповідним значенням, відправляєо дані до Local Storage

refs.form.addEventListener('input', throttle((ev) => {
    formData[ev.target.name] = ev.target.value;    
    localStorage.setItem("feedbackmsg", JSON.stringify(formData));
}), 500)

// -------------колбек функція на слухача відправки форми, зчитуємо дані з форми та виводимо у консоль, очищуємо форму і Local Storage

function onFormSubmit(ev) { 
    ev.preventDefault();
    // const formState = {
    //     email: refs.email.value,
    //     textarea: refs.textarea.value,
    // };
    ev.currentTarget.reset();
    // console.log(formState);
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);

};
//  -------------функція на перевірку наявності даних у Local Storage, і виклику цих даних при оновленні сторінки
function checkPrewiewUserData() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
        let parsedMessage = {};
        parsedMessage = JSON.parse(savedMessage); 
                
        refs.email.value = parsedMessage.email;
        refs.textarea.value = parsedMessage.message;
    }
 };


