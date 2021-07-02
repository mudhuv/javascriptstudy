//수박수박수박수
function solution(n) {
    var watermelon = ['수','박'];
    var answer = '';
    for(var i=0; i<n; i++)
    {
        answer += watermelon[i%2];
    }
    return answer;
}