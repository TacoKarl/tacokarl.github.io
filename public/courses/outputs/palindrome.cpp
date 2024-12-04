/* To design a recursive function to check whether a doubly linked list of characters is a palindrome, let's address each part of the problem step by step.


### 1. Base Cases
The base cases for the recursion will be:
- **Empty list**: If the list is empty, it is trivially a palindrome.
- **Single node list**: If the list contains only one node, it is also trivially a palindrome.

### 2. Recursive Cases
For the recursive case, we will:
- Compare the first and last characters in the list.
- If they are equal, we will proceed to the next characters inward by moving the start pointer to the next node and the end pointer to the previous node.
- We will continue this process recursively until we reach the base cases.

### 3. Recursive Case Leading to Base Case
For any finite length list, the recursive case will always lead to the base case. This is because each recursive call reduces the problem size by two nodes (one from the start and one from the end). Eventually, the list will either be empty or contain a single node.

### 4. Recursive Function in C++
Heres the implementation of the recursive function in C++:

cpp
*/
#include <iostream>

struct LNode {
    char value;
    LNode *next;
    LNode *previous;
};

bool isPalindromeUtil(LNode* start, LNode* end) {
    // Base cases
    if (start == nullptr || end == nullptr) {
        return true;
    }
    if (start == end) {
        return true;
    }
    if (start->next == end && start->value == end->value) {
        return true;
    }

    // Check current pair of nodes
    if (start->value != end->value) {
        return false;
    }

    // Move to the next pair
    return isPalindromeUtil(start->next, end->previous);
}

bool isPalindrome(LNode* head) {
    if (head == nullptr) {
        return true;
    }

    // Find the end of the list
    LNode* end = head;
    while (end->next != nullptr) {
        end = end->next;
    }

    return isPalindromeUtil(head, end);
}

// Helper function to create a new node
LNode* createNode(char value) {
    LNode* newNode = new LNode;
    newNode->value = value;
    newNode->next = nullptr;
    newNode->previous = nullptr;
    return newNode;
}

// Helper function to append a node to the list
void appendNode(LNode*& head, char value) {
    LNode* newNode = createNode(value);
    if (head == nullptr) {
        head = newNode;
    } else {
        LNode* temp = head;
        while (temp->next != nullptr) {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->previous = temp;
    }
}

int main() {
    // Example usage:
    LNode* head = nullptr;
    appendNode(head, 'r');
    appendNode(head, 'a');
    appendNode(head, 'd');
    appendNode(head, 'a');
    appendNode(head, 'r');

    if (isPalindrome(head)) {
        std::cout << "The list is a palindrome." << std::endl;
    } else {
        std::cout << "The list is not a palindrome." << std::endl;
    }

    return 0;
}
/*
### Explanation:
- The `isPalindromeUtil` function performs the recursive check. It compares the values of the current start and end nodes.
- If the values match, it recursively checks the next inward pair of nodes.
- The base cases handle empty lists, single node lists, and lists where only two nodes are left to be checked.
- The `isPalindrome` function initializes the recursion by finding the end node of the list.
- Helper functions `createNode` and `appendNode` are provided for creating and appending nodes to the list for testing purposes.

This approach ensures that the function will correctly determine if the list is a palindrome for any given finite length list.
*/