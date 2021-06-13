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

   The multiplication factors are:
   KI = 0.2 
   KT = 0.2
   KP = 1.0
   KITP = 1.0
   KIT - 1.0
   
   In this dataset, I used words boundaries instead of sentence boundaries (done for the Indus script)to calculate initial and terminal signs. This is because Tamil word boundaries are known while Indus word boundaries are not.
   
   ### Initial Sign
   If the initial frequency of a sign is larger than its terminal frquency, the connectivity to the previous sign is decreased by NPI(i)
   
   > NPI(i) = log(initial frequeny of sign i)/log(total frequency of sign i)
   
   ### Terminal Sign
   If the initial frequency of a sign i smaller than the terminal frequency of a sign, the connectivity to the following sign is decreased by NPT(i)
   
   > NPT(i) = log(terminal frequency of sign i)/(log frequency of sign i)

   ### Bounded Sign Pairs
   
   > NPP(i,j) = log(pair frequency of f(i,j))/log(minimum of total sign frequency f(i),f(j))
   
   ### Initial Sign Pairs
   If a sign pair i,j has a high frequency of being used in the initial position, the chance of a morphological boundary before the sign pair increases, but only if the previous initial or terminal pair frequency is smaller than the actual initial pair frequency, and if the frequency of sign i and j is greater than one. In this case, the connectivity to the previous sign is decreased by:
   
   > NPPI(i, j) = log(pair frequency+1)/log(frequency of sign i)/log(frequency of sign j)
   
   ### Terminal Sign Pairs
   If a sign pair i,j has a high frequency of being used in the terminal position, the chance of a morphological boundary after the sign pair increases, but only if the following initial or terminal pair frequency is smaller than the actual initial pair frequency. In this case, the connectivity to the next sign is decreased by:

   > NPPT(i, j) = log(pair frequency+1)/log(frequency of sign i)/log(frequency of sign j)
   
   ### Ratio of Initial to Terminal Sign Frequency
   If the intitial frequency of the first sign (i) is greater than its terminal frequency, and the terminal frequency of the second sign (j) is greater than the initial frequency, then the strength of the sign pair increases by:
   
   > NIT = log(initial frequency of sign j)/log(frequency of sign j) * log(terminal frequency of sign i)/log(frequency of sign i)
   
   OR
   
   If the terminal frequency of the first sign (i) is greater than its initial frequency, and the initial frequency of the second sign (j) is greater than the terminal frequency, then the strength of the sign pair decreases by:
   
   > NIT = log(terminal frequency of sign j)/log(frequency of sign j) * log(initial frequency of sign i)/log(frequency of sign i)
