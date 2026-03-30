$(function() {
    // 1. Initialize colors and handle Hover effects
    // We group all expander IDs here
    var $expanders = $("#expend-li0a, #expand-li1a, #expand-li2a, #expand-li3a, #expand-li4a, #expand-liupenna, #expand-liumicha");
    
    $expanders.css('color', 'darkseagreen').hover(
        function() { $(this).css('color', 'white'); },
        function() { $(this).css('color', 'darkseagreen'); }
    );

    // 2. Handle Slide Toggles
    // We target all 'a' elements. When clicked, we dynamically find the matching 'b' element.
    $('#li0a, #li1a, #li2a, #li3a, #li4a, #li-upenn-a, #li-umich-a').click(function() {
        // Takes the clicked ID (e.g., 'li1a'), removes the last char, adds 'b' (e.g., 'li1b')
        var targetId = "#" + this.id.slice(0, -1) + 'b'; 
        $(targetId).stop(true, true).slideToggle(300);
    });

    // 3. Cat Pic Cursor
    $('#cat-pic').mouseover(function() {
        $(this).css('cursor', "pic/cursor_write.gif");
    });
});
