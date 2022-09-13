// ** @ K


var quiztitle = "Free Practice Test 1";

// Question and choices (image question)

var quiz = [
  {
    "question": "A broken white line at the right of your lane means",
    "choices": [

      "You may pass if the way is clear",
      "Pass anytime",
      "Never pass",
      "Pass only during the daytime"
    ],
    "correct": "You may pass if the way is clear",

  },

  {
    "question": "What is the penalty if I use any electronic device while driving eg. cellphone ,tablet or I pad",

    "choices": [

      "Fine of $1000",
      "Suspension of drivers licence",
      "Fine of $10,000",
      "Fine of $100,000",
    ],
    "correct": "Fine of $10,000",

  },

  {
    "question": "In Jamaica, while driving, you must wear a seatbelt",

    "choices": [

      "When approaching law enforcement",
      "At all times",
      "For the driving test only",
      "For long trips only"
    ],
    "correct": "At all times",

  },

  {

    "question": "Objects that you cannot see in your rear view mirror and side mirrors are said to be in your .....?",
    "choices": [

      "Tight spot",
      "Blind spot",
      "Safe area",
      "Shadow area"
    ],
    "correct": "Blind spot",

  },

  {
    "question": "When a police officer signals you to pull over and stop, you must:",
    "choices": [

      "Slow down and pull over as far to the right and stop",
      "Continue driving to the nearest parking spot, then stop",
      "Pull over as far as possible to the left as you safely can and come to a complete stop",
      "Stop immediately in the lane you have been driving"
    ],
    "correct": "Pull over as far as possible to the left as you safely can and come to a complete stop",

  },

  {
    "question": "Why must drivers signal when turning?",
    "choices": [

      "To notify other road users of their intentions",
      "To make faster turns",
      "To yield the right of way",
      "Lights are needed to make smooth turns"
    ],
    "correct": "To notify other road users of their intentions",

  },

  {
    "question": "When does the law require lights on vehicles to be turned on?",
    "choices": [

      "Between sunset and sunrise",
      "No specified time",
      "Between half an hour before sunset to half hour after sunrise and at any other time visibility is not clear for a distance of 150M",
      "At nights"
    ],
    "correct": "Between half an hour before sunset to half hour after sunrise and at any other time visibility is not clear for a distance of 150M",

  },

  {
    "question": "Which driver has the right of way in a roundabout?",
    "choices": [

      "The driver approaching the roundabout",
      "The driver turning left into the roundabout",
      "The driver already in the roundabout",
      "The driver turning right in the roundabout"
    ],
    "correct": "The driver already in the roundabout",

  },

  {
    "question": "How should you enter the highway?",
    "choices": [

      "Move slowly towards the highway and slip into any openings",
      "Signal and increase your speed to merge smoothly with traffic",
      "Drive slowly, stop and wait until it is clear",
      "Drive slowly towards the highway and honk your horn to enter"
    ],
    "correct": "Signal and increase your speed to merge smoothly with traffic",

  },

  {
    "question": "When should you report a serious accident?",
    "choices": [

      "Within 48 hrs",
      "Immediately",
      "Within 24 hrs",
      "Within a week"
    ],
    "correct": "Immediately",

  },

  {
    "question": "While you are driving with a Provisional Drivers licence (Learners Licence) an accompanying driver must sit in the front passenger seat of the vehicle............",
    "choices": [

      "On highways",
      "In heavy traffic",
      "At all times",
      "At nights"
    ],
    "correct": "At all times",

  },

  {
    "question": "Whilst driving you should be aware of your surroundings and the traffic around you. How often should you check your mirrors and blind spots.",
    "choices": [

      "Every three seconds",
      "Every minute",
      "Every five seconds or so",
      "Every time a vehicle approaches"
    ],
    "correct": "Every five seconds or so",

  },

  {
    "question": "What actions should you take if your brakes fail?",
    "choices": [

      "Use the emergency brake and shout to other road users",
      "Pump the brake rapidly and shift into a lower gear",
      "Honk your horn to inform other motorists",
      "Hit the wheel on the nearest curve or object"
    ],
    "correct": "Pump the brake rapidly and shift into a lower gear",

  },

  {
    "question": "If you feel drowsy while driving, what should you do",
    "choices": [

      "Open your windows",
      "Reduce speed",
      "Increase the volume of your radio",
      "Stop in a safe area and rest"
    ],
    "correct": "Stop in a safe area and rest",

  },

  {
    "question": "If the traffic signal change while a pedestrian is still on the street, who has the right of way?",
    "choices": [

      "Motorist making a turn",
      "The pedestrian",
      "Motorist coming from the right",
      "The motorist coming from the left"
    ],
    "correct": "The pedestrian",

  },

  {
    "question": "What age are you allowed to get a ProvisionalDrivers Licence (Learners Licence) in Jamaica",
    "choices": [

      "After graduating from school",
      "14 years",
      "At the age of consent",
      "17 years old"
    ],
    "correct": "17 years old",

  },

  {
    "question": "A driver who had used alcohol or drugs may experience which of these effects?",
    "choices": [

      "difficulty controlling the movement of the vehicle",
      "delayed response when an emergency arise",
      "misunderstanding signs and signals",
      "all of the above"
    ],
    "correct": "all of the above",

  },

  {
    "question": "When you are driving behind another vehicle, you should maintain?",
    "choices": [

      "A minimum 2 second following distance",
      "A minimum 4 second following distance",
      "A maximum 6 second following distance",
      "A maximum 10 second following distance"
    ],
    "correct": "A minimum 2 second following distance",

  },

  {
    "question": "White or clear lights at the rear of a motor vehicle means?",
    "choices": [

      "The vehicle is parked",
      "The vehicle is turning",
      "The vehicle is in reverse",
      "The vehicle is stopping"
    ],
    "correct": "The vehicle is in reverse",

  },

 
  {
    "question": "When you park your vehicle facing down hill, which way should you point your wheel?",
    "choices": [

      "To the right",
      "To the left",
      "Straight",
      "In any direction"
    ],
    "correct": "To the left",

  },

  {
    "question": "After overtaking a vehicle. What should you do before rejoining the line?",
    "choices": [

      "Check your mirrors and blind spots (shoulder checks) and indicate",
      "Put on your indicators and honk your horn",
      "Pull in when it is safe to do so.",
      "Honk your horn and accelerate"
    ],
    "correct": "Check your mirrors and blind spots (shoulder checks) and indicate",

  },

  {
    "question": "What does a traffic signal with a red light and a green arrow indicates?",
    "choices": [

      "You must stop",
      "The light will change to red soon",
      "The traffic light is malfunctioning",
      "Motorists can proceed with caution in the direction of the arrow."
    ],
    "correct": "Motorists can proceed with caution in the direction of the arrow.",

  },

  {
    "question": "Which vehicle has the Right Of Way on a hill?",
    "choices": [

      "The vehicle that entered the hill first",
      "The vehicle coming down but the heavier/larger vehicle has the Right Of Way up or down.",
      "The vehicle going uphill.",
      "The more expensive vehicle."
    ],
    "correct": "The vehicle coming down but the heavier/larger vehicle has the Right Of Way up or down.",

  },

  {
    "question": "What does a flashing amber light mean?",
    "choices": [

       "The light will change to red soon",
      "Drivers should proceed with caution",
      "The light is broken",
      "Stop"
    ],
    "correct": "Drivers should proceed with caution",

  },

];

/******* No need to edit below this line *********/
var currentquestion = 0,
  score = 0,
  submt = true,
  picked;

jQuery(document).ready(function ($) {

  /**
   * HTML Encoding function for alt tags and attributes to prevent messy
   * data appearing inside tag attributes.
   */
  function htmlEncode(value) {
    return $(document.createElement('div')).text(value).html();
  }

  /**
   * This will add the individual choices for each question to the ul#choice-block
   *
   * @param {choices} array The choices from each question
   */
  function addChoices(choices) {
    if (typeof choices !== "undefined" && $.type(choices) == "array") {
      $('#choice-block').empty();
      for (var i = 0; i < choices.length; i++) {
        $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
      }
    }
  }

  /**
   * Resets all of the fields to prepare for next question
   */
  function nextQuestion() {
    submt = true;
    $('#explanation').empty();
    $('#question').text(quiz[currentquestion]['question']);
    $('#pager').text('Question ' + Number(currentquestion + 1) + ' of ' + quiz.length);
    if (quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != "") {
      if ($('#question-image').length == 0) {
        $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
      } else {
        $('#question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question']));
      }
    } else {
      $('#question-image').remove();
    }
    addChoices(quiz[currentquestion]['choices']);
    setupButtons();
  }

  /**
   * After a selection is submitted, checks if its the right answer
   *
   * @param {choice} number The li zero-based index of the choice picked
   */
  function processQuestion(choice) {
    if (quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']) {
      $('.choice').eq(choice).css({
        'background-color': '#50D943'
      });
      $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
      score++;
    } else {
      $('.choice').eq(choice).css({
        'background-color': '#D92623'
      });
      $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
    }
    currentquestion++;
    $('#submitbutton').html('NEXT QUESTION &raquo;').on('click', function () {
      if (currentquestion == quiz.length) {
        endQuiz();
      } else {
        $(this).text('Check Answer').css({
          'color': '#222'
        }).off('click');
        nextQuestion();
      }
    })
  }

  /**
   * Sets up the event listeners for each button.
   */
  function setupButtons() {
    $('.choice').on('mouseover', function () {
      $(this).css({
        'background-color': '#e1e1e1'
      });
    });
    $('.choice').on('mouseout', function () {
      $(this).css({
        'background-color': '#fff'
      });
    })
    $('.choice').on('click', function () {
      picked = $(this).attr('data-index');
      $('.choice').removeAttr('style').off('mouseout mouseover');
      $(this).css({
        'border-color': '#222',
        'font-weight': 700,
        'background-color': '#c1c1c1'
      });
      if (submt) {
        submt = false;
        $('#submitbutton').css({
          'color': '#000'
        }).on('click', function () {
          $('.choice').off('click');
          $(this).off('click');
          processQuestion(picked);
        });
      }
    })
  }

  /**
   * Quiz ends, display a message.
   */
  function endQuiz() {
    $('#explanation').empty();
    $('#question').empty();
    $('#question-image').remove();
    $('#choice-block').empty();
    $('#submitbutton').remove();
    $('#question').text("You got " + score + " out of " + quiz.length + " correct.");
    $(document.createElement('h2')).css({
      'text-align': 'center',
      'font-size': '4em'
    }).text(Math.round(score / quiz.length * 100) + '%').insertAfter('#question');


  }

  /**
   * Runs the first time and creates all of the elements for the quiz
   */
  function init() {
    //add title
    if (typeof quiztitle !== "undefined" && $.type(quiztitle) === "string") {
      $(document.createElement('h1')).text(quiztitle).appendTo('#frame');
    } else {
      $(document.createElement('h1')).text("Quiz").appendTo('#frame');
    }

    //add pager and questions
    if (typeof quiz !== "undefined" && $.type(quiz) === "array") {
      //add pager
      $(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Question 1 of ' + quiz.length).appendTo('#frame');
      //add first question
      $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');
      //add image if present
      if (quiz[0].hasOwnProperty('image') && quiz[0]['image'] != "") {
        $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame');
      }
      $(document.createElement('p')).addClass('explanation').attr('id', 'explanation').html('&nbsp;').appendTo('#frame');

      //questions holder
      $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');

      //add choices
      addChoices(quiz[0]['choices']);

      //add submit button
      $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Check Answer').css({
        'font-weight': 700,
        'color': '#222',
        'padding': '30px 0'
      }).appendTo('#frame');

      setupButtons();
    }
  }

  init();
});