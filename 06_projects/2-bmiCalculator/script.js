const form = document.querySelector('form');
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)){
        console.log(`Please provide a valid height: ${height}`);
        results.innerHTML = `Please provide a valid height: ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        console.log(`. Please provide a valid weight: ${weight}`);
        results.innerHTML += `Please provide a valid weight: ${weight}`;
    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        let response = '';
        switch (true) {
            case (bmi < 18.6): response = "Under Weight"; break;
            case (bmi >= 18.6 && bmi <= 24.9): response = "Normal Range"; break;
            case (bmi > 24.9): response = "Over Weight"; break;
            default: response = "Error";
        }
        results.innerHTML = `<span>${response} -> ${bmi}</span>`;
    }
});