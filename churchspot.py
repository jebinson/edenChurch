from bs4 import BeautifulSoup
import urllib.request
import codecs, os, unicodedata

os.chdir(os.getcwd() + '\\templates')
songDatFile = codecs.open('songsData.json', 'w', "utf-8")
for i in range(1,78):
    r = urllib.request.urlopen('http://churchspot.com/search-results/?other=&album=&key=&time=&skeyword=&submit=SEARCH&pageno=' + str(i)).read()
    soup = BeautifulSoup(r,"html.parser")
    
    for each in soup.find_all('samp'):
        songurl = each.a.get('href')
        songId = each.a.get('id')
        
        t = urllib.request.urlopen(songurl).read()
        tstr = t.decode("utf-8", "replace")
        songSoup = BeautifulSoup(t,"html.parser")
        
        songTitle = songSoup.findAll('samp',{'class':'song_title'})[0].string
        songDetails = songSoup.findAll('div',{'class':'author-box'})[0].get_text()
        chordsHtml = tstr[tstr.find('<div class="entrybody">'):tstr.find('</div></div>   \r\n        \r\n     </div>') + 38]
        
        songFile = codecs.open(songId + '.html', 'w', "utf-8")
        songFile.write(chordsHtml)
        songFile.close()

        songDatFile.write("{\"" + str(songId) + "\":\"" + songTitle + " | " +  songDetails + "\"},\n")
        
songDatFile.close()
