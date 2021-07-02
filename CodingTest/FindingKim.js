//김서방 찾기
function solution(seoul) {
    var count = 0;
    while(true)
    {
        if(seoul[count] == "Kim")
        {
            break;
        }
        count++;
    }
    var answer = '김서방은 '+count+"에 있다";
    return answer;
}