const inputs = document.querySelectorAll('.input');
const form = document.querySelector('form');
const file = document.querySelector('#cv');
const checkbox = document.querySelector('input[type="checkbox"]')

for (let input of inputs) {
    input.addEventListener('focus', () => {
        let parent = input.parentElement;
        let label = parent.querySelector('label')
        label.className = "label focus"
        label.style.visibility = "visible"
    })

    input.addEventListener('blur', () => {
        let parent = input.parentElement;
        let label = parent.querySelector('label')
        label.className = "label";
        label.style.visibility = "hidden"
    })
}

function validateInputs() {
    for (let input of inputs) {
        if (input.name !== "website") {
            if (input.value.trim() === "") {
                showError(input, "This field is required");
                return false;
            } else {
                showSuccess(input);
            }
        }
    }

    if (file.value === "") {
        showError(file, "No file selected");
        return false;
    } else {
        showSuccess(file);
        if (!checkbox.checked) {
            showError(checkbox, "Do you agree?");
            return false;
        } else {
            showSuccess(checkbox);
            return true;
        }
    }
}

function showError(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('small');
    errorMessage.innerText = message;
    formControl.className = "form-control text error"
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control text"
}
