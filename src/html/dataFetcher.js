document.addEventListener('DOMContentLoaded', function () {
    // Fetch random user data from the Express API
    fetch('/random-data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Random user data:', data);
            document.getElementById('user-first-name').textContent = data.first_name;
            document.getElementById('user-last-name').textContent = data.last_name;
            document.getElementById('user-email').textContent = data.email;
        })
        .catch(error => console.error('Error fetching random data:', error));
});
