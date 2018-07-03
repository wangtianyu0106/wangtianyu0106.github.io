//今日上新添加
new Vue({
    el:"#m3-box",
    data:{
        arrs:[
            {name:"植物花卉01",price:"￥159",img:"img/main/ximg1.jpg"},
            {name:"植物花卉02",price:"￥129",img:"img/main/ximg2.jpg"},
            {name:"植物花卉01",price:"￥139",img:"img/main/ximg3.jpg"},
            {name:"植物花卉01",price:"￥179",img:"img/main/ximg4.jpg"}
        ]
    }
})
//今日上新添加

//倒计时效果
var times = document.querySelectorAll(".times");
function FreshTime() {
    for(var t=0;t<times.length;t++){
        var endtime=new Date("2018/7/22,0:0:0");//缁撴潫鏃堕棿
        var nowtime = new Date();//褰撳墠鏃堕棿
        var time=parseInt((endtime.getTime()-nowtime.getTime())/1000);
        var d=parseInt(time/3600/24);
        var dd=checkTime(d);
        var h=parseInt((time/3600)%24);
        var hh=checkTime(h);
        var m=parseInt((time/60)%60);
        var mm=checkTime(m);
        var s=parseInt(time%60);
        var ss=checkTime(s);
        times[t].innerHTML=dd+"天"+hh+"时"+mm+"分"+s+"秒";
        function checkTime(i){
            if (i<10){
                i="0" + i;
            }
            return i;
        }
        if(time<=0){
            times[t].innerHTML="0天";
            clearInterval(sh);
        }
    }
}
FreshTime();
//console.log(document.querySelector(".time"))

var sh=setInterval(FreshTime,1000);
//倒计时效果



