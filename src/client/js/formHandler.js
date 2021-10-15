async function handleSubmit(e) {
    e.preventDefault();

    document.querySelector('#loading').innerHTML = `<strong>Loading......</strong>`;

    let url = document.getElementById('text-url').value;
  debugger
    if (Client.urlChecker(url)) {
        let apiData = {};
        await fetch("http://localhost:8081/api", {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                // Accept: 'application/json'
            },
            body: JSON.stringify({ url })
        })
        .then(response => response.json())
        .then(data => {
            apiData = data;
        })
        document.querySelector('#loading').innerHTML = ``;
        document.querySelector('#agreement').innerHTML = `<strong>Agreement:</strong> ${apiData.agreement}`;
        document.querySelector('#confidence').innerHTML = `<strong>Confidence:</strong> ${apiData.confidence}`;
        document.querySelector('#score_tag').innerHTML = `<strong>Score tag:</strong> ${apiData.score_tag}`
        document.querySelector('#subjectivity').innerHTML = `<strong>Subjectivity:</strong> ${apiData.subjectivity}`;
        document.querySelector('#irony').innerHTML = `<strong>Irony:</strong> ${apiData.irony}`;
    } else {
        alert('Enter a valid URL Format');
    }
}

export { handleSubmit }

