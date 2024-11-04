# Вказуємо базовий образ
FROM node:16

# Встановлюємо робочу директорію
WORKDIR /usr/src/app

# Копіюємо package.json і package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо решту коду
COPY . .

# Вказуємо порт
EXPOSE 3000

# Команда для запуску вашого додатку
CMD ["npm", "start"]
