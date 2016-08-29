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
d[i].innerHTML = d[i].innerHTML.replace (/\:adore:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/adore.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:aboom:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/after_boom.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:ah:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/ah.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:amazed:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/amazed.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:angry:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/angry.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:badsmell:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/bad_smelly.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:baffle:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/baffle.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:band:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/band.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:bang:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/bang.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:ban:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/bann.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:brick:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/beat_brick.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:plaster:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/beat_plaster.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:shot:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/beat_shot.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:beauty:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/beauty.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:D/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/big_smile.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:bike:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/bike.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:Birthday:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/Birthday.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:boom:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/boom.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:boss:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/boss.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:gach:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/brick.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:stick:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/burn_joss_stick.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:bye:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/bye.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:byebye:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/byebye.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:canny:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/canny.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:capture:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/capture.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:cheers:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/cheers.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:choler:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/choler.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:confident:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/confident.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:-s/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/confuse.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:kool:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/cool.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:((/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/cry.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:doublegun:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/doublegun.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:doubt:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/doubt.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:dribble:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/dribble.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:">/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/embarrassed.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:sogood:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/feel_good.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:fix:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/fix.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:flame:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/flame.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:go:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/go.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:haha:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/haha.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:hang:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/hang.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:hehe:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/hehe.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:hell_boy:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/hell_boy.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:hug:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/hug.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:hungry:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/hungry.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\^:)^/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/lay.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:lmao:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/lmao.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:lol:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/lol.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:look_down:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/look_down.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:lovemachine:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/lovemachine.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:loveyou:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/loveyou.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:mage:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/mage.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:matrix:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/matrix.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:misdoubt:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/misdoubt.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:no:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/no.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:nosebleed:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/nosebleed.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:oh:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/oh.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:ops:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/ops.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:ot:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/ot.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:phone:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/phone.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:please:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/please.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:pudency:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/pudency.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:puke:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/puke.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:rap:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/rap.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:rofl:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/rofl.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:runrun:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/runrun.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:sad:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/sad.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:sexy:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/sexy_girl.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:shame:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/shame.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:shit:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/shit.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:shoot1:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/shoot1.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\-_-/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/sleep.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:)/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/smile.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:smoke:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/smoke.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:sos:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/sos.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:spam:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/spam.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:spiderman:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/spiderman.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:dreaming:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/still_dreaming.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:stupid:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/stupid.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:sure:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/sure.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:surrender:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/surrender.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:sweat:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/sweat.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:theft:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/theft.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:tire:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/tire.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:sosad:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/too_sad.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:waaaht:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/waaaht.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:welcome:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/welcome.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:what:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/what.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:winner:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/winner.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:yes:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/yes.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:\v/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/pacman%2Bemoticon.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:\3/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/curly%2Blips%2Bemoticon.png'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:after_boom:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/after_boom.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:beat_brick:/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/beat_brick.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:\*/ig,"<img style='border: 0; padding:0' src='https://key24h.com/public/images/smilies/Off/sweet_kiss.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:\)\)/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/21.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace(/\w-\)/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/5.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:\-j/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/78.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace(/\;\)/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:\P/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace (/\:\(/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif'/>")

d[i].innerHTML = d[i].innerHTML.replace(/\:\_\(/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/20.gif'/>")

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
