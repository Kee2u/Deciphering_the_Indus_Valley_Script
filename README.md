# Deciphering the Indus Valley Script

In this project, Sonia Sharma and I (Keetu Jayakumar) have attempted to partially decipher the Indus Valley Script using Python, PostgreSQL, Machine learning algorithms (SVM) and Statistical Analysis.

<img src = "https://github.com/Kee2u/Deciphering_the_Indus_Valley_Script/blob/Keetu_Code/Pictures/Unicorn.jpg?raw=true" width = 400>

## Introduction
The Indus Valley or Harappan civilization is India's oldest civilization spanning from 5500 BCE to 1300 BCE. However, their writing system is still undeciphered. The obstacles to deciphering the script have included:
 - The exact uses of the artifacts are mostly unknown.
 - The root language of the script is unknown.
 - The texts are short (mean = 5 signs).
 - There are no bilingual texts.
 - The complete corpus of the text was not widely available.

Since 2013, however, there have been breakthroughs in the field of population genetics that have given clues about the root language of the script. Through studying mtDNA and Y chromosomes of ancient and modern populations (these get passed down through generations with a few mutations) and whole genome sequencing (which is no longer computationally expensive), it is possible to put a timeline on key population migrations into India starting from the original Out of Africa migrants. 

## Language
One of the seminal papers that contributed to this understanding of population migrations was 'The Genomic Formation of South and Central Asia' published in March 2018 and authored by 92 scientists. 

It supported the theory that Indo-European-language speakers who called themselves Aryans migrated to India from central Asia around 4000 years ago (after the decline of the Harappan Civilization). This finding potentially rules out the possibility that the Harappan language was Indo-Europen.

It also showed that Harappans were a mixture of Iranian agriculturists from the Zagros region and descendants of the 'First Indians' (Original out of Africa migrants). Genetic research showed that the admixture between the two populations took place between 4700 BCE and 3000 BCE. Archaeological evidence also pointed out to a connection between the Zagros region and the early farmers of Mehrgarh in Balochistan (First Indians). Similar quadrangular houses built with narrow bricks about sixty centimetres long, circular firepits filled with burnt pebbles and sequential slab pottery were found at both sites. 

### Proto Dravidian Evidence
The 2013 paper ‘South Asia: Dravidian Linguistic History’ authored by Professor Franklin C. Southworth and Dr David W. McAlpin reconstructed Proto Dravidian (one of the two main Indian language families) vocabulary and found a link with Proto Elamite vocabulary (the language of the Zagros region). This suggests that the first Indians that mixed with the Iranian agriculturalists were speaking Proto Dravidian. The reconstructed proto dravidian vocabulary also pointed towards an agricultural lifestyle that was reinforced by archaeological evidence in the region of the admixture. 

From the vocabulary, it was also possible to estimate when the two populations separated. The word ‘tal’ exists in both Elamite and Proto-Dravidian, but with different meanings. In Elamite, it means ‘write’and in Proto-Dravidian, it means ‘push in’. In a paper McAlpin authored in 1981, he explains that the original meaning of ‘tal’ was to ‘push in’, but since cuneiform writing on clay tablets involved ‘pushing in’, the word came to mean ‘writing’ in Elamite after writing was invented. The means that the populations separated before cuneiform writing was invented.

From the aforementioned archaeological and linguistic evidence it is possible to date the link between Dravidian and Elamite speaking populations as sometime between 7900BCE and 3000BCE. This corresponds to the genetic evidence that first Indians mixed with the Iranian agriculturalists between 4700 and 3000BCE. This suggests that the language of the Harappans is most likely Proto Dravidian.

## Decipherment Strategy
We will be testing the hypothesis that Proto Dravidian is the language of the Harappans in this project by comparing it to the Harappan script.

A significant step towards decipherment has been made by Dr. Brian Wells and Dr. Andreas Fuls who have created an extensive database (corpus) of Indus texts. I have contacted Dr. Andres Fuls and received access to this database.

Our strategy is to convert Tamil (The main Dravidian language) from a syllabic to a logo syllabic script by converting morphemes to signs.

However, the first step towards decipherment has been made by Dr. Brian Wells and Dr. Andreas Fuls who have created an extensive database (corpus) of Indus texts. I have contacted Dr. Andres Fuls and received access to this database for this project.



https://ufal.mff.cuni.cz/~ramasamy/tamiltb/0.1/introduction.html#1.2.Data

Morfessor algorithm:
https://github.com/aalto-speech/morfessor/blob/5314d3ebc1bea60b2145e96e0efaf8b21211af71/morfessor/baseline.py#L463

Jira Roadmap:
https://deciphering-the-indus-script.atlassian.net/jira/software/projects/DIS001/boards/1/roadmap?shared=&atlOrigin=eyJpIjoiOTJjNmYwYmE5NzliNDQ5ZDkwZTJlMDkyYWY0M2M0NDYiLCJwIjoiaiJ9 
