# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu aplicación
COPY package.json package-lock.json ./
COPY dist ./dist

# Instala las dependencias de producción
RUN npm install --only=production

# Expone el puerto en el contenedor (ajusta según tu configuración)
EXPOSE 3000

# Define el comando para iniciar tu aplicación
CMD ["node", "dist/index.js"]
