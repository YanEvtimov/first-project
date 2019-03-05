$(document).ready(init);

// initialize the app
function init() {
    // by default load a sign in form
    $('#sec2-3').html($('#signInForm').html());
}

function initForm() {
    $('#sec2-3 form').submit((e) => {
        e.preventDefault();
        // get all form data
        const frm = $('#sec2-3 form').serializeArray();

        let data = {}
        frm.forEach(v => {
            data[v.name] = v.value;
        })

        $.post('http://localhost:3000/subscribers', data)
            .then(() => alert('You have subscribed succesfully!'))
            .catch(() => alert('There was a problem adding the subscriber...'))
    })
}

function getSubscribers() {
    $('#sec2-3 div p a').click((e) => {
        e.preventDefault();

        $('#sec2-3 article').style.visibility = "visible";
    })
}

function closeArticle() {
    $('#sec2-3 article').style.visibility = "hidden";
}

/*function initSubs() {
    // get the product template as text
    let tpl = $('#hiddenSubs').html(), tpl1;
    // get the products
    $.get('http://localhost:3000/subscribers')
        .then((subs) => {
            console.log(subs);
            subs.forEach((sub) => {
                // wrap it in div and create jQuery element of it
                tpl1 = $('<div>' + tpl + '</div>')
                tpl1.find('h3').html(sub.name);
                tpl1.find('.desc').html(sub.name + ' description');
                console.log(sub.name, tpl1.html())
                $('main .product-list').append(tpl1);
            })

        })
}*/