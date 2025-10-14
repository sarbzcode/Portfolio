from pathlib import Path
text = Path('server/index.js').read_text()
line = next(line for line in text.splitlines() if 'Missing required email credentials' in line)
print(repr(line))
