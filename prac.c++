#include<bits/stdc++.h>
using namespace std;
typedef long long ll;

int main(){
    ll t;
    cin >> t;
    
    while(t--){
        ll n;
        cin >> n;
        
        ll arr[n] = {0};
        map<ll, ll>mp;

        for(ll i = 0;i < n;i++){
            cin >> arr[i];
            mp[arr[i]]++;
        }
        
        if(mp.size() > 2){
            cout << "NO" << endl;
        }
        else if(mp.size() == 1){
            cout << "YES" << endl;
        }
        else{
            ll freq1 = mp.begin()->second;
            ll freq2 = mp.rbegin()-> second;
            
            if(freq2 == freq1){
                cout << "YES" << endl;
            }
            else if(abs(freq1  - freq2) == 1 && n % 2 == 1){
                cout << "YES" << endl;
            }
            else{
                cout << "NO" << endl;
            }
        }
    }
    
    return 0;
}