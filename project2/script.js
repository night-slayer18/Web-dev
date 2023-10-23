document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    let result = 0;

    for (let i = 1; i <= 5; i++) {
        const selectedOption = document.querySelector(`input[name="question${i}"]:checked`);
        const options = document.querySelectorAll(`input[name="question${i}"]`);

        if (selectedOption) {
            const selectedValue = selectedOption.value;

            if (selectedValue === "correct") {
                result = result + 1;
            }

            const questionNumber = i;
            console.log(`For Question ${questionNumber}, Option ${selectedValue} is selected.`);

            options.forEach(option => {
                const label = document.querySelector(`label[for="${option.id}"]`);
                if (option === selectedOption) {
                    label.style.color = selectedValue === "correct" ? 'green' : 'red';
                } else {
                    label.style.color = 'red';
                }
            });
        } else {
            console.log(`Question ${i} is not answered.`);
        }
    }

    
    const answerDiv = document.querySelector('.answer');
    if (answerDiv) {
        answerDiv.style.visibility = 'visible';
        answerDiv.textContent = `Total correct answers: ${result}`;
    }

    
    setTimeout(() => {
        this.reset();
        resetLabelColors();
    }, 5000);
});

function resetLabelColors() {
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        label.style.color = ''; 
    });
}
