function getArchiveArray()
{
	var archiveTitles = new Array("December 2020","June 2020","February 2020","December 2018","August 2017","September 2016","August 2016","September 2015","January 2015","December 2014","October 2014","October 2013","August 2013","January 2013","May 2012","April 2012","February 2012","December 2011","October 2011","September 2011","August 2011","July 2011","September 2010","August 2010","May 2010","April 2010","March 2010","January 2010","December 2009","November 2009","October 2009","September 2009","August 2009","July 2009","June 2009","May 2009","April 2009","March 2009","February 2009","January 2009","December 2008","November 2008","October 2008","September 2008","August 2008","July 2008","June 2008","May 2008","April 2008","March 2008","February 2008","January 2008","December 2007","November 2007","October 2007","September 2007","August 2007","July 2007","June 2007","May 2007","April 2007","March 2007","February 2007","January 2007","December 2006","November 2006","October 2006","September 2006","August 2006","July 2006","June 2006","May 2006","April 2006","March 2006","February 2006","January 2006","December 2005","November 2005","October 2005","September 2005","August 2005","July 2005","June 2005","May 2005","April 2005","March 2005","February 2005","January 2005","December 2004","November 2004","October 2004","September 2004","August 2004","July 2004","June 2004","May 2004","April 2004","March 2004","February 2004","January 2004","December 2003","November 2003","October 2003","September 2003","August 2003","July 2003","June 2003","May 2003","April 2003","March 2003","");
	var archiveLinks = new Array("http://www.avocado8.com/blog/archives/2020/12/","http://www.avocado8.com/blog/archives/2020/06/","http://www.avocado8.com/blog/archives/2020/02/","http://www.avocado8.com/blog/archives/2018/12/","http://www.avocado8.com/blog/archives/2017/08/","http://www.avocado8.com/blog/archives/2016/09/","http://www.avocado8.com/blog/archives/2016/08/","http://www.avocado8.com/blog/archives/2015/09/","http://www.avocado8.com/blog/archives/2015/01/","http://www.avocado8.com/blog/archives/2014/12/","http://www.avocado8.com/blog/archives/2014/10/","http://www.avocado8.com/blog/archives/2013/10/","http://www.avocado8.com/blog/archives/2013/08/","http://www.avocado8.com/blog/archives/2013/01/","http://www.avocado8.com/blog/archives/2012/05/","http://www.avocado8.com/blog/archives/2012/04/","http://www.avocado8.com/blog/archives/2012/02/","http://www.avocado8.com/blog/archives/2011/12/","http://www.avocado8.com/blog/archives/2011/10/","http://www.avocado8.com/blog/archives/2011/09/","http://www.avocado8.com/blog/archives/2011/08/","http://www.avocado8.com/blog/archives/2011/07/","http://www.avocado8.com/blog/archives/2010/09/","http://www.avocado8.com/blog/archives/2010/08/","http://www.avocado8.com/blog/archives/2010/05/","http://www.avocado8.com/blog/archives/2010/04/","http://www.avocado8.com/blog/archives/2010/03/","http://www.avocado8.com/blog/archives/2010/01/","http://www.avocado8.com/blog/archives/2009/12/","http://www.avocado8.com/blog/archives/2009/11/","http://www.avocado8.com/blog/archives/2009/10/","http://www.avocado8.com/blog/archives/2009/09/","http://www.avocado8.com/blog/archives/2009/08/","http://www.avocado8.com/blog/archives/2009/07/","http://www.avocado8.com/blog/archives/2009/06/","http://www.avocado8.com/blog/archives/2009/05/","http://www.avocado8.com/blog/archives/2009/04/","http://www.avocado8.com/blog/archives/2009/03/","http://www.avocado8.com/blog/archives/2009/02/","http://www.avocado8.com/blog/archives/2009/01/","http://www.avocado8.com/blog/archives/2008/12/","http://www.avocado8.com/blog/archives/2008/11/","http://www.avocado8.com/blog/archives/2008/10/","http://www.avocado8.com/blog/archives/2008/09/","http://www.avocado8.com/blog/archives/2008/08/","http://www.avocado8.com/blog/archives/2008/07/","http://www.avocado8.com/blog/archives/2008/06/","http://www.avocado8.com/blog/archives/2008/05/","http://www.avocado8.com/blog/archives/2008/04/","http://www.avocado8.com/blog/archives/2008/03/","http://www.avocado8.com/blog/archives/2008/02/","http://www.avocado8.com/blog/archives/2008/01/","http://www.avocado8.com/blog/archives/2007/12/","http://www.avocado8.com/blog/archives/2007/11/","http://www.avocado8.com/blog/archives/2007/10/","http://www.avocado8.com/blog/archives/2007/09/","http://www.avocado8.com/blog/archives/2007/08/","http://www.avocado8.com/blog/archives/2007/07/","http://www.avocado8.com/blog/archives/2007/06/","http://www.avocado8.com/blog/archives/2007/05/","http://www.avocado8.com/blog/archives/2007/04/","http://www.avocado8.com/blog/archives/2007/03/","http://www.avocado8.com/blog/archives/2007/02/","http://www.avocado8.com/blog/archives/2007/01/","http://www.avocado8.com/blog/archives/2006/12/","http://www.avocado8.com/blog/archives/2006/11/","http://www.avocado8.com/blog/archives/2006/10/","http://www.avocado8.com/blog/archives/2006/09/","http://www.avocado8.com/blog/archives/2006/08/","http://www.avocado8.com/blog/archives/2006/07/","http://www.avocado8.com/blog/archives/2006/06/","http://www.avocado8.com/blog/archives/2006/05/","http://www.avocado8.com/blog/archives/2006/04/","http://www.avocado8.com/blog/archives/2006/03/","http://www.avocado8.com/blog/archives/2006/02/","http://www.avocado8.com/blog/archives/2006/01/","http://www.avocado8.com/blog/archives/2005/12/","http://www.avocado8.com/blog/archives/2005/11/","http://www.avocado8.com/blog/archives/2005/10/","http://www.avocado8.com/blog/archives/2005/09/","http://www.avocado8.com/blog/archives/2005/08/","http://www.avocado8.com/blog/archives/2005/07/","http://www.avocado8.com/blog/archives/2005/06/","http://www.avocado8.com/blog/archives/2005/05/","http://www.avocado8.com/blog/archives/2005/04/","http://www.avocado8.com/blog/archives/2005/03/","http://www.avocado8.com/blog/archives/2005/02/","http://www.avocado8.com/blog/archives/2005/01/","http://www.avocado8.com/blog/archives/2004/12/","http://www.avocado8.com/blog/archives/2004/11/","http://www.avocado8.com/blog/archives/2004/10/","http://www.avocado8.com/blog/archives/2004/09/","http://www.avocado8.com/blog/archives/2004/08/","http://www.avocado8.com/blog/archives/2004/07/","http://www.avocado8.com/blog/archives/2004/06/","http://www.avocado8.com/blog/archives/2004/05/","http://www.avocado8.com/blog/archives/2004/04/","http://www.avocado8.com/blog/archives/2004/03/","http://www.avocado8.com/blog/archives/2004/02/","http://www.avocado8.com/blog/archives/2004/01/","http://www.avocado8.com/blog/archives/2003/12/","http://www.avocado8.com/blog/archives/2003/11/","http://www.avocado8.com/blog/archives/2003/10/","http://www.avocado8.com/blog/archives/2003/09/","http://www.avocado8.com/blog/archives/2003/08/","http://www.avocado8.com/blog/archives/2003/07/","http://www.avocado8.com/blog/archives/2003/06/","http://www.avocado8.com/blog/archives/2003/05/","http://www.avocado8.com/blog/archives/2003/04/","http://www.avocado8.com/blog/archives/2003/03/","");
	var archiveDates = new Array("2020","2020","2020","2018","2017","2016","2016","2015","2015","2014","2014","2013","2013","2013","2012","2012","2012","2011","2011","2011","2011","2011","2010","2010","2010","2010","2010","2010","2009","2009","2009","2009","2009","2009","2009","2009","2009","2009","2009","2009","2008","2008","2008","2008","2008","2008","2008","2008","2008","2008","2008","2008","2007","2007","2007","2007","2007","2007","2007","2007","2007","2007","2007","2007","2006","2006","2006","2006","2006","2006","2006","2006","2006","2006","2006","2006","2005","2005","2005","2005","2005","2005","2005","2005","2005","2005","2005","2005","2004","2004","2004","2004","2004","2004","2004","2004","2004","2004","2004","2004","2003","2003","2003","2003","2003","2003","2003","2003","2003","2003","");
	
	var archives = new Array();
	
	for (var i=0; i < archiveTitles.length; i++)
	{
		if (archiveTitles[i] != "")
		{
			archives[i] = new Object();
			archives[i].title = archiveTitles[i];
			archives[i].href = archiveLinks[i];
			archives[i].year = archiveDates[i];
		}
	}
	return archives;
}

function getArchiveHTML()
{
	var archives = getArchiveArray();
	var oldYear = 0;
	var newYear = 1;
	var htmlStr = '';
	for (var i=0; i < archives.length; i++)
	{
		newYear = archives[i].year;
		if (newYear != oldYear)
		{
			if (oldYear > 0)
				htmlStr += '</ul>\n</div>\n</div>';

			oldYear = newYear;
			htmlStr += '<div class="treePanel">\n';
			htmlStr += '<div class="treeTab">' + newYear + '</div>\n';
			htmlStr += '<div class="treePanelContent">\n<ul>\n';
			htmlStr += '<li><a href="' + archives[i].href +'">' + archives[i].title + '</a></li>\n';
		}
		else
		{
			htmlStr += '<li><a href="' + archives[i].href +'">' + archives[i].title + '</a></li>\n';
		}
	}
	htmlStr += '</ul>\n</div>\n</div>\n';
	htmlStr += '<div class="treePanel">\n<div class="treeTab">Older</div>\n<div class="treePanelContent">\n<ul>\n<li><a href="/blog/blogger/blog_archive_detail.html">October 2000 - March 2003 (blogger)</a></li>\n</ul>\n</div>\n</div>\n';
	return htmlStr;
}
