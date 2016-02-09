angular.module('ericMVP.newYorkFactory', [])

.factory('DataNewYork', function ($http, $q) {
  var data = {}

  data.sheltersObj = {};
   var shelters = [
  ["115 Williams Street, New York, NY","718-483-7700","Brooklyn Women’s Shelter"],
  ["1122 Franklin Avenue","718-842-9865","Franklin Women’s Shelter"],
  ["430 30th Street, New York, NY","(800) 708-6600","Adult Family Intake Center"],
  ["151 East 151st Street, Bronx, NY","(800) 708-6600","Prevention and Temporary Housing "],
  ["527 West 22nd Street, New York, NY","212-206-0574","Ali Forney Center"],
  ["460 West 41st Street, New York, NY","212-613-0300 ","Covenant House"],
  ["165 West 131st Street, New York, NY","212-268-3943","Safe Horizon"],
  ["800 Baretto Street,Bronx, NY","718-893-3606","Bronx: Living Room"],
  ["120 East 32nd Street, New York, NY ","(800) 708-6600","Manhattan: Main Chance"],
  ["2402 Atlantic Avenue, Brooklyn, NY","(800) 708-6600","Brooklyn: The Gathering Place"]
];

  for(var i =0; i < shelters.length; i++) {
  if(data.sheltersObj[shelters[i][0]] === undefined) {
    data.sheltersObj[shelters[i][0]] = {};
    data.sheltersObj[shelters[i][0]].address = shelters[i][0];
    data.sheltersObj[shelters[i][0]].phoneNumber = shelters[i][1];
    data.sheltersObj[shelters[i][0]].shelterName = shelters[i][2];
    data.sheltersObj[shelters[i][0]].details;
    }
  }

  var requests = [];
  var responses = {};


  var postmates = function(start,end) {
    console.log("start is: ", start, " end is ", end);

    var req = $http.post('/postmates', {
      startAddress: start,
      endAddress: end
    }).then(function(resp){
      console.log(resp.data.data);
      console.log(resp.data.end)
      responses[resp.data.end] = JSON.parse(resp.data.data);
    });

    requests.push(req);
   
  };

data.delivery = function(obj) {
  console.log('sending delivery');
  return $http.post('/postmatesDelivery', obj).then(function(resp) {
    console.log(resp);
    data.response = "You Made A Delivery!";
  });
};

data.postmatesController = function(Single) {
  for(var key in data.sheltersObj) {
    postmates(Single,data.sheltersObj[key].address);
  }

  $q.all(requests).then(function(){
    for(var keys in responses) {
      console.log(responses[keys]);
      if(responses[keys].kind !== 'error') {
        console.log(responses[keys].kind);
        console.log(keys);
        console.log(data.sheltersObj);
      data.sheltersObj[keys].details = responses[keys].fee;
      data.sheltersObj[keys].kind = responses[keys].kind;
    }
    else {
      data.sheltersObj[keys].details = '5000';
      }
    }
    
    // console.log('got all back', responses, null, 2);
  });
}


  return data;


})