function analyzeArray(nums){
    const avg = nums.reduce((a,b) => a+b) / nums.length;
    const minVal = Math.min.apply(Math, nums);
    const maxVal = Math.max.apply(Math, nums);

    const object = {
        average: avg,
        min: minVal,
        max: maxVal,
        length: nums.length
    };
    return object;
}

module.exports = analyzeArray;