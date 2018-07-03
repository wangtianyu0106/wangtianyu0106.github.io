//banner轮播图
var mySwiper = new Swiper ('.banner .swiper-container', {
    loop: true,
    
    pagination: {
        el: '.swiper-pagination',
    }
})


//京东快报上下轮播
setInterval(function(){
	a();
},3000);
setInterval(function(){
	b();
	c();
},3500);
function a(){
	$(".news .center .text").css({"transform":"translateY(-16px)","transition":"1s"});
}

function b(){
	$(".news .center .text").css({"transform":"translateY(0px)","transition":"0s"});
}

function c(){
	$(".news .center .text").eq(0).appendTo($(".news .center"));
}

//京东秒杀倒计时
var zxx = {
    $: function(id){
        return document.getElementById(id);
    },
    futureDate: Date.UTC(2020, 5, 10, 8),
    obj: function(){
        return {
            sec: zxx.$("sec"),
            mini: zxx.$("mini"),
            hour: zxx.$("hour"),
            day: zxx.$("day"),
            month: zxx.$("month"),
            year: zxx.$("year")
        }
    }
};
fnTimeCountDown(zxx.futureDate, zxx.obj());

//顶部广告
var close = document.getElementById("close");
var ad = document.getElementById("ad");
if(ad!=null){
    if(sessionStorage.ad=="false"){
        ad.style.display="none";
    }else{
        ad.style.display="block";
    }
}
if(ad!=null){
    close.addEventListener("click",function(){
        ad.style.display="none";
        sessionStorage.ad=="false";
    })
}

//头部定位input以及回到顶部按钮显示隐藏
var backtop=document.getElementById("backtop");
var sousuo=document.querySelector(".search")
window.onscroll=function(){
    if(sousuo != null){
        if(backtop != null){
            if(document.body.scrollTop>120){
              sousuo.style.top="0px";  sousuo.style.backgroundColor="#81485b";
                backtop.style.display="inline-block";
            }else{
                sousuo.style.backgroundColor="transparent";
                backtop.style.display="none";
                sousuo.style.top="auto";
            }
        }
    } 
}

//京东直播轮播图
 var swiper = new Swiper('.zhibo .swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
    });

//为你推荐
new Vue({
    el:"#tj",
    data:{
        arrs:[
            {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式45cm 50cm 垃圾袋",img:"img/weinituijian/img1.jpg",price:"￥21.80",span:"自营",pspan:"￥19.80",pimg:"",pa:"看相似"},
            {name:"安昕 良选男士船袜5双装 中筒棉袜商务男袜子吸汗透气短袜 船袜",img:"img/weinituijian/img2.jpg",price:"￥38.00",span:"",pspan:"",pimg:"",pa:"看相似"},
            {name:"苹果原装数据线iPhone7Plus//6P/5SE/iPad Pro手机USB线",img:"img/weinituijian/img3.jpg",price:"￥155.00",span:"",pspan:"",pimg:"",pa:"看相似"},
            {name:"真皮多卡位零钱包女士卡夹信用卡包 头层牛皮 驾驶证皮套风琴式",img:"img/weinituijian/img4.jpg",price:"￥59.00",span:"",pspan:"",pimg:"",pa:"看相似"},
            {name:"QANLIIY千里鹰便携双筒望远镜高倍高清微光也是非红外军事演练",img:"img/weinituijian/img5.jpg",price:"￥138.00",span:"",pspan:"",pimg:"",pa:"看相似"},
            {name:"【京东超市】蒙牛（MENGNIU）承认奶粉 全脂奶粉",img:"img/weinituijian/img6.jpg",price:"￥27.80",span:"自营",pspan:"",pimg:"",pa:"看相似"},
            {name:"【京东超市】清风（APP）卷纸 原木纯品3层270段纯木卫生纸",img:"img/weinituijian/img7.jpg",price:"￥18.90",span:"自营",pspan:"",pimg:"",pa:"看相似"},
            {name:"【京东超市】绿之源 360°室内装修安全卫士活性炭汽车 装修必备品",img:"img/weinituijian/img8.jpg",price:"￥99.00",span:"",pspan:"",pimg:"",hsp:"",pa:"看相似"},
            {name:"澳洲进口 卢卡斯Lucas番木瓜膏滋润保湿万用膏 驱蚊 夏日必备品",img:"img/weinituijian/img9.jpg",price:"￥49.00",span:"",pspan:"",hsp:"全球购",pimg:"",pa:"看相似"},
            {name:"海尔（Haier）BCD-201STPA201升三门冰箱 空间大",img:"img/weinituijian/img10.jpg",price:"￥1199.00",span:"自营",pspan:"",pimg:"",hsp:"",pa:"看相似"},
            {name:"【京东超市】泰国进口 休闲零食 小老板 烤海苔卷 脆紫菜 烤海苔",img:"img/weinituijian/img12.jpg",price:"￥13.80",span:"自营",pspan:"",pimg:"",hsp:"",pa:"看相似"},
            {name:"日本 熊业油脂（HORSE oil）无硅油马油洗发水 丝质顺滑",img:"img/weinituijian/img13.jpg",price:"￥49.00",span:"",pspan:"",pimg:"",hsp:"全球购",pa:"看相似"},
            {name:"【京东超市】惠氏启赋（Wyethilluma）较大婴儿和婴儿",img:"img/weinituijian/img14.jpg",price:"￥298.00",span:"自营",pspan:"",pimg:"",hsp:"",pa:"看相似"},
            {name:"【国际名品直销】COLF精品牛皮卡位男士手包可装手机加百元钞",img:"img/weinituijian/img15.jpg",price:"￥169.00",span:"",pspan:"",pimg:"",hsp:"",pa:"看相似"},
            {name:"【京东配送】【双轴承 宽轮 可折叠】健爵滑板车 三轮多彩闪亮",img:"img/weinituijian/img16.jpg",price:"￥279.00",span:"",pspan:"",pimg:"",hsp:"",pa:"看相似"},
            {name:"【京东超市】法国进口 达能正品 依云（evian）天然矿泉水",img:"img/weinituijian/img17.jpg",price:"￥219.00",span:"自营",pspan:"",pimg:"",hsp:"",pa:"看相似"},
            {name:"【苏之润记忆棉靠垫】办公室 汽车 座椅 护腰 靠垫 腰靠 靠背 靠枕",img:"img/weinituijian/img18.jpg",price:"￥89.00",span:"",pspan:"",pimg:"",hsp:"",pa:"看相似"},
            {name:"泰昌（taichang）TC-5197全自动按摩足浴盆 洗脚盆 泡脚盆",img:"img/weinituijian/img19.jpg",price:"￥369.00",span:"自营",pspan:"",pimg:"",hsp:"",pa:"看相似"}
        ]
    }
})

//回到顶部部分


//          js返回顶部
//按钮显示和隐藏部分

//window.onscroll = function (){
//    if(document.body.scrollTop>370){
//        
//    }else{
//        
//    }
//}



//点击返回顶部部分
backtop.addEventListener("click",function(){
    var t = setInterval(function(){
        document.body.scrollTop= document.body.scrollTop-20;
        document.documentElement.scrollTop= document.documentElement.scrollTop-20;
         if(document.body.scrollTop === 0){
            clearInterval(t);
        }
    },10);
})



//        jquery返回顶部
//document.querySelector("#backtop").style.display="none";
//$(function(){
////        当滚动条的位置处于距顶部300像素以下时，跳转链接出现，否则消失
//        $(function () {
//            $(window).scroll(function(){
//                if ($(window).scrollTop()>300){
//                    $("#backtop").fadeIn(500);
//                }
//                else
//                {
//                    $("#backtop").fadeOut(500);
//                }
//            });
//
//            //当点击跳转链接后，回到页面顶部位置
//            $("#backtop").click(function(){
//                $('body,html').animate({scrollTop:0},1000);
//        if ($('html').scrollTop()) {
//                $('html').animate({ scrollTop: 0 }, 1000);
//                return false;
//            }
//            $('body').animate({ scrollTop: 0 }, 1000);
//                 return false;            
//           });       
//     });    
//});







//京东分类页面部分

new Vue({
    el:"#mainsort",
    data:{
        arrs:[
            {bannerimg:"img/sort/rementuijian/banner-img1.jpg",name1:"电风扇",img1:"img/sort/rementuijian/img1.png",link:"",name2:"充电宝",img2:"img/sort/rementuijian/img4.png",link:"",name3:"凉席",img3:"img/sort/rementuijian/img7.png",link:"",name4:"空调挂机",img4:"img/sort/rementuijian/img10.png",link:"",name5:"男鞋",img5:"img/sort/rementuijian/img13.png",link:"",name6:"冰箱",img6:"img/sort/rementuijian/img16.png",link:"",name7:"华为手机",img7:"img/sort/rementuijian/img19.png",link:"",name8:"手机",img8:"img/sort/rementuijian/img2.jpg",name9:"蓝牙耳机",img9:"img/sort/rementuijian/img5.jpg",name10:"耳机",img10:"img/sort/rementuijian/img8.png",name11:"路由器",img11:"img/sort/rementuijian/img11.png",name12:"热水器",img12:"img/sort/rementuijian/img14.png",name13:"洗衣机",img13:"img/sort/rementuijian/img17.png",name14:"小米手机",img14:"img/sort/rementuijian/img20.png",name15:"空调",img15:"img/sort/rementuijian/img3.png",name16:"蚊帐",img16:"img/sort/rementuijian/img6.png",name17:"耳机",img17:"img/sort/rementuijian/img8.png",name18:"电饭煲",img18:"img/sort/rementuijian/img9.jpg",name19:"空调扇",img19:"img/sort/rementuijian/img12.png",name20:"防晒",img20:"img/sort/rementuijian/img15.jpg",name21:"电视",img21:"img/sort/rementuijian/img18.png"},
            {bannerimg:"img/sort/shoujishuma/banner-img1.jpg",name1:"小米",img1:"img/sort/shoujishuma/img1.png",link:"",name2:"华为",img2:"img/sort/shoujishuma/img2.jpg",link:"",name3:"荣耀",img3:"img/sort/shoujishuma/img3.jpg",link:"",name4:"iPhone",img4:"img/sort/shoujishuma/img4.jpg",link:"",name8:"vivo",img8:"img/sort/shoujishuma/img5.png",link:"",name9:"OPPO",img9:"img/sort/shoujishuma/img6.png",link:"",name10:"魅族",img10:"img/sort/shoujishuma/img7.jpg",link:"",name11:"三星",img11:"img/sort/shoujishuma/img8.png",name15:"一加",img15:"img/sort/shoujishuma/img9.jpg",name16:"360手机",img16:"img/sort/shoujishuma/img10.jpg",name17:"锤子手机",img17:"img/sort/shoujishuma/img11.jpg",name18:"努比亚",img18:"img/sort/shoujishuma/img12.jpg"},
            {bannerimg:"img/sort/jiayongdianqi/banner-img1.dpg",name1:"电水壶",img1:"img/sort/jiayongdianqi/img1.jpg",link:"",name2:"电压力锅",img2:"img/sort/jiayongdianqi/img2.jpg",link:"",name3:"电饭煲",img3:"img/sort/jiayongdianqi/img3.jpg",link:"",name4:"电磁炉",img4:"img/sort/jiayongdianqi/img4.jpg",link:"",name8:"微波炉",img8:"img/sort/jiayongdianqi/img5.jpg",name9:"电饼铛",img9:"img/sort/jiayongdianqi/img6.jpg",link:"",name10:"豆浆机",img10:"img/sort/jiayongdianqi/img7.jpg",link:"",name11:"多用途锅",img11:"img/sort/jiayongdianqi/img8.jpg",name15:"料理机",img15:"img/sort/jiayongdianqi/img9.jpg",name16:"电烤箱",img16:"img/sort/jiayongdianqi/img10.jpg",name17:"养生壶",img17:"img/sort/jiayongdianqi/img11.jpg",name18:"电炖锅",img18:"img/sort/jiayongdianqi/img12.jpg"},
            {bannerimg:"img/sort/diannaobangong/banner-img1.jpg",name1:"轻薄本",img1:"img/sort/diannaobangong/img1.png",link:"",name2:"游戏本",img2:"img/sort/diannaobangong/img2.png",link:"",name3:"机械键盘",img3:"img/sort/diannaobangong/img3.jpg",link:"",name4:"组装电脑",img4:"img/sort/diannaobangong/img4.jpg",link:"",name8:"移动硬盘",img8:"img/sort/diannaobangong/img5.jpg",name9:"显卡",img9:"img/sort/diannaobangong/img6.jpg",link:"",name10:"台式机",img10:"img/sort/diannaobangong/img7.jpg",link:"",name11:"打印机",img11:"img/sort/diannaobangong/img8.jpg",name15:"吃鸡装备",img15:"img/sort/diannaobangong/img9.jpg",name16:"显示器",img16:"img/sort/diannaobangong/img10.jpg",name17:"投影机",img17:"img/sort/diannaobangong/img11.jpg",name18:"日本文具",img18:"img/sort/diannaobangong/img12.jpg"},
            {bannerimg:"img/sort/jishengqingqu/banner-img1.dpg",name1:"杜蕾斯",img1:"img/sort/jishengqingqu/img1.jpg",link:"",name2:"倍力乐",img2:"img/sort/jishengqingqu/img2.jpg",link:"",name3:"冈本",img3:"img/sort/jishengqingqu/img3.jpg",link:"",name4:"第六感",img4:"img/sort/jishengqingqu/img4.jpg",link:"",name8:"大象",img8:"img/sort/jishengqingqu/img5.jpg",name9:"SUEKISS",img9:"img/sort/jishengqingqu/img6.jpg",link:"",name10:"对子哈特",img10:"img/sort/jishengqingqu/img7.jpg",link:"",name11:"杰士邦",img11:"img/sort/jishengqingqu/img8.jpg",name15:"谜姬",img15:"img/sort/jishengqingqu/img9.jpg",name16:"雷霆",img16:"img/sort/jishengqingqu/img10.jpg",name17:"取悦",img17:"img/sort/jishengqingqu/img11.jpg",name18:"诺兰",img18:"img/sort/jishengqingqu/img12.jpg"},
            {bannerimg:"img/sort/meizhuanghufu/banner-img1.jpg",name1:"美白",img1:"img/sort/meizhuanghufu/img1.jpg",link:"",name2:"防晒",img2:"img/sort/meizhuanghufu/img2.jpg",link:"",name3:"控油",img3:"img/sort/meizhuanghufu/img3.jpg",link:"",name4:"同款面膜",img4:"img/sort/meizhuanghufu/img4.jpg",link:"",name8:"显摆口红",img8:"img/sort/meizhuanghufu/img5.jpg",name9:"小美盒",img9:"img/sort/meizhuanghufu/img6.jpg",link:"",name10:"新品速递",img10:"img/sort/meizhuanghufu/img7.jpg",link:"",name11:"精选礼盒",img11:"img/sort/meizhuanghufu/img8.jpg",name15:"潮流风向",img15:"img/sort/meizhuanghufu/img9.jpg",name16:"护肤礼盒",img16:"img/sort/meizhuanghufu/img10.jpg",name17:"深层清洁",img17:"img/sort/meizhuanghufu/img11.jpg",name18:"敏感肌",img18:"img/sort/meizhuanghufu/img12.jpg"},
            {bannerimg:"img/sort/gehuqingjie/banner-img1.dpg",name1:"个护馆",img1:"img/sort/gehuqingjie/img1.jpg",link:"",name2:"清洁馆",img2:"img/sort/gehuqingjie/img2.jpg",link:"",name3:"进口清洁",img3:"img/sort/gehuqingjie/img3.jpg",link:"",name4:"卫生棉条",img4:"img/sort/gehuqingjie/img4.jpg",link:"",name8:"湿厕纸",img8:"img/sort/gehuqingjie/img5.jpg",name9:"止汗露",img9:"img/sort/gehuqingjie/img6.jpg",link:"",name10:"花露水",img10:"img/sort/gehuqingjie/img7.jpg",link:"",name11:"驱蚊用品",img11:"img/sort/gehuqingjie/img8.jpg",name15:"本色纸",img15:"img/sort/gehuqingjie/img9.jpg",name16:"馥绿德雅",img16:"img/sort/gehuqingjie/img10.jpg",name17:"3M",img17:"img/sort/gehuqingjie/img11.jpg",name18:"吕",img18:"img/sort/gehuqingjie/img12.jpg"},
            {bannerimg:"img/sort/qicheyongpin/banner-img1.dpg",name1:"机油",img1:"img/sort/qicheyongpin/img1.jpg",link:"",name2:"汽车坐垫",img2:"img/sort/qicheyongpin/img2.jpg",link:"",name3:"汽车水枪",img3:"img/sort/qicheyongpin/img3.jpg",link:"",name4:"行车记录仪",img4:"img/sort/qicheyongpin/img4.jpg",link:"",name8:"轮胎",img8:"img/sort/qicheyongpin/img5.jpg",name9:"应急救援",img9:"img/sort/qicheyongpin/img6.png",link:"",name10:"香水",img10:"img/sort/qicheyongpin/img7.jpg",link:"",name11:"功能小件",img11:"img/sort/qicheyongpin/img8.jpg",name15:"挂件",img15:"img/sort/qicheyongpin/img9.jpg",name16:"车贴",img16:"img/sort/qicheyongpin/img10.jpg",name17:"车钥匙扣",img17:"img/sort/qicheyongpin/img11.jpg",name18:"车衣",img18:"img/sort/qicheyongpin/img12.jpg"},
        ]
    }
})

//左右滚动条
var height= document.documentElement.clientHeight || document.body.clientHeight;
var xs3=document.querySelector(".sort .main .row .col-xs-3");
var xs9=document.querySelector(".sort .main .row .col-xs-9");
if(xs3 !=null&&xs9 != null){
    xs3.style.height=height-50+"px";
    xs9.style.height=height-50+"px";
}



//选项卡
var mainnav=document.querySelector(".main-nav");
var list=document.querySelectorAll(".main-nav li");
var Ylist=document.querySelectorAll(".main .col-xs-9>div");
if(Ylist[0] != null){
    for(var m=0;m<Ylist.length;m++){
        Ylist[m].style.display="none";
    }
    Ylist[0].style.display="block";
    for(var l=0;l<list.length;l++){
        list[l].index=l;
        list[l].onclick=function(){
            for(var y=0;y<Ylist.length;y++){
                list[y].setAttribute("class","");
                //list[y].classList.remove("")
                //去除类名的另一种写法
                Ylist[y].style.display="none";
            }
            list[this.index].setAttribute("class","active");
            Ylist[this.index].style.display="block";
            $(".main .row .col-xs-3").animate({scrollTop:40*this.index},500);
            //list[y].classList.add("")
            //xiugai类名的另一种写法

        }
    }
}

