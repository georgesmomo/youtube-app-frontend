# Étape 1 : Build Angular
FROM node:18 AS build

WORKDIR /app

# Copier les fichiers package.json et package-lock.json pour optimiser le cache
COPY package.json package-lock.json ./

# Installer Angular CLI globalement
RUN npm install -g @angular/cli

# Installer les dépendances du projet
RUN npm install

# Copier tout le projet après l'installation des dépendances
COPY . .

# Construire l'application Angular
RUN ng build --configuration=production

# Étape 2 : Serveur Nginx
FROM nginx:latest

# Copier les fichiers Angular générés vers le dossier de Nginx
COPY --from=build /app/dist/youtube-app-frontend /usr/share/nginx/html

# Exposer le port du serveur Nginx
EXPOSE 86
