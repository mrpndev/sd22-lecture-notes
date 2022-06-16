let grades = {
    midterm: { grade: 3.3, weight: 1 },
    project: { grade: 4.0, weight: 1 },
    final: { grade: 3.2, weight: 2 }
}

// function gpa(grade) {
//     let gradesToWeight = Object.key(grade)
//     let gradeSum = 0
//     let weightSum = 0
//     gradesToWeight.forEach((key) => {
//         gradeSum += (grade[key].grade * grade[key].weight)
//         weightSum += grade[key].weight
//     })
//     return gradeSum / weightSum
// }
// gpa(grades)

function gpa(grade) {
    let gradesToWeight = Object.values(grade)
    console.log(gradesToWeight)
    let gradeSum = 0
    let weightSum = 0
    gradesToWeight.forEach((key) => {
        gradeSum += (key.grade * key.weight)
        weightSum += (key.weight)
    })
    return gradeSum / weightSum
}
console.log(gpa(grades))

// gpa add all grades and divide by the number of the grades
// for weighted: take the grade and multiply by the weight. Only then add those values and divide the sum by the number of the grades
// ex (3.3*1 + 4.0*1 + 3.2*2 ) / (  1 + 1 + 2 )

const presidents = [
    { first: 'George', last: 'Washington', year: 1732, passed: 1799 },
    { first: 'John', last: 'Adams', year: 1735, passed: 1826 },
    { first: 'Thomas', last: 'Jefferson', year: 1743, passed: 1826 },
    { first: 'James', last: 'Madison', year: 1751, passed: 1836 },
    { first: 'James', last: 'Monroe', year: 1758, passed: 1831 },
    { first: 'John', last: 'Adams', year: 1767, passed: 1848 },
    { first: 'Andrew', last: 'Jackson', year: 1767, passed: 1845 },
    { first: 'Martin', last: 'Van Buren', year: 1782, passed: 1862 },
    { first: 'William', last: 'Harrison', year: 1773, passed: 1841 },
    { first: 'John', last: 'Tyler', year: 1790, passed: 1862 },
    { first: 'James', last: 'Polk', year: 1795, passed: 1849 },
    { first: 'Zachary', last: 'Taylor', year: 1784, passed: 1850 },
    { first: 'Millard', last: 'Fillmore', year: 1800, passed: 1874 },
    { first: 'Franklin', last: 'Pierce', year: 1804, passed: 1869 },
    { first: 'James', last: 'Buchanan', year: 1791, passed: 1868 },
    { first: 'Abraham', last: 'Lincoln', year: 1809, passed: 1865 },
    { first: 'Andrew', last: 'Johnson', year: 1808, passed: 1875 },
    { first: 'Ulysses', last: 'Grant', year: 1822, passed: 1885 },
    { first: 'Rutherford', last: 'Hayes', year: 1822, passed: 1893 },
    { first: 'James', last: 'Garfield', year: 1831, passed: 1881 },
    { first: 'Chester', last: 'Arthur', year: 1829, passed: 1886 },
    { first: 'Grover', last: 'Cleveland', year: 1837, passed: 1908 },
    { first: 'Benjamin', last: 'Harrison', year: 1833, passed: 1901 },
    { first: 'William', last: 'McKinley', year: 1843, passed: 1901 },
    { first: 'Theodore', last: 'Roosevelt', year: 1858, passed: 1919 },
    { first: 'William', last: 'Taft', year: 1857, passed: 1930 },
    { first: 'Woodrow', last: 'Wilson', year: 1856, passed: 1924 },
    { first: 'Warren', last: 'Harding', year: 1865, passed: 1923 },
    { first: 'Calvin', last: 'Coolidge', year: 1872, passed: 1933 },
    { first: 'Herbert', last: 'Hoover', year: 1874, passed: 1964 },
    { first: 'Franklin', last: 'Roosevelt', year: 1882, passed: 1945 },
    { first: 'Harry', last: 'Truman', year: 1884, passed: 1972 },
    { first: 'Dwight', last: 'Eisenhower', year: 1890, passed: 1969 },
    { first: 'John', last: 'Kennedy', year: 1917, passed: 1963 },
    { first: 'Lyndon', last: 'Johnson', year: 1908, passed: 1973 },
    { first: 'Richard', last: 'Nixon', year: 1913, passed: 1994 },
    { first: 'Gerald', last: 'Ford', year: 1913, passed: 2006 },
    { first: 'Jimmy', last: 'Carter', year: 1924, passed: undefined },
    { first: 'Ronald', last: 'Reagan', year: 1911, passed: 2004 },
    { first: 'George', last: 'Bush', year: 1924, passed: 2018 },
    { first: 'Bill', last: 'Clinton', year: 1946, passed: undefined },
    { first: 'George', last: 'Bush', year: 1946, passed: undefined },
    { first: 'Barack', last: 'Obama', year: 1961, passed: undefined },
    { first: 'Donald', last: 'Trump', year: 1946, passed: undefined },
    { first: 'Joseph', last: 'Biden', year: 1942, passed: undefined },
];

// Challenge

/* 
    Utilize a .filter method to create a new array with presidents who were born after the 1900's.

    Try this as a a variable; conditional; and a for loop
*/

let presidents1900 = []

for (let i = 0; i < presidents.length; i++) {

    if (presidents[i].year >= 1900) {
        presidents1900.push(presidents[i])
    }
}


let presidents1900filter = presidents.filter(president => president.year >= 1900)
console.log(presidents1900filter)

// Warmup Challenge

/* 
    With your brand spankin' new filtered array, utilize a forEach method and print me a string interpolated names of those presidents.

    If forEach is scary, try this wiht a loop first.
*/

presidents1900filter.forEach((pres) => {
    console.log(`${pres.first} ${pres.last}`)
})

// ^^ same as ...

for (pres of presidents1900filter) {
    console.log(pres.first, pres.last)
}

