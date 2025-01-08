# Data Structures

## ArrayList

* **add(element)** - appends an element to the list
* **addAll(elements)** - appends an array of elements to the list
* **get(index)** - gets element by index from the list
* **contains(element)** - checks if a given element exists in the list
* **size()** - returns the number of elements in the list
* **remove(element)** - removes an element from the list
* **removeAt(index)** - removes an element at a given index from the list
* **clear()** - removes all of the elements from the list
* **toArray()** - returns the values from the list as an array

## LinkedList

* **add(element)** - appends an element to the list
* **addAt(index, element)** - adds an element at a given index in the list
* **addFirst(element)** - adds an element at the beginning of the list
* **addLast(element)** - adds an element at the end of the list
* **getAt(index)** - gets element by index from the list
* **getFirst()** - gets the first element in the list
* **getLast()** - gets the last element in the list
* **toArray()** - returns the values from the list as an array
* **contains(element)** - checks if a given element exists in the list
* **size()** - returns the number of elements in the list
* **removeAt(index)** - removes an element at a given index from the list
* **removeFirst()** - removes the first element in the list
* **removeLast()** - removes the last element in the list
* **clear()** - removes all of the elements from the list

## Queue

* **add(element)** - adds an element to the queue
* **poll()** - retrieves and removes an element from the beginning of the queue
* **peek()** - returns an element from the beginning of the queue without removing it
* **size()** - returns the number of elements in the queue
* **isEmpty()** - checks if the queue contains any elements

## Stack

* **push(element)** - adds an element to the stack
* **pop()** - retrieves and removes an element from the end of the stack
* **peek()** - returns an element from the beginning of the queue without removing it
* **search(element)** - returns the 1-based position where an element is on the stack
* **isEmpty()** - checks if the queue contains any elements
* **toArray()** - returns the values from the stack as an array

## Set

* **add(element)** - adds an element to the set if it isn't already present
* **remove(element)** - removes an element from the set if it's present 
* **contains(element)** - checks if a given element exists in the set
* **size()** - returns the number of elements in the set
* **isEmpty()** - checks if the set contains any elements
* **clear()** - removes all of the elements from the set
* **toArray()** - returns the values from the set as an array

## HashMap

* **put(key, value)** - associates the value with the key in the map. If the map previously contained a mapping for the key, the old value is replaced
* **get(key)** - returns the value to which the specified key is mapped
* **remove(key)** - removes the mapping for the specified key from the map
* **containsKey(key)** - checks if the map contains a mapping for the specified key
* **size()** - returns the number of the mappings in the map
* **isEmpty()** - checks if the map contains any key-value mappings
* **keySet()** - retrieves all of the keys contained in the map
* **values()** - retrieves all of the values contained in the map
* **entrySet()** - retrieves the mappings contained in the map
* **clear()** - removes all of the mappings from the map