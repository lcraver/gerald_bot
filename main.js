//TODO:
// ability to add jokes
// add ability to get name in credits

// CONSTANTS
var container = $('.message-pane');
var messageQueue = [];
var messageCount;
var textarea = $('#message-textarea');
var submit = $('input[type="submit"]');
var admins = ["lcraver"];
var botWritingCount = 0;

// BOT CONSTANTS
var BOT_WELCOMED = [];
var BOT_NAME = 'gerald_bot';
var BOT_COLOR = '#FF9800';
var BOT_NICKNAMES = ["Hey Gerald", "Hi Gerald", "Sup Gerald", "Gerald", "Hey Squid", "Hi Squid", "Sup Squid", "Squid"];

//
var requested_music = "";

// BASE COMMAND CONSTANTS
var BASE_COMMANDS = ["!help", "!time", "!game", "!website", "!points", "!gerald"];
var GERALD_COMMANDS = ["song [name] {30 points}", "key_chance {500 points}"];

// NOTIFICATION CONSTANTS
var CurrentNotification = 0;
var NOTIFICATIONS = ["If you have any questions feel free to ask your local squid with !help", "This is one crazy stream! You should probably follow ;)"];
var NOTIFICATION_INTERVAL = 900000;

// POINT CONSTANTS
var allUsers = document.getElementById('chat-rooms').getElementsByClassName('room-pane')[0].getElementsByClassName('roster-pane')[0].getElementsByClassName('label');
var POINT_INTERVAL = 60000;

// QUESTION CONSTANTS
var BOT_QUESTIONS = [ {
                        q: ["is there a girl squid in your life", "who do you love"],
                        a: "I have a mega crush on Marie. :like:"
                      },
                      {
                        q: ["who is marie", "who is this marie"],
                        a: "Only the cutest squid around!"
                      },
                      {
                        q: ["how's it going", "how are you", "is everything good"],
                        a: "Everything is great :D"
                      },
                      {
                        q: ["what is your name", "what's your name"],
                        a: "umm...gerald :lips:"
                      },
                      {
                        q: ["what are you", "who are you"],
                        a: ["The mascot character!", "A splatoon plush sometimes seen in the background of the streams.", "Your worst nightmare!?", "The bot to rule all bots!", "I'm not even sure...am I a kid or a squid!?"]
                      },
                      {
                        q: "are you a kid",
                        a: "No I'm a squid of course!"
                      },
                      {
                        q: "are you a squid",
                        a: "No I'm a kid of course!"
                      },
                      {
                        q: "are you real",
                        a: "I'm the realest squid around!"
                      },
                      {
                        q: "what do you look like",
                        a: "An orange squid currently."
                      },
                      {
                        q: "where do you live",
                        a: "Inkopolis."
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
                        q: "do a barrel roll",
                        a: "How about a swiss roll? https://upload.wikimedia.org/wikipedia/commons/a/a3/HK_Food_Swiss_Roll_Saint_Honore_Cake.JPG"
                      },
                      {
                        q: "give me strength",
                        a: "I think you'll have to get that yourself...sorry {{user}}"
                      },
                      {
                        q: ["what's your favorite color", "what is your favorite color"],
                        a: "ORANGE naturally!"
                      },
                      {
                        q: ["tell me a joke", "a joke?", "can I hear a joke", "say something funny", "entertain me", "show me something funny", "make me laugh"],
                        a: ['A Roman walks into a bar, holds up two fingers, and says "Five beers, please."', 'A grasshopper walks into a bar. The bartender says, "We\'ve got a drink named after you." The grasshopper says, "You\'ve got a drink named Steve?"', 'A ham sandwich walks into a bar and the bartender says, "Sorry, we don\'t serve food in here."', 'A man walks into a library and asks, "Can I have a cheeseburger?" The librarian says, "Sir, this is a library." The man whispers, "Can I have a cheeseburger?"', 'An infectious disease walks into a bar. The bartender says, "We don\'t serve your kind in here." The disease replies, "Well you\'re not a very good host."', 'Did you hear about the motherboard who ran away to join the circuits?', 'Did you hear about the restaurant on the moon? Great food but no atmosphere.', 'Don\'t trust the atoms. They make up everything.', 'How do you catch a runaway laptop? With an internet.', 'I told the doctor I broke my arm in two places. He told me not to go into those places.', 'I wondered why the baseball was getting bigger. Then it hit me.', 'I\'d tell a chemestry joke, but I\'m afraid I wouldn\'t get a reaction.', 'Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.', 'The barman says, "We don\'t serve time travelers in here." A time traveler walks into the bar.', 'The past, the present, and the future walked into a bar. It was tense.', 'There are two types of people in the world: Those who need closure', 'Time flies like an arrow. Fruit flies like a banana.', 'Two antennas got married. The ceremony dragged on, but the reception was excellent.', 'Two silkworms were in a race. They ended up in a tie. No invertebrates were harmed in the making of this joke.', 'What newspaper do the inklings prefer? The Daily Inkuirer.', 'How can you tell the blue team won the turf war? It looks like the map blue up.', 'How many tickles does it take to make an inkling laugh? tentacles.']
                      },
                      {
                        q: "may the force be with you",
                        a: "Sorry but I'm more of a Star Trek fan..."
                      },
                      {
                        q: "beam me up",
                        a: ["Beaming up {{user}}! *future noises*", "Right away, captain."]
                      },
                      {
                        q: "what is splatoon",
                        a: "A game staring us inklings! Nice to see us squids getting represented in games finally!"
                      },
                      {
                        q: ["what is the best os", "what is your favorite os", "what os is best"],
                        a: "If I don't say windows Liam will be mad..."
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
                        q: "help",
                        a: "{{help}}"
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
                        q: "say my name",
                        a: "ok...{{user}}"
                      },
                      {
                        q: "what is my name",
                        a: "...{{user}}"
                      },
                      {
                        q: "will there be a stream",
                        a: "Who knows? Maybe? *shouts* Liam get streaming the people want you *shouts*"
                      },
                      {
                        q: ["what's the current requested song", "what's the current requested music", "what is the current requested song", "what is the current requested music"],
                        a: "The current requested song is {{song}}"
                      },
                      {
                        q: ["how do I request a song", "how do I request music"],
                        a: "!gerald song [name of song / link to song]"
                      }];

// Initiale the color pallete
$('#username-color').trigger('click');
$('#context-menu').trigger('mouseout');

var initialColor = $('#colorPremiumInput').val();

$('.message', container).addClass('read');


function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

String.prototype.contains = function (_search) {
  var searchingFor = _search.toString().toLowerCase();
  return this.toLowerCase().indexOf(searchingFor) !== -1
}

Array.prototype.rand = function () {
    return this[Math.floor(Math.random() * this.length)]
}

Array.prototype.contains = function(k) {
  for(var i=0; i < this.length; i++){
    if(this[i] === k){
      return true;
    }
  }
  return false;
}


function postMessage(message) {
    botWritingCount++;

    $('.user-color-item').eq(0).attr('data-color', BOT_COLOR).trigger('click');
    setTimeout(function(){
        textarea.val(message);
        submit.trigger('click');

        // Restore name color
        botWritingCount--;
        if(botWritingCount == 0) {
            setTimeout(function() {
                // Only change back the color if no message is being written
                if(botWritingCount == 0)
                $('.user-color-item').eq(0).attr('data-color', initialColor).trigger('click');
            }, 300);
        }
    }, 500);
}

function processMessage() {
    if(messageQueue.length == 0)
        return;

    // Don't do anything if the streamer is writing
    if(textarea.val() != '')
        return;

    var message = messageQueue.shift();

    // If it's an info message
    if(message.hasClass('message-info')) {
        var text = message.text();

        // Someone entered the room
        if(text.indexOf(' joined the room.') != -1) {
          var userJoined = text.slice(0, text.indexOf(' joined the room.'));
          console.log("Welcome : " + BOT_WELCOMED.contains(userJoined));
            if(!BOT_WELCOMED.contains(userJoined)) {
              var greetings = ["Heyo {{user}}! Welcome!", "What's up {{user}}!? Welcome!", "How goes it {{user}}?"];

              postMessage(greetings.rand().replace("{{user}}", userJoined))

              BOT_WELCOMED.push(userJoined);
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
          if(!command.toLowerCase().contains("!gerald")) {
            for(var i = 0; i < BOT_NICKNAMES.length; i++)
            {
              if(command.contains(BOT_NICKNAMES[i]))
              {
                console.log(command.toLowerCase().indexOf(BOT_NICKNAMES[i].toLowerCase()));
                if(command.toLowerCase().indexOf(BOT_NICKNAMES[i].toLowerCase()) == 0)
                {
                  question = command.toLowerCase().replace(BOT_NICKNAMES[i].toLowerCase(), "");
                }
                else
                {
                  question = command.toLowerCase();
                }
                askingQuestion = true;
                break;
              }
            }
          }
          if(askingQuestion)
          {
            console.log("ask gerald: " + question);
            for(var i = 0; i < BOT_QUESTIONS.length; i++)
            {
              if(typeof BOT_QUESTIONS[i].q !== 'string')
              {
                for(var q = 0; q < BOT_QUESTIONS[i].q.length; q++)
                {
                  if(question.contains(BOT_QUESTIONS[i].q[q]))
                  {
                    if(typeof BOT_QUESTIONS[i].a !== 'string') {
                      var a = BOT_QUESTIONS[i].a.rand().replace("{{user}}", userName);
                      a = a.replace("{{help}}", getGeraldHelpText());
                      a = a.replace("{{song}}", requested_music);
                      postMessage(a);
                      return;
                    }
                    else {
                      var a = BOT_QUESTIONS[i].a.replace("{{user}}", userName);
                      a = a.replace("{{help}}", getGeraldHelpText());
                      a = a.replace("{{song}}", requested_music);
                      postMessage(a);
                      return;
                    }
                  }
                }
              }
              else
              {
                if(question.contains(BOT_QUESTIONS[i].q))
                {
                  if(typeof BOT_QUESTIONS[i].a !== 'string') {
                    var a = BOT_QUESTIONS[i].a.rand().replace("{{user}}", userName);
                    a = a.replace("{{help}}", getGeraldHelpText());
                    a = a.replace("{{song}}", requested_music);
                    postMessage(a);
                    return;
                  }
                  else {
                    var a = BOT_QUESTIONS[i].a.replace("{{user}}", userName);
                    a = a.replace("{{help}}", getGeraldHelpText());
                    a = a.replace("{{song}}", requested_music);
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
              postMessage(a);
            }
            else {
              var a = ["Sorry but I'm not sure how to respond to that :/", "???", "umm...what?"];
              postMessage(a.rand());
            }
            return;
          }
          else
          {
            var commandOnly;
            var parameters;
            if(command.contains(" "))
            {
              commandOnly = command.substring(0, command.indexOf(" "));
              parameters = command.substring(command.indexOf(" ") + 1, command.length).split(" ");
              console.log("Norm Command : " + commandOnly + " params: " + parameters.toString());
            }
            else
            {
              commandOnly = command;
              parameters = null;
            }
            switch(commandOnly.toLowerCase()) {
                  case '!help':
                      var availableCommands = BASE_COMMANDS;
                      /*if(isAdmin(userName)) {
                          availableCommands = availableCommands.concat(getAdminCommands());
                      }*/
                      postMessage(getGeraldHelpText());
                  break;
                  case '!time':
                      var hour = new Date().getHours();
                      var timeMessage = 'The current time is ' + (new Date().toLocaleTimeString()) + ".";

                      if(hour < 5)
                        timeMessage += " Liam should definitely be in bed..."
                      else if(hour < 8)
                          timeMessage += " Liam either didn't go to bed or woke up really early (bet it was the first one)."

                      postMessage(timeMessage);
                  break;
                  case '!game':
                      postMessage("You can find out more about Project Arrhythmia at http://projectarrhythmia.com");
                  break;
                  case '!website':
                      postMessage("Liam has a site at http://limestudios.net");
                  break;
                  case '!points':
                    postMessage("You have " + localStorage.getItem("points_"+userName) + " points " + userName + ".");
                    break;
                  case '!gerald':
                    if(parameters != null)
                    {
                      console.log("Gerald Command : " + parameters[0]);
                      switch (parameters[0]) {
                        case 'song':
                          if(checkPoints(userName, 30) || isAdmin(userName))
                          {
                            postMessage("[X] Song [" + parameters[1] + "] requested by " + userName + ".");
                            addPoints(userName, -30);
                            requested_music = parameters[1];
                          }
                          else
                            postMessage("Sorry you don't have enough points [30] to request music!");
                          break;
                        case 'key_chance':
                          if(checkPoints(userName, 500) || isAdmin(userName))
                          {
                            var p = Math.random();
                            if(p < 0.5)
                              postMessage("[X] " + userName + " won a steam key Congratulations!");
                            else
                              postMessage("Aww sorry " + userName + " but you didn't win this time...keep trying!");
                            addPoints(userName, -500);
                          }
                          else
                            postMessage("Sorry you don't have enough points [500] to try to win a steam key!");
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
                  case '!clearpoints':
                    if(isAdmin(userName))
                    {
                      localStorage.clear();
                      postMessage("*nukes the points*");
                    }
                    break;
              }
          }
        }
    }
}

function isAdmin(userName) {
  for(var i = 0; i < admins.length; i++)
  {
    console.log("Admin? " + admins[i]);
    if(admins[i].toLowerCase() == userName.toLowerCase())
      return true;
  }
}

function getPoints(_user) {
  return Number(localStorage.getItem("points_"+_user));
}

function checkPoints(_user, _points) {
  if(getPoints(_user) > _points)
    return true;
  else
    return false;
}

function addPoints(_user, _add) {
  localStorage.setItem("points_"+_user, getPoints(_user) + _add);
}

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

function getAdminCommands() {
    return ['!set', '!reset', '!game'];
}

function getGeneralHelpText() {
  return 'You can ask me things directly with "Gerald/Squid [question]". Or use a premade command such as: ' + BASE_COMMANDS.join(', ');
}

function getGeraldHelpText() {
  return 'You can use your points with !gerald. Current Commands: ' + GERALD_COMMANDS.join(', ');
}

function processNotifications() {

  postMessage(NOTIFICATIONS[CurrentNotification]);

  CurrentNotification++;
  if(CurrentNotification >= NOTIFICATIONS.length)
    CurrentNotification = 0;

  setTimeout(processNotifications, NOTIFICATION_INTERVAL);
}

function processPoints() {
  for(var i = 0; i < allUsers.length; i++)
  {
    localStorage.setItem("points_"+allUsers[i].innerHTML, getPoints(allUsers[i].innerHTML) + 1);
    //console.log("points_"+allUsers[i].innerHTML);
  }

  setTimeout(processPoints, POINT_INTERVAL);
}

function tick() {
    processMessages();
    processMessage();

    setTimeout(tick, 300);
}

tick();
processPoints();
setTimeout(processNotifications, NOTIFICATION_INTERVAL);
