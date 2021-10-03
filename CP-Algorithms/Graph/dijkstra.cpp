//https://dmoj.ca/problem/sssp
#include <bits/stdc++.h>
using namespace std;
#define int long long
signed main(){
    cin.tie(nullptr)->sync_with_stdio(false);


    int n, m;
    cin>>n>>m;
    vector<vector<pair<int, int>>>adj(n+1);

    for(int i=1;i<=m;i++){
        int x, y, w;
        cin>>x>>y>>w;
        adj[x].push_back({w,y});
        adj[y].push_back({w,x});
    }

    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>>q;

    vector<int>dis(n+1, 1e18);

    dis[1] = 0;

    q.push({0,1});

    while(!q.empty()){
        int w = q.top().first;
        int y = q.top().second;
        q.pop();
        if(dis[y]<w)continue;

        for(auto nxt: adj[y]){
            int neww = nxt.first;
            int newy = nxt.second;
            if(neww+dis[y]<dis[newy]){
                dis[newy] = neww+dis[y];
                q.push({dis[newy], newy});
            }
        }
    }
    for(int i=1;i<=n;i++){
        if(dis[i]==1e18)cout<<"-1\n";
        else cout<<dis[i]<<"\n";
    }

    

    return 0;
}