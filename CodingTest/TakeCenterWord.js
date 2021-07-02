function solution(s) {
    //가운데글자 가져오기
    var length = 0;
    var answer = '';
    length = s.length;
    if(length%2 == 0)
    {
        answer = s[length/2 - 1]+s[length/2];
    }
    else
    {
        answer = s[Math.floor(length/2)];
    }
    return answer;
}