#!/bin/bash
# Инициализируем nvm
export NVM_DIR="$HOME/.nvm"
source $NVM_DIR/nvm.sh

# Переходим в папку проекта
cd /home/loonaprint

# Используем нужную версию Node.js и запускаем команду
nvm use 18
npm run develop