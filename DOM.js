document.addEventListener("DOMContentLoaded", function() {
    // #1
    let body = document.body;
    let button = document.createElement('button');
    let buttonText = document.createTextNode('Duuuude');

    body.appendChild(button);
    button.appendChild(buttonText);

    button.addEventListener('click', function() {
        alert('Nice!');
    })

    // #2. look up how to look up the value of an element in js
    let enter = document.getElementById("submit-button");

    enter.addEventListener('click', function() {
        let input = document.getElementById("message").value;
        alert(input);
    })
    // #3
    let div = document.createElement('div');
    div.style.backgroundColor = 'red';
    div.style.height = '4em';
    div.style.width = '4em';
    body.appendChild(div);

    div.addEventListener('mouseenter', function() {
        div.style.backgroundColor = 'blue';
    })
    div.addEventListener('mouseleave', function() {
        div.style.backgroundColor = 'red';
    })

    // #4
    let p = document.createElement('p');
    let pText = document.createTextNode('Click this sweet text');
    p.appendChild(pText);
    body.appendChild(p);

    p.addEventListener('click', function() {
        let colors = '#';
        let letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];
        colors += letters[Math.floor(Math.random() * letters.length)];
        p.style.color = colors; 
    })

    // #5
    let div2 = document.createElement('div');
    let button2 = document.createElement('button');
    let buttonText2 = document.createTextNode('Check out my name');
    button2.appendChild(buttonText2);
    body.appendChild(button2);
    body.appendChild(div2);

    button2.addEventListener('click', function() {
        let span = document.createElement('span');
        let spanText = document.createTextNode('Jason Simons');
        
        span.appendChild(spanText);
        body.appendChild(span);
    })

    // #6
    let button3 = document.createElement('button');
    let buttonText3 = document.createTextNode('Here are some of my friends');
    button3.appendChild(buttonText3);
    body.appendChild(button3);

    let friends = ['Katie', 'Tim', 'Vicka', 'Stephen', 'Nick', 'Tyler', 'Luke', 'Jasmine', 'Chops', 'Chris'];
    
    button3.addEventListener('click', function() {
        let list = document.createElement('ul');
        
        body.appendChild(list);

        // for each friend... i need:
        for(let i = 0; i < friends.length; i++) {
            let listItem = document.createElement('li');
            let listItemText = document.createTextNode(friends[i]);
            listItem.appendChild(listItemText);
            list.appendChild(listItem);
        }
        //
        
    })
})