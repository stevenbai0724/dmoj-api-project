//
#include <bits/stdc++.h>
#include <ext/pb_ds/assoc_container.hpp>
#include <cmath>    
using namespace __gnu_pbds;
using namespace std;

#define int long long
#define string std::string
const int mod = 1e9 + 7;
mt19937_64 rng(std::chrono::system_clock::now().time_since_epoch().count());


signed main(){
    cin.tie(nullptr)->sync_with_stdio(false);
    
    vector<int>arr{(int)-1e18,1,2,3,4};

    for(int i=1;i<(1<<4);i++){
        for(int j=0;j<4;j++){
            if((1<<j)&i){
                cout<<j+1<<" ";
            }
            
        }
        cout<<"\n";
    }

    return 0;
}