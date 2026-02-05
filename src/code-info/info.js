export const codeinfo = {

    "Algorithms": {
        description: ``,

        complexity: {
            best: ``,
            average: ``,
            worst: ``,
            space: ``
        },

        implementation: {
            c: `
    #include <stdio.h>

    int main() {
        printf("Your program will be here");   
        return 0;
    }`,
            cpp: `
    #include <iostream>

    int main() {
        std::cout << "Your program will be here";   
        return 0;
    }`,
            java: `
    public class Main {
        public static void main(String[] args) {
            System.out.println("Your program will be here");   
        }
    }`,
            python: `
    print("Your program will be here")   `,
            js: `
    console.log("Your program will be here");   `
        }
    },

    "bubble": {
        description: `Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water. The bubbles represents the elements of the data structure. <br> 
        The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works in the same way. It iterates through the data structure and for each cycle compares the current element with the next one, swapping them if they are in the wrong order. <br> 
        It's a simple algorithm to implement, but not much efficient: on average, quadratic sorting algorithms with the same time complexity such as Selection Sort or Insertion Sort perform better. <br>
        It has several variants to improve its performances, such as Shaker Sort, Odd Even Sort and Comb Sort.`,

        complexity: {
            best: `O(n)`,
            average: `O(n<sup>2</sup>)`,
            worst: `O(n<sup>2</sup>)`,
            space: `O(1)`
        },

        implementation: {
            c: `
    void bubbleSort(int arr[], int n) {
        int i, j, temp;
        for (i = 0; i < n-1; i++) {
            for (j = 0; j < n-i-1; j++) {   
                if (arr[j] > arr[j+1]) {
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }`,
            cpp: `
    void bubbleSort(int arr[], int n) {
        for (int i = 0; i < n-1; i++) {
            for (int j = 0; j < n-i-1; j++) {   
                if (arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }`,
            java: `
    public void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {   
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }`,
            python: `
    def bubble_sort(arr):
        n = len(arr)
        for i in range(n - 1):
            for j in range(n - i - 1):
                if arr[j] > arr[j + 1]:
                    arr[j], arr[j + 1] = arr[j + 1], arr[j]   `,
            js: `
    function bubbleSort(arr) {
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {   
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }`
        }
    },

    "selection": {
        description: `Selection Sort is an iterative and in-place sorting algorithm that divides the data structure in two sublists: the ordered one, and the unordered one. The algorithm loops for all the elements of the data structure and for every cycle picks the smallest element of the unordered sublist and adds it to the sorted sublist, progressively filling it.<br>
        It's a really simple and intuitive algorithm that does not require additional memory, but it's not really efficient on big data structures due to its quadratic time complexity.<br>
        This algorithm has been upgraded and enhanced in several variants such as Heap Sort.`,

        complexity: {
            best: `O(n<sup>2</sup>)`,
            average: `O(n<sup>2</sup>)`,
            worst: `O(n<sup>2</sup>)`,
            space: `O(1)`
        },

        implementation: {
            c: `
    void selectionSort(int arr[], int n) {   
        int i, j, min_idx;
        for (i = 0; i < n-1; i++) {
            min_idx = i;
            for (j = i+1; j < n; j++)
                if (arr[j] < arr[min_idx])
                    min_idx = j;
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }`,
            cpp: `
    void selectionSort(int arr[], int n) {   
        for (int i = 0; i < n-1; i++) {
            int min_idx = i;
            for (int j = i+1; j < n; j++)
                if (arr[j] < arr[min_idx])
                    min_idx = j;
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }`,
            java: `
    public void selectionSort(int[] arr) {   
        int n = arr.length;
        for (int i = 0; i < n-1; i++) {
            int min_idx = i;
            for (int j = i+1; j < n; j++)
                if (arr[j] < arr[min_idx])
                    min_idx = j;
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }`,
            python: `
    def selection_sort(arr):
        n = len(arr)
        for i in range(n-1):
            min_idx = i
            for j in range(i+1, n):
                if arr[j] < arr[min_idx]:
                    min_idx = j
            arr[i], arr[min_idx] = arr[min_idx], arr[i]   `,
            js: `
    function selectionSort(arr) {
        let n = arr.length;
        for (let i = 0; i < n-1; i++) {
            let min_idx = i;
            for (let j = i+1; j < n; j++) {
                if (arr[j] < arr[min_idx]) {   
                    min_idx = j;
                }
            }
            let temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }`
        }
    },

    "insertion": {
        description: `Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It's less performant than advanced sorting algorithms, but it can still have some advantages: it's really easy to implement and it's efficient on small data structures almost sorted.<br>
        The algorithm divides the data structure in two sublists: a sorted one, and one still to sort. Initially, the sorted sublist is made up of just one element and it gets progressively filled. For every iteration, the algorithm picks an element on the unsorted sublist and inserts it at the right place in the sorted sublist. It's available in several variants such as Gnome Sort.`,

        complexity: {
            best: `O(n)`,
            average: `O(n<sup>2</sup>)`,
            worst: `O(n<sup>2</sup>)`,
            space: `O(1)`
        },

        implementation: {
            c: `
    void insertionSort(int arr[], int n) {
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {   
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }`,
            cpp: `
    void insertionSort(int arr[], int n) {
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {   
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }`,
            java: `
    void insertionSort(int arr[]) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {   
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }`,
            python: `
    def insertion_sort(arr):
        for i in range(1, len(arr)):
            key = arr[i]
            j = i - 1
            while j >= 0 and arr[j] > key:   
                arr[j + 1] = arr[j]
                j -= 1
            arr[j + 1] = key`,
            js: `
    function insertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {   
            let key = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }`
        }
    },

    "merge": {
        description: `Merge Sort is a sorting algorithm based on the Divide et Impera technique, like Quick Sort. It can be implemented iteratively or recursively, using the Top-Down and Bottom-Up algorithms respectively. We represented the first one.<br>
        The algorithm divides the data structure recursively until the subsequences contain only one element. At this point, the subsequences get merged and ordered sequentially. To do so, the algorithm progressively builds the sorted sublist by adding each time the minimum element of the next two unsorted subsequences until there is only one sublist remaining. This will be the sorted data structure.`,

        complexity: {
            best: `O(nlogn)`,
            average: `O(nlogn)`,
            worst: `O(nlogn)`,
            space: `O(n)`
        },

        implementation: {
            c: `
    void merge(int arr[], int l, int m, int r) {   
        int n1 = m - l + 1;
        int n2 = r - m;
        int L[n1], R[n2];

        for (int i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];

        int i = 0, j = 0, k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    void mergeSort(int arr[], int l, int r) {   
        if (l < r) {
            int m = l + (r - l) / 2;
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }`,
            cpp: `
    void merge(int arr[], int l, int m, int r) {   
        int n1 = m - l + 1;
        int n2 = r - m;
        int L[n1], R[n2];

        for (int i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];

        int i = 0, j = 0, k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    void mergeSort(int arr[], int l, int r) {   
        if (l < r) {
            int m = l + (r - l) / 2;
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }`,
            java: `
    void merge(int arr[], int l, int m, int r) {   
        int n1 = m - l + 1;
        int n2 = r - m;
        int L[] = new int[n1];
        int R[] = new int[n2];

        for (int i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];

        int i = 0, j = 0, k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    void mergeSort(int arr[], int l, int r) {   
        if (l < r) {
            int m = l + (r - l) / 2;
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }`,
            python: `
    def merge(arr, l, m, r):
        n1 = m - l + 1
        n2 = r - m

        L = arr[l:l + n1]
        R = arr[m + 1:m + 1 + n2]   

        i = j = 0
        k = l

        while i < n1 and j < n2:
            if L[i] <= R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i < n1:
            arr[k] = L[i]
            i += 1
            k += 1

        while j < n2:
            arr[k] = R[j]
            j += 1
            k += 1

    def merge_sort(arr, l, r):
        if l < r:
            m = (l + r) // 2
            merge_sort(arr, l, m)
            merge_sort(arr, m + 1, r)   
            merge(arr, l, m, r)`,
            js: `
    function merge(arr, l, m, r) {
        const n1 = m - l + 1;
        const n2 = r - m;

        const L = arr.slice(l, l + n1);
        const R = arr.slice(m + 1, m + 1 + n2);   

        let i = 0, j = 0, k = l;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    function mergeSort(arr, l, r) {
        if (l < r) {
            const m = Math.floor(l + (r - l) / 2);   
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }`
        }
    },

    "quick": {
        description: `Quick Sort is a sorting algorithm based on splitting the data structure in smaller partitions and sort them recursively until the data structure is sorted.<br>
        This division in partitions is done based on an element, called pivot: all the elements bigger than the pivot get placed on the right side of the structure, the smaller ones to the left, creating two partitions. Next, this procedure gets applied recursively to the two partitions and so on.<br>
        This partition technique based on the pivot is called Divide and conquer. It's a performant strategy also used by other sorting algorithms, such as Merge Sort.<br>`,

        complexity: {
            best: `O(nlogn)`,
            average: `O(nlogn)`,
            worst: `O(n<sup>2</sup>)`,
            space: `O(n)`
        },

        implementation: {
            c: `
    int partition(int arr[], int low, int high) {   
        int pivot = arr[high];
        int i = (low - 1);

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return (i + 1);
    }

    void quickSort(int arr[], int low, int high) {   
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }`,
            cpp: `
    int partition(int arr[], int low, int high) {   
        int pivot = arr[high];
        int i = (low - 1);

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                std::swap(arr[i], arr[j]);
            }
        }

        std::swap(arr[i + 1], arr[high]);

        return (i + 1);
    }

    void quickSort(int arr[], int low, int high) {   
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }`,
            java: `
    int partition(int arr[], int low, int high) {   
        int pivot = arr[high];
        int i = (low - 1);

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }

    void quickSort(int arr[], int low, int high) {   
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }`,
            python: `
    def partition(arr, low, high):
        pivot = arr[high]
        i = low - 1

        for j in range(low, high):
            if arr[j] < pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]

        arr[i + 1], arr[high] = arr[high], arr[i + 1]   
        return i + 1

    def quick_sort(arr, low, high):
        if low < high:
            pi = partition(arr, low, high)
            quick_sort(arr, low, pi - 1)
            quick_sort(arr, pi + 1, high)`,
            js: `
    function partition(arr, low, high) {
        let pivot = arr[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];   
        return i + 1;
    }

    function quickSort(arr, low, high) {
        if (low < high) {
            let pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }`
        }
    },

    "heap": {
        description: `Heap Sort is an in-place iterative sorting algorithm based on auxiliary data structures called heap. It's less efficient than algorithm with the same time complexity and it's not suitable for data structures with few elements.<br>
        The heap is a data structure representable as a binary tree, where each node has a value bigger or equal to its children. Consequently, the root will hold the maximum value.<br>
        The data structure gets ordered to form the heap initially, and then it gets progressively reordered with an algorithm similar to Selection Sort, starting from the bigger elements.`,

        complexity: {
            best: `O(nlogn)`,
            average: `O(nlogn)`,
            worst: `O(nlogn)`,
            space: `O(1)`
        },

        implementation: {
            c: `
    void heapify(int arr[], int n, int i) {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest])
            largest = left;

        if (right < n && arr[right] > arr[largest])   
            largest = right;

        if (largest != i) {
            int temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;

            heapify(arr, n, largest);
        }
    }

    void heapSort(int arr[], int n) {
        for (int i = n / 2 - 1; i >= 0; i--)
            heapify(arr, n, i);

        for (int i = n - 1; i > 0; i--) {
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            heapify(arr, i, 0);
        }
    }`,
            cpp: `
    void heapify(int arr[], int n, int i) {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest])
            largest = left;

        if (right < n && arr[right] > arr[largest])   
            largest = right;

        if (largest != i) {
            std::swap(arr[i], arr[largest]);
            heapify(arr, n, largest);
        }
    }

    void heapSort(int arr[], int n) {
        for (int i = n / 2 - 1; i >= 0; i--)
            heapify(arr, n, i);

        for (int i = n - 1; i > 0; i--) {
            std::swap(arr[0], arr[i]);
            heapify(arr, i, 0);
        }
    }`,
            java: `
    void heapify(int arr[], int n, int i) {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest])
            largest = left;

        if (right < n && arr[right] > arr[largest])   
            largest = right;

        if (largest != i) {
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            heapify(arr, n, largest);
        }
    }

    void heapSort(int arr[], int n) {
        for (int i = n / 2 - 1; i >= 0; i--)
            heapify(arr, n, i);

        for (int i = n - 1; i > 0; i--) {
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            heapify(arr, i, 0);
        }
    }`,
            python: `
    def heapify(arr, n, i):
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2

        if left < n and arr[left] > arr[largest]:
            largest = left

        if right < n and arr[right] > arr[largest]:
            largest = right

        if largest != i:
            arr[i], arr[largest] = arr[largest], arr[i]   
            heapify(arr, n, largest)

    def heap_sort(arr):
        n = len(arr)

        for i in range(n // 2 - 1, -1, -1):
            heapify(arr, n, i)

        for i in range(n - 1, 0, -1):
            arr[i], arr[0] = arr[0], arr[i]
            heapify(arr, i, 0)`,
            js: `
    function heapify(arr, n, i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest])
            largest = left;

        if (right < n && arr[right] > arr[largest])
            largest = right;

        if (largest != i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];   
            heapify(arr, n, largest);
        }
    }

    function heapSort(arr) {
        const n = arr.length;

        for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
            heapify(arr, n, i);

        for (let i = n - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            heapify(arr, i, 0);
        }
    }`
        }
    },

    "shell": {
        description: `Shell Sort is one of the oldest sorting algorithms and it's an extension of the Insertion Sort. This algorithm is fast and easy to implement, but it's hard to measure its performances.<br>
        Unlike Insertion Sort, Shell Sort starts by comparing the elements distant from each other by a certain gap that gets progressively decreased. By starting with the most distant elements, it can optimize performances as it's not limited by just comparing two adjacent elements.`,

        complexity: {
            best: `O(nlogn)`,
            average: `O(nlog(n)<sup>2</sup>)`,
            worst: `O(n<sup>2</sup>)`,
            space: `O(1)`
        },

        implementation: {
            c: `
    void shellSort(int arr[], int n) {
        for (int gap = n / 2; gap > 0; gap /= 2) {
            for (int i = gap; i < n; i++) {
                int temp = arr[i];
                int j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {   
                    arr[j] = arr[j - gap];
                }
                arr[j] = temp;
            }
        }
    }`,
            cpp: `
    void shellSort(int arr[], int n) {
        for (int gap = n / 2; gap > 0; gap /= 2) {
            for (int i = gap; i < n; i++) {
                int temp = arr[i];
                int j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {   
                    arr[j] = arr[j - gap];
                }
                arr[j] = temp;
            }
        }
    }`,
            java: `
    void shellSort(int arr[]) {
        int n = arr.length;
        for (int gap = n / 2; gap > 0; gap /= 2) {
            for (int i = gap; i < n; i++) {
                int temp = arr[i];
                int j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {   
                    arr[j] = arr[j - gap];
                }
                arr[j] = temp;
            }
        }
    }`,
            python: `
    def shell_sort(arr):
        n = len(arr)
        gap = n // 2
        while gap > 0:
            for i in range(gap, n):
                temp = arr[i]
                j = i
                while j >= gap and arr[j - gap] > temp:   
                    arr[j] = arr[j - gap]
                    j -= gap
                arr[j] = temp
            gap //= 2`,
            js: `
    function shellSort(arr) {
        let n = arr.length;
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {   
            for (let i = gap; i < n; i++) {
                let temp = arr[i];
                let j;
                for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {   
                    arr[j] = arr[j - gap];
                }
                arr[j] = temp;
            }
        }
    }`
        }
    },

    "bogo": {
        description: `Bogo Sort (also called Stupid Sort) is an iterative sorting algorithm particularly inefficient. It's based on randomly shufflying the elements of the data structure and then checking if they are correctly sorted. If not, repeat the process.<br>
        It is a probabilistic algorithm. The amount of possible permutations of a data structure of n elements is n!, so it will take on average n! shuffles to reach the solution. Each shuffle takes n operations, so the total average number of operations is n × n!<br>
        Since its performances depend entirely on probability, the worst case complexity is not measurable.`,

        complexity: {
            best: `O(n)`,
            average: `O(n*n!)`,
            worst: `O(infinite)`,
            space: `O(1)`
        },

        implementation: {
            c: `
    bool isSorted(int arr[], int n) {
        for (int i = 0; i < n - 1; i++) {   
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    void shuffle(int arr[], int n) {
        for (int i = 0; i < n; i++) {   
            int j = rand() % n;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    void bogoSort(int arr[], int n) {   
        while (!isSorted(arr, n)) {
            shuffle(arr, n);
        }
    }`,
            cpp: `
    bool isSorted(int arr[], int n) {
        for (int i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    void shuffle(int arr[], int n) {
        for (int i = 0; i < n; i++) {
            std::swap(arr[i], arr[rand() % n]);   
        }
    }

    void bogoSort(int arr[], int n) {
        while (!isSorted(arr, n)) {
            shuffle(arr, n);
        }
    }`,
            java: `
    static boolean isSorted(int arr[]) {
        for (int i = 0; i < arr.length - 1; i++) {   
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    static void shuffle(int arr[]) {
        Random rand = new Random();
        for (int i = 0; i < arr.length; i++) {   
            int j = rand.nextInt(arr.length);
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    static void bogoSort(int arr[]) {
        while (!isSorted(arr)) {
            shuffle(arr);
        }
    }`,
            python: `
    def is_sorted(arr):
        return all(arr[i] <= arr[i + 1] for i in range(len(arr) - 1))   

    def shuffle(arr):
        random.shuffle(arr)

    def bogo_sort(arr):
        while not is_sorted(arr):
            shuffle(arr)`,
            js: `
    function isSorted(arr) {
        for (let i = 0; i < arr.length - 1; i++) {   
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }

    function shuffle(arr) {
        for (let i = 0; i < arr.length; i++) {
            let j = Math.floor(Math.random() * arr.length);   
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    function bogoSort(arr) {
        while (!isSorted(arr)) {
            shuffle(arr);
        }
    }`
        }
    },

    "gnome": {
        description: `Gnome Sort is a sorting algorithm really similar to Insertion sort. Gnome Sort is based on dividing the data structure in two sublists: a sorted one, and an unsorted one. For every cycle, the algorithm picks an element of the unsorted sublist and moves it with sequential swaps to the right position in the sorted sublist.<br>
        The main difference from the Insertion Sort is that the implementation doesn't require nested loops. Like the Insertion Sort, this algorithm is more efficient on small data structures almost sorted.`,

        complexity: {
            best: `O(n)`,
            average: `O(n<sup>2</sup>)`,
            worst: `O(n<sup>2</sup>)`,
            space: `O(1)`
        },

        implementation: {
            c: `
    void gnomeSort(int arr[], int n) {
        int index = 0;
        
        while (index < n) {
            if (index == 0 || arr[index] >= arr[index - 1]) {   
                index++;
            } else {
                int temp = arr[index];
                arr[index] = arr[index - 1];
                arr[index - 1] = temp;
                index--;
            }
        }
    }`,
            cpp: `
    void gnomeSort(int arr[], int n) {
        int index = 0;
        
        while (index < n) {
            if (index == 0 || arr[index] >= arr[index - 1]) {   
                index++;
            } else {
                std::swap(arr[index], arr[index - 1]);
                index--;
            }
        }
    }`,
            java: `
    void gnomeSort(int arr[]) {
        int index = 0;
        int n = arr.length;
        
        while (index < n) {
            if (index == 0 || arr[index] >= arr[index - 1]) {   
                index++;
            } else {
                int temp = arr[index];
                arr[index] = arr[index - 1];
                arr[index - 1] = temp;
                index--;
            }
        }
    }`,
            python: `
    def gnome_sort(arr):
        index = 0
        n = len(arr)
        
        while index < n:
            if index == 0 or arr[index] >= arr[index - 1]:
                index += 1
            else:
                arr[index], arr[index - 1] = arr[index - 1], arr[index]   
                index -= 1`,
            js: `
    function gnomeSort(arr) {
        let index = 0;
        let n = arr.length;
        
        while (index < n) {
            if (index === 0 || arr[index] >= arr[index - 1]) {
                index++;
            } else {
                [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];   
                index--;
            }
        }
    }`
        }
    },

    "pancake": {
        description: `Pancake Sort is a sorting algorithm which derives from the pancake problem. The algorithm just executes the flip operation recursively until the data structure is sorted. It's similar to Selection Sort, without using swaps to sort the structure, but just flips.<br>
        The data structure gets divided in two parts, a sorted one and one still to sort. For each flip, the maximum elements of the unsorted sublist gets put at the end of the data structure by flipping the unsorted part and the sorted sublist gets incremented by one. This procedure gets executed until the unsorted part is made up of just one element.`,

        complexity: {
            best: `O(n<sup>2</sup>)`,
            average: `O(n<sup>2</sup>)`,
            worst: `O(n<sup>2</sup>)`,
            space: `O(1)`
        },

        implementation: {
            c: `
    void flip(int arr[], int i) {
        int start = 0;
        while (start < i) {
            int temp = arr[start];
            arr[start] = arr[i];
            arr[i] = temp;
            start++;
            i--;
        }
    }

    int findMax(int arr[], int n) {
        int maxIndex = 0;
        for (int i = 1; i < n; i++) {
            if (arr[i] > arr[maxIndex]) {
                maxIndex = i;
            }
        }
        return maxIndex;
    }

    void pancakeSort(int arr[], int n) {
        for (int currSize = n; currSize > 1; currSize--) {   
            int maxIndex = findMax(arr, currSize);
            if (maxIndex != currSize - 1) {
                flip(arr, maxIndex);
                flip(arr, currSize - 1);
            }
        }
    }`,
            cpp: `
    void flip(int arr[], int i) {
        int start = 0;
        while (start < i) {
            std::swap(arr[start], arr[i]);
            start++;
            i--;
        }
    }

    int findMax(int arr[], int n) {
        int maxIndex = 0;
        for (int i = 1; i < n; i++) {
            if (arr[i] > arr[maxIndex]) {
                maxIndex = i;
            }
        }
        return maxIndex;
    }

    void pancakeSort(int arr[], int n) {
        for (int currSize = n; currSize > 1; currSize--) {   
            int maxIndex = findMax(arr, currSize);
            if (maxIndex != currSize - 1) {
                flip(arr, maxIndex);
                flip(arr, currSize - 1);
            }
        }
    }`,
            java: `
    void flip(int arr[], int i) {
        int start = 0;
        while (start < i) {
            int temp = arr[start];
            arr[start] = arr[i];
            arr[i] = temp;
            start++;
            i--;
        }
    }

    int findMax(int arr[], int n) {
        int maxIndex = 0;
        for (int i = 1; i < n; i++) {
            if (arr[i] > arr[maxIndex]) {
                maxIndex = i;
            }
        }
        return maxIndex;
    }

    void pancakeSort(int arr[], int n) {
        for (int currSize = n; currSize > 1; currSize--) {   
            int maxIndex = findMax(arr, currSize);
            if (maxIndex != currSize - 1) {
                flip(arr, maxIndex);
                flip(arr, currSize - 1);
            }
        }
    }`,
            python: `
    def flip(arr, i):
        start = 0
        while start < i:
            arr[start], arr[i] = arr[i], arr[start]   
            start += 1
            i -= 1

    def find_max(arr, n):
        max_index = 0
        for i in range(1, n):
            if arr[i] > arr[max_index]:
                max_index = i
        return max_index

    def pancake_sort(arr):
        n = len(arr)
        for curr_size in range(n, 1, -1):
            max_index = find_max(arr, curr_size)   
            if max_index != curr_size - 1:
                flip(arr, max_index)
                flip(arr, curr_size - 1)`,
            js: `
    function flip(arr, i) {
        let start = 0;
        while (start < i) {
            [arr[start], arr[i]] = [arr[i], arr[start]];   
            start++;
            i--;
        }
    }

    function findMax(arr, n) {
        let maxIndex = 0;
        for (let i = 1; i < n; i++) {
            if (arr[i] > arr[maxIndex]) {
                maxIndex = i;
            }
        }
        return maxIndex;
    }

    function pancakeSort(arr) {
        let n = arr.length;
        for (let currSize = n; currSize > 1; currSize--) {   
            let maxIndex = findMax(arr, currSize);
            if (maxIndex !== currSize - 1) {
                flip(arr, maxIndex);
                flip(arr, currSize - 1);
            }
        }
    }`
        }
    },

    "cocktail": {
        description: `Cocktail Sort, also called Cocktail Shaker Sort, is an extension of the Bubble Sort. Unlike the Bubble Sort, which puts the bigger element to the end of the non-ordered sublist at each cycle, the Cocktail Sort alternates between bringing the bigger element of the unsorted sublist to the end of the ordered part and leading the smaller elements of the unsorted sublist at the beginning of the sorted sublist.<br>
        Cocktail Sort alternates two Bubble Sorts, the first one that sorts the structure starting from the largest element ordering the elements down to the smallest, and the second one, that starts from the smallest element and sorts the elements up to the largest.<br>
        Although this algorithm is an extension of the Bubble Sort and at first glance it might seem much more efficient, the performance increase is minimal and the complexity is the same.`,

        complexity: {
            best: `O(n)`,
            average: `O(n<sup>2</sup>)`,
            worst: `O(n<sup>2</sup>)`,
            space: `O(1)`
        },

        implementation: {
            c: `
    void cocktailSort(int arr[], int n) {
        int swapped = 1;
        int start = 0;
        int end = n - 1;

        while (swapped) {
            swapped = 0;

            for (int i = start; i < end; i++) {   
                if (arr[i] > arr[i + 1]) {
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = 1;
                }
            }

            if (!swapped)
                break;

            swapped = 0;
            end--;

            for (int i = end - 1; i >= start; i--) {   
                if (arr[i] > arr[i + 1]) {
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = 1;
                }
            }

            start++;
        }
    }`,
            cpp: `
    void cocktailSort(int arr[], int n) {
        bool swapped = true;
        int start = 0;
        int end = n - 1;

        while (swapped) {
            swapped = false;

            for (int i = start; i < end; ++i) {
                if (arr[i] > arr[i + 1]) {
                    std::swap(arr[i], arr[i + 1]);   
                    swapped = true;
                }
            }

            if (!swapped)
                break;

            swapped = false;
            --end;

            for (int i = end - 1; i >= start; --i) {   
                if (arr[i] > arr[i + 1]) {
                    std::swap(arr[i], arr[i + 1]);
                    swapped = true;
                }
            }

            ++start;
        }
    }`,
            java: `
    void cocktailSort(int arr[]) {
        boolean swapped = true;
        int start = 0;
        int end = arr.length - 1;

        while (swapped) {
            swapped = false;

            for (int i = start; i < end; i++) {   
                if (arr[i] > arr[i + 1]) {
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }

            if (!swapped)
                break;

            swapped = false;
            end--;

            for (int i = end - 1; i >= start; i--) {   
                if (arr[i] > arr[i + 1]) {
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    swapped = true;
                }
            }

            start++;
        }
    }`,
            python: `
    def cocktail_sort(arr):
        n = len(arr)
        swapped = True
        start = 0
        end = n - 1

        while swapped:
            swapped = False

            for i in range(start, end):
                if arr[i] > arr[i + 1]:
                    arr[i], arr[i + 1] = arr[i + 1], arr[i]   
                    swapped = True

            if not swapped:
                break

            swapped = False
            end -= 1

            for i in range(end - 1, start - 1, -1):
                if arr[i] > arr[i + 1]:
                    arr[i], arr[i + 1] = arr[i + 1], arr[i]   
                    swapped = True

            start += 1`,
            js: `
    function cocktailSort(arr) {
        let swapped = true;
        let start = 0;
        let end = arr.length - 1;

        while (swapped) {
            swapped = false;

            for (let i = start; i < end; i++) {
                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];   
                    swapped = true;
                }
            }

            if (!swapped) break;

            swapped = false;
            end--;

            for (let i = end - 1; i >= start; i--) {
                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];   
                    swapped = true;
                }
            }

            start++;
        }
    }`
        }
    },

    "odd even": {
        description: `Odd Even Sort (also known as Brick Sort) is a sorting in-place algorithm based on comparisons. It splits the data structure in pairs made up of elements with even indeces and odd indeces respectively.<br>
        It compares adjacent pairs and swaps them if they are in the wrong order with an algorithm similar to Bubble Sort. This procedure continues for every pair, alternating between odd/even and even/odd pairs until the structure is sorted.<br>
        This algorithm can get executed on paraller processors, but it's not widely used. It can be performant if the data structure is almost sorted, but it's really slow if there are small elements near the end of the data structure since they will require many iterations to get moved in the right place.`,

        complexity: {
            best: `O(n)`,
            average: `O(n<sup>2</sup>)`,
            worst: `O(n<sup>2</sup>)`,
            space: `O(1)`
        },

        implementation: {
            c: `
    void oddEvenSort(int arr[], int n) {
        int sorted = 0;
        while (!sorted) {
            sorted = 1;

            // Odd phase
            for (int i = 1; i < n - 1; i += 2) {   
                if (arr[i] > arr[i + 1]) {
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    sorted = 0;
                }
            }

            // Even phase
            for (int i = 0; i < n - 1; i += 2) {   
                if (arr[i] > arr[i + 1]) {
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    sorted = 0;
                }
            }
        }
    }`,
            cpp: `
    void oddEvenSort(int arr[], int n) {
        bool sorted = false;
        while (!sorted) {
            sorted = true;

            // Odd phase
            for (int i = 1; i < n - 1; i += 2) {
                if (arr[i] > arr[i + 1]) {
                    std::swap(arr[i], arr[i + 1]);   
                    sorted = false;
                }
            }

            // Even phase
            for (int i = 0; i < n - 1; i += 2) {
                if (arr[i] > arr[i + 1]) {
                    std::swap(arr[i], arr[i + 1]);   
                    sorted = false;
                }
            }
        }
    }`,
            java: `
    void oddEvenSort(int arr[]) {
        boolean sorted = false;
        while (!sorted) {
            sorted = true;

            // Odd phase
            for (int i = 1; i < arr.length - 1; i += 2) {   
                if (arr[i] > arr[i + 1]) {
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    sorted = false;
                }
            }

            // Even phase
            for (int i = 0; i < arr.length - 1; i += 2) {   
                if (arr[i] > arr[i + 1]) {
                    int temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    sorted = false;
                }
            }
        }
    }`,
            python: `
    def odd_even_sort(arr):
        n = len(arr)
        sorted = False
        while not sorted:
            sorted = True

            # Odd phase
            for i in range(1, n - 1, 2):
                if arr[i] > arr[i + 1]:
                    arr[i], arr[i + 1] = arr[i + 1], arr[i]   
                    sorted = False

            # Even phase
            for i in range(0, n - 1, 2):
                if arr[i] > arr[i + 1]:
                    arr[i], arr[i + 1] = arr[i + 1], arr[i]   
                    sorted = False`,
            js: `
    function oddEvenSort(arr) {
        let sorted = false;
        let n = arr.length;

        while (!sorted) {
            sorted = true;

            // Odd phase
            for (let i = 1; i < n - 1; i += 2) {
                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];   
                    sorted = false;
                }
            }

            // Even phase
            for (let i = 0; i < n - 1; i += 2) {
                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];   
                    sorted = false;
                }
            }
        }
    }`
        }
    }
}