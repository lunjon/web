build:
    cd frontend && npm run build
    cd api && npm run build

start-frontend:
    cd frontend && npm start
start-api:
    cd api && npm start
start: build
   cd frontend && npx swa start

# Deploy the bicep files
deploy token:
    az deployment group create \
        -f deploy/main.bicep \
        -g web \
        -p repositoryToken={{token}}
