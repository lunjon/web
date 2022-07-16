deploy token:
    az deployment group create -f deploy/main.bicep -g web  -p repositoryToken={{token}}
