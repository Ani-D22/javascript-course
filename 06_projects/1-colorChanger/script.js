const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        switch (e.target.id) {
            case 'grey': case 'white': case 'blue': case 'yellow':
                if (body.style.backgroundColor.toString() === e.target.id)
                    console.log("Background color already set as: ",e.target.id);
                else body.style.backgroundColor = e.target.id;
                break;

            default:
                console.log("Incorrect value detected..!");
        }
    })
});