document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.title_button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('你還沒做 (╯▔皿▔)╯');
        });
    });
});