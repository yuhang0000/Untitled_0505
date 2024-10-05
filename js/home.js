document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.title_button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('你還沒做 (╯▔皿▔)╯');
        });
    });
    var BG1 = document.getElementById('BG1');
    let BG1X = 0;

// 创建一个延迟函数
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 使用 async/await 实现延时循环
(async function() {
    while (true) {
        BG1X--;
        console.log(BG1X);

        // 如果需要停止循环，可以在这里添加条件判断
        if (BG1X > 0) { // 例如，当 BG1X 达到 10 时停止
            break;
        }
        
        if (BG1X == -64){
          BG1X = 0;
        }
        
        BG1.style.backgroundPosition = "0 " + BG1X + "px";

        await delay(20); // 延迟 200ms
    }
})();

});