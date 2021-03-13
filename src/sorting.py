
# selected = open("../selected.txt").read()
# list = selected.split('\n')
# list2 = sorted(list)
# list3 = "\n".join(list2)

# selected2 = open("../sorted.txt", "w")
# n = selected2.write(list3)
# selected2.close()

selected = open("../selected.txt").read()
str1 = "\n".join(sorted(selected.split("\n")))
str2 = open("../sorted.txt", "w")
str2.write(str1[1:])
str2.close()
