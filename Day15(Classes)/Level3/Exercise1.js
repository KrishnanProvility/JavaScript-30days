class Statistics {
    constructor(data) {
        this.data = data;
        this.n = data.length;
    }

    count() {
        return this.n;
    }

    sum() {
        return this.data.reduce((a, b) => a + b, 0);
    }

    min() {
        return Math.min(...this.data);
    }

    max() {
        return Math.max(...this.data);
    }

    range() {
        return this.max() - this.min();
    }

    mean() {
        return this.sum() / this.count();
    }

    median() {
        const sortedData = [...this.data].sort((a, b) => a - b);
        const mid = Math.floor(this.n / 2);
        if (this.n % 2 === 0) {
            return (sortedData[mid - 1] + sortedData[mid]) / 2;
        } else {
            return sortedData[mid];
        }
    }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);

console.log(statistics.max())


console.log('Count:', statistics.count());
console.log('Sum: ', statistics.sum());
console.log('Min: ', statistics.min());
console.log('Max: ', statistics.max());
console.log('Range: ', statistics.range() );
console.log('Mean: ', statistics.mean()) ;
console.log('Median: ',statistics.median());