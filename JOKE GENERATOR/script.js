function getJoke() {
  return $.ajax({
    url: 'https://official-joke-api.appspot.com/random_joke',
    method: 'GET',
  });
}

function displayJoke(joke) {
  $('#setup').text(joke.setup);
  $('#punchline').text(joke.punchline);
  $('#error').text('');
}

function showError() {
  $('#error').text("Couldn’t fetch a joke, try again!");
  $('#setup').text('Click "Get Joke" to start!');
  $('#punchline').text('');
  $('# clicked-joke-btn').prop('disabled', true);
}

function toggleButtons(disabled) {
  $('#get-joke-btn').prop('disabled', disabled);
  $('#clicked-joke-btn').prop('disabled', disabled);
}

function fetchAndDisplayJoke() {
  toggleButtons(true);
  getJoke()
    .done(function(joke) {
      displayJoke(joke);
      toggleButtons(false);
      $('#clicked-joke-btn').prop('disabled', false);
    })
    .fail(function() {
      showError();
      toggleButtons(false);
    });
}

$(function() {
  $('#get-joke-btn').click(fetchAndDisplayJoke);
  $('#clicked-joke-btn').click(fetchAndDisplayJoke);
});