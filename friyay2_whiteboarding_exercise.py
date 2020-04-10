##Friyay2 Whiteboarding Exercise

# QUESTION 1
# write has_same_digit_frequency
# accepts 2 lists and returns whether they have the same frequency of digits:
# {1, 2, 3, 4) = {4, 3, 2, 1} = True

# from collections import Counter

# list1 = [5, 5, 5, 5, 5]
# list2 = [5, 5, 5, 5]

# def is_true(list_a, list_b):
#     list_x = []
#     list_y = []
#     for x in range(len(list_a)):
#         list_x.append(x)
#         for y in range(len(list_b)):
#             list_y.append(y)
#     if set(list_x) == set(list_y):
#         return "They're frequency matches!"
#     else:
#         return 'They dont match..'

# print(is_true(list1, list2))

# QUESTION 2

#write a function called most_charachters that 
#accepts a string and returns the character that appears the most

			
def most_characters():
    string = input('Enter a string: ')
    string = string.lower()
    abc_dict = {'letter' : []}
    string_list = []
    for x in range(len(string)):
        abc_dict['letter'].append(string[x])
        string_list = abc_dict['letter']
    return string_list


def frequency(my_func):
    most = 0
    most_freq = ''
    for x in my_func:
        if my_func.count(x) > most:
            most = my_func.count(x)
            most_freq = x
            return f'{most_freq} had the most occurences with {my_func.count(x)}.'
print(frequency(most_characters()))



##THESE 2 function work on their own as is.. trying to combine them above			
# def most_characters():
#     string = input('Enter a string: ')
#     abc_dict = {'letter' : []}
#     for x in range(len(string)):
#         #print(string[x])
#         abc_dict['letter'].append(string[x])
#     return abc_dict
# print(most_characters())

# def frequency(str1):
#     most = 0
#     most_freq = ''
#     for letter in abc_dict['letter']:
#         if str1.count(letter) > most:
#             most = str1.count(letter)
#             most_freq = letter
#             return f'{most_freq} had the most occurences with {str1.count(letter)}.'