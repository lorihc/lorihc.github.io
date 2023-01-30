function getArchiveArray()
{
	var archiveTitles = new Array(<MTArchiveList archive_type="Monthly">"<$MTArchiveTitle$>",</MTArchiveList>"");
	var archiveLinks = new Array(<MTArchiveList archive_type="Monthly">"<$MTArchiveLink$>",</MTArchiveList>"");
	var archiveDates = new Array(<MTArchiveList archive_type="Monthly">"<MTArchiveDate format="%Y">",</MTArchiveList>"");
	
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
	htmlStr += '<div class="treePanel">\n<div class="treeTab">Older</div>\n<div class="treePanelContent">\n<ul>\n<li><a href="/blog/blogger/blog_archive_detail.html">October 2000 - March 2003 (blogger)</a></li>/n</ul>/n</div>/n</div>\n';
	return htmlStr;
}

/*
function getArchiveXML()
{
	var xmlStr = '<?xml version="1.0" encoding="utf-8"?>\n';
	xmlStr += '<feed version="0.3" xmlns="http://purl.org/atom/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xml:lang="en">\n';
	xmlStr += '<title><$MTBlogName remove_html="1" encode_xml="1"$> archives</title>
<link rel="alternate" type="text/html" href="<$MTBlogURL encode_xml="1"$>" />\n\n<modified><MTEntries lastn="1"><$MTEntryModifiedDate utc="1" format="%Y-%m-%dT%H:%M:%SZ"$></MTEntries></modified>\n\n';
	var archives = getArchiveArray();
	var oldYear = 0;
	var newYear = 1;
	
	for (var i=0; i < archives.length; i++)
	{
		newYear = archives[i].year;
		if (newYear != oldYear)
		{
			if (oldYear > 0)
				xmlStr + '</category>\n';
		
			oldYear = newYear;
			xmlStr += '<category title="' + newYear + '">\n';
			xmlStr += '\t<entry text="' + archives[i].title +'" title="' + archives[i].title +'" htmlUrl="' + archives[i].href +'"/>\n';
		}
		else
		{
			xmlStr += '\t<entry text="' + archives[i].title +'" title="' + archives[i].title +'" htmlUrl="' + archives[i].href +'"/>\n';			
		}
	}
}
*/
