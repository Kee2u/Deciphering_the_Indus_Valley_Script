# Statistical Anaylsis

The Statistical Analysis in this project follows the equations outlined by Dr. Andres Fuls in the appendix of "Archaeology and Epigraphy of Indus Writing". They were modified slightly to accommodate this dataset. It consists of two parts:
 
## Creating positional Histograms
   The normalized weighted sign position for each sign was calculated. A sign sequence length of 10 was used. 
   The equations used to calculate the relative sign positiona were:
    
  >MINP = (SP-1) x NL/L
  
  >MAXP = SP x NL/L

   Where:
   SP = absolute sign position </br>
   L = test length </br>
   NL = normalized text length (here NL = 10 signs) </br>
   MINP = minimum of relative text position </br>
   MAXP = maximum of relative text   position </br>
  
  The equation from the book for MINP included a +1 term but I omitted it because:
   - It caused the minimum position to be greater than the maximum position in some cases
   - Upon deriving the formula for minimum position, the +1 term was absent
    
## Multivarite Segmentation Analysis
   Used to calculate connectivity between signs and determine morpheme boundaries. The connectivity between each sign pair in a sentence is given by the formula:

   > Connectivity = 1.5 - NPI x KI -NPT x KT - NPPI x KITP - NPPT x KITP + NPP x KP +- NIT x KIT

   The mutiplication factors are:
   KI = 0.2 
   KT = 0.2
   KP = 1.0
   KITP = 1.0
   KIT - 1.0
     
   ### Initial Sign
   If the initial frequency of a sign is larger than its terminal frquency, the connectivity to the previous sign is decreased by NPI(i)
   
   > NPI(i) = log(initial frequeny of sign i)/log(total frequency of sign i)

   In this dataset, I used 
