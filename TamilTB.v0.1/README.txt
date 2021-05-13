Tamil Dependency Treebank v0.1
==============================

This package contains the syntactically (dependency) annotated corpora for Tamil.

Contents of this package
=======================

	data/	
		./TamilTB.v0.1.tmt - Dependency treebank in TMT format
		./TamilTB.v0.1.conll - Dependency treebank in CoNLL format, transliterated
		./TamilTB.v0.1.utf8.conll - Dependency treebank in CoNLL format, UTF8
		./TamilTB.v0.1.tt - TnT style POS tagged corpora, transliterated
		./TamilTB.v0.1.utf8.tt - TnT style POS tagged corpora, UTF8
	doc/
		./index.html - Documentation for the treebank data
		...
		...
		...
		...
    README.txt - This file


TMT Format
==========

Dependency trees can be viewed/modified using tree editor TrEd. 

Use tmttred for viewing TamilTB.v0.1.tmt.


CoNLL Format
============

CoNLL format is provided mainly to use machine learning parsers to train the parsing models for Tamil


POS Tagged Corpora
==================

The POS tagged corpora can be used to train the machine learning taggers. The data follows the TnT format. 

The first column contains the wordform.
The second column contains the POS tag.
The third column contains the lemma. 




License
=======
TamilTB.v0.1 by Institute of Formal and Applied Linguistics (UFAL) is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.

http://creativecommons.org/licenses/by-nc-sa/3.0/
