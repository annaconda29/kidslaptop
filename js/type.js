$(function() {

    $('#keyboard').keyboard({
        visible: function(e, keyboard) {
          initTypeAhead(keyboard);
        },
        change: function(e, keyboard){
          // trigger "input" required for typeahead to recognize a change
          e.type = 'input';
            keyboard.$preview.trigger(e);
        }
      })
      // activate the typing extension
      .addTyping({
        showTyping: true,
        delay: 250
      });
  
    var substringMatcher = function(strs) {
        return function findMatches(q, cb) {
          var matches, substringRegex;
  
          // an array that will be populated with substring matches
          matches = [];
  
          // regex used to determine if a string contains the substring `q`
          substrRegex = new RegExp(q, 'i');
  
          // iterate through the pool of strings and for any string that
          // contains the substring `q`, add it to the `matches` array
          $.each(strs, function(i, str) {
            if (substrRegex.test(str)) {
              matches.push(str);
            }
          });
  
          cb(matches);
        };
      },
      states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
        'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
        'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
        'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
        'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
        'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
        'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ],
      initTypeAhead = function(keyboard) {
        keyboard.$preview.typeahead({
          hint: true,
          highlight: true,
          minLength: 1
        }, {
          name: 'states',
          source: substringMatcher(states)
        });
      };
  
  });
  