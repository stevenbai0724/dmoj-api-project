//
#include <bits/stdc++.h>
using namespace std;
#define int long long

signed main(){
    cin.tie(nullptr)->sync_with_stdio(false);

    int n; cin>>n;  

    vector<int>arr;

    for(int i=2;i*i<=n;i++){
        while(n%i==0){
            n/=i;
            arr.push_back(i);
        }

    }
    if(n>1)arr.push_back(n);

    for(int x: arr){
        cout<<x<<" ";
    }
    cout<<"\n";


    return 0;
}