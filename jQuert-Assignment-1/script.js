$(document).ready(function () {

    // 1)A page has a series of product cards, each containing a header, small description, and a 
    // "Delete" button. Clicking the button should remove the card from the DOM.
    $('.delete').click(function () {
        $(this).parent().remove();
    });

    // 2)On the same set of cards, users can hover over a product card to see additional details.
    //  The details should hide again when the user moves the mouse away.
    $('img').hide();
    $(".cards").mouseenter(function () {
        $(this).find('h2').hide();
        $(this).find('img').show(1000);
    })
    $(".cards").mouseleave(function () {
        $(this).find('h2').show(500);
        $(this).find('img').hide();
    })
})