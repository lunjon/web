build:
    cd frontend && npm run build
    cd api && npm run build

start-frontend:
    cd frontend && npm start
start-api:
    cd api && npm start

start: build
   cd frontend && npx swa start build --api-location ../api

deploy token:
    az deployment group create -f deploy/main.bicep -g web  -p repositoryToken={{token}}
