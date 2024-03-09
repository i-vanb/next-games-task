
export default async function Page() {

    return (
        <div>
            <h2>Задача 1. Передвинуть нули в конец массива</h2>
            <p>
                Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок других элементов.
            </p>
            <p>
                {'moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]) // returns[false,1,1,2,1,3,"a",0,0]'}
            </p>
            <div>
                <pre style={{color:'rgba(84, 244, 223, 1)'}}>
{`
    function moveZeros(nums) {
        let offset = 0;

        for(let i=0; i<nums.length; i++) {
            if(nums[i]===0) {
                offset++;
            } else if(offset){
                nums[i-offset] = nums[i];
                nums[i] = 0;
            }
        }
        return nums;
    };
`}
                </pre>
                <sub>
                    Задача решена. Время выполнения: O(n). Пространство: O(1).
                </sub>
            </div>
        </div>
    )
}