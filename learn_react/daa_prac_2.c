#include <stdio.h>

// Function to print indentation (for tree structure)
void printIndent(int depth) {
    for (int i = 0; i < depth; i++) {
        printf("   ");
    }
}

// Function to display array
void printArray(int arr[], int l, int r) {
    printf("[ ");
    for (int i = l; i <= r; i++) {
        printf("%d ", arr[i]);
    }
    printf("]");
}

// Merge function (normal)
void merge(int arr[], int l, int m, int r) {
    int i, j, k;
    int n1 = m - l + 1;
    int n2 = r - m;

    int L[50], R[50];

    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    i = 0; j = 0; k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j])
            arr[k++] = L[i++];
        else
            arr[k++] = R[j++];
    }

    while (i < n1)
        arr[k++] = L[i++];

    while (j < n2)
        arr[k++] = R[j++];
}

// Merge Sort with tree printing
void mergeSort(int arr[], int l, int r, int depth) {
    printIndent(depth);
    printArray(arr, l, r);
    printf("\n");

    if (l < r) {
        int m = (l + r) / 2;

        mergeSort(arr, l, m, depth + 1);
        mergeSort(arr, m + 1, r, depth + 1);

        merge(arr, l, m, r);

        printIndent(depth);
        printf("Merged: ");
        printArray(arr, l, r);
        printf("\n");
    }
}

int main() {
    int arr[100], n;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    printf("Enter elements:\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("\nMerge Sort Tree:\n");
    mergeSort(arr, 0, n - 1, 0);

    return 0;
}