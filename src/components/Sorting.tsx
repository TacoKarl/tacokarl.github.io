import {ChangeEvent, useState} from "react";

interface SortingStrategy{
    sort(data: number []): number[];
}

class BubbleSort implements SortingStrategy {
    sort(data: number[]): number[] {
        const arr = [...data]; // Kopier input-arrayet
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
                }
            }
        }
        return arr;
    }
}

class SelectionSort implements SortingStrategy {
    sort(data: number[]): number[] {
        const arr = [...data]; // Kopier input-arrayet
        for (let i = 0; i < arr.length; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
        }
        return arr;
    }
}
class QuickSort implements SortingStrategy {
    sort(data: number[]): number[] {
        if (data.length <= 1) {
            return data;
        }

        const pivot = data[0];
        const left = data.slice(1).filter(item => item < pivot);
        const right = data.slice(1).filter(item => item >= pivot);

        return [...this.sort(left), pivot, ...this.sort(right)];
    }
}

class Sorter {
    private strategy: SortingStrategy;
    constructor(strategy: SortingStrategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy: SortingStrategy): void {
        this.strategy = strategy;
    }
    sort(data: number[]): number[] {
        return this.strategy.sort(data);
    }
}


function Sorting(){
    const [sortingType, setSortingType] = useState<string>("");
    const [sortedData, setSortedData] = useState<number[]>([]);
    // Input data
    const data = [64, 34, 25, 12, 22, 11, 90];
    const handleSelection = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedSorting = event.target.value;
        setSortingType(selectedSorting);
        let sorter: Sorter;

        if (selectedSorting === "bubble") {
           sorter = new Sorter(new BubbleSort());
        } else if (selectedSorting === "quick") {
            sorter = new Sorter(new QuickSort());
        } else if (selectedSorting === "selection") {
            sorter = new Sorter(new SelectionSort());
        } else {
            setSortedData(data)
            return;
        }
        const sortedArray = sorter.sort(data);
        setSortedData(sortedArray);
    };
    return (
        <div className="sorting">
            <label htmlFor={"select-sorting"}>Vælg sorterings algoritme:</label>
            <select
                id="select-sorting"
                value={sortingType}
                onChange={handleSelection}
                >
                <option>-- Vælg Sortering --</option>
                <option value="bubble">Bubble Sort</option>
                <option value="quick">Quick Sort</option>
                <option value="selection">Selection Sort</option>
            </select>
            <div>
                <p>Original Array: {data.join(", ")}</p>
                <p>Sorteret Array: {sortedData.join(", ")}</p>
            </div>
        </div>
    );
}

export default Sorting;