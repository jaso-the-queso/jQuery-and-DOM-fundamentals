$(document).ready(function() {
    
    // #1
    let body = $('body');
    let button = $('<button>Duuuuuuuude</button>');
    button.appendTo(body);

    button.click(function() {
        alert('Nice!');
    })

    // #2
    $("#submit-button").click(function() {
        let input = $('#message').val();
        alert(input);
    })

    // #3
    let div = $('<div></div>');
    $(div).css({'background-color': 'red', 'height': '4em', 'width': '4em'});
    div.appendTo(body);

    div.mouseenter(function() {
        $(div).css({'background-color': 'blue', 'height': '4em', 'width': '4em'});
    })
    div.mouseleave(function() {
        $(div).css({'background-color': 'red', 'height': '4em', 'width': '4em'});
    })

    // #4
    let p = $('<p>Click this sweet text</p>');
    p.appendTo(body);

    p.click(function () {
        let colors = ['#000000','#FF0000','#00FF00','#0000FF','#FFFF00','#00FFFF','#FF00FF','#C0C0C0'];
        let rand = colors[Math.floor(Math.random() * colors.length)];
        $('p').css('color',rand);
    })
    
    // #5
    let div2 = $('<div></div>');
    let button2 = $('<button>Check out my name</button>');
    button2.appendTo(body);
    div2.appendTo(body);

    button2.click(function() {
        let span = $('<span>Jason Simons</span>');
        span.appendTo(div2);
    })

    // #6
    let button3 = $('<button>Click this button to see some of my friends</button>');
    button3.appendTo(body);

    let friends = ['Katie', 'Tim', 'Vicka', 'Stephen', 'Nick', 'Tyler', 'Luke', 'Jasmine', 'Chops', 'Chris']

    button3.click(function() {
        let list = $('<ul>These are my worst friends...</ul>');
        list.appendTo(body);

        for(let i = 0; i < friends.length; i++) {
            let listItem = $('<li>' + friends[i] + '</li>');
            
            listItem.appendTo(list);
        }
    })
})
