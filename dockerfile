FROM php:8.1-cli

# Instala PDO y PostgreSQL
RUN apt-get update && apt-get install -y libpq-dev && docker-php-ext-install pdo pdo_pgsql

# Copiá el código de tu app
WORKDIR /app
COPY . /app

EXPOSE 10000
CMD ["php", "-S", "0.0.0.0:10000", "-t", "."]
