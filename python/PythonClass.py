class Students:

   def __init__(self,x,y):
       self.name=x
       self.rollno=y

   def printData(self):
        print("Name =",self.name) 
        print("RollNo =",self.rollno)   

   def getAge(self,myAge):
        print('Age is '+str(myAge))

s=Students("Rahul R",1)

x=int(input("Enter the Age"))

s.printData()
s.getAge(x)