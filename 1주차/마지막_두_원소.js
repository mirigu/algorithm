/**
 * 문제:
 * 정수 리스트 num_list가 주어질 때,
 * 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을
 * 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.
 */

const solution = (num_list) => {
  // num_list를 복사한 배열을 생성한다.
  const copyList = [...num_list];
  // num_list의 길이를 변수로 지정한다.
  const length = num_list.length;

  // num_list 배열의 마지막 요소가 그전 요소보다 큰 경우,
  num_list[length - 1] > num_list[length - 2]
    ? // 마지막 요소 - 그전 요소 의 값을 copyList 마지막 요소로 추가한다.
      copyList.push(num_list[length - 1] - num_list[length - 2])
    : // 크지 않은 경우, 마지막 요소*2의 값을 copyList 마지막 요소로 추가한다.
      copyList.push(num_list[length - 1] * 2);

  // copyList를 반환한다.
  return copyList;
};

console.log(solution([2, 1, 6]));
