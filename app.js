import fs from 'fs';

// 1. Функція для читання вмісту файлу та виведення його на екран
function readFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        console.log(data);
        return true;
    } catch (err) {
        console.error(`Помилка при читанні файлу ${filePath}: ${err} 😞`);
        return false;
    }
}

// 2. Функція для створення файлу з певним контентом
function writeFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content, 'utf-8');
        return true;
    } catch (err) {
        console.error(`Помилка при створенні файлу ${filePath}: ${err} 😞`);
        return false;
    }
}

// 3. Функція для додавання вмісту до раніше створеного файлу
function appendFile(filePath, content) {
    try {
        fs.appendFileSync(filePath, content, 'utf-8');
        return true;
    } catch (err) {
        console.error(`Помилка при додаванні вмісту до файлу ${filePath}: ${err} 😞`);
        return false;
    }
}

// 4. Функція для переміщення файлу
function moveFile(oldPath, newPath) {
    try {
        fs.renameSync(oldPath, newPath);
        return true;
    } catch (err) {
        console.error(`Помилка при переміщенні файлу ${oldPath} до ${newPath}: ${err} 😞`);
        return false;
    }
}

// 5. Функція для видалення файлу
function deleteFile(filePath) {
    try {
        fs.unlinkSync(filePath);
        return true;
    } catch (err) {
        console.error(`Помилка при видаленні файлу ${filePath}: ${err} 😞`);
        return false;
    }
}

// Приклад використання
const filePath = 'test.txt';
const content = 'Це тестовий файл!';
const newFilePath = 'newTest.txt';

// Створення файлу
if (writeFile(filePath, content)) {
    console.log(`Файл ${filePath} успішно створено! 😊`);
    // Читання файлу
    if (readFile(filePath)) {
        console.log(`Вміст файлу ${filePath} успішно виведено на екран! 😊`);
    }
    // Додавання вмісту до файлу
    if (appendFile(filePath, ' Новий вміст.')) {
        console.log(`Вміст успішно додано до файлу ${filePath}! 😊`);
        // Читання файлу
        if (readFile(filePath)) {
            console.log(`Новий вміст файлу ${filePath} успішно виведено на екран! 😊`);
        }
    }
    // Переміщення файлу
    if (moveFile(filePath, newFilePath)) {
        console.log(`Файл ${filePath} успішно переміщено до ${newFilePath}! 😊`);
        // Читання нового файлу
        if (readFile(newFilePath)) {
            console.log(`Вміст файлу ${newFilePath} успішно виведено на екран! 😊`);
            // Видалення файла
            if (deleteFile(newFilePath)) {
                console.log(`Файл ${newFilePath} успішно видалено! 😊`);
            }
        }
    }
}