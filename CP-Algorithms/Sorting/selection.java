//selection sort
import java.util.*;
import java.io.*;

public class selection{
    public static void main(String[]args){
        Scanner sc = new Scanner (System.in);

        int n = sc.nextInt();
        int [] arr = new int[n];

        for(int i=0;i<n;i++){
            arr[i] = sc.nextInt();
        }

        for(int i=0;i<n-1;i++){
            int mn = 10000000;
            int index = 0;
            for(int j=i;j<n;j++){
                if(arr[j]<mn){
                    mn = arr[j];
                    index = j;
                }
            }
            int temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
        }
        for(int i:arr){
            System.out.println(i);
        }
    }
}