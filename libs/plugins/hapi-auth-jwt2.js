//
// Auth JWT 2
//
export default () => {
  const plugin = 'hapi-auth-jwt2'

  return { register: (server) => {
    server.register({ register: require(plugin) }, (err) => {
      if (err) log.error(`Error loading Plugin: #{ plugin }`, err)
      
      // Our "users database" 
      let people = {
          1: {
            id: 1,
            name: 'Jen Jones'
          }
      }
       
      // Bring your own validation function 
      let validate = function (decoded, request, callback) {
       
          // do your checks to see if the person is valid 
          if (!people[decoded.id]) {
            return callback(null, false)
          }
          else {
            return callback(null, true)
          }
      }

      // Register strategy
      server.auth.strategy('jwt', 'jwt', {
        key: 'NeverShareYourSecret',                // Never Share your secret key
        validateFunc: validate,                     // Validate function defined above
        verifyOptions: { algorithms: [ 'HS256' ] }  // Pick a strong algorithm
      })

      server.auth.default('jwt')
    })
  }}
}
