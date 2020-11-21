
/**
 * 1. Создайте пустую стрелочную функцию возвращает undefined
 */
let undefinedFunction = () => {
    return undefined;
}


console.log(undefinedFunction());


/**
 * 2. Создайте массив и напишите стрелочные функции для него:
 * - суммирование всех элементов,
 * - выявить все четные,
 * - умножить каждый элемент на 2.
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`Initial arr: ${arr}`)
/**
 * Суммирование всех элементов
 */
const sum = arr.reduce((el1, el2) => el1 + el2, 0);
console.log(sum);

/**
 * Выявить все четные
 */
const onlyEvens = arr.filter(el => el % 2 === 0);
console.log(onlyEvens);

/**
 * Умножить каждый элемент на 2
 */
const doubledArr = arr.map(el => el * 2)
console.log(doubledArr);


/**
 * 3. Создайте массив с e-mail. Организуйте фильтр на странице html по названию почты.
 */
const emailArr = [
    'testemail@mail.ru', 'someemail@lalala.com', 'another@asd.ua'
]

/**
 * Отобразить список email на странице
 */
const showEmails = (emailArr) => {
    const emailContainer = document.getElementById('email-container')
    while (emailContainer.firstChild) {
        emailContainer.removeChild(emailContainer.lastChild);
    }
    emailArr.forEach((email, ind) => {
        const span = document.createElement('span');
        span.innerHTML = `<br/>${ind + 1}. ${email}`;
        emailContainer.appendChild(span);
    })
}

/**
 * Отфильтровать и отобразить email
 */
const filterAndShowEmails = () => {
    const emailInp = document.getElementById('inp-filter');
    const filter = emailInp.value;
    if (!filter) {
        showEmails(emailArr);
        return;
    }
    const filteredEmails = emailArr.filter(e => e.toLowerCase().includes(filter.toLowerCase()))
    showEmails(filteredEmails);
}

/**
 * Добавить новый элемент в список
 */
const addEmail = () => {
    const emailInp = document.getElementById('inp-filter');
    const email = emailInp.value;
    emailArr.push(email);
    emailInp.value = '';
    filterAndShowEmails();
}

window.onload = () => {
    showEmails(emailArr);
}
