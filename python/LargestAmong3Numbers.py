num1=int(input("Enter 1st Number"))
num2=int(input("Enter 2nd Number"))
num3=int(input("Enter 3rd Number"))
if(num1>num2):
    if(num1>num3):
        print("Largest Number is",num1)
    else:
        print("Largest Number is",num3)   

else:
    if(num2>num3):
        print("Largest Number is",num2)
    else:
        print("Largest Number is",num3)    