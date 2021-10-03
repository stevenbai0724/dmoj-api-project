import java.util.*;
import java.io.*;

public class quicksort{

    static int[] arr;
    public static void main(String[]args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        arr = new int[n];

        for(int i=0;i<n;i++){
            arr[i] = sc.nextInt();
        }
        sort(arr, 0,n-1);
        for(int i :arr){
            System.out.println(i);
        }
    
    }
    public static void sort(int arr[], int low, int high){
        int i = low;
        int j = high;
        int temp;
        int p = arr[(low+high)/2];

        while(i<=j){
            while(arr[i]<p) i++;
            while(arr[j]>p) j--;

            if(i<=j){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
                j--;
            }
        }
        if(low<j){
            sort(arr, low, j);
        }
        if(i<high){
            sort(arr, i, high);
        }

    }
}