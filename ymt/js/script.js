//返回顶部 // /固定nav
var totop=document.querySelector(".totop");
var headertop=document.querySelector("header");

//点击消失以及跳转事件
var advertbtn1 = document.querySelector(".advert-btn1");
var advertbtn2 = document.querySelector(".advert-btn2");
var advertbg = document.querySelector(".top-advert");
    if(sessionStorage.ad==1){
        advertbg.style.display="none";
        headertop.style.top="0px";
    }else{
        advertbg.style.display="block";
        headertop.style.top="auto";
    }
advertbtn1.addEventListener("click",function(){
    advertbg.style.display="none";
    headertop.style.top="0px";
    sessionStorage.advertbtn1=="false";
    sessionStorage.ad=1;
})
advertbtn2.addEventListener("click",function(){
    window.location.href="download.html";
    sessionStorage.ad=1;
})

advertbtn1.addEventListener("keyup",function(){
    localStorage.name=advertbtn1;
})
    advertbtn1=localStorage.name;
//点击消失以及跳转事件

//返回顶部 // /固定nav
totop.style.display="none";
totop.addEventListener("click",function(){
    var t = setInterval(function(){
        document.body.scrollTop= document.body.scrollTop-20;
        document.documentElement.scrollTop= document.documentElement.scrollTop-20;
         if(document.body.scrollTop === 0){
            clearInterval(t);
        }
    },10);
})
window.onscroll=function(){
    if(headertop != null){
        if(totop != null){
            if(document.body.scrollTop>120){
                headertop.style.top="0px";
                totop.style.display="inline-block";
            }else if(sessionStorage.ad==1){
                headertop.style.top="0px";
                totop.style.display="inline-block";
            }else{
                totop.style.display="none";
                headertop.style.top="auto";
            }
        }
    } 
}
//返回顶部 // /固定nav

//弹出款动画
var tc=document.querySelector(".tc");
var tcp=document.querySelector(".tc p");
if(tc!=null){
    if(sessionStorage.ll==1){
        tc.style.display="none";
    }else{
        tc.style.display="block";
    }

    tcp.addEventListener("click",function(){
        tc.style.display="none";
        sessionStorage.ll=1;
    })
//倒计时关闭动画
    var span1 = document.querySelector(".tc-span");
    var num = Number(span1.innerHTML);
    var ft = setInterval(function(){
        num--;
        span1.innerHTML=num;
        if(num===0){
            tc.style.display="none";
            clearInterval(ft);
        };
    },1000);
//倒计时关闭动画
}
//弹出款动画


//banner轮播图
var mySwiper = new Swiper ('.banner .swiper-container', {
    loop: true,
    autoplay: {
        disableOnInteraction: false,
        delay: 1000,
    },
    pagination: {
        el: '.swiper-pagination',
    }
})
//banner轮播图

//限时抢倒计时效果
var times = document.querySelectorAll(".time");
function FreshTime() {
    for(var t=0;t<times.length;t++){
        var endtime=new Date("2020/6/22,0:0:0");//结束时间
        var nowtime = new Date();//当前时间
        var time=parseInt((endtime.getTime()-nowtime.getTime())/1000);
        var d=parseInt(time/3600/24);
        var h=parseInt((time/3600)%24);
        var hh=checkTime(h);
        var m=parseInt((time/60)%60);
        var mm=checkTime(m);
        var s=parseInt(time%60);
        var ss=checkTime(s);
        times[t].innerHTML=hh+":"+mm+":"+ss;
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
//限时抢倒计时效果

//洋货集部分添加效果
new Vue({
    el:"#yhj-box",
    data:{
        lists:[
            {
                ulimg1:"img/yanghuoji/bigimg1.jpg",
                arrs:[
                    {liimg1:"img/yanghuoji/img1.jpg",lih31:"MK春夏新品小白鞋",price1:"¥529"},
                    {liimg1:"img/yanghuoji/img2.jpg",lih31:"OZLANA UGG时尚复古方头穆勒鞋", price1:"¥299"},
                    {liimg1:"img/yanghuoji/img3.jpg",lih31:"彪马Puma蕾哈娜金属头女款小白鞋",price1:"¥699"},
                    {liimg1:"img/yanghuoji/img4.jpg",lih31:"clarks其乐Couture Bloom蝴蝶结芭蕾舞鞋",price1:"¥399"},
                    {liimg1:"img/yanghuoji/img5.jpg",lih31:"OZLANA OZ3013 春款UGG 英伦复刻板鞋 赠单、毛",price1:"¥399"},
                    {liimg1:"img/yanghuoji/img6.jpg",lih31:"店主推荐OZLANA UGG园丁鸟清新女士小白鞋OZ30",price1:"¥198"},
                    {liimg1:"img/yanghuoji/img7.jpg",lih31:"春款上市 澳洲OZWEAR UGG女士内增高运动鞋 模",price1:"¥498"},
                    {liimg1:"img/yanghuoji/img8.jpg",lih31:"春款UGG Baby同款 Ozwear UGG 小白鞋厚底增高全",price1:"¥558"},
                    {liimg1:"img/yanghuoji/more.png",lih31:"更多商品"}
                ]
            },
            {
                ulimg1:"img/yanghuoji/bigimg2.jpg",
                arrs:[
                    {liimg1:"img/yanghuoji/img9.jpg",lih31:"店主推荐Cucci古驰 经典logo长款钱包 多卡槽大",price1:"¥2590"},
                    {liimg1:"img/yanghuoji/img10.jpg",lih31:"LV路易威登老花女士拉链款卡包，零钱包，钥匙包，一", price1:"¥1670"},
                    {liimg1:"img/yanghuoji/img11.jpg",lih31:"Louis Vuitton/LV女士圆弧形豆豆长款钱包~emilly",price1:"¥3290"},
                    {liimg1:"img/yanghuoji/img12.jpg",lih31:"LV路易威登PORIEFEUILLE CLEMENCE 女士钱包",price1:"¥3200"},
                    {liimg1:"img/yanghuoji/img13.jpg",lih31:"Gucci古驰 男士经典logo短款钱包钱夹 卡槽大钞夹俱",price1:"¥1650"},
                    {liimg1:"img/yanghuoji/img14.jpg",lih31:"lv 短豆豆钱包 VICTORINE",price1:"¥3490"},
                    {liimg1:"img/yanghuoji/img15.jpg",lih31:"IT范思哲 Versace 男士大手包钱包 超多卡位 数量不多",price1:"¥1298"},
                    {liimg1:"img/yanghuoji/img16.jpg",lih31:"Gucci新款短钱包10.5×9.5cm",price1:"¥1450"},
                    {liimg1:"img/yanghuoji/more.png",lih31:"更多商品"}
                ]
            },
            {
                ulimg1:"img/yanghuoji/bigimg3.jpg",
                arrs:[
                    {liimg1:"img/yanghuoji/img17.jpg",lih31:"第二件半价 Ks女士零钱包 Kate spade 狐狸零钱包 第",price1:"¥399"},
                    {liimg1:"img/yanghuoji/img18.jpg",lih31:"Tammy&Benjamin发过小众复古纯牛皮几何钱包 五", price1:"¥1299"},
                    {liimg1:"img/yanghuoji/img19.jpg",lih31:"CK 男 纯牛皮 真皮 钱包 第二件半价",price1:"¥279"},
                    {liimg1:"img/yanghuoji/img20.jpg",lih31:"kipling 手包/化妆包，防水尼龙材质，手绳款，第二件",price1:"¥139"},
                    {liimg1:"img/yanghuoji/img21.jpg",lih31:"ck双层全皮钱包 凯文克莱 简约款礼盒装第二件半价",price1:"¥180"},
                    {liimg1:"img/yanghuoji/img22.jpg",lih31:"coccinelle 正品迷你手提包/挎包牛皮女包，尺寸约20×",price1:"¥1299"},
                    {liimg1:"img/yanghuoji/img23.jpg",lih31:"Tory Burch/TB 真皮长款钱包，第二件半价",price1:"¥748"},
                    {liimg1:"img/yanghuoji/img24.jpg",lih31:"第二件半价Coach小碎花款 限量版薄款女士手拿包",price1:"¥199"},
                    {liimg1:"img/yanghuoji/more.png",lih31:"更多商品"}
                ]
            },
            {
                ulimg1:"img/yanghuoji/bigimg4.jpg",
                arrs:[
                    {liimg1:"img/yanghuoji/img25.jpg",lih31:"春季出游2017新色龙骧专柜LONGCHAMP女包饺子包",price1:"¥488"},
                    {liimg1:"img/yanghuoji/img26.jpg",lih31:"Moschino 莫斯奇诺 爱心双肩包书包 段欢半年总算来", price1:"¥1280"},
                    {liimg1:"img/yanghuoji/img27.jpg",lih31:"Rimowa日默瓦classic flight 拉杆箱旅行箱行李箱 20寸",price1:"¥6340"},
                    {liimg1:"img/yanghuoji/img28.jpg",lih31:"降价啦~GUCCI古驰男女都可用的长款钱包 压花 logo",price1:"¥2199"},
                    {liimg1:"img/yanghuoji/img29.jpg",lih31:"Prada 普拉达水波纹信封包后面拉链 多卡槽 多色",price1:"¥1950"},
                    {liimg1:"img/yanghuoji/img30.jpg",lih31:"Burberry 巴宝莉17专柜新款男士长款 钱夹",price1:"¥2666"},
                    {liimg1:"img/yanghuoji/img31.jpg",lih31:"IT特价限时抢 菲拉格慕 男士 黑色 钱包 纯皮（带盒子）",price1:"¥1399"},
                    {liimg1:"img/yanghuoji/img32.jpg",lih31:"Versace 范思哲 男士十字皮大手包 卡槽巨多",price1:"¥1450"},
                    {liimg1:"img/yanghuoji/more.png",lih31:"更多商品"}
                ]
            },
            {
                ulimg1:"img/yanghuoji/bigimg5.jpg",
                arrs:[
                    {liimg1:"img/yanghuoji/img33.jpg",lih31:"S0097 Ferragamo Varina菲拉格慕蝴蝶结漆皮平底鞋",price1:"¥2450"},
                    {liimg1:"img/yanghuoji/img34.jpg",lih31:"玖熙nine west绒面尖头绑带平底鞋 春季新品", price1:"¥329"},
                    {liimg1:"img/yanghuoji/img35.jpg",lih31:"反季特价 Ozlamb UGG夏日新款华伦天奴同款柳丁高",price1:"¥499"},
                    {liimg1:"img/yanghuoji/img36.jpg",lih31:"春款UGG OZLANA UGG时尚复古方头穆勒鞋 女款 乐",price1:"¥299"},
                    {liimg1:"img/yanghuoji/img37.jpg",lih31:"OZWEAR UGG 女款牛皮漆皮珍珠水晶鞋 3套鞋带GU",price1:"¥628"},
                    {liimg1:"img/yanghuoji/img38.jpg",lih31:"2017春款UGG EVER 11671 新版开口笑 小宋佳同款",price1:"¥299"},
                    {liimg1:"img/yanghuoji/img39.jpg",lih31:"nine west 女款单鞋 尖头大水晶装饰 春夏新品",price1:"¥229"},
                    {liimg1:"img/yanghuoji/img40.jpg",lih31:"其乐clarks 女士凉鞋，拖鞋",price1:"¥269"},
                    {liimg1:"img/yanghuoji/more.png",lih31:"更多商品"}
                ]
            },
            {
                ulimg1:"img/yanghuoji/bigimg6.jpg",
                arrs:[
                    {liimg1:"img/yanghuoji/img41.jpg",lih31:"泰勒斯威夫特最爱的Keds小白鞋 经典帆布鞋 两种鞋垫",price1:"¥299"},
                    {liimg1:"img/yanghuoji/img42.jpg",lih31:"阿迪金标贝壳头经典小白鞋百搭神器超人必备", price1:"¥549"},
                    {liimg1:"img/yanghuoji/img43.jpg",lih31:"Adidas/阿迪达斯三叶草stan smith女鞋 范冰冰代言花",price1:"¥489"},
                    {liimg1:"img/yanghuoji/img44.jpg",lih31:"阿迪全皮小白鞋adidas neo 黑杆美美哒 仅限一天",price1:"¥398"},
                    {liimg1:"img/yanghuoji/img45.jpg",lih31:"西班牙潮牌爆款小白鞋 板鞋 休闲鞋 运动鞋 明星百搭款",price1:"¥399"},
                    {liimg1:"img/yanghuoji/img46.jpg",lih31:"彪马Puma蕾哈娜松糕鞋 黑金白金增高金属头/女款金属",price1:"¥669"},
                    {liimg1:"img/yanghuoji/img47.jpg",lih31:"店主推荐OZLANA UGG园丁鸟清新女士小白鞋OZ30",price1:"¥198"},
                    {liimg1:"img/yanghuoji/img48.jpg",lih31:"澳洲设计师品牌KEENZIE蓝舌大眼睛厚底小白鞋板鞋K",price1:"¥498"},
                    {liimg1:"img/yanghuoji/more.png",lih31:"更多商品"}
                ]
            }

        ]
    }
})
//洋货集部分添加效果

//猜你喜欢部分添加效果
new Vue({
    el:"#cnxh-box",
    data:{
        ranks:[
            {cnxhimg1:"img/cainixihuan/img1.jpg",cnxhimg2:"img/cainixihuan/zhibo.png",cnxhimg3:"img/cainixihuan/hanguologo.png",cnxhh3:"范冰冰林允推荐VIVLAS唯兰颂茶秘水润面膜 蓝色深层保湿补水",cnxhspan1:"包邮包税",cnxhspan2:"买手促销",cnxhp1:"¥52.00",cnxhp2:"韩国"},
            {cnxhimg1:"img/cainixihuan/img2.jpg",cnxhimg2:"img/cainixihuan/zhibo.png",cnxhimg3:"img/cainixihuan/hanguologo.png",cnxhh3:"韩国爱敬Kerasys香水洗发水护发素套装持久留香女士香氛",cnxhspan1:"包邮包税",cnxhspan2:"",cnxhp1:"¥27.00",cnxhp2:"韩国"},
            {cnxhimg1:"img/cainixihuan/img3.jpg",cnxhimg2:"img/cainixihuan/tuangou.png",cnxhimg3:"img/cainixihuan/hanguologo.png",cnxhh3:"韩国amore paciffic爱茉莉护发精油 发油 卷发 免洗修复发质",cnxhspan1:"包邮包税",cnxhspan2:"买手促销",cnxhp1:"¥36.00",cnxhp2:"韩国"},
            {cnxhimg1:"img/cainixihuan/img4.jpg",cnxhimg2:"img/cainixihuan/tuangou.png",cnxhimg3:"img/cainixihuan/xiangganglogo.png",cnxhh3:"美国露华浓口红红黑管唇膏持久保湿滋润眼唇妆易上色",cnxhspan1:"包邮包税",cnxhspan2:"",cnxhp1:"¥38.00",cnxhp2:"香港"},
            {cnxhimg1:"img/cainixihuan/img5.jpg",cnxhimg2:"img/cainixihuan/tuangou.png",cnxhimg3:"img/cainixihuan/deguologo.png",cnxhh3:"德国essence植物彩妆 持久显色 滋润唇膏口红 孕妇可用",cnxhspan1:"包邮包税",cnxhspan2:"买手促销",cnxhp1:"¥49.00",cnxhp2:"德国"},
            {cnxhimg1:"img/cainixihuan/img6.jpg",cnxhimg2:"img/cainixihuan/zhibo.png",cnxhimg3:"img/cainixihuan/ribenlogo.png",cnxhh3:"日本龙角散润喉糖88g果味的是独立包装 原味是100G",cnxhspan1:"包邮包税",cnxhspan2:"买手促销",cnxhp1:"¥22.00",cnxhp2:"日本"},
            {cnxhimg1:"img/cainixihuan/img7.jpg",cnxhimg2:"",cnxhimg3:"img/cainixihuan/ribenlogo.png",cnxhh3:"日本松尾万圣节限定版巧克力~进口巧克力小礼盒夹心巧克力",cnxhspan1:"包邮包税",cnxhspan2:"",cnxhp1:"¥68.00",cnxhp2:"日本"},
            {cnxhimg1:"img/cainixihuan/img8.jpg",cnxhimg2:"img/cainixihuan/tuangou.png",cnxhimg3:"img/cainixihuan/hanguologo.png",cnxhh3:"A.by bom 超能婴儿冰凝叶叶子/桃花面膜清凉舒缓透白补水保湿",cnxhspan1:"包邮包税",cnxhspan2:"买手促销",cnxhp1:"¥57.00",cnxhp2:"韩国"},
            {cnxhimg1:"img/cainixihuan/img9.jpg",cnxhimg2:"img/cainixihuan/zhibo.png",cnxhimg3:"img/cainixihuan/hanguologo.png",cnxhh3:"韩国JMsolution水光蜂蜜面膜贴JM蜂胶水润滋养透莹",cnxhspan1:"包邮包税",cnxhspan2:"",cnxhp1:"¥88.00",cnxhp2:"韩国"},
            {cnxhimg1:"img/cainixihuan/img10.jpg",cnxhimg2:"",cnxhimg3:"img/cainixihuan/xiangganglogo.png",cnxhh3:"KUMANO 熊野马油无硅油 去屑止痒 防脱洗发水 护发素",cnxhspan1:"包邮包税",cnxhspan2:"买手促销",cnxhp1:"¥80.00",cnxhp2:"香港"},
            {cnxhimg1:"img/cainixihuan/img11.jpg",cnxhimg2:"",cnxhimg3:"img/cainixihuan/ribenlogo.png",cnxhh3:"Milbon玖丽盼前男友护理 范冰冰推荐9g*4支",cnxhspan1:"包税",cnxhspan2:"",cnxhp1:"¥39.00",cnxhp2:"日本"},
            {cnxhimg1:"img/cainixihuan/img12.jpg",cnxhimg2:"",cnxhimg3:"img/cainixihuan/deguologo.png",cnxhh3:"德国Catrice 变色唇膏/口红两色可选，自然粉嫩淡彩 植物可食",cnxhspan1:"包邮包税",cnxhspan2:"买手促销",cnxhp1:"¥72.00",cnxhp2:"德国"},
            {cnxhimg1:"img/cainixihuan/img13.jpg",cnxhimg2:"img/cainixihuan/tuangou.png",cnxhimg3:"img/cainixihuan/deguologo.png",cnxhh3:"德国原装KIKO口红新品4系丰盈滋养春考 持久保湿滋润9系",cnxhspan1:"包邮包税",cnxhspan2:"买手促销",cnxhp1:"¥49.00",cnxhp2:"德国"},
            {cnxhimg1:"img/cainixihuan/img14.jpg",cnxhimg2:"img/cainixihuan/zhibo.png",cnxhimg3:"img/cainixihuan/hanguologo.png",cnxhh3:"韩国ready-q笑脸解酒糖 醒酒糖 芒果味 软糖解酒护肝",cnxhspan1:"包邮包税",cnxhspan2:"",cnxhp1:"¥49.00",cnxhp2:"韩国"},
            {cnxhimg1:"img/cainixihuan/img15.jpg",cnxhimg2:"",cnxhimg3:"img/cainixihuan/hanguologo.png",cnxhh3:"Innisfree 悦诗风吟 火山泥清洁面膜 普通版/加强版 100ml",cnxhspan1:"包邮包税",cnxhspan2:"",cnxhp1:"¥72.00",cnxhp2:"韩国"},
            {cnxhimg1:"img/cainixihuan/img16.jpg",cnxhimg2:"img/cainixihuan/tuangou.png",cnxhimg3:"img/cainixihuan/hanguologo.png",cnxhh3:"春雨布丁面膜 papa recipepapa recipe 霜蜂蜜补水保湿睡眠面膜",cnxhspan1:"包邮包税",cnxhspan2:"买手促销",cnxhp1:"¥98.00",cnxhp2:"韩国"},
            {cnxhimg1:"img/cainixihuan/img17.jpg",cnxhimg2:"img/cainixihuan/tuangou.png",cnxhimg3:"img/cainixihuan/ribenlogo.png",cnxhh3:"泰国正品 annabella 安娜贝拉海藻面膜 清爽保湿补水",cnxhspan1:"包邮包税",cnxhspan2:"买手促销",cnxhp1:"¥34.50",cnxhp2:"日本"},
            {cnxhimg1:"img/cainixihuan/img18.jpg",cnxhimg2:"",cnxhimg3:"img/cainixihuan/ribenlogo.png",cnxhh3:"Milbon 玖丽盼前男友护理发膜 范冰冰推荐 改善干枯毛躁 9g",cnxhspan1:"包邮包税",cnxhspan2:"",cnxhp1:"¥75.00",cnxhp2:"日本"},
            {cnxhimg1:"img/cainixihuan/img19.jpg",cnxhimg2:"",cnxhimg3:"img/cainixihuan/hanguologo.png",cnxhh3:"韩国正官庄LLang红丽朗红参防脱发洗发水 250ML",cnxhspan1:"包邮包税",cnxhspan2:"",cnxhp1:"¥29.90",cnxhp2:"韩国"},
            {cnxhimg1:"img/cainixihuan/img20.jpg",cnxhimg2:"",cnxhimg3:"img/cainixihuan/hanguologo.png",cnxhh3:"MAC口红魅可口红唇膏子弹头正装3G持久滋润艳丽CB96人",cnxhspan1:"包邮包税",cnxhspan2:"",cnxhp1:"¥299.00",cnxhp2:"韩国"},
            {cnxhimg1:"img/cainixihuan/img21.jpg",cnxhimg2:"",cnxhimg3:"img/cainixihuan/taiguologo.png",cnxhh3:"本月特惠 mistine 大/小草莓变色口红润唇膏 滋润自然变色",cnxhspan1:"包邮包税",cnxhspan2:"买手促销",cnxhp1:"¥29.90",cnxhp2:"泰国"},
            {cnxhimg1:"img/cainixihuan/img22.jpg",cnxhimg2:"",cnxhimg3:"img/cainixihuan/hanguologo.png",cnxhh3:"JAYJUN樱花面膜 水光樱花焕白面膜贴 美白 保湿 补水",cnxhspan1:"包邮包税",cnxhspan2:"",cnxhp1:"¥45.00",cnxhp2:"韩国"}
        ]
    }
})
//猜你喜欢部分添加效果

//放回顶部
totop.addEventListener("click",function(){
    var t = setInterval(function(){
        document.body.scrollTop= document.body.scrollTop-20;
        document.documentElement.scrollTop= document.documentElement.scrollTop-20;
        if(document.body.scrollTop === 0){
            clearInterval(t);
        }
    },10);
})
//放回顶部

//分类部分添加效果
new Vue({
    el:"#find",
    data:{
        arrs1:[
            {img:"img/find/baobao/logoimg1.png",name:"路易·威登"},
            {img:"img/find/baobao/logoimg2.png",name:"香奈儿"},
            {img:"img/find/baobao/logoimg3.png",name:"普拉达"},
            {img:"img/find/baobao/logoimg4.png",name:"克洛伊"},
            {img:"img/find/baobao/logoimg7.png",name:"蔻驰"},
            {img:"img/find/baobao/logoimg8.png",name:"迈克·高仕"},
            {img:"img/find/baobao/img1.png",name:"Tote包"},
            {img:"img/find/baobao/img2.png",name:"邮差包"},
            {img:"img/find/baobao/img3.png",name:"手提包"},
            {img:"img/find/baobao/img4.png",name:"Mini包"},
            {img:"img/find/baobao/img5.jpg",name:"钱包卡包"},
            {img:"img/find/baobao/img6.jpg",name:"包中包"},
            {img:"img/find/baobao/img7.jpg",name:"背上班"},
            {img:"img/find/baobao/img8.png",name:"背款式"},
            {img:"img/find/baobao/img9.png",name:"背逼格"}
        ],
        arrs2:[
            {img:"img/find/xie/logoimg1.png",name:"菲拉格慕"},
            {img:"img/find/xie/logoimg2.png",name:"周仰杰"},
            {img:"img/find/xie/logoimg3.png",name:"玖熙"},
            {img:"img/find/xie/logoimg4.png",name:"科迪斯"},
            {img:"img/find/xie/logoimg5.png",name:"罗杰维维雅"},
            {img:"img/find/xie/logoimg6.png",name:"芬迪"},
            {img:"img/find/xie/img1.png",name:"高跟鞋"},
            {img:"img/find/xie/img2.png",name:"小白鞋"},
            {img:"img/find/xie/img3.png",name:"明星同款"},
            {img:"img/find/xie/img4.png",name:"雪地靴"},
            {img:"img/find/xie/img5.png",name:"过膝靴"},
            {img:"img/find/xie/img6.png",name:"更多"},
            {img:"img/find/xie/img7.png",name:"穿通靴"},
            {img:"img/find/xie/img8.jpg",name:"穿出街"},
            {img:"img/find/xie/img9.jpg",name:"穿显摆"}
        ],
        arrs3:[
            {img:"img/find/hufu/logoimg1.png",name:"SK-Ⅱ"},
            {img:"img/find/hufu/logoimg2.png",name:"肌肤之钥"},
            {img:"img/find/hufu/logoimg3.png",name:"黛珂"},
            {img:"img/find/hufu/logoimg5.png",name:"高丝"},
            {img:"img/find/hufu/logoimg7.png",name:"奥尔滨"},
            {img:"img/find/hufu/logoimg8.png",name:"嘉娜宝"},
            {img:"img/find/hufu/img1.png",name:"卸妆洁面"},
            {img:"img/find/hufu/img2.png",name:"化妆水"},
            {img:"img/find/hufu/img3.png",name:"精华液"},
            {img:"img/find/hufu/img4.png",name:"乳液"},
            {img:"img/find/hufu/img5.png",name:"面膜"},
            {img:"img/find/hufu/img6.png",name:"身体护理"},
            {img:"img/find/hufu/img7.png",name:"功能护肤"},
            {img:"img/find/hufu/img8.png",name:"套装组合"},
            {img:"img/find/hufu/img9.png",name:"更多周边"}
        ],
        arrs4:[
            {img:"img/find/meizhuang/logoimg9.png",name:"后"},
            {img:"img/find/meizhuang/logoimg10.png",name:"雪花秀"},
            {img:"img/find/meizhuang/logoimg13.png",name:"赫拉"},
            {img:"img/find/meizhuang/logoimg14.png",name:"兰芝"},
            {img:"img/find/meizhuang/logoimg15.png",name:"悦诗风吟"},
            {img:"img/find/meizhuang/logoimg16.png",name:"梦妆"},
            {img:"img/find/meizhuang/img1.png",name:"妆前乳"},
            {img:"img/find/meizhuang/img2.png",name:"底妆"},
            {img:"img/find/meizhuang/img3.png",name:"高光修容"},
            {img:"img/find/meizhuang/img4.png",name:"眉笔眉粉"},
            {img:"img/find/meizhuang/img5.png",name:"眼线眼影"},
            {img:"img/find/meizhuang/img6.png",name:"睫毛膏"},
            {img:"img/find/meizhuang/img7.png",name:"唇膏腮红"},
            {img:"img/find/meizhuang/img8.png",name:"套装"},
            {img:"img/find/meizhuang/img9.png",name:"更多周边"}
        ],
        arrs5:[
            {img:"img/find/shipinbaojian/img1.png",name:"维生素"},
            {img:"img/find/shipinbaojian/img2.png",name:"钙片"},
            {img:"img/find/shipinbaojian/img3.png",name:"胶原蛋白"},
            {img:"img/find/shipinbaojian/img4.png",name:"叶绿素"},
            {img:"img/find/shipinbaojian/img5.png",name:"黑糖"},
            {img:"img/find/shipinbaojian/img6.png",name:"蔓越莓"},
            {img:"img/find/shipinbaojian/img7.png",name:"葡萄籽"},
            {img:"img/find/shipinbaojian/img8.png",name:"乐康膏"},
            {img:"img/find/shipinbaojian/img9.jpg",name:"麦片"}
        ],
        arrs6:[
            {img:"img/find/jianfeishoushen/img1.png",name:"代餐"},
            {img:"img/find/jianfeishoushen/img2.png",name:"辅食"},
            {img:"img/find/jianfeishoushen/img3.png",name:"奇效丸"},
            {img:"img/find/jianfeishoushen/img4.png",name:"按摩膏"},
            {img:"img/find/jianfeishoushen/img5.png",name:"塑身装备"},
            {img:"img/find/jianfeishoushen/img6.png",name:"运动鞋"},
            {img:"img/find/jianfeishoushen/img7.png",name:"局部速瘦"},
            {img:"img/find/jianfeishoushen/img8.png",name:"运动配件"},
            {img:"img/find/jianfeishoushen/img9.png",name:"更多周边"}
        ],
        arrs7:[
            {img:"img/find/liaomeibibei/img1.png",name:"男士护肤"},
            {img:"img/find/liaomeibibei/img2.png",name:"男士香水"},
            {img:"img/find/liaomeibibei/img3.png",name:"男装"},
            {img:"img/find/liaomeibibei/img4.png",name:"男鞋"},
            {img:"img/find/liaomeibibei/img5.png",name:"男士包袋"},
            {img:"img/find/liaomeibibei/img6.png",name:"配件"},
            {img:"img/find/liaomeibibei/img7.png",name:"男表"},
            {img:"img/find/liaomeibibei/img8.png",name:"智能设备"},
            {img:"img/find/liaomeibibei/img9.png",name:"更多精品"}
        ],
        arrs8:[
            {img:"img/find/muyingertong/img1.png",name:"奶粉"},
            {img:"img/find/muyingertong/img2.png",name:"奶瓶水杯"},
            {img:"img/find/muyingertong/img3.png",name:"辅食营养品"},
            {img:"img/find/muyingertong/img4.png",name:"尿不湿"},
            {img:"img/find/muyingertong/img5.png",name:"儿童推车"},
            {img:"img/find/muyingertong/img6.png",name:"安全座椅"},
            {img:"img/find/muyingertong/img7.png",name:"润肤乳"},
            {img:"img/find/muyingertong/img8.png",name:"玩具"},
            {img:"img/find/muyingertong/img9.png",name:"更多周边"}
        ]
    }
})
//分类部分添加效果

//分类页选项卡
var findlis = document.querySelectorAll(".find ul li");
var findboxs = document.querySelectorAll(".find-box");
if(findboxs[0] !=null){
    for(var i=0;i<findboxs.length;i++){
        findboxs[i].style.display="none";
    }
    findboxs[0].style.display="block";
    for(var l=0;l<findlis.length;l++){
        findlis[l].ll=l;
        findlis[l].addEventListener("click",function(){
            for(var x=0;x<findboxs.length;x++){
                findlis[x].setAttribute("class","");
                findboxs[x].style.display="none";
            }
            findlis[this.ll].setAttribute("class","active");
            findboxs[this.ll].style.display="block";
        })
    }
}

//分类页选项卡

//热门主题
new Vue({
    el:"#rmzt-box",
    data:{
        list1:[
            {img:"img/find/remenzhuti/img1.jpg",name:"大创春姬化妆刷 透明柄圆斜平头粉底刷散粉刷",price:"￥29"},
            {img:"img/find/remenzhuti/img2.jpg",name:"泰国Mistine24小时不易脱妆粉底液 轻薄透气遮瑕防水防晒遮瑕液",price:"￥48"},
            {img:"img/find/remenzhuti/img3.jpg",name:"Innisfree悦诗风吟眉笔 双头持久防水防汗带眉刷",price:"￥29"}
        ],
        list2:[
            {img:"img/find/remenzhuti/img4.jpg",name:"Dior迪奥凝脂长效保湿粉底液30ml",price:"￥335"},
            {img:"img/find/remenzhuti/img5.jpg",name:"Dior迪奥凝脂恒久粉底液30ml",price:"￥339"},
            {img:"img/find/remenzhuti/img6.jpg",name:"发过Chanel香奈儿青春光彩保湿柔润粉饼",price:"￥29"}
        ],
        list3:[
            {img:"img/find/remenzhuti/img7.jpg",name:"2017春夏新品 VVC产品系列 防晒口罩 透气舒适美肤 男女同款",price:"￥29"},
            {img:"img/find/remenzhuti/img8.jpg",name:"VVC儿童冰袖 冰丝防晒袖套 卡通套袖男女童",price:"￥22"},
            {img:"img/find/remenzhuti/img9.jpg",name:"日本太阳帽HIKE HAT，遮阳帽，泼水加工防水防汗渔夫帽遮光率99%",price:"￥220"}
        ],
        list4:[
            {img:"img/find/remenzhuti/img10.jpg",name:"日本新版Biore碧柔防晒保湿水凝乳防嗮霜防紫外线抗氧50g",price:"￥58"},
            {img:"img/find/remenzhuti/img11.jpg",name:"Coppertone 水宝宝 经典水嫩防晒乳 SPF50 88ml",price:"￥88"},
            {img:"img/find/remenzhuti/img12.jpg",name:"NIVEA妮维雅防晒霜SPF50液啫喱凝露140g 。妮维雅防晒",price:"￥88"}
        ],
        list5:[
            {img:"img/find/remenzhuti/img13.jpg",name:"ARMANI阿玛尼唇釉，红管丝绒哑光唇釉唇膏唇蜜401,500,501圣诞406",price:"￥179"},
            {img:"img/find/remenzhuti/img14.jpg",name:"Armani阿玛尼液态唇釉口红/ 红管丝绒哑光/黑管漆光亮彩/小胖丁",price:"￥185"},
            {img:"img/find/remenzhuti/img15.jpg",name:"armani阿玛尼红管唇釉口红丝绒哑光400 401 500 黑管402",price:"￥218"}
        ]
    }
})
//热门主题

//登录页面

//点击变背景色
var ii=document.querySelector(".ii>p>i");
var sum = 0;
if(ii!=null){
    ii.addEventListener("click",function(){
        if (sum++%2 == 0) {
            ii.style.backgroundColor="#c33";
        }else{
            ii.style.backgroundColor="#fff";
        }
    })
}
//点击变背景色

//点击改变位置和颜色
var after = document.querySelector(".load-input .switch-btn .after");
var swbtn = document.querySelector(".load-input .switch-btn");
var m = 0;
if(after!=null){
    after.addEventListener("click",function(){
        if (m++%2 == 0) {
            after.style.left="0px";
            after.style.right="auto";
            swbtn.style.background="#c33";
            
        }else{
            after.style.right="0px";
            after.style.left="auto";
            swbtn.style.background="#dedede";
        }
    })
}
//点击改变位置和颜色

//登录页面
