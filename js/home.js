document.addEventListener('DOMContentLoaded', function() {
  //初始化界面
  
  //超链接文本
  let link_texts = document.querySelectorAll('.link_text');
  link_texts.forEach(link_text => {
    link_text.addEventListener('mouseover', function() {
      link_text.style.textDecoration = "underline";
    });
    link_text.addEventListener('mouseout', function() {
      link_text.style.textDecoration = "none";
    });
  });
  
  let buttons = document.querySelectorAll('.title_button');
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      alert('你還沒做 (╯▔皿▔)╯');
    });
  });
  let BG1 = document.getElementById('BG1');
  let BG1X = 0;

  //这是延时
  function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

  //背景滚动
  (async function() {
    while (null == null) {
      BG1X--;
      //console.log(BG1X);
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

  console.log(window.innerWidth + " x " + window.innerHeight)
  if (window.innerHeight > window.innerWidth) 
  {
    console.log('竖屏');
  } 
  else 
  {
    console.log('横屏');
  }
  
  //讀取公告
  try{
    let notetext = document.getElementById('notetext');
    fetch("../ini/notice.ini")
    .then(response =>{
      if(response.ok != true){
        console.log("Oops!");
      }
      return response.text();
    })
    .then(data =>{
      notetext.innerText = data;
    })
  }
  catch{
    console.log("Oops!")
  }
  
  //非綫性動畫
  async function dha(type,ddd,first,last,time,id,level = -1){
    //漸入
    first = first * -1;
    last = last * -1;
    let t = 0;  //默認 x 軸為 0
    time = time / 1;
    let step = 10 / time; //細分每幀 x 的增量
    let output; //輸出
    let over = first - last;  //計算距離
    if(type == "in"){
      while(time > 0)
      {
        time = time - 10;
        t = t + step;
        if(t > 1){
          t = 1;
        }
        
        if(level <= -1){
          //正選函數
          output = (Math.sin(t * 3.1415926 / 2) * over - first).toFixed(16);
        }
        else{
          //幾次冪函數？
          let ppp = 1; //冪函數初始為 1
          let lll = level + 1;
          while(lll > 0){
            ppp = Math.abs(t - 1) * ppp;
            lll = lll - 1;
          }
          output = ( (-ppp + 1) * over - first).toFixed(16);
        }
        
        //console.log("時間" + time);
        //console.log(t);
        //console.log("輸出" + output);
        if(ddd == "X" || ddd == "x")
        {
          id.style.left = output + "px";
        }
        else if(ddd == "Y" || ddd == "y")
        {
          id.style.top = output + "px";
        }
        else if(ddd == "A" || ddd == "a")
        {
          id.style.opacity = output;
        }
        await delay(10);
      }
    }
    //漸出
    else{
      while(time > 0)
      {
        time = time - 10;
        t = t + step;
        if(t > 1){
          t = 1;
        }
        
        if(level <= -1){
          //正選函數
          output = ( (Math.sin((t-1) * 3.1415926 / 2) + 1) * over - first).toFixed(16);
        }
        else{
          //幾次冪函數？
          let ppp = 1; //冪函數初始為 1
          let lll = level + 1;
          while(lll > 0){
            ppp = Math.abs(t) * ppp;
            lll = lll - 1;
          }
          output = ( ppp * over - first).toFixed(16);
        }
        
        //console.log("時間" + time);
        //console.log(t);
        //console.log("輸出" + output);
        if(ddd == "X" || ddd == "x")
        {
          id.style.left = output + "px";
        }
        else if(ddd == "Y" || ddd == "y")
        {
          id.style.top = output + "px";
        }
        else if(ddd == "A" || ddd == "a")
        {
          id.style.opacity = output;
        }
        await delay(10);
      }
    }
    
    if(ddd == "X" || ddd == "x"){
      id.style.left = last;
    }
    else if(ddd == "Y" || ddd == "y"){
      id.style.top = last;
    }
    else if(ddd == "A" || ddd == "a"){
      id.style.opacity = -1 * last;
    }
  }
  
  //link_box 動畫
  try{
    let ib = document.getElementById('ib');
    let i0 = document.getElementById('i0');
    let i1 = document.getElementById('i1');
    let i2 = document.getElementById('i2');
    let i3 = document.getElementById('i3');
    let i4 = document.getElementById('i4');
    let i5 = document.getElementById('i5');
    let ibb = ib.getBoundingClientRect();
    (async function () { dha("in","X",480,0,1000,i0); dha("in","A",0,1,1000,i0); })();
    (async function () { dha("in","Y",100 + ibb.top,ibb.top,1000,ib); dha("in","A",0,1,1000,ib); })();
    (async function () { await delay(100); dha("in","X",480,0,1000,i1); dha("in","A",0,1,1000,i1); })();
    (async function () { await delay(200); dha("in","X",480,0,1000,i2); dha("in","A",0,1,1000,i2); })();
    (async function () { await delay(300); dha("in","X",480,0,1000,i3); dha("in","A",0,1,1000,i3); })();
    (async function () { await delay(400); dha("in","X",480,0,1000,i4); dha("in","A",0,1,1000,i4); })();
    (async function () { await delay(500); dha("in","X",480,0,1000,i5); dha("in","A",0,1,1000,i5); })();
  }
  catch{}
  
  
});