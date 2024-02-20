// alert('Hello, World!');

// let clickOMatic = function() {
//     alert('Hello');
// };

// let clickOMatic = () => alert('Hello!');

// the following is the way we want to most declare fuctions:
function clickOMatic() {
    alert('Hello!');
}


window.onload = function() {
    const click = document.getElementById('click');

    click.addEventListener("click", (event) => {
    clickOMatic();
    
    });

};


