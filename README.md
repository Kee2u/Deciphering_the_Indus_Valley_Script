# Deciphering the Indus Valley Script

This project is an attempt to decipher the ancient Indus Valley script by comparing it with modern Tamil (a Dravidan language).
\
Our strategy is to: <br>
<strong> Convert Tamil script from syllabic to logosyllabic by converting morphemes to signs. Perform statistical analysis to compare the converted script with the Indus script. </strong> 

Here are notes on terminology: <br>
<strong> Tamil </strong> - A Dravidian language <br>
<strong> Syllabic script </strong> - A writing system whose characters represent syllables. <br>
<strong> Logosyllabic script </strong> - A writing systems whose characters represent syllables, words and morphemes. <br>
<strong> Morpheme </strong>  - The smallest part of a word that changes its meaning. Ex- 'ing' in 'following' <br>

Note that the minimum number of signs required to express a full Subject-Object-Verb construction in a logosyllabic script is 3. The mean text length of the Harappan (Indus Valley) script is 4.5 signs. This suggests that it is a logosyllabic script and is why we are converting Tamil to one.

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
The 2013 paper ‘South Asia: Dravidian Linguistic History’ authored by Professor Franklin C. Southworth and Dr David W. McAlpin reconstructed Proto Dravidian (one of the two main Indian language families) vocabulary and found a link with Proto Elamite vocabulary (the language of the Zagros region). This suggests that the first Indians that mixed with the Iranian agriculturalists were speaking Proto Dravidian. The reconstructed Proto Dravidian vocabulary also pointed towards an agricultural lifestyle that was reinforced by archaeological evidence in the region of the admixture. 

From the vocabulary, it was also possible to estimate when the two populations separated. The word ‘tal’ exists in both Elamite and Proto-Dravidian, but with different meanings. In Elamite, 'tal' means ‘write’ and in Proto-Dravidian, it means ‘push in’. In a paper McAlpin authored in 1981, he explains that the original meaning of ‘tal’ was to ‘push in’, but since cuneiform writing on clay tablets involved ‘pushing in’, the word came to mean ‘writing’ in Elamite after writing was invented. The means that the populations separated before cuneiform writing was invented.

From the aforementioned archaeological and linguistic evidence it is possible to date the link between Dravidian and Elamite speaking populations as sometime between 7900BCE and 3000BCE. This matches the genetic evidence that first Indians mixed with the Iranian agriculturalists between 4700 and 3000BCE and shows that the language of the Harappans is most likely Proto Dravidian.

## Decipherment Strategy
Thus, we will be testing the <b>hypothesis</b> that Proto Dravidian is the language of the Harappans in this project by comparing modern Tamil with the Harappan script. 

A significant step towards decipherment has been made by Dr. Brian Wells and Dr. Andreas Fuls who have created an extensive database (corpus) of Indus texts. Through Dr. Andreas Fuls, we received access to this database. We will also be working with a tagged Part of Speech database of modern Tamil.

### Our plan:

### Use Python's pandas library on the tagged database to convert Tamil script from syllabic to logosyllabic.
The tagged Tamil database has segmented some of the morphemes but not all of them. We completed segmenting the noun and verb morphemes using python and then assigned new signs to them.

### Use PostgreSQL on an AWS RDS instance to store cleaned data. 
We have chosen to use a cloud server so both members of our team can access the data.

### Train an SVM machine learning algorithm on the morpheme segmented dataset and run it on an old Tamil dataset.
Currently, we are performing the analysis on modern Tamil but in the future, we will also do a statistical analysis on Old Tamil (Tamil Brahmi and Sangam Tamil). This requires us to segment old Tamil morphemes as well.

Based on our literature review, we have identified three ways of segmenting Tamil morphemes:

1. Using an unsupervised approach - Ex. Goldsmith's method of morpheme segmentation based on minimum description length (MDL) or a combination of (MDL) maximum a posterior as proposed by Creutz and Lagus in the Morfessor algorithm. 

2. Using FSA (Finite State Automata) - This requires a thorough knowledge of grammar rules.

3. Using a supervised machine learning approach - The paper 'Morpheme Extraction and Lemmatization for Tamil using Machine Learning' uses SVM to segment Tamil morphemes and has a promising F score of 90%.

In conclusion, we will use our tagged dataset to train and run an SVM on Old Tamil to segment morphemes. There will be a loss in accuracy due to changes in grammar rules but the hope is to either use FSA or an unsupervised approach to accomodate these changes.

### Perform statistical analysis on both the scripts
We will perform statistical analysis on both the Tamil and Indus scripts to evaluate metrics such as sign connectivity, positional frequency and polyvalency. Some methods we will use include z-scores, multivariate segmentation method and frequency histograms.

### Create visualizations using Tableau and present the data on a javascript dashboard using D3.js 
We will use Tableau’s JavaScript API to embed Tableau visualizations into a javascript dashboard and present our findings.




https://ufal.mff.cuni.cz/~ramasamy/tamiltb/0.1/introduction.html#1.2.Data

Morfessor algorithm:
https://github.com/aalto-speech/morfessor/blob/5314d3ebc1bea60b2145e96e0efaf8b21211af71/morfessor/baseline.py#L463

Jira Roadmap:
https://deciphering-the-indus-script.atlassian.net/jira/software/projects/DIS001/boards/1/roadmap?shared=&atlOrigin=eyJpIjoiOTJjNmYwYmE5NzliNDQ5ZDkwZTJlMDkyYWY0M2M0NDYiLCJwIjoiaiJ9 
