// Emoticons for Blogger by Huynh Nhat Ha at www.huynh-nhat-ha.blogspot.com
function showsbtext(id,index) {
var bookmarktext=document.getElementById(id);
var sbValues= new Array();

document.getElementById(bookmarktext.id).innerHTML = sbValues[index];
}


document.getElementsByClassName = function(clsName){
    var retVal = new Array();
    var elements = document.getElementsByTagName("*");
    for(var i = 0;i < elements.length;i++){
        if(elements[i].className.indexOf(" ") >= 0){
            var classes = elements[i].className.split(" ");
            for(var j = 0;j < classes.length;j++){
                if(classes[j] == clsName)
                    retVal.push(elements[i]);
            }
        }
        else if(elements[i].className == clsName)
            retVal.push(elements[i]);
    }
    return retVal;
}

function addSmiley(dummy)
{
  var d = [], i=0, def = ['post-body','entry-content','entry','comment-body','author-comment-body','owner-body','widget-content'];

  for(i=0;i<def.length;i++)
  {
	var content = document.getElementsByClassName(def[i]);
	for(var j=0;j<content.length;j++)
		d.push(content[j]);
  }

  for(i=0;i<arguments.length;i++)
  {
	var content = document.getElementsByClassName(arguments[i]);
	for(var m=0;m<content.length;m++)
		d.push(content[m]);
  }

  for(var i=0;i<d.length;i++)
  {

d[i].innerHTML = d[i].innerHTML.replace (/\:adore:/ig,"<img style='border: 0; padding:0' src='http://1.bp.blogspot.com/-NIOuo6tmcQ0/U_W1QhzHCHI/AAAAAAAAACw/_OEfw8iPX20/s1600/adore.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:v/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-ZKN5z_1oUpY/V7bFNZ6T97I/AAAAAAAADo8/96pC091NKpELIGJFXcBKSBzVIoTmJ9z0wCLcB/s1600/pacman%2Bemoticon.png'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:3/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-iMz25CyThMg/V7bFNZar79I/AAAAAAAADpA/a0BCJbg1v3kwhk2WlrVN-2tZzm6Vt_SLACLcB/s1600/curly%2Blips%2Bemoticon.png'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:after_boom:/ig,"<img style='border: 0; padding:0' src='http://3.bp.blogspot.com/--ZPqFuFLKL0/U_W1X3QvUCI/AAAAAAAAAEE/ci7GVP5_BIw/s1600/after_boom.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:ah:/ig,"<img style='border: 0; padding:0' src='http://3.bp.blogspot.com/-2VCO06N0Ljg/U_W1QVFD0mI/AAAAAAAAACs/kNA0TcI8lCY/s1600/ah.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:amazed:/ig,"<img style='border: 0; padding:0' src='http://3.bp.blogspot.com/-u3RCiZE8nfM/U_W1RVYRXzI/AAAAAAAAAC4/xt4bgvjBIMw/s1600/amazed.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:angry:/ig,"<img style='border: 0; padding:0' src='http://3.bp.blogspot.com/-fe0HrT7vibo/U_W1RhHJAJI/AAAAAAAAAC8/uIsvlWpByZE/s1600/angry.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:baffle:/ig,"<img style='border: 0; padding:0' src='http://2.bp.blogspot.com/-rRsex2HCu7k/U_W1SelkcXI/AAAAAAAAADE/4aUVgyQvr80/s1600/baffle.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:beat_brick:/ig,"<img style='border: 0; padding:0' src='http://1.bp.blogspot.com/-BlT_JMqKXOw/U_W1StpqGhI/AAAAAAAAADI/rqJ4wEgvU2M/s1600/beat_brick.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:beat_plaster:/ig,"<img style='border: 0; padding:0' src='http://3.bp.blogspot.com/-CuMNgETTaW4/U_W1TFHP3fI/AAAAAAAAADY/FJ39vJf5o24/s1600/beat_plaster.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:beat_shot:/ig,"<img style='border: 0; padding:0' src='http://1.bp.blogspot.com/-uq-ny0vk4n0/U_W1Ts33SjI/AAAAAAAAADU/Z2e4eHUPnfI/s1600/beat_shot.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:beauty:/ig,"<img style='border: 0; padding:0' src='http://4.bp.blogspot.com/-NTecxiXGtdc/U_W1USOtBoI/AAAAAAAAADo/8bjNTL1W39U/s1600/beauty.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:big_smile:/ig,"<img style='border: 0; padding:0' src='http://3.bp.blogspot.com/-eximqeHL5VU/U_W1U3W1GlI/AAAAAAAAADk/JEYv9y_TvIE/s1600/big_smile%2B(1).gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:boss:/ig,"<img style='border: 0; padding:0' src='http://4.bp.blogspot.com/-nz9A0kn5UI4/U_W1WQlZL0I/AAAAAAAAAD0/oahmcdvhD_A/s1600/boss.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:brick:/ig,"<img style='border: 0; padding:0' src='http://2.bp.blogspot.com/-mmHcRJikHGo/U_W1W-utI6I/AAAAAAAAAD8/tyskfgp42L8/s1600/brick.png'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:burn_joss_stick:/ig,"<img style='border: 0; padding:0' src='http://3.bp.blogspot.com/-SAOFyLjlDJk/U_W1XUrkbcI/AAAAAAAAAEA/S_5YEswPpkM/s1600/burn_joss_stick.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:byebye:/ig,"<img style='border: 0; padding:0' src='http://3.bp.blogspot.com/-hRpE3ZVAnx8/U_W1feWvEGI/AAAAAAAAAFw/GWbrY5xBpWw/s1600/byebye.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:canny:/ig,"<img style='border: 0; padding:0' src='http://4.bp.blogspot.com/-FJc0207EVA4/U_W1YRobikI/AAAAAAAAAEM/pd1ibgIJ76E/s1600/canny.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:choler:/ig,"<img style='border: 0; padding:0' src='http://1.bp.blogspot.com/-G6NdQwIexeo/U_W1Y4YNXhI/AAAAAAAAAEQ/AHQFw--2Ago/s1600/choler.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:confident:/ig,"<img style='border: 0; padding:0' src='http://3.bp.blogspot.com/-qdRsAnWDyko/U_W1ZlHTrII/AAAAAAAAAEk/Fuc_bLgOYw4/s1600/confident.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:confuse:/ig,"<img style='border: 0; padding:0' src='http://2.bp.blogspot.com/-3-9IddRVMjY/U_W1Z3fYS5I/AAAAAAAAAEc/C7t9NGaG-cs/s1600/confuse.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:cool:/ig,"<img style='border: 0; padding:0' src='http://4.bp.blogspot.com/-ls5aV2sq9Kw/U_W1aktW9ZI/AAAAAAAAAEo/7vfVlFHVfxA/s1600/cool.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:cry:/ig,"<img style='border: 0; padding:0' src='http://2.bp.blogspot.com/-0WT7RcoY9iE/U_W1bBS5kjI/AAAAAAAAAEw/HwvmbAJfNMY/s1600/cry.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:dribble:/ig,"<img style='border: 0; padding:0' src='http://1.bp.blogspot.com/-LX3hwFIKDJ0/U_W1b3563hI/AAAAAAAAAE4/cjDtAQuplhY/s1600/dribble.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:embarrassed:/ig,"<img style='border: 0; padding:0' src='http://2.bp.blogspot.com/-3x-gb5cChRU/U_W1cQnGvRI/AAAAAAAAAE8/wBiwcy-gri8/s1600/embarrassed.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:feel_good:/ig,"<img style='border: 0; padding:0' src='http://4.bp.blogspot.com/-8_De7-l_Ak4/U_W1c4SicwI/AAAAAAAAAFM/Fa9dzMcJpXc/s1600/feel_good.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:go:/ig,"<img style='border: 0; padding:0' src='http://1.bp.blogspot.com/-fhECNM2Mx_M/U_W1dcQHHQI/AAAAAAAAAFI/ZlML21De9-c/s1600/go.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:haha:/ig,"<img style='border: 0; padding:0' src='http://4.bp.blogspot.com/-yAb5cyyCNhA/U_W1eZ_531I/AAAAAAAAAFQ/dtIfJ91e1YM/s1600/haha.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:hell_boy:/ig,"<img style='border: 0; padding:0' src='http://3.bp.blogspot.com/-JMoA3LSjvGg/U_W1fGdN2oI/AAAAAAAAAFY/w61WLr3Z_Ms/s1600/hell_boy.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:hungry:/ig,"<img style='border: 0; padding:0' src='http://4.bp.blogspot.com/-OQsmd8k1eiM/U_W1fZ2W3TI/AAAAAAAAAFc/yY7oO5OfK2M/s1600/hungry.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:look_down:/ig,"<img style='border: 0; padding:0' src='http://3.bp.blogspot.com/-o36R8InPwnI/U_W1gLyoUvI/AAAAAAAAAFo/qWreM4zEp8Y/s1600/look_down.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:misdoubt:/ig,"<img style='border: 0; padding:0' src='http://2.bp.blogspot.com/-A4WqT-xXXK4/U_W1gvbRKNI/AAAAAAAAAFs/2kGDi2MQ060/s1600/misdoubt.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:nosebleed:/ig,"<img style='border: 0; padding:0' src='http://3.bp.blogspot.com/-V0JRHOdWs4M/U_W1o9B_OzI/AAAAAAAAAHU/WCFtBhYK2MM/s1600/nosebleed.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:oh:/ig,"<img style='border: 0; padding:0' src='http://4.bp.blogspot.com/-nt7mg0oLaUw/U_W1hxWN7nI/AAAAAAAAAF0/4sG25e5zjH8/s1600/oh.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:ops:/ig,"<img style='border: 0; padding:0' src='http://4.bp.blogspot.com/-Fw8KYHNWEUc/U_W1iULXk8I/AAAAAAAAAF8/krGcxCIynfE/s1600/ops.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:pudency:/ig,"<img style='border: 0; padding:0' src='http://4.bp.blogspot.com/-0PteGqdxPzw/U_W1iyyFT9I/AAAAAAAAAGA/giO7xx7w-Mk/s1600/pudency.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:rap:/ig,"<img style='border: 0; padding:0' src='http://2.bp.blogspot.com/-lMdmvcr_VPo/U_W1ja6QCmI/AAAAAAAAAGI/MTkoOVh6hyQ/s1600/rap.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:sad:/ig,"<img style='border: 0; padding:0' src='http://2.bp.blogspot.com/-gP6ziM2Q0BI/U_W1j72m50I/AAAAAAAAAGM/nm1_BfLWLSw/s1600/sad.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:sexy_girl:/ig,"<img style='border: 0; padding:0' src='http://2.bp.blogspot.com/-XGluPYtMvK8/U_W1knnF4iI/AAAAAAAAAGQ/mue01hNCIXA/s1600/sexy_girl.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:shame:/ig,"<img style='border: 0; padding:0' src='http://3.bp.blogspot.com/-sQOlKDfhGDI/U_W1k2svDrI/AAAAAAAAAGc/4M11uMmbDwQ/s1600/shame.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:smile:/ig,"<img style='border: 0; padding:0' src='http://2.bp.blogspot.com/-RcsDnZ9Fcis/U_W1lbVTPVI/AAAAAAAAAGg/-V0g-PT-Ef0/s1600/smile.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:spiderman:/ig,"<img style='border: 0; padding:0' src='http://1.bp.blogspot.com/-2KdzwfuNV6s/U_W1mVqg4EI/AAAAAAAAAGo/6uYjIpBhAmc/s1600/spiderman.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:still_dreaming:/ig,"<img style='border: 0; padding:0' src='http://1.bp.blogspot.com/-q2p7IHddB8o/U_W1mk8m1xI/AAAAAAAAAGs/0JgHcP9fhvo/s1600/still_dreaming.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:sure:/ig,"<img style='border: 0; padding:0' src='http://3.bp.blogspot.com/-mMB59DcsziA/U_W1nQcEaiI/AAAAAAAAAG0/vrSICXqdSrk/s1600/sure.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:surrender:/ig,"<img style='border: 0; padding:0' src='http://4.bp.blogspot.com/-9xUmx_1LFi0/U_W1nm_UFtI/AAAAAAAAAG4/et3YClpdHO8/s1600/surrender.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:sweat:/ig,"<img style='border: 0; padding:0' src='http://1.bp.blogspot.com/-HyxLyiUxqKA/U_W1ocQ1ZEI/AAAAAAAAAHA/yBVQXns3iUQ/s1600/sweat.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:sweet_kiss:/ig,"<img style='border: 0; padding:0' src='http://2.bp.blogspot.com/-SiJtFCewpKo/U_W1pEmHivI/AAAAAAAAAHQ/Fe6bK4Jsut0/s1600/sweet_kiss.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:too_sad:/ig,"<img style='border: 0; padding:0' src='http://2.bp.blogspot.com/-cabdk-Ql8Yo/U_W1qj3TVvI/AAAAAAAAAHw/gXT73CJ1UW4/s1600/too_sad.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:tire:/ig,"<img style='border: 0; padding:0' src='http://1.bp.blogspot.com/-WnaJs9VeYxU/U_W1pZu_LiI/AAAAAAAAAHM/vT3_jqxa1wA/s1600/tire.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:what:/ig,"<img style='border: 0; padding:0' src='http://4.bp.blogspot.com/-Wa7VfC3g-Bs/U_W1rT8p4rI/AAAAAAAAAHg/K6LLt_oorAs/s1600/what.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:waaaht:/ig,"<img style='border: 0; padding:0' src='http://1.bp.blogspot.com/--d98oADiV50/U_W1q2NXrnI/AAAAAAAAAHk/44c-CkNRk4Q/s1600/waaaht.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\)\)/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/21.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\w-\)/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/5.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\-j/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/78.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\:D/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/4.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\;\)/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\P/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\(/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\:\_\(/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/20.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\)/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/1.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\:x/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/8.gif'/>")
d[i].innerHTML =d[i].innerHTML.replace(/\=\(\(/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/12.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\:-O/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/13.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\:\-\//ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/7.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\:\-\*/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/11.gif' />")
d[i].innerHTML = d[i].innerHTML.replace(/\:\|/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/22.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\:-T/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/104.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:]/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/100.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\X\(/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/102.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\o%/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/25.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/b-\(/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/66.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\:\-L/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/62.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\@\X/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/14.gif'/>")
 d[i].innerHTML =d[i].innerHTML.replace(/\=\)\)/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/24.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:-\?/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/39.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\-h/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/103.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\I-\)/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/28.gif'/>")
    }
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(function(){
	addSmiley();
});
