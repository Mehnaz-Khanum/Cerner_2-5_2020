from functools import reduce
n = 10
fibs = reduce(lambda x, _: x + [x[-2] + x[-1]], [0] * (n-2), [0, 1])
print(fibs)

#Smallest code to print n number of fibonacci numbers
#"cerner_2^5_2020"
