### A file used to keep track of the use cases for linkedListObj methods

##### addByVal(value)
+ case 1: this.data is empty [  ] : wip
+ case 2: this.data doesn't contain value (missing value of "value") [ x ]
//+ case 2: this.data doesn't contain missing elements () [  ]
+ case 3: value is the largest element of this.data [ x ]
+ case 4: value is the smallest element of this.data [ x ] // works if we remove the duplication error, which triggers if we leave it on for some reason
+ case 5: value has only one value greater than it in this.data [ x ]
+ case 5: value has more than one value greater than it in this.data [ x ]
+ case 6: value already exists in this.data [ x ]
+ case 7: calling addByVal more than once [ x ]

##### removeByVal(value)

+ case 1: 

##### unshift(value)

+ case 1: adding a value less than first item [ x ]
+ case 2: throws an error when adding a value greater than first item [ x ]
+ case 3: inserting any value to an empty array [ x ]
+ case 4: throws an error when adding duplicate values [ x ]
