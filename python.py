
#  Given an array of numbers, write a JavaScript function to find the second largest number in the array.

def second_largest(numbers):
    largest = max(numbers)
    numbers.remove(largest)
    second_largest = max(numbers)
    return second_largest


# another way




class SecondLargest:
    def __init__(self, numbers):
        self.numbers = numbers
        
    def find_second_largest(self):
        largest = max(self.numbers)
        self.numbers.remove(largest)
        second_largest = max(self.numbers)
        return second_largest
