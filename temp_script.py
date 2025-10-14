from pathlib import Path
text = Path("src/pages/Projects.tsx").read_text()
start = text.index("<span aria-hidden=\"true\">")
print(repr(text[start:start+40]))
