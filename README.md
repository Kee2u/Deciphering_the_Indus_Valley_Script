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

Note that the minimum number of signs required to express a full Subject-Object-Verb construction in a logosyllabic script is 3. The mean text length of the Harappan (Indus Valley) script is 4.5 signs. This is how we know that the Indus script is logosyllabic. [1]

<img src = "https://github.com/Kee2u/Deciphering_the_Indus_Valley_Script/blob/Keetu_Code/Pictures/Unicorn.jpg?raw=true" width = 400>

## Introduction
The Indus Valley or Harappan civilization is India's oldest civilization spanning from 5500 BCE to 1300 BCE. However, their writing system is still undeciphered. The obstacles to deciphering the script have included:
 - The exact uses of the artifacts are mostly unknown.
 - The root language of the script is unknown.
 - The texts are short (mean = 4.5 signs).
 - There are no bilingual texts.
 - The complete corpus of the text was not widely available. [1]

Since 2013, however, there have been breakthroughs in the field of population genetics that have given clues about the root language of the script. Through studying mtDNA and Y chromosomes of ancient and modern populations (these get passed down through generations with a few mutations) and whole genome sequencing (which is no longer computationally expensive), it is possible to put a timeline on key population migrations into India starting from the original Out of Africa migrants. [2]

## Language
One of the seminal papers that contributed to this understanding of population migrations was 'The Genomic Formation of South and Central Asia' published in March 2018 and authored by 92 scientists. [3]

It supported the theory that Indo-European-language speakers who called themselves Aryans migrated to India from central Asia around 4000 years ago (after the decline of the Harappan Civilization). This finding potentially rules out the possibility that the Harappan language was Indo-European.

It also showed that Harappans were a mixture of Iranian agriculturists from the Zagros region and descendants of the 'First Indians' (Original out of Africa migrants). Genetic research showed that the admixture between the two populations took place between 4700 BCE and 3000 BCE. Archaeological evidence reinforced this. Similar quadrangular houses built with narrow bricks about sixty centimetres long, circular firepits filled with burnt pebbles and sequential slab pottery were found at both sites. [4]

### Proto Dravidian Evidence
The 2013 paper ‘South Asia: Dravidian Linguistic History’ authored by Professor Franklin C. Southworth and Dr David W. McAlpin reconstructed Proto Dravidian (one of the two main Indian language families) vocabulary and found similarities with Proto Elamite vocabulary (the language of the Zagros region). [5] The reconstructed Proto Dravidian vocabulary also pointed towards an agricultural lifestyle that was reinforced by archaeological evidence in the region of the admixture. This suggests that there was contact between proto dravidian and proto elamite speaking populations. 

From the vocabulary, it was also possible to estimate when the two populations separated. The word ‘tal’ exists in both Elamite and Proto-Dravidian, but with different meanings. In Elamite, 'tal' means ‘write’ and in Proto-Dravidian, it means ‘push in’. In a paper McAlpin authored in 1981 [6], he explains that the original meaning of ‘tal’ was to ‘push in’, but since cuneiform writing on clay tablets involved ‘pushing in’, the word came to mean ‘writing’ in Elamite after writing was invented. The means that the populations separated before cuneiform writing was invented.

From the aforementioned archaeological and linguistic evidence it is possible to date the link between Dravidian and Elamite speaking populations as sometime between 7900BCE and 3000BCE. This matches the genetic evidence that first Indians mixed with the Iranian agriculturalists between 4700 and 3000BCE. Since this population went on to become the Harappans, it shows that the language of the Harappans is most likely Proto Dravidian (with influences from Proto Elamite). It is this language that evolved into the major Dravidian languages of today (Tamil, Telugu, Kannada etc).

<img src = "https://github.com/Kee2u/Deciphering_the_Indus_Valley_Script/blob/Keetu_Code/Pictures/Mehrgarh.jpg?raw=true" width = 500>

## Decipherment Strategy
Thus, we will be testing the <b>hypothesis</b> that Proto Dravidian is the language of the Harappans by comparing modern Tamil with the Harappan script. 

A significant step towards decipherment has been made by Dr. Brian Wells and Dr. Andreas Fuls who have created an extensive database (corpus) of Indus texts. Through Dr. Andreas Fuls, we received access to this database. We will also be working with two tagged Part of Speech databases of modern Tamil. [7] [8] [9]

### Our plan:

### Use Python's pandas library on the tagged database to convert Tamil script from syllabic to logosyllabic.
The first tagged Tamil database has segmented some of the morphemes but not all of them. We completed segmenting the noun and verb morphemes using python and then assigned new signs to them.

### Use PostgreSQL on an AWS RDS instance to store cleaned data. 
We have chosen to use a cloud server so both members of our team can access the data.

### Train an SVM machine learning algorithm (from SciKitLearn library) on the morpheme segmented dataset and run it on an old Tamil dataset.
Currently, we are performing the analysis on modern Tamil but in the future, we will also do a statistical analysis on Old Tamil (Tamil Brahmi and Sangam Tamil). This requires us to segment old Tamil morphemes as well.

Based on our literature review, we have identified three ways of segmenting Tamil morphemes:

1. Using an unsupervised approach - Ex. Goldsmith's method of morpheme segmentation based on minimum description length (MDL), joint Bayesian probability or a combination of (MDL) maximum a posterior as proposed by Creutz and Lagus in the Morfessor algorithm. [10] [11] [12] 

2. Using FSA (Finite State Automata) - This requires a thorough knowledge of grammar rules. [13]

3. Using a supervised machine learning approach - The paper 'Morpheme Extraction and Lemmatization for Tamil using Machine Learning' uses SVM to segment Tamil morphemes and has a promising F score of 90%. [14]

A Support Vector machine is a good choice since this is a binary classification problem and it can provide a high accuracy with less computational power. It calculates the ideal hyperplane to separate the data by maximizing the margin distance at feature boundaries. We will use our tagged dataset to train and run an SVM on Old Tamil to segment morphemes. There will be a loss in accuracy due to changes in grammar rules but the hope is to either use FSA or an unsupervised approach to accomodate these changes. Our second Tamil database will be used as training data to refine the SVM before running it on an old Tamil dataset.

### Perform statistical analysis on both the scripts
We will perform statistical analysis on both the Tamil and Indus scripts to evaluate metrics such as sign connectivity, positional frequency and polyvalency. Refer

### Create visualizations using Tableau and present the data on a javascript dashboard using D3.js 
We will use Tableau’s JavaScript API to embed Tableau visualizations into a javascript dashboard and present our findings.

### Communication Protocol
We are using Agile Project Management tools on Jira Software to keep track of our progress and deadlines.

![img](https://github.com/Kee2u/Deciphering_the_Indus_Valley_Script/blob/main/Pictures/Roadmap.PNG)

# First Segment Project Deliverable Submission
Referring to main branch of Deciphering_the_Indus_Valley_Script repository:

### Triangle Role
Refer to <b>Machine_Learning_Preprocessing.ipynb</b> for simple Machine Learning model.

### X Role
Refer to <b>README.md</b> file for list of technologies used for project

### Circle Role
Refer to <b>ERD.sql</b> and <b>ERD.png</b> for database schema submission. Refer to <b>Union.sql</b> for a union query to join to tables in PostgreSQL. For Database Cleaning Pandas SQL code refer to the file <b>Converted_Tamil/Data_preprocessing.docx</b>. It will explain the following files <b>Tamil_Morpheme_List.ipynb</b> <b>Convert_morphemes.ipynb</b> <b>Convert_lemmas.ipynb</b> <b>Convert_clitics.ipynb</b> <b>Convert_logosyllabic_words_to_sentences.ipynb</b> 

### Square Role
Git branches created for each team member. Sonia Sharma - Sonia_Code and Keerthana Jayakumar - Keetu_Code


# Second Segment Project Deliverable Submission
Referring to main branch of Deciphering_the_Indus_Valley_Script repository:

### Triangle Role - Database
Refer to <b>ERD.sql</b> and <b>ERD.png</b> for database schema submission. Refer to <b>Union.sql</b> for a union query to join to tables in PostgreSQL. For Database Cleaning Pandas SQL code refer to the file <b>Converted_Tamil/Data_preprocessing.docx</b>. It will explain the following files <b>Tamil_Morpheme_List.ipynb</b> <b>Convert_morphemes.ipynb</b> <b>Convert_lemmas.ipynb</b> <b>Convert_clitics.ipynb</b> <b>Convert_logosyllabic_words_to_sentences.ipynb</b> 

### X Role - Visualization/Presentation
Refer to <b>Indus Valley Girls.pptx</b> file for details on Visualization and overall presentation.

### Circle Role - Analysis
Refer to <b>Indus Valley Girls.pptx</b> for a summary of the statistical analysis and <b>Multivariate_Segmentation.ipynb</b> for initial statistical analysis cleaning.

### Square Role - Machine Learning
Git branches created for each team member. Sonia Sharma - Sonia_Code and Keerthana Jayakumar - Keetu_Code. 
Refer to <b>Machine_Learning_Preprocessing_Data.ipynb</b> and <b>TestSVM.ipynb</b> for supervised Machine Learning model, see <b>Machine Learning Algorithm.docx</b> for details on Machine Learning algorithm to be used in project, and <b>Indus Valley Girls.pptx</b> file for a brief summary of the Machine Learning algorithm to be used in project.


# References
[1] Wells, B. K. (2015). The Archaeology and Epigraphy of Indus Writing (UK ed.). Archaeopress Archaeology.

[2] Joseph, T. (2018). Early Indians : The Story of Our Ancestors and Where We Came From. Juggernaut Publication.

[3] Narasimhan, Vagheesh & Patterson, Nick & Moorjani, Priya & Lazaridis, Iosif & Lipson, Mark & Mallick, Subhashis & Rohland, Nadin & Bernardos, Rebecca & Kim, Alexander & Nakatsuka, Nathan & Olalde, Iñigo & Coppa, Alfredo & Mallory, James & Moiseyev, Vyacheslav & Monge, Janet & Olivieri, Luca & Adamski, Nicole & Broomandkhoshbacht, Nasreen & Candilio, Francesca & Reich, David. (2018). The Genomic Formation of South and Central Asia. https://doi.org/10.1101/292581. 

[4] Jarrige, J. F., Castillo, D. S., & Wengle, L. (2013). Mehrgarh: Neolithic Period Seasons 1997–2000. Mission archéologique française en Asie centrale et en Asie moyenne.

[5] Southworth, F.C. and McAlpin, D.W. (2013). 30 South Asia: Dravidian linguistic history. In The Encyclopedia of Global Human Migration, I. Ness (Ed.). https://doi.org/10.1002/9781444351071.wbeghm830

[6] McAlpin, D. W. (1981). Proto-Elamo-Dravidian: The Evidence and Its Implications. Transactions of the American Philosophical Society, 71(3), 1. https://doi.org/10.2307/1006352

[7]Wells, B. K., & Fuls, A. (2006). ICIT Database of Indus Writing [Dataset]. https://www.indus.epigraphica.de/

[8] Ramasamy, L., & Abokrtsk, Z. (2011). Tamil dependency parsing: results using rule based and corpus based approaches [Dataset]. Springer-Verlag. http://portal.acm.org/citation.cfm?id=1964799.1964808
License: http://creativecommons.org/licenses/by-nc-sa/3.0/                   
http://creativecommons.org/licenses/by-nc-sa/3.0/legalcode

[9] Sobha Lalitha Devi, Pattabhi RK Rao, Vijay Sundar Ram R and Malarkodi C.S. (2016).
"AUKBC Tamil Part-of-Speech Tagger (AUKBC-TamilPOSTagger2016v1)".Web Download.
Computational Linguistics Research Group, AU-KBC Research Centre, Chennai, India, May 2016. 

[10] Sheshasaayee, A., & Deepa, A. (2014). A structured analysis on analysis on morpheme segmentation for agglutinative languages Dr. Ananthi Sheshasaayee1 , Angela Deepa.V.R. International Journal of Advanced Technology in Engineering and Science, 02(01).

[11] Kumar, A., Padró, L., & Oliver, A. (2015). Joint Bayesian Morphology Learning for Dravidian Languages.

[12] Creutz, M., & Lagus, K. (2007). Unsupervised models for morpheme segmentation and morphology learning. ACM Transactions on Speech and Language Processing, 4(1), 1–34. https://doi.org/10.1145/1187415.1187418

[13] Devi, S., Marimuthu, K., sundar, V., Ram, R., & Amudha, K. (2013). Morpheme Extraction in Tamil using Finite State Machines (FIRE-2013 - Morpheme Extraction Task).

[14] Kumar, M. A., & Kp, S. (2015). AMRITA_CEN@FIRE-2014: Morpheme Extraction and Lemmatization for Tamil using Machine Learning. https://doi.org/10.1145/2824864.2824883

Links: <br>
Tagged Tamil Dataset:
https://ufal.mff.cuni.cz/~ramasamy/tamiltb/0.1/introduction.html#1.2.Data

Morfessor algorithm:
https://github.com/aalto-speech/morfessor/blob/5314d3ebc1bea60b2145e96e0efaf8b21211af71/morfessor/baseline.py#L463


