/*
Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation).
In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample.
You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class.
Check the output below.

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 29.76
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 18.27333
console.log('Standard Deviation: ', statistics.std()) // 4.274732
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
*/

class Statistics {
  constructor(ages) {
    this.ages = ages.sort();
  }

  count() {
    return this.ages.length;
  }

  sum() {
    return this.ages.reduce((sum, age) => sum + age);
  }

  min() {
    return Math.min(...this.ages);
  }

  max() {
    return Math.max(...this.ages);
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    return this.sum() / this.count();
  }

  median() {
    let median = 0;
    const count = this.count();
    if (count % 2 == 0) {
      const mid = count / 2;
      median = (this.ages[mid - 1] + this.ages[mid]) / 2;
    } else {
      const mid = parseInt(count / 2);
      median = this.ages[mid];
    }
    return median;
  }

  mode() {
    const mode = {};
    let max = 0;
    let count = 0;

    this.ages.forEach((age) => {
      if (mode[age]) {
        mode[age]++;
      } else {
        mode[age] = 1;
      }

      if (mode[age] > count) {
        max = age;
        count = mode[age];
      }
    });

    return { mode: max, count };
  }

  var() {
    const mean = this.mean();
    const deviationSum = this.ages.reduce(
      (sqrdDev, age) => sqrdDev + Math.pow(Math.abs(age - mean), 2),
      0
    );
    return deviationSum / (this.count() - 1);
  }

  std() {
    return Math.sqrt(this.var());
  }

  freqDist() {
    const distribution = {};
    const count = this.count();
    let result = [];

    this.ages.forEach((age) => {
      if (distribution[age]) {
        distribution[age]++;
      } else {
        distribution[age] = 1;
      }
    });

    for (const age in distribution) {
      const frequency = distribution[age];
      const relativeFrequency = (frequency / count) * 100;
      result.push(`(${age}, ${relativeFrequency})`);
    }

    return result;
  }
}

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const statistics = new Statistics(ages);

console.log("Count:", statistics.count());
console.log("Sum: ", statistics.sum());
console.log("Min: ", statistics.min());
console.log("Max: ", statistics.max());
console.log("Range: ", statistics.range());
console.log("Mean: ", statistics.mean());
console.log("Median: ", statistics.median());
console.log("Mode: ", statistics.mode());
console.log("Variance: ", statistics.var());
console.log("Standard Deviation: ", statistics.std());
console.log("Frequency Distribution: ", statistics.freqDist());
