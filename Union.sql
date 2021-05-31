CREATE TABLE all_logograms AS
SELECT lemmas_labelled.lemma, lemmas_labelled.id from lemmas_labelled
UNION 
SELECT morpheme_labelled_step1."Morpheme", morpheme_labelled_step1.id from morpheme_labelled_step1
UNION 
SELECT clitics_and_postpositions_labelled.form, clitics_and_postpositions_labelled.id from clitics_and_postpositions_labelled
UNION
SELECT unidentified_morphemes."Morpheme", unidentified_morphemes.id from unidentified_morphemes
UNION
SELECT letters.letter, letters.id from letters