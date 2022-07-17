start-frontend:
    cd frontend && npm start
start-api:
    cd api && npm start

deploy token:
    az deployment group create -f deploy/main.bicep -g web  -p repositoryToken={{token}}
