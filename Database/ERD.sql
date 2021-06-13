clitics
-
index int
form PK string
Counts int
upos string
xpos string
NoSpaceAfter int

completetamildata
-
index int
form PK string FK >- clitics.form
lemma string
upos string
xpos string
head int
FormWithoutLemma string
NoSpaceAfter int
Counts int
formSeparated string

morphemes
-
index int
MorphemeSeparated string
Morpheme PK string
xpos_Regex string
Morpheme_continued int

pronouns
-
level_0 int
index
form PK string FK >- completetamildata.form
lemma string
upos string
xpos string
head int
Morpheme string
NoSpaceAfter int
Counts int