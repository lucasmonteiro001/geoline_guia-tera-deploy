# para a execucao do processo no servidor
PROCESS_ID=1
PROCESS_NAME="guia-tera"

export PORT=3000
export MONGO_URL="mongodb://localhost:27017/meteor"
export ROOT_URL="104.236.79.249"

pm2 stop $PROCESS_ID

cd ~/guia-tera-deploy/bundle/programs/server

npm install

cd ../../

# inicia a execucao no processo no servidor
pm2 start main.js --name $PROCESS_NAME --watch
