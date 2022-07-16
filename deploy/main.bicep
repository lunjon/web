param repositoryToken string
@allowed(['Free'])
param sku string = 'Free'
param location string = resourceGroup().location

resource staticWebApp 'Microsoft.Web/staticSites@2021-01-15' = {
  name: 'staticwebapp'
  location: location
  tags: null
  sku: {
    name: sku
    size: sku
  }
  properties: {
    branch: 'main'
    repositoryToken: repositoryToken
    repositoryUrl: 'https://github.com/lunjon/web'
    buildProperties: {
      appLocation: './web'
      outputLocation: './web/output'
    }
  }
}
