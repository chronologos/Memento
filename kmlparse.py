import sys, BeautifulSoup
html = BeautifulSoup.BeautifulSoup(open(sys.argv[1]).read())
for coord in html.findAll("name"):
    seq = "'"+coord.contents[0]+"'"
    print "".join(seq)
