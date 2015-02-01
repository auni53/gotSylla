import os
import sys
import urllib.request


if len(sys.argv) == 3 and sys.argv[1] == '-u':
    response = urllib.request.urlretrieve(sys.argv[2], 'tmp.pdf')
    filename = 'tmp.pdf'
elif len(sys.argv) == 3:
    print("Invalid option.")
    sys.exit()
else:
    filename = sys.argv[1]

try:
    os.system("pdftotext -raw -enc UTF-8 " + filename + " tmp.txt")
except IOError:
    sys.exit()
