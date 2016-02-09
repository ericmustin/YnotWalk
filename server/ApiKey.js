var custKey = 'cus_Jv68ogJmfcsVSV';
var auth = 'Basic ZmYwYjhjMjUtYjdhYi00MmJlLWFjZjUtYTc3NzkyYWY2ZmIxOg==';

var inputUrl = 'https://api.postmates.com/v1/customers/'+custKey+'/delivery_quotes';
var deliveryURL = 'https://api.postmates.com/v1/customers/'+custKey+'/deliveries';
module.exports = {
  inputUrl: inputUrl,
  deliveryURL: deliveryURL,
  auth: auth
};

//this should not push to git