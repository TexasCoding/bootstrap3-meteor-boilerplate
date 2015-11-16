(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/collections/lib/constants.js                                    //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
SITE_TITLE = "Bootstrap4 Meteor Bolierplate";                          // 1
SITE_DESCRIPTION = "Bootstrap4 Meteor Boilerplate - Quick way to setup a Meteor app with Bootstrap4";
                                                                       //
STATES_ARRAY = [{                                                      // 6
  value: "AL",                                                         // 7
  label: "Alabama"                                                     // 8
},                                                                     //
// {value: "AK", value1:"Alaska"},                                     //
// {value: "AS", value1:"American Samoa"},                             //
{                                                                      // 12
  value: "AZ",                                                         // 13
  label: "Arizona"                                                     // 14
}, {                                                                   //
  value: "AR",                                                         // 16
  label: "Arkansas"                                                    // 17
}, {                                                                   //
  value: "CA",                                                         // 19
  label: "California"                                                  // 20
}, {                                                                   //
  value: "CO",                                                         // 22
  label: "Colorado"                                                    // 23
}, {                                                                   //
  value: "CT",                                                         // 25
  label: "Connecticut"                                                 // 26
}, {                                                                   //
  value: "DE",                                                         // 28
  label: "Delaware"                                                    // 29
}, {                                                                   //
  value: "DC",                                                         // 31
  label: "District Of Columbia"                                        // 32
},                                                                     //
// {value: "FM", label:"Federated States Of Micronesia",               //
{                                                                      // 35
  value: "FL",                                                         // 36
  label: "Florida"                                                     // 37
}, {                                                                   //
  value: "GA",                                                         // 39
  label: "Georgia"                                                     // 40
},                                                                     //
// {value: "GU", label:"Guam"},                                        //
// {value: "HI", label:"Hawaii"},                                      //
{                                                                      // 44
  value: "ID",                                                         // 45
  label: "Idaho"                                                       // 46
}, {                                                                   //
  value: "IL",                                                         // 48
  label: "Illinois"                                                    // 49
}, {                                                                   //
  value: "IN",                                                         // 51
  label: "Indiana"                                                     // 52
}, {                                                                   //
  value: "IA",                                                         // 54
  label: "Iowa"                                                        // 55
}, {                                                                   //
  value: "KS",                                                         // 57
  label: "Kansas"                                                      // 58
}, {                                                                   //
  value: "KY",                                                         // 60
  label: "Kentucky"                                                    // 61
}, {                                                                   //
  value: "LA",                                                         // 63
  label: "Louisiana"                                                   // 64
}, {                                                                   //
  value: "ME",                                                         // 66
  label: "Maine"                                                       // 67
},                                                                     //
// {value: "MH", label:"Marshall Islands",                             //
{                                                                      // 70
  value: "MD",                                                         // 71
  label: "Maryland"                                                    // 72
}, {                                                                   //
  value: "MA",                                                         // 74
  label: "Massachusetts"                                               // 75
}, {                                                                   //
  value: "MI",                                                         // 77
  label: "Michigan"                                                    // 78
}, {                                                                   //
  value: "MN",                                                         // 80
  label: "Minnesota"                                                   // 81
}, {                                                                   //
  value: "MS",                                                         // 83
  label: "Mississippi"                                                 // 84
}, {                                                                   //
  value: "MO",                                                         // 86
  label: "Missouri"                                                    // 87
}, {                                                                   //
  value: "MT",                                                         // 89
  label: "Montana"                                                     // 90
}, {                                                                   //
  value: "NE",                                                         // 92
  label: "Nebraska"                                                    // 93
}, {                                                                   //
  value: "NV",                                                         // 95
  label: "Nevada"                                                      // 96
}, {                                                                   //
  value: "NH",                                                         // 98
  label: "New Hampshire"                                               // 99
}, {                                                                   //
  value: "NJ",                                                         // 101
  label: "New Jersey"                                                  // 102
}, {                                                                   //
  value: "NM",                                                         // 104
  label: "New Mexico"                                                  // 105
}, {                                                                   //
  value: "NY",                                                         // 107
  label: "New York"                                                    // 108
}, {                                                                   //
  value: "NC",                                                         // 110
  label: "North Carolina"                                              // 111
}, {                                                                   //
  value: "ND",                                                         // 113
  label: "North Dakota"                                                // 114
},                                                                     //
// {value: "MP", label:"Northern Mariana Islands"},                    //
{                                                                      // 117
  value: "OH",                                                         // 118
  label: "Ohio"                                                        // 119
}, {                                                                   //
  value: "OK",                                                         // 121
  label: "Oklahoma"                                                    // 122
}, {                                                                   //
  value: "OR",                                                         // 124
  label: "Oregon"                                                      // 125
},                                                                     //
// {value: "PW", label:"Palau"},                                       //
{                                                                      // 128
  value: "PA",                                                         // 129
  label: "Pennsylvania"                                                // 130
},                                                                     //
// {value: "PR", label:"Puerto Rico"},                                 //
{                                                                      // 133
  value: "RI",                                                         // 134
  label: "Rhode Island"                                                // 135
}, {                                                                   //
  value: "SC",                                                         // 137
  label: "South Carolina"                                              // 138
}, {                                                                   //
  value: "SD",                                                         // 140
  label: "South Dakota"                                                // 141
}, {                                                                   //
  value: "TN",                                                         // 143
  label: "Tennessee"                                                   // 144
}, {                                                                   //
  value: "TX",                                                         // 146
  label: "Texas"                                                       // 147
}, {                                                                   //
  value: "UT",                                                         // 149
  label: "Utah"                                                        // 150
}, {                                                                   //
  value: "VT",                                                         // 152
  label: "Vermont"                                                     // 153
},                                                                     //
// {value: "VI", label:"Virgin Islands"},                              //
{                                                                      // 156
  value: "VA",                                                         // 157
  label: "Virginia"                                                    // 158
}, {                                                                   //
  value: "WA",                                                         // 160
  label: "Washington"                                                  // 161
}, {                                                                   //
  value: "WV",                                                         // 163
  label: "West Virginia"                                               // 164
}, {                                                                   //
  value: "WI",                                                         // 166
  label: "Wisconsin"                                                   // 167
}, {                                                                   //
  value: "WY",                                                         // 169
  label: "Wyoming"                                                     // 170
}];                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=constants.js.map
