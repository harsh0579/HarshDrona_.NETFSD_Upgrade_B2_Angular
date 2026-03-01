const marks = [78, 85, 62, 90, 55];


export const calculateTotal = (arr) =>
    arr.reduce((sum, mark) => sum + mark, 0);


export const calculateAverage = (arr) =>
    calculateTotal(arr) / arr.length;

export const generateReport = () => {

    const total = calculateTotal(marks);
    const average = calculateAverage(marks);

    const status = average >= 40 ? "Pass ✅" : "Fail ❌";

    return `
        Student Marks: ${marks.map(m => m).join(", ")}
        Total Marks: ${total}
        Average Marks: ${average.toFixed(2)}
        Result: ${status}
    `;
};