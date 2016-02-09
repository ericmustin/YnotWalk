angular.module('ericMVP.homeFactory', [])

.factory('Data', function ($http, $q) {
  var data = {}

  data.sheltersObj = {};
   var shelters = [["3543 18th Street, San Francisco, CA 94110 ","(877) 751-0880","Mass Shelter Asian Women's Shelter (AWS) "],
  ["810 Avenue D, San Francisco, CA 94130 ","(415) 391-2404","Women Shelter Community Housing Partnership "],
  ["835 Ofarrell Street, San Francisco, CA 94109 ","(415) 749-1695","Community Housing Partnership "],
  ["995 Market Street 5th Floor, San Francisco, CA 94103 ","(415) 399-9406","Compass Community Services "],
  ["899 Guerrero Street, San Francisco, CA 94110 ","(415) 550-4478","Shelter Runaway Youth Guerrero House "],
  ["1850 Mission Street suite B, San Francisco, CA 94103 ","1-877-503-1850","Men's Shelter La Casa de Las Madres "],
  ["118 Diamond Street Apt 101, San Francisco, CA 94114 ","(415) 255-8004","Women Shelter Monsignor LYNE Community "],
  ["449 Turk Street, San Francisco, CA 94102 ","(415) 923-9846","Shelter Family Tenderlion Housing Clinic "],
  ["811 Geary Street, San Francisco, CA 94109 ","(415) 673-5690","Tenderloin House Clinic "],
  ["514 South Van Ness Avenue, San Francisco, CA 94110 ","(415) 553-6284","Tenderloin Housing Clinic "],
  ["2791 16th Street, San Francisco, CA 94103 ","(415) 503-1096","Tenderloin Housing Clinic Inc "],
  ["333 Valencia St. Ste. 251, San Francisco, CA 94103 ","(877) 384-3578","W.O.M.A.N. "],
  ["85 Second Street 8th Floor San Francisco, CA 94105 ","(415) 427-8000","American Red Cross of the Bay Area "],
  ["920 Sacramento Street SAN FRANCISCO, CA 94108 ","(415) 781-0401","Cameron House"],
  ["810 Avenue D San Francisco, CA 94130 ","(415) 391-2404","Community Housing Partnership "],
  ["835 Ofarrell Street San Francisco, CA 94109 ","(415) 749-1695","Community Housing Partnership "],
  ["995 Market Street 5th Floor San Francisco, CA 94103 ","(415) 399-9406","Compass Community Services "],
  ["536 Central Avenue San Francisco, CA 94117 ","Larkin Street Youth Services (800) 669-6196","Diamond Youth Shelter"]
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
    }
    }
    // console.log('got all back', responses, null, 2);
  });
}


  return data;


})