//bubble sort
import java.util.*;
import java.io.*;

public class bubble{
    public static void main(String[]args){
        Scanner sc = new Scanner (System.in);

        int n = sc.nextInt();
        int [] arr = new int[n];

        for(int i=0;i<n;i++){
            arr[i] = sc.nextInt();
        }
        while(true){
            Boolean sort = true;
            for(int i=1;i<n;i++){
                if(arr[i]<arr[i-1]){
                    sort = false;
                    int temp = arr[i];
                    arr[i] = arr[i-1];
                    arr[i-1] = temp;
                }
            }
            if(sort)break;
        }
        for(int i:arr){
            System.out.println(i);
        }

    }
}
