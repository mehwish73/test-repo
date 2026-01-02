const jokeDiv = document.getElementById('joke');
    const button = document.getElementById('getJoke');

    button.addEventListener('click', () => {
      fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
          jokeDiv.textContent = data.value;
        })
        .catch(error => {
          jokeDiv.textContent = 'wrong ....someting';
          console.error(error);
        });
    });