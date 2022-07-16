
param name string
var location = resourceGroup().location

@allowed(['Free'])
param sku string = 'Free'

resource staticWebApp 'Microsoft.Web/staticSites@2021-01-15' = {
  name: name
  location: location
  tags: null
  properties: {}
  sku: {
    name: sku
    size: sku
  }
}
