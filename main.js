$(document).ready(init);

// initialize the app
function init() {
    // by default load the products
    $('#sec2-3').html($('#signInForm').html());
    //initProducts();

}

function initForm() {
    $('#sec2-3 form').submit((e) => {
        e.preventDefault();
        // get all form data - it looks like [{name: 'image' value 'http://...'}, {name: 'description', value: '...'}...]
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
