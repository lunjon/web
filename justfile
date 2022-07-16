deploy-infra token:
    az deployment group create -f deploy/main.bicep -g web  -p repositoryToken={{token}}

build-frontend:
    cd frontend && npm run build

deploy-frontend: build-frontend
    cd frontend && npx swa deploy
