const { Vonage } = require('@vonage/server-sdk');
const credentials = {
    applicationId: 'VONAGE_APPLICATION_ID',
    privateKey: "./private.key",
};
const options = {};
const vonage = new Vonage(credentials);

vonage.voice.createOutboundCall({
    to: [{
      type: 'phone',
      number: YOUR_NUMBER
    }],
    from: {
      type: 'phone',
      number: VONAGE_VIRTUAL_NUMBER
    },
    ncco: [{ 
        "action": "talk",    
        "text": "You are listening to a test text-to-speech call made with the Vonage Voice API",}]
})
.then(resp => console.log(resp))
.catch(err => console.error(err));
  