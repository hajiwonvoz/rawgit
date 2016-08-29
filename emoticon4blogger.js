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
d[i].innerHTML = d[i].innerHTML.replace (/\:adore:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-gaP-Kj93dkU/V71VcaODO_I/AAAAAAAADqQ/89nr3LO8TuAoa1oM97O-SmcuBejhgf0TwCLcB/s1600/adore.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:aboom:/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-9OXI_INf41E/V71VcUFYCII/AAAAAAAADqU/tdkjo3G-1M4o4ipbwRau6bjypMmPsBIxACLcB/s1600/after_boom.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:ah:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-o_4oA7oK238/V71Vc2ZwIUI/AAAAAAAADqc/1-G4c1WQnGAS3n5wN4uxtNcOdJeKiRqoACLcB/s1600/ah.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:amazed:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-042-GDfFkPo/V71Vc8DB58I/AAAAAAAADqg/RHdeCqYweAkzwpLjkg1AbBCKjqygnuC6gCLcB/s1600/amazed.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:angry:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-sr7gO_oog7A/V71VcyztwWI/AAAAAAAADqk/lYTNBt1D5pwxymYXBnVPzJceUhvC2VQugCLcB/s1600/angry.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:badsmell:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-1sjy2JMUbfA/V71VdPm_QHI/AAAAAAAADqo/WpVfXlM-oPAJPQgPNCs3spYKV1WFodBmwCLcB/s1600/bad_smelly.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:baffle:/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-GxZMYIlFJHQ/V71VdTwcwJI/AAAAAAAADqs/zkVHOXhkvGEvhpV2eHoUlEIp0Tzsc_6tQCLcB/s1600/baffle.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:band:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-VmNOlOuaboo/V71VdmXTxyI/AAAAAAAADqw/PqPZ2xhvZxsk4qrJ9UyVtmDwAXSrDP4IQCLcB/s1600/band.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:bang:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-286jjUneI-Y/V71Vdl3a9DI/AAAAAAAADq0/r_fteK1PIaw1dMC7IeAWA3jRqinnt4ZDgCLcB/s1600/bang.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:ban:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-FPEGdhtuETE/V71VdwSFleI/AAAAAAAADq4/dvxJXoHjbxglhIhZWWyXx0-m4Pq7av23ACLcB/s1600/bann.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:brick:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-dbV4zND3CgI/V71VeDaO0gI/AAAAAAAADq8/SlEp5gO5NMogTye56gE3coLyjok86LknACLcB/s1600/beat_brick.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:plaster:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-IFA_8V2tFAY/V71VeMjQphI/AAAAAAAADrA/P7QPNJ1YZyMWji-tMBSdqDU2r0DfMgeOgCLcB/s1600/beat_plaster.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:shot:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-xJiH4VKeH0g/V71VeBC_BcI/AAAAAAAADrE/xFOmI_7USg8H9XHYailEarcnFZKhNK8WQCLcB/s1600/beat_shot.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:beauty:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-B6kb8jCrB6g/V71VeYZ7n5I/AAAAAAAADrI/dNPv35aM9NAVs3Pd7tHtUgfx2FTljqm-ACLcB/s1600/beauty.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:D/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-dE9WrL1IIbI/V71VehU4xOI/AAAAAAAADrM/qXC-JJtbwR401O7NF9AhykoYF8YZCtAwQCLcB/s1600/big_smile.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:bike:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-8G4PQXw5UoQ/V71VeitOnbI/AAAAAAAADrQ/c_PaIE38w7kG3eE8Xn2XExKKSh5x62r_wCLcB/s1600/bike.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:Birthday:/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-O7hCN_YZR74/V71VcdrXjSI/AAAAAAAADqY/1BkN-dlPiU4NaUoE_DYGB0Ee_A59toyTwCLcB/s1600/Birthday.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:boom:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-mSzHNYUbilg/V71Ve6nIjqI/AAAAAAAADrU/_zx125XseSQLP2oc964g7tV89OCkmrhdgCLcB/s1600/boom.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:boss:/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-jG_JnAgmMgc/V71VfJlkKuI/AAAAAAAADrY/Y7_uA48MMrIfXUQGimvEavKSlGwYr0QsQCLcB/s1600/boss.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:gach:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-z6tX-6HLEsk/V71VfaWrrdI/AAAAAAAADrc/tIInxh1Kdrk2CQ5st_8GJYrxCQKIhVtywCLcB/s1600/brick.png'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:stick:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-_JAXpgSxaEo/V71VfZymZpI/AAAAAAAADrg/6abXThYeey8Y54jRU3qyNP9BruBhkI0rgCLcB/s1600/burn_joss_stick.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:bye:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-JgLnmep-jko/V71Vfir-fPI/AAAAAAAADrk/oEmDLcC3RKcPVg9THIYxm6PxH0bv5w0BwCLcB/s1600/bye.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:byebye:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-DsoEPAxB1XU/V71Vf691t9I/AAAAAAAADro/Ht8vXQps02Yj_z9Ww00aDAj7V_AyMqlbACLcB/s1600/byebye.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:canny:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-7u3YTHfFTn0/V71Vf-QaZ-I/AAAAAAAADrs/0QI3ljSwl5IsDFWL1rS4_ZWD1cJMoVhwACLcB/s1600/canny.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:capture:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-QiHXTYwSj1g/V71VgIIYCJI/AAAAAAAADrw/yVOCRp-JvAQC6C9Hk31IIpArKe4VH5gdQCLcB/s1600/capture.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:cheers:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-OBMCxvw99wU/V71VgXg-tYI/AAAAAAAADr0/_D9lBdy0UBYY0LN-c-4bWVREJrb6ExkogCLcB/s1600/cheers.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:choler:/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-_NeUVXjTinE/V71VgSAhnQI/AAAAAAAADr4/JsvC3BQYcHwouPgNKHBaf2dXkNuo-amgQCLcB/s1600/choler.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:confident:/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-pOdzUVGymYk/V71Vgu5v_FI/AAAAAAAADr8/m-hArw0eWLcDxF9KJv0wrohdNQq_NMEPACLcB/s1600/confident.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:-s/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-FUBt5EhZC1M/V71Vg7uJDCI/AAAAAAAADsE/gRHG_1WMvhcTCFdXEt3BCLmiG4zIU6RuACLcB/s1600/confuse.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:kool:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-1xjplm6rgBw/V71Vg-XQtBI/AAAAAAAADsA/eY06-kHOBPYrqjZr8T4z6HLpXHAwxtOTQCLcB/s1600/cool.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:((/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-Qqd7Qcfzce8/V71VhCgi0eI/AAAAAAAADsI/oz3net2edB4UaWvp6cEdcR5VLOdaHfspACLcB/s1600/cry.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:doublegun:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-Kn3vm31CSr0/V71VhH4XjiI/AAAAAAAADsM/EgW4IPhM6bwoGbZoM0nv6-gj3TnRl0nZACLcB/s1600/doublegun.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:doubt:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-YY_85E7279A/V71VhQVmeoI/AAAAAAAADsQ/qTyZxWvcfCkC1oB3Oqxk_uYSplkIjvIHQCLcB/s1600/doubt.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:dribble:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-rq-KwTPDLaA/V71VhopDsQI/AAAAAAAADsU/4crnFe3F1v4PwekwVsIE8HuLTx3wTPozACLcB/s1600/dribble.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:">/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-rWQOrMcyRzU/V71VhhsnVYI/AAAAAAAADsY/FpzhWCry9Pc0Z2OomRoj9AbR6OkMUYwegCLcB/s1600/embarrassed.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:sogood:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-M000A0x2TEA/V71VhysSBOI/AAAAAAAADsc/XIFvmDhc7xISaYflw_pYLYdYDXgYlcz5QCLcB/s1600/feel_good.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:fix:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-gmfcoYXirfo/V71ViJJsLHI/AAAAAAAADsg/kHVfsELgsuEFzff5BckeZooXmssqOWp5gCLcB/s1600/fix.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:flame:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-oy795a5HCME/V71ViSkYbUI/AAAAAAAADsk/ZNX7WRPgC4Ao0fV-n4702PTeC6mKModPACLcB/s1600/flame.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:go:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-OXN31inxKoI/V71VicJ5R2I/AAAAAAAADso/nCK4Q-paP9oKuct-qJoeZrtn9B3P5KlhgCLcB/s1600/go.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:haha:/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-rO79eMSnfB8/V71VibaPw2I/AAAAAAAADss/4RoZcVqkyesvNoJLCG4P9dREpgCmsTwogCLcB/s1600/haha.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:hang1:/ig,"<img style='border: 0; padding:0' src='https://vozforums.com/images/smilies/Off/hang.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:hehe:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-xemmXKknsQE/V71Vi1AvCzI/AAAAAAAADs0/-uHgRE-miuwOcdxw6PE08TTNWaV56I9JACLcB/s1600/hehe.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:hell_boy:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-WVCYoadGXME/V71Vi147NuI/AAAAAAAADs4/9zIEITeHHlITt0s9grFUSydS2CafxT4VwCLcB/s1600/hell_boy.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:hug:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-hcrbucAlVP4/V71VjIjxouI/AAAAAAAADs8/ZvbQMZjaMfoYenBU0SNV4FwpCeI9yiXTgCLcB/s1600/hug.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:hungry:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-HW6Uv5_GPQ4/V71Vj3RjSGI/AAAAAAAADtM/5tYdyq3zl2sZb0rewBkBw0uaeClYohgdQCLcB/s1600/hungry.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\^:\)^/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-1SBBmAoKNEs/V71VjmkzCYI/AAAAAAAADtA/BfuzTW20Gekfj6c7ZvvaiFsvEb_fL9hYQCLcB/s1600/lay.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:lmao:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-kJWP_IAY_jc/V71Vj-MykzI/AAAAAAAADtE/MOG-CnkdJrE53zeQ_0DHGXHYDfQR4nWPACLcB/s1600/lmao.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:lol:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-jMTevojn6TI/V71Vj4pZClI/AAAAAAAADtI/lmBsyOTeNX8CjaboLmxVe3cq0vTx4kY3wCLcB/s1600/lol.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:look_down:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-wMxc7Za8buE/V71VkEVqGOI/AAAAAAAADtQ/O2mhmw65llsfh79DCrgvILEoJfIH9tmawCLcB/s1600/look_down.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:lovemachine:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-2I4FOmblLnk/V71Vkd2gt2I/AAAAAAAADtU/_WLF-aGlvpQqm1ROA2VrwmOExXpyz1yZgCLcB/s1600/lovemachine.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:loveyou:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-JrssSRUt48U/V71Vkcz7DCI/AAAAAAAADtY/NpnVvretS0IRimuZBGrERnzb_0J1NUYAgCLcB/s1600/loveyou.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:mage:/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-nO3BlY8SHxA/V71VkuJep0I/AAAAAAAADtc/egxSqJhjJ8UgfWb14Z-yuM0Ya-uU2PrAwCLcB/s1600/mage.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:matrix:/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-wo-orXA7wsw/V71Vk8HBljI/AAAAAAAADtg/02H6DyNzihI5M1a-OYgfdZAS7vyg4y0RwCLcB/s1600/matrix.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:misdoubt:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/--OD-PZ7Otpg/V71Vk4uaLOI/AAAAAAAADtk/j7FlrM8clzMg0KVnltWbBaZHsS7fB2FXgCLcB/s1600/misdoubt.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:no:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/--1PYZIOoIzk/V71VlMOE4xI/AAAAAAAADto/RppHlegjFKgCFFtyuEKcTc-pXa0xLc8NACLcB/s1600/no.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:chaymau:/ig,"<img style='border: 0; padding:0' src='https://vozforums.com/images/smilies/Off/nosebleed.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:oh:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-l2QBzP6I4J8/V71VloqxEVI/AAAAAAAADt0/TA8G_EKiTPI_VkF8Sggeutm0uq2SGXNygCLcB/s1600/oh.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:ops:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-IBh7fM3El_8/V71Vlq9FxtI/AAAAAAAADt4/EN9-yqHmhJkZUVreZioTeGyVJXpsMg7IQCLcB/s1600/ops.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:ot:/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-lx9PV2HAWuE/V71Vl8R_V7I/AAAAAAAADt8/9pfH2BkVqc4FVit3hKgaV2-TL8DQsaSKACLcB/s1600/ot.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:phone:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-OoLNevVcHro/V71VmLpSeEI/AAAAAAAADuA/H6Xd2r0iya0v7weHfQqU_MplGtUPvlr_ACLcB/s1600/phone.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:please:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-XK_7-gaIkJ0/V71VmLJEQFI/AAAAAAAADuE/o5Sn80As2vA_1fVP9jeeM4CkOb17FupKQCLcB/s1600/please.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:pudency:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-NE6ysn_crzs/V71Vmfbr0iI/AAAAAAAADuI/O803BKC7sHANP1jcv0Q5NnuqyDg3obx0ACLcB/s1600/pudency.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:puke:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-wi2d3IMApD8/V71VmcL6r1I/AAAAAAAADuM/-0CmX1mbUroVP8jood6-v29zzDSJN9_YACLcB/s1600/puke.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:rap:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-4cx_gm8LvXI/V71Vmnfws-I/AAAAAAAADuQ/_QAxlTLs9fkBn2TVOAZlTCuJqeAVst5XACLcB/s1600/rap.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:rofl:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-ODbbICo8kvU/V71Vm2iQtJI/AAAAAAAADuU/AiG4CqQMs4klxaf_-ZMongXERauIxvadACLcB/s1600/rofl.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:runrun:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-mXzi44xlza4/V71Vm_up5xI/AAAAAAAADuY/-JEmr46eVGwHlprrs_EnF6ioQK620sdwACLcB/s1600/runrun.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:sad:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-fNd2jXHz9ug/V71VnBGGSYI/AAAAAAAADuc/EXcypiv9fRIFMYcTtKFLDgQakZAXCiKwQCLcB/s1600/sad.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:sexy:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-iN4J4WXK-l0/V71Vna6yBgI/AAAAAAAADug/lZ2rJq0TduEiao09fo9jI4-Y2YTb9vdYACLcB/s1600/sexy_girl.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:shame:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-MF7-CBMc9zE/V71VnRT1OOI/AAAAAAAADuk/Fnguc014zscIDrRvbjYm1VfvWjrKjcIqQCLcB/s1600/shame.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:shit:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-y2b6hkNs0n4/V71VnwjPWxI/AAAAAAAADus/6CQpgwpPNPk-Mi4jjlCvYwPF-GkRTPjigCLcB/s1600/shit.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:shoot1:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-TnDxPGR9O54/V71VoIn6btI/AAAAAAAADuw/2INPkySBpv08CWQnY_jYzUeBLF8bn8R7QCLcB/s1600/shoot1.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\-_-/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-rVIn8WZMDJI/V71VoGTrMsI/AAAAAAAADu0/kqWAU2eGgq84OwzhGtl3SbDtEPvqGRVmQCLcB/s1600/sleep.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:)/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-XsdTgGFYdt8/V71VoQ0R1RI/AAAAAAAADu4/6l-lCujXFbYWqspTH4-zDYTmwmIerdUfACLcB/s1600/smile.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:smoke:/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-o26xTAysrmg/V71VonNn8BI/AAAAAAAADu8/63PLn9ZYVgc-A93_aSYSXI87VpNApikqACLcB/s1600/smoke.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:sos:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-2U9rPfbrYIo/V71Vos6N-AI/AAAAAAAADvA/cXKmUWc8ayAjfi31L-sHMh5LFxW49qP0wCLcB/s1600/sos.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:spam:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-OPApQfUMXkU/V71Vo9Mym_I/AAAAAAAADvE/HWZ92xXO7zw9XJ9Z1c0c-h5h5EMpVbTzwCLcB/s1600/spam.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:spiderman:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-UP7_i5pLJoI/V71VpL6u0hI/AAAAAAAADvI/0-KYjBhDEE4l0DgXKcmN6TjdIA-Lo4eDQCLcB/s1600/spiderman.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:dreaming:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-RRVPrjoBqa4/V71VpOxfRLI/AAAAAAAADvM/NYPTdD2H0_gzJ3J6WtxE-Bs1LSV4oB9RgCLcB/s1600/still_dreaming.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:stupid:/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-5otloUJ5uro/V71VpRKHw8I/AAAAAAAADvQ/3ym7e-4MKNgDS8r4u3e9-g3XM-8yKFz7wCLcB/s1600/stupid.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:sure:/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-jPA_EbWuTNU/V71Vw3cCVKI/AAAAAAAADwA/a_OzXif9n38g6ILLzRHjuTdMkvih-xPBACLcB/s1600/sure.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:surrender:/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-RtfGH47KmIw/V71Vpinx7yI/AAAAAAAADvU/2jWXosd6Kfw84uaaAxdOYdDHmyZ0_MAfwCLcB/s1600/surrender.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:sweat:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-84aBIi09sYo/V71Vp55u0pI/AAAAAAAADvY/buzKHLv8SOYvDbgF7iXVP8oonl7ECrMXwCLcB/s1600/sweat.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:theft:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-mCdxr_90Pd4/V71VqWR1U4I/AAAAAAAADvg/7Zuf-q0P5JMC9sljimcYlkuRFi1EQ5zdwCLcB/s1600/theft.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:tire:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-ejb2nS7XWl0/V71Vqvchh4I/AAAAAAAADvk/GBvWexruhYUISVndl6lmXuKBI5q7QX_KwCLcB/s1600/tire.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:sosad:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-ObRBrEow5sY/V71Vq8XZFJI/AAAAAAAADvo/6zDDURm7UPkm8_lFRbgbJFEzjqUx80HNwCLcB/s1600/too_sad.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:waaaht:/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-AvnQm_gt-kc/V71VrJ2YlsI/AAAAAAAADvs/7cmiBrOznFkbiTEP9h4Hk4wCyqn9GJ2VACLcB/s1600/waaaht.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:welcome:/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-T2sW-T-dlu8/V71VrcEV26I/AAAAAAAADvw/BDMmSIS__kII-921B_IAL39I33f1_TCcwCLcB/s1600/welcome.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:what:/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-T68LIN7aV9A/V71VrsQddCI/AAAAAAAADv0/E-VoNKhngZc810dSykqgvlfL8smVbNcrACLcB/s1600/what.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:winner:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-xwFpaJtmCiY/V71Vr114-JI/AAAAAAAADv4/f3P1W55mWYEqja8l2uGAcOV2Za-20Wi0ACLcB/s1600/winner.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:yes:/ig,"<img style='border: 0; padding:0' src='https://2.bp.blogspot.com/-1-DfZPtcZkE/V71VsLm2CEI/AAAAAAAADv8/bonDjPlULxsF1vONwF2Ftt3tiT9lHV0cQCLcB/s1600/yes.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:v/ig,"<img style='border: 0; padding:0' src='https://4.bp.blogspot.com/-ZKN5z_1oUpY/V7bFNZ6T97I/AAAAAAAADo8/96pC091NKpELIGJFXcBKSBzVIoTmJ9z0wCLcB/s1600/pacman%2Bemoticon.png'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:3/ig,"<img style='border: 0; padding:0' src='https://1.bp.blogspot.com/-iMz25CyThMg/V7bFNZar79I/AAAAAAAADpA/a0BCJbg1v3kwhk2WlrVN-2tZzm6Vt_SLACLcB/s1600/curly%2Blips%2Bemoticon.png'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:after_boom:/ig,"<img style='border: 0; padding:0' src='http://3.bp.blogspot.com/--ZPqFuFLKL0/U_W1X3QvUCI/AAAAAAAAAEE/ci7GVP5_BIw/s1600/after_boom.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:beat_brick:/ig,"<img style='border: 0; padding:0' src='http://1.bp.blogspot.com/-BlT_JMqKXOw/U_W1StpqGhI/AAAAAAAAADI/rqJ4wEgvU2M/s1600/beat_brick.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:*/ig,"<img style='border: 0; padding:0' src='https://3.bp.blogspot.com/-BKEudtiWhOY/V71VqNptCuI/AAAAAAAADvc/AjEQTNNCErc3jn9nrbcmAJv_jwOntSWoQCLcB/s1600/sweet_kiss.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\)\)/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/21.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\w-\)/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/5.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\-j/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/78.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\;\)/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/3.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\P/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/10.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace (/\:\(/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/2.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\:\_\(/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/20.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\:x/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/8.gif'/>")
d[i].innerHTML = d[i].innerHTML.replace(/\=\(\(/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/12.gif'/>")
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
 d[i].innerHTML = d[i].innerHTML.replace(/\=\)\)/ig,"<img style='border: 0; padding:0' src='http://us.i1.yimg.com/us.yimg.com/i/mesg/emoticons7/24.gif'/>")
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
