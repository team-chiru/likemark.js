import reqwest from 'reqwest'

const request = {
   url: 'http://localhost:3000',
   method: 'GET',
   contentType: 'application/vnd.api+json',
   headers: {
      accept: [
         'application/vnd.api+json'
      ]
   },
   crossOrigin: true,
   success: function(resp) {
      console.log('response:', resp);
   },
   error: function(error) {
      console.log('error:', error);
   }
};

reqwest(request);
