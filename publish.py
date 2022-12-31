from sys import stdin, exit
from os import system

s = ''

for line in stdin:
  s = s.join(stdin)

s = s.strip()

if not s:
    exit(0)
else:
    system('yarn publish --access=public --non-interactive')
    exit(0)

