function writeMovie1(id,moviePath)
{
    document.write('<object id="' + id +'" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="320" height="256">\n' +
	'<param name="src" value="' + moviePath + '" />\n' +
	'<param name="controller" value="true" />\n' +
	'<param name="autoplay" value="false" />\n' +
	'<param name="scale" value="tofit" />\n' +
	'<param name="volume" value="100" />\n' +
	'<param name="loop" value="false" />\n' +
	'<embed pluginspage="http://www.apple.com/quicktime/download/" type="video/quicktime" class="mov" width="320" height="256" src="' + moviePath + '" controller="true" autoplay="false" scale="tofit" volume="100" loop="false"></embed>\n' +
	'</object>');
}

function writeAudio(id,audioPath)
{
    document.write('<object id="' + id + '" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="300" height="16">\n' +
	'<param name="src" value="/blog/movies/QTPlaceholder.mov" />\n' +
	'<param name="qtsrc" value="' + audioPath + '" />\n' +
	'<param name="controller" value="true" />\n' +
	'<param name="autoplay" value="false" />\n' +
	'<param name="scale" value="tofit" />\n' +
	'<param name="volume" value="100" />\n' +
	'<param name="loop" value="false" />\n' +
	'<embed pluginspage="http://www.apple.com/quicktime/download/" type="video/quicktime" class="mov" width="300" height="16" src="/blog/movies/QTPlaceholder.mov" qtsrc="' + audioPath + '" controller="true" autoplay="false" scale="tofit" volume="100" loop="false"></embed>\n' +
	'</object>');
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  var winObj = window.open(theURL,winName,features);
  winObj.focus();
}

function MM_CheckFlashVersion(reqVerStr,msg){
  with(navigator){
    var isIE  = (appVersion.indexOf("MSIE") != -1 && userAgent.indexOf("Opera") == -1);
    var isWin = (appVersion.toLowerCase().indexOf("win") != -1);
    if (!isIE || !isWin){  
      var flashVer = -1;
      if (plugins && plugins.length > 0){
        var desc = plugins["Shockwave Flash"] ? plugins["Shockwave Flash"].description : "";
        desc = plugins["Shockwave Flash 2.0"] ? plugins["Shockwave Flash 2.0"].description : desc;
        if (desc == "") flashVer = -1;
        else{
          var descArr = desc.split(" ");
          var tempArrMajor = descArr[2].split(".");
          var verMajor = tempArrMajor[0];
          var tempArrMinor = (descArr[3] != "") ? descArr[3].split("r") : descArr[4].split("r");
          var verMinor = (tempArrMinor[1] > 0) ? tempArrMinor[1] : 0;
          flashVer =  parseFloat(verMajor + "." + verMinor);
        }
      }
      // WebTV has Flash Player 4 or lower -- too low for video
      else if (userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 4.0;

      var verArr = reqVerStr.split(",");
      var reqVer = parseFloat(verArr[0] + "." + verArr[2]);
  
      if (flashVer < reqVer){
        if (confirm(msg))
          window.location = "http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash";
      }
    }
  } 
}

function writeProgFlv(id, flvPath, flvW, flvH)
{
document.write('<object id="' + id + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="' + flvW + '" height="' + flvH + '">\n' + 
'<param name="movie" value="http://www.avocado8.com/blog/movies/FLVPlayer_Progressive.swf" />\n' + 
'<param name="salign" value="lt" />\n' + 
'<param name="quality" value="high" />\n' + 
'<param name="scale" value="noscale" />\n' + 
'<param name="FlashVars" value="&MM_ComponentVersion=1&skinName=http://www.avocado8.com/blog/movies/Clear_Skin_3&streamName=' + flvPath + '&autoPlay=false&autoRewind=false" />\n' + 
'<embed src="http://www.avocado8.com/blog/movies/FLVPlayer_Progressive.swf" flashvars="&MM_ComponentVersion=3&skinName=http://www.avocado8.com/blog/movies/Clear_Skin_3&streamName=' + flvPath + '&autoPlay=false&autoRewind=false" quality="high" scale="noscale" width="' + flvW + '" height="' + flvH + '" name="' + id + '" salign="LT" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" />\n' + 
'</object>');
}

function writeVimeo(id)
{
document.write('<object type="application/x-shockwave-flash" width="480" height="360" data="http://vimeo.com/moogaloop.swf?clip_id' + id + '&amp;server=vimeo.com&amp;fullscreen=1&amp;show_title=1&amp;show_byline=1&amp;show_portrait=1&amp;color=00ADEF">\n' + 
'<param name="quality" value="best" />\n' + 
'<param name="allowfullscreen" value="true" />\n' + 
'<param name="scale" value="showAll" />\n' + 
'<param name="movie" value=""http://vimeo.com/moogaloop.swf?clip_id=' + id + '&amp;server=vimeo.com&amp;fullscreen=1&amp;show_title=1&amp;show_byline=1&amp;show_portrait=1&amp;color=00ADEF" />\n' + 
'</object>');
}
