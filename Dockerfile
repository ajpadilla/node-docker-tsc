FROM node:18-alpine

# Crear carpeta donde va estar mi codigo, -p si no existe la carpeta las crea
RUN mkdir -p /usr/src/app

#Directorio de trabajo en mi contenedor
WORKDIR /usr/src/app

#copiar el package.json y .lock dentro del directorio actial(directorio de trabajo)
COPY package*.json ./

RUN npm install

RUN npm i -g typescript

# Quier que copies todos los archivos del directorio actual dentro de la carpeta del contenedor
COPY . .

EXPOSE 4001

CMD ["npm", "run", "dev"]