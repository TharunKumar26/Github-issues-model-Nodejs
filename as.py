
def collinear(array): 
      
    """ Calculation the area of   
        triangle. We have skipped  
        multiplication with 0.5 to 
        avoid floating point computations """
    if len(array) !=6:
        return "Please define three poimts"
    x1= array[0]
    y1=array[1]
    x2= array[2]
    y2= array[3]
    x3=array[4]
    y3= array[5]

        
    a = x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) 
  
    if (a == 0): 
        print("Yes")
    else: 
        print("No")
tests = int(input())
point={}

for i in range(tests):
	point[i]=input().split()
	for num in range(len(point[i])):
		point[i][num]=int(point[i][num])
	collinear(point[i])
	