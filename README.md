# Algorithm-questions-generator

Creating random questions to be generated to your readme.


<h4>Question 1</h4>

<p class = 'question'>
Write a function called sumZero which accepts sorted array of integers. The function should find the first pair 
that sums up to 0. Return a array that inludes both values that sums to zero or undefined if the pair does not exist.
</p> 

<p class = 'output'>
Example of the outputs
  
 `sumZero([-3,-2,-1,1,2,3]) -3,3 ` 
 
 `sumZero([-1,1,3,2,4,0,-3,-2,-4]); -4,4`
 
 `sumZero([-2,0,1,3]) undefined`
 
 `sumZero([1,2,3]) undefined`
 
 #### Constrictions
`time complexity = 0(n)`
`space complexity = 0(1)`
</p>



<details> 
  <summary> <b>Solution</b> </summary>
<p class = "answers">
	
```javascript
const sumZero = (arrs) =>{
   arrs.sort();
   
   let left = 0;
   let right = arrs.length -1;

   
   while(left < right){
       let sum = arrs[left] + arrs[right];
       if(sum === 0){
           return [arrs[left], arrs[right]];
       }else if(sum > 0){
           left ++;
       }else{
           right--;
       }
   }
}

```
</p>
</details>

