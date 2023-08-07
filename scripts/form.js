let form = document.querySelector("#contact-form");

async function sendData(dataObj) {
    try {
        let url = "https://form-responses-api.vercel.app/";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataObj)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error:', error.message);
        return error;
    }
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let msgObj = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    }

    buttonAfter()

    try {
        let response = await sendData(msgObj);
        console.log(response);
        alert(response.message);
    } catch (error) {
        console.log(error);
        alert(response.error);
    }

    buttonPrev();
    clearForm();
})

function clearForm() {
    const inputFields = form.getElementsByTagName("input");
    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = "";
    }
    form.message.value = "";
}

let formBtn = document.querySelector("#form-btn");

function buttonPrev(){
    formBtn.innerText = "Submit";
}

function buttonAfter(){
    formBtn.innerText = "Submitting...";
}