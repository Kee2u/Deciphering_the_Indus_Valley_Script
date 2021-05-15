Title: 
------
AUKBC Tamil Part-of-Speech Corpus (AUKBC-TamilPOSCorpus2016v1) 


Introduction:
-------------
AUKBC Tamil Part-of-Speech Corpus (AUKBC-TamilPOSCorpus2016v1) was developed by the Computational Linguistic Research Group (CLRG), AU-KBC Research Centre, MIT Campus of Anna University, Chrompet, Chennai, India.

This is the largest corpus in Indian languages with 500K tokens annotated using the BIS POS tagset[1].
AUKBC-TamilPOSCorpus2016v1 is developed by the Computational Linguistic Research Group (CLRG), AU-KBC Research Centre, MIT Campus of Anna University, Chrompet, Chennai, India.

The source of the corpus is a very famous contemporary novel in Tamil "Ponniyin Selvan" written by "Kalki Krishnamoorthy”. It is a historical novel which narrates the story of Arulmozhivarman (later crowned as Rajaraja Chola I), one of the kings of the Chola Dynasty during the 10th and 11th centuries. Though this narrates the story of 10th and 11th centuries, the language style is in 20th century Tamil. 


Annotation Schema:
-----------------
This AUKBC-TamilPOSCorpus2016v1 corpus is a Tamil Part-of-Speech(POS) annotated corpus. The annotation guidelines and the tagset used is the BIS Tagset, and approved as standard by the Government of India and the Government of Tamil Nadu. The tagset and annotation guidelines are given as a separate document in this collection.

Corpus Statistics:
------------------

Total Number of sentences -   50,876
Number of tokens          - 5,15,283
Number of words           - 4,14,483
(without Punctuations and symbols)  

Manual Annotation Procedure and Validation:
-------------------------------------------
The corpus was annotated by four trained Linguists. Each of the annotator was allotated equal portion of the corpus for manual annotation. A manual annotation graphical user interface (GUI) tool was provided to the annotators for the POS annotation markup. The tool would load sentence by sentence, at any particular instant of time the annotator would be able to view one full sentence. The annotator has to select a word and tool would provide the POS tag options to the annotator to choose the right one. The use of annotation tool had helped the annotators in maintaining format consistency and avoid manual typing errors. This has also helped in improving the efficiency and productivity of the annotators.
All the portions of the corpus was annotated by atleast 2 different annotators and was cross validated by a Senior Linguist. We have found the inter annotator annotation agreement to be 0.91(kappa score).
Also we found that the original text corpus required to be edited for the computational purposes.We had performed the following corrections/modifications.
a) Splitting of Words -- Eg: RP+PRP constructions - Example: piranthavanY -> pirantha + avanY; Word + enYdru
b) Concatenation -- Eg: Reduplication words - Example:thattu thadumaari

Another point to note is in the corpus we found short poems in between the prose. These poems are not annotated with the POS. The poem phrases are tagged as "POEM" in the text.

Data Directory Structure:
-------------------------
This collections consists of the following-

|--README.txt --> The text you are reading
|--License.txt --> The text describing the terms and conditions of the usage license
|--POSAnnotationGuidelines.pdf --> The document describing the POS Annotation Schema (POS Tagset).
|--DTDDesc.txt --> The file describing the XML DTD format
|--Data -- The folder containing the data
    |--XML --> the XML folder consisting of the data files in XML format, whose DTD is specified in the DTDDesc.txt
	|--en_tag
            |--data_vol1.xml --> the data file 1
	    |--data_vol2.xml --> the data file 2
	    |--data_vol3.xml --> the data file 3
	    |--data_vol4.xml --> the data file 4
	    |--data_vol5.xml --> the data file 5
	|--ta_tag
            |--data_vol1.xml --> the data file 1
	    |--data_vol2.xml --> the data file 2
	    |--data_vol3.xml --> the data file 3
	    |--data_vol4.xml --> the data file 4
	    |--data_vol5.xml --> the data file 5

   |--Col  --> the COL folder consisting of data files in tab separated column format
	|--en_tag
            |--data_vol1_col.txt --> the data file 1
	    |--data_vol2_col.txt --> the data file 2
	    |--data_vol3_col.txt --> the data file 3
	    |--data_vol4_col.txt --> the data file 4
	    |--data_vol5_col.txt --> the data file 5
	|--ta_tag
            |--data_vol1_col.txt --> the data file 1
	    |--data_vol2_col.txt --> the data file 2
	    |--data_vol3_col.txt --> the data file 3
	    |--data_vol4_col.txt --> the data file 4
	    |--data_vol5_col.txt --> the data file 5

Note: The data files are little huge and it may take time to load and open in some machines. Please kindly note that these are UTF encoding files, so please use appropriate Tamil UTF fonts such as ArialUnicode, AksharUnicode.

Citation:
--------
Sobha Lalitha Devi, Sindhuja Gopalan, L Gracy, N Padmapriya, A Gnanapriya and N H Parimala. 2016. "AUKBC Tamil Part-of-Speech Corpus (AUKBC-TamilPOSCorpus2016v1)".Web Download. Computational Linguistics Research Group, AU-KBC Research Centre, Chennai, India, 2016.

Credits:
--------
Sobha Lalitha Devi, Sindhuja Gopalan, L Gracy, N Padmapriya, A Gnanapriya and N H Parimala
Computational Linguistics Research Group(CLRG), AU-KBC Research Centre, MIT Campus of Anna University, Chrompet, Chennai, India.



