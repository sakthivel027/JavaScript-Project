#read.js
from IPython.display import clear_output
cart=[]

def addItem(item):
    clear_output()
    cart.append(item)
    print('{} has been added.'.format(item))

def removeItem(item):
    clear_output()
    try:
        cart.remove(item)
        print('{} has been removed.'.format(item))
    except:
        print('Sorry we could not remove that item')

def showCart():
    clear_output()
    if cart:
        print('Here is your card:')
        for item in cart:
            print('- {}'.format(item))
        else:
            print('Your cart is empty.')

def clearCart():
    clear_output()
    cart.clear()
    print('Your cart is empty.')

def main():
    done = False

    while not done:
        ans = input('quit/add/remove/show/clear:').lower()

        if ans == 'quit':
            print('Thanks for using our program.')
            showCart()
            done = True
#main()

            item = input('What would you like to add?').title()
            addItem(item)
        elif ans == 'remove':
            showCart()
            item = input('What item would you like to remove?').title()
            removeItem(item)
        elif ans == 'show':
            showCart()
        elif ans == 'clear':
            clearCart()
        else:
            print('Sorry that was not an option.')
main()

# Python3 code to calculate age in years

from datetime import date

def calculateAge(birthDate):
	today = date.today()
	age = today.year - birthDate.year -
		((today.month, today.day) <
		(birthDate.month, birthDate.day))

	return age
	
# Driver code 
print(calculateAge(date(1997, 2, 3)), "years")


#Sure! Here's a simple Python script to generate a random password:

#```python
import random
import string

def generate_password(length):
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(characters) for _ in range(length))
    return password

# User Input
password_length = int(input("Enter the desired password length: "))

# Generate Password
generated_password = generate_password(password_length)

# Display the Password
print("Generated Password:", generated_password)
```






