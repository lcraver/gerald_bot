// Made by Liam Craver @lcraver
// Code at: github.com/lcraver/gerald_bot

// BOT CONFIG
var OWNER_NAME = "Liam";
var OWNER_USERNAME = "lcraver"; // Owner of bot
var STREAM_MODERATORS = []; // All moderators for the stream
var BOT_NAME = "gerald_bot"; // Username of the bot
var BOT_GREETINGS = ["Heyo {{user}}! Welcome!", "What's up {{user}}!? Welcome!", "How goes it {{user}}?"]; // Greatings for people that join the stream.

var NOTIFICATIONS = ["If you have any questions feel free to ask your local squid with !help", "This is one crazy stream! You should probably follow ;)"];
var NOTIFICATION_INTERVAL = 900000; // Time in milliseconds till a notification is said
var POINT_INTERVAL = 60000; // Time in milliseconds till a point is awarded

var BASE_COMMANDS = ["!help", "!time", "!game", "!website", "!points", "!gerald"];
var BOT_COMMANDS = ["song [name] {30 points}", "add_joke [joke] {60 points}", "key_chance {500 points}"];

var BOT_ACCENT = "US English Male";
var BOT_PITCH = 1;
var BOT_VOICE_RATE = 1;
var BOT_VOLUME = 1;

var BOT_JOKE_QUESTIONS = ["tell me a joke", "a joke?", "can I hear a joke", "say something funny", "entertain me", "show me something funny", "make me laugh"];

var BOT_JOKES = [
  'A Roman walks into a bar, holds up two fingers, and says "Five beers, please."',
  'A grasshopper walks into a bar. The bartender says, "We\'ve got a drink named after you." The grasshopper says, "You\'ve got a drink named Steve?"',
  'A ham sandwich walks into a bar and the bartender says, "Sorry, we don\'t serve food in here."',
  'A man walks into a library and asks, "Can I have a cheeseburger?" The librarian says, "Sir, this is a library." The man whispers, "Can I have a cheeseburger?"',
  'An infectious disease walks into a bar. The bartender says, "We don\'t serve your kind in here." The disease replies, "Well you\'re not a very good host."',
  'Did you hear about the motherboard who ran away to join the circuits?',
  'Did you hear about the restaurant on the moon? Great food but no atmosphere.',
  'Don\'t trust the atoms. They make up everything.',
  'How do you catch a runaway laptop? With an internet.',
  'I told the doctor I broke my arm in two places. He told me not to go into those places.',
  'I wondered why the baseball was getting bigger. Then it hit me.',
  'I\'d tell a chemestry joke, but I\'m afraid I wouldn\'t get a reaction.',
  'Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.',
  'The barman says, "We don\'t serve time travelers in here." A time traveler walks into the bar.',
  'The past, the present, and the future walked into a bar. It was tense.',
  'There are two types of people in the world: Those who need closure',
  'Time flies like an arrow. Fruit flies like a banana.',
  'Two antennas got married. The ceremony dragged on, but the reception was excellent.',
  'Two silkworms were in a race. They ended up in a tie. No invertebrates were harmed in the making of this joke.',
  'What newspaper do the inklings prefer? The Daily Inkuirer.',
  'How can you tell the blue team won the turf war? It looks like the map blue up.',
  'How many tickles does it take to make an inkling laugh? tentacles.',
  'Why is the sky so unhappy? It has the blues.'];

var BOT_STANDARD_QUESTIONS = [
  {
    q: ["is there a girl squid in your life", "who do you love"],
    a: ["I have a mega crush on Marie. :like:"]
  },
  {
    q: ["what language were you programmed with", "what are you made of"],
    a: ["javascript", "Zeros and Ones and a bit of javascript!", "I'm all squid and javascript."]
  },
  {
    q: ["who is marie", "who is this marie"],
    a: ["Only the cutest squid around!"]
  },
  {
    q: ["how's it going", "how are you", "is everything good"],
    a: ["Everything is great :D"]
  },
  {
    q: ["what is your name", "what's your name"],
    a: ["umm...gerald :lips:"]
  },
  {
    q: ["what are you", "who are you"],
    a: ["The mascot character!", "A splatoon plush sometimes seen in the background of the streams.", "Your worst nightmare!?", "The bot to rule all bots!", "I'm not even sure...am I a kid or a squid!?"]
  },
  {
    q: ["are you a kid"],
    a: ["No I'm a squid of course!"]
  },
  {
    q: ["are you a squid"],
    a: ["No I'm a kid of course!"]
  },
  {
    q: ["are you real"],
    a: ["I'm the realest squid around!"]
  },
  {
    q: ["what do you look like"],
    a: ["An orange squid currently."]
  },
  {
    q: ["where do you live"],
    a: ["Inkopolis."]
  },
  {
    q: ["who made you", "who created you", "who is your creator", "who is your father"],
    a: ["Liam of course!", "I'm not sure *whispers* I have a theory I might be adopted. *whispers*"]
  },
  {
    q: ["will you marry me", "will you be my waifu"],
    a: ["Eww no way!", "Not interested sorry...", "You know I'm a dude right?"]
  },
  {
    q: ["do a barrel roll"],
    a: ["How about a swiss roll? https://upload.wikimedia.org/wikipedia/commons/a/a3/HK_Food_Swiss_Roll_Saint_Honore_Cake.JPG"]
  },
  {
    q: ["give me strength"],
    a: ["I think you'll have to get that yourself...sorry {{user}}"]
  },
  {
    q: ["what's your favorite color", "what is your favorite color"],
    a: ["ORANGE naturally!"]
  },
  {
    q: ["may the force be with you"],
    a: ["Sorry but I'm more of a Star Trek fan..."]
  },
  {
    q: ["beam me up"],
    a: ["Beaming up {{user}}! *future noises*", "Right away, captain."]
  },
  {
    q: ["what is splatoon"],
    a: ["A game staring us inklings! Nice to see us squids getting represented in games finally!"]
  },
  {
    q: ["what is the best os", "what is your favorite os", "what os is best"],
    a: ["If I don't say windows Liam will be mad..."]
  },
  {
    q: ["what is better playstation or xbox", "what is the best console"],
    a: ["Why limit it to only those? I think the WiiU is the best!", "Definitely the playstation!"]
  },
  {
    q: ["goodnight", "later", "bye"],
    a: ["Thanks for stopping by and hanging out I know you all come for me", "I'll miss you! *holds out tentacle towards the screen longingly*", "Aww do you have to go?"]
  },
  {
    q: ["help"],
    a: ["{{help}}"]
  },
  {
    q: ["i like you", "you're cool", "you are cool", "i love you"],
    a: ["Aww shucks thanks :)", ";)", "Thanks! I try!"]
  },
  {
    q: ["you a bitch", "bitch", "fuck you", "I hate you"],
    a: ["You are very mean {{user}}!", "Yeah well I don't hold it against you.", "*hugs you anyways*"]
  },
  {
    q: ["say my name"],
    a: ["ok...{{user}}"]
  },
  {
    q: ["what is my name"],
    a: ["...{{user}}"]
  },
  {
    q: ["will there be a stream"],
    a: ["Who knows? Maybe? *shouts* Liam get streaming the people want you *shouts*"]
  },
  {
    q: ["what's the current requested song", "what's the current requested music", "what is the current requested song", "what is the current requested music"],
    a: ["The current requested song is {{song}}"]
  },
  {
    q: ["how do I request a song", "how do I request music"],
    a: ["@gerald song [name of song / link to song]"]
  }
];

// CONSTANTS Don't touch unless you really know what you're doing
var container = $('ul.message-pane');
var notificationContainer = $('#notifications-popup-container');
var notificationQueue = [];
var messageQueue = [];
var messageCount;
var streamTime = $('span#stream_time');
var textarea = $('#message-textarea');
var submit = $('input[type="submit"]');
var botWritingCount = 0;
var botWelcomedPeople = []; // People that have been welcomed this session.
var CurrentNotification = 0;
var allUsers = document.getElementById('chat-rooms').getElementsByClassName('room-pane')[0].getElementsByClassName('roster-pane')[0].getElementsByClassName('label');
var requested_music = "";
var currentJoke = localStorage.getItem("current_joke");
$('.message', container).addClass('read');

String.prototype.contains = function (_search) {
  var searchingFor = _search.toString().toLowerCase();
  return this.toLowerCase().indexOf(searchingFor) !== -1
}

Array.prototype.rand = function () {
    return this[Math.floor(Math.random() * this.length)]
}

Array.prototype.contains = function(k) {
  for(var i = 0; i < this.length; i++){
    if(this[i] === k)
      return true;
  }
  return false;
}

function postMessage(message) {
    botWritingCount++;

    setTimeout(function(){
        textarea.val(message);
        submit.trigger('click');
        botWritingCount--;
    }, 500);
}

function sayMessage(message) {
  sayMessage(message, 0);
}

function sayMessage(message, delay) {
  setTimeout(function() {
  }, delay);
  responsiveVoice.speak(message, BOT_ACCENT, {pitch: BOT_PITCH, rate: BOT_VOICE_RATE, volume: BOT_VOLUME});
}

function processNotification() {
    if(notificationQueue.length == 0)
        return;

    var notification = notificationQueue.shift();
    var title = notification.find("p.title").text();
    var message = notification.find("p.message").text();

    if(message.contains("New follower"))
    {
      console.log("You've got a new follower named " + title);
    }
}

function processMessage() {
    if(messageQueue.length == 0)
        return;

    var message = messageQueue.shift();

    // If it's an info message
    if(message.hasClass('message-info')) {
        var text = message.text();

        // Someone entered the room
        if(text.indexOf(' joined the room.') != -1) {
          var userJoined = text.slice(0, text.indexOf(' joined the room.'));
            if(!botWelcomedPeople.contains(userJoined)) {
              sayMessage(userJoined.replace("_", " ") + " has joined the chat!", 5);
              postMessage(BOT_GREETINGS.rand().replace("{{user}}", userJoined))
              botWelcomedPeople.push(userJoined);
            }
        }
    } else {
        // var userName = $('a', message).text(); <- That includes all links in a message.
        var userNameHTML = $('.nickname', message).html();
        var userNameText = $('.nickname', message).text();
        var timeHTML = userNameHTML.slice(userNameHTML.indexOf('<small'), userNameHTML.indexOf('</small>')) + "</small>";

        var userName = userNameHTML.replace(timeHTML, "");

        var regexp = new RegExp("^"+userNameText, "g");

        // Check command
        var command = message.text().replace(regexp, '');
        var question = "";

        if(!userName.toLowerCase().contains(BOT_NAME.toLowerCase()))
        {
          var askingQuestion = false;

          var temp_name = "@" + BOT_NAME + ":";

          if(command.contains(temp_name))
          {
            if(command.toLowerCase().indexOf(temp_name) == 0)
              question = command.toLowerCase().replace(temp_name, "");
            else
              question = command.toLowerCase();

            question = question.substring(1, question.length);
            askingQuestion = true;
          }

          if(askingQuestion)
          {
            var a = "";

            if(BOT_JOKE_QUESTIONS.contains(question))
            {
              console.log("Asked a joke!");
              currentJoke++;

              if(currentJoke > BOT_JOKES.length - 1)
                currentJoke = 0;

              localStorage.setItem("current_joke", currentJoke);
              a = BOT_JOKES[currentJoke];

              sayMessage(a);
              postMessage(a);
              return;
            }
            else
            {
              console.log("Ask gerald: " + question);
              for(var i = 0; i < BOT_STANDARD_QUESTIONS.length; i++)
              {
                for(var q = 0; q < BOT_STANDARD_QUESTIONS[i].q.length; q++)
                {
                  if(question.contains(BOT_STANDARD_QUESTIONS[i].q[q]))
                  {
                      a = BOT_STANDARD_QUESTIONS[i].a.rand().replace("{{user}}", userName);
                      a = a.replace("{{help}}", getGeraldHelpText());
                      a = a.replace("{{song}}", requested_music);

                      sayMessage(a);
                      postMessage(a);
                      return;
                  }
                }
              }
            }

            if(question.replace(" ", "") == "" || question.replace(" ", "") == null)
            {
              var a = ["Hey {{user}}! How's it going!?", "What's up, {{user}}!?"];
              a = a.rand().replace("{{user}}", userName);
              sayMessage(a);
              postMessage(a);
            }
            return;
          }
          else
          {
            var commandOnly;
            var parameters;
            var allAfterFirstParameter;
            if(command.contains(" "))
            {
              commandOnly = command.substring(0, command.indexOf(" "));
              parameters = command.substring(command.indexOf(" ") + 1, command.length).split(" ");
              allAfterFirstParameter = command.substring(command.indexOf(parameters[0]) + parameters[0].length + 1, command.length);
            }
            else
            {
              commandOnly = command;
              parameters = [];
            }
            switch(commandOnly.toLowerCase()) {
                case '!help':
                    var availableCommands = BASE_COMMANDS;
                    postMessage(getGeraldHelpText());
                break;
                case '!streamtime':
                  var timeMessage = 'The stream has been active for ' + streamTime.text() + ' hours.';
                  postMessage(timeMessage);
                  break;
                case '!time':
                  var hour = new Date().getHours();
                  var timeMessage = 'The current time is ' + (new Date().toLocaleTimeString()) + ".";

                  if(hour < 5)
                    timeMessage += " " + OWNER_NAME + "should definitely be in bed..."
                  else if(hour < 8)
                    timeMessage += " " + OWNER_NAME + "either didn't go to bed or woke up really early (bet it was the first one)."

                  postMessage(timeMessage);
                  break;
                case '!game':
                  postMessage("You can find out more about Project Arrhythmia at http://projectarrhythmia.com");
                  break;
                case '!code':
                  postMessage("You can find out more about what makes me tick at https://github.com/lcraver/gerald_bot");
                  break;
                case '!website':
                  postMessage("Liam has a site at http://limestudios.net");
                  break;
                case '!points':
                  if(parameters.length > 0)
                    postMessage("They have " + localStorage.getItem("points_"+parameters[0].substring(1,parameters[0].length)) + " points.");
                  else
                    postMessage("You have " + localStorage.getItem("points_"+userName) + " points " + userName + ".");
                  break;
                case '!leaderboard':
                  var results = [];
                  for (var i = 0; i < window.localStorage.length; i++) {
                    key = window.localStorage.key(i);
                    if (key.contains("points_")) {
                        var points = window.localStorage.getItem(key);
                        var person = key.substring(7, key.length);
                        if(person != BOT_NAME && person != OWNER_USERNAME)
                          results.push({"person": person, "points": points});
                    }
                  }

                  results.sort(function(a,b) {
                      return b.points - a.points;
                  });

                  results = results.slice(0,10);

                  var geraldStr = "\n - LEADERBOARD -";
                  for (var i = 0; i < results.length; i++) {
                    geraldStr += "\n " + (i+1) + " - " + results[i].person + " : " + results[i].points;
                  }
                  postMessage(geraldStr);
                  break;
                case '!gerald':
                  if(parameters != null)
                  {
                    console.log("Gerald Command : " + parameters[0]);
                    switch (parameters[0]) {
                      case 'song':
                        if(checkPoints(userName, 30) || isOwner(userName))
                        {
                          postMessage("[X] Song [" + parameters[1] + "] requested by " + userName + ".");
                          addPoints(userName, -30);
                          requested_music = parameters[1];
                        }
                        else
                          postMessage("Sorry you don't have enough points [30] to request music!");
                        break;
                      case 'key_chance':
                        if(checkPoints(userName, 500) || isOwner(userName))
                        {
                          var p = Math.random();
                          if(p < 0.5)
                          {
                            postMessage("[X] " + userName + " won a steam key Congratulations!");
                            sayMessage("Congratulations, you won! Contact liam for your steam key!");
                          }
                          else
                          {
                            postMessage("Aww sorry " + userName + " but you didn't win this time...keep trying!");
                            sayMessage("Awwww, better luck next time!");
                          }
                          addPoints(userName, -500);
                        }
                        else
                          postMessage("Sorry you don't have enough points [500] to try to win a steam key!");
                        break;
                      case 'add_joke':
                        if(checkPoints(userName, 60) || isOwner(userName))
                        {
                          addPoints(userName, -60);
                          console.log("Joke added: " + allAfterFirstParameter);
                          var jokes = JSON.parse(localStorage.getItem("jokes"));
                          jokes.push(allAfterFirstParameter);
                          localStorage.setItem("jokes", JSON.stringify(jokes));
                          var message = userName + " your joke was added! Congrats!";
                          sayMessage(message);
                          postMessage("[X] " + message);
                        }
                        else
                          postMessage("Sorry you don't have enough points [60] to add a joke!");
                        break;
                      default:
                        postMessage(getGeraldHelpText());
                    }
                  }
                  else
                  {
                      postMessage(getGeraldHelpText());
                  }
                  break;
                case '!addpoints':
                  if(isOwner(userName))
                  {
                    addPoints(parameters[0], parameters[1]);
                  }
                  break;
                case '!clearpoints':
                  if(isOwner(userName))
                  {
                    localStorage.clear();
                    postMessage("*nukes all the points*");
                  }
                  break;
                case '!cleanuppoints':
                  if(isOwner(userName))
                    cleanUpPoints();
                  break;
              }
          }
        }
    }
}

function cleanUpPoints() {
  var localStorageArray = Object.keys(localStorage);

  for(var i = 0; i < localStorageArray.length; i++)
  {
    if(localStorageArray[i].contains("points_") && localStorage.getItem(localStorageArray[i]) < 5)
    {
        //console.log(localStorageArray[i] + " : " + localStorage.getItem(localStorageArray[i]));
        console.log("Cleaned up small point counts.");
        localStorage.removeItem(localStorageArray[i]);
    }
  }
}

// Returns if User is Admin
function isOwner(userName) {
  if(userName == OWNER_USERNAME)
    return true;
}

// Returns if User is Admin or Moderator
function isOwnerOrMod(userName) {

  if(userName == OWNER_USERNAME)
    return true;

  for(var i = 0; i < STREAM_MODERATORS.length; i++)
  {
    if(STREAM_MODERATORS[i].toLowerCase() == userName.toLowerCase())
      return true;
  }
}

// Get a User's points
function getPoints(_user) {
  return Number(localStorage.getItem("points_"+_user));
}

// Confirm User Has Enough Points
function checkPoints(_user, _points) {
  if(getPoints(_user) > _points)
    return true;
  else
    return false;
}

function addPoints(_user, _add) {
  localStorage.setItem("points_"+_user, getPoints(_user) + parseInt(_add, 10));
}

function processNotifications() {
  // Get new notifications since last check
  var newNotifications = $('.notification-live-text:not(.read)', notificationContainer);

  newNotifications.each(function() {
      // Mark message as read
      $(this).addClass('read');

      // Add new notifications to the queue
      notificationQueue.push($(this));
  });
}

// Manages Message Queue
function processMessages() {
    // Get new messages since last check
    var newMessages = $('.message:not(.read)', container);

    newMessages.each(function() {
        // Mark message as read
        $(this).addClass('read');

        // Add new messages to the queue
        messageQueue.push($(this));
    });
}

// Help Text
function getGeneralHelpText() {
  return 'You can ask me things directly with "Gerald/Squid [question]". Or use a premade command such as: ' + BASE_COMMANDS.join(', ');
}

// Help Text
function getGeraldHelpText() {
  return 'You can use your points with !gerald. Current Commands: ' + BOT_COMMANDS.join(', ');
}

// Posts bot notifications
function processBotMessages() {

  postMessage(NOTIFICATIONS[CurrentNotification]);

  CurrentNotification++;
  if(CurrentNotification >= NOTIFICATIONS.length)
    CurrentNotification = 0;

  setTimeout(processBotMessages, NOTIFICATION_INTERVAL);
}

// Adds a point to each online user
function processPoints() {

  if(streamTime != null)
  {
    for(var i = 0; i < allUsers.length; i++)
      localStorage.setItem("points_"+allUsers[i].innerHTML, getPoints(allUsers[i].innerHTML) + 1);
  }

  setTimeout(processPoints, POINT_INTERVAL);
}

function addJavascript(jsname, pos) {
  var th = document.getElementsByTagName(pos)[0];
  var s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', jsname);
  th.appendChild(s);
}

// Bot Tick
function tick() {
    processMessages();
    processMessage();

    //processNotifications();
    //processNotification();

    setTimeout(tick, 300);
}

tick();
processPoints();
setTimeout(processBotMessages, NOTIFICATION_INTERVAL);

addJavascript('https://code.responsivevoice.org/responsivevoice.js','head');
