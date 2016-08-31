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
d[i].innerHTML = d[i].innerHTML.replace (/\:aboom:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/after_boom.png'/>") 

d[i].innerHTML = d[i].innerHTML.replace (/\:sexy:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/sexy_girl.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:adore:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/adore.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:ah:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/ah.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:amazed:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/amazed.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:angry:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/angry.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:badsmell:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/bad_smelly.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:baffle:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/baffle.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:brick:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/beat_brick.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:plaster:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/beat_plaster.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:shot:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/beat_shot.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:beauty:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/beauty.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:D/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/big_smile.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:boss:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/boss.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:stick:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/burn_joss_stick.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:byebye:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/byebye.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:canny:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/canny.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:choler:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/choler.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:confident:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/confident.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:-s/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/confuse.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:kool:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/cool.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:((/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/cry.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:doubt:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/doubt.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:dribble:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/dribble.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:">/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/embarrassed.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:sogood:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/feel_good.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:go:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/go.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:haha:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/haha.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:hell_boy:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/hell_boy.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:hungry:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/hungry.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:look_down:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/look_down.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:matrix:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/matrix.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:misdoubt:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/misdoubt.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:nosebleed:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/nosebleed.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:oh:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/oh.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:ops:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/ops.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:pudency:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/pudency.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:sad:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/sad.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:)/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/smile.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:spiderman:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/spiderman.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:dreaming:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/still_dreaming.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:sure:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/sure.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:surrender:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/surrender.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:sweat:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/sweat.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:tire:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/tire.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:sosad:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/too_sad.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:waaaht:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/waaaht.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:what:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/what.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:\v/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/pacman_emoticon.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:\3/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/curly_lips_emoticon.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:after_boom:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/after_boom.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:beat_brick:/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/beat_brick.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:\*/ig,"<img width="40px" height="40px" style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/sweet_kiss.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:\)\)/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/21.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace(/\w-\)/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/5.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:\-j/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/78.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace(/\;\)/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/3.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:\P/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/10.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:\(/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/2.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace(/\:\_\(/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/20.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace(/\:x/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/8.gif'/>")

d[i].innerHTML =d[i].innerHTML.replace(/\=\(\(/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/12.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace(/\:-O/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/13.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace(/\:\-\//ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/7.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace(/\:\-\*/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/11.gif' />")

d[i].innerHTML = d[i].innerHTML.replace(/\:\|/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/22.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace(/\:-T/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/104.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:]/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/100.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\X\(/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/102.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\o%/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/25.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/b-\(/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/66.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace(/\:\-L/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/62.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace(/\@\X/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/14.gif'/>")

d[i].innerHTML =d[i].innerHTML.replace(/\=\)\)/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/24.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:-\?/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/39.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:\-h/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/103.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\I-\)/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/28.gif'/>")
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
