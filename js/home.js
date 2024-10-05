document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.title_button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('你還沒做 (╯▔皿▔)╯');
        });
    });
    var BG1 = document.getElementById('BG1');
    let BG1X = 0;

    //这是延时
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    //背景滚动
    (async function() {
        while (null == null) {
            BG1X--;
            console.log(BG1X);
            if (BG1X > 0) {
                break;
            }
            if (BG1X == -64){
              BG1X = 0;
            }
            BG1.style.backgroundPosition = "0 " + BG1X + "px";
            await delay(100);
        }
    })();

});