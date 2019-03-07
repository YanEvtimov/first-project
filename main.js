$(document).ready(init);

// initialize the app
function init() {
    // by default load a sign in form
    $('#sec2-3').html($('#signInForm').html());
    //checkForMail();
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

/*function checkForMail() {
    $('#mail').blur((e) => {
        e.preventDefault();

        let mailInput = $('#mail').val();
        let dbJson = '';

        $.get('http://localhost:3000/subscribers')
            .then((subs) => {
                console.log(subs);
                subs.forEach((sub) => {
                    // wrap it in div and create jQuery element of it
                    dbJson = (sub.Mail);
                })
        
        if (mailInput === dbJson) {
            alert('There already is a subscriber with this e-mail, please use other');
        }
    })
}*/

function getSubscribers() {
    $('#sec2-3 div p a').click((e) => {
        e.preventDefault();

        //initSubs();
        $('#sec2-3 article').css('visibility', 'visible');
        
    })

    $('#sec2-3 div p a').one('click', (e) => {
        e.preventDefault();

        initSubs();
    })
}

function closeArticle() {
    $('#sec2-3 article section.clsBtn').click((e) => {
        $('#sec2-3 article').css('visibility', 'hidden');
    })
}

function initSubs() {
    // get the subscriber template as text
    $('#hiddenSubs p').html($('#allSubs').html())
    let tpl = $('#subscriber').html(), tpl1;
    // get the products
    $.get('http://localhost:3000/subscribers')
        .then((subs) => {
            console.log(subs);
            subs.forEach((sub) => {
                // wrap it in div and create jQuery element of it
                tpl1 = $('<div>' + tpl + '</div>')
                tpl1.find('h3').html(sub.Name);
                tpl1.find('.info').html(sub.Mail);
                console.log(sub.name, tpl1.html())
                $('.subs-list').append(tpl1);
            })

        })
}