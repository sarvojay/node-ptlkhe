let i;
    for (i=1; i<=100; i++)
    {
        if (i%15 == 0)   
            document.write("amzon" + " ");
         
        else if ((i%3) == 0)
            document.write("google" + " ");               
        else if ((i%5) == 0)                   
            document.write("facebook" + " ");               
     
        else        
            document.write(i + " ");               
    }