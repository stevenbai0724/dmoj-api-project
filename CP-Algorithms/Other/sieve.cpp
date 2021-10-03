//
#include <bits/stdc++.h>
using namespace std;
#define int long long
#define string std::string

signed main(){
    cin.tie(nullptr)->sync_with_stdio(false);

    vector<int>arr;
    vector<bool>prime(101, true);
    int n = 100;
    for(int i=2;i<=n;i++){
        if(prime[i]){
            arr.push_back(i);
            for(int j=2;j*i<=n;j++){
                prime[i*j] = false;
            }
        }
    }

    for(int x: arr)cout<<x<<" ";


    return 0;
}