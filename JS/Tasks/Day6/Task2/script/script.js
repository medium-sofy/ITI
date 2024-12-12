// 1-(done) push(): Enqueue (push) a value as long as the value is in the sequence,
//    and not duplicated, otherwise, throw an error.
// 2- addByVal(): insert an item in a specific location as long as
//    the value is missing from the sequence(not duplicated), otherwise through
//    an exception.
// 3- pop(): remove a item from the end of the list
// 4- removeByVal(): remove an item from specific place with
//    the required value, if value not found, return "data not found"
// 5- shift(): remove an item from the beginning of the list
// 6- display the content of the list
// 7- Ensure there is no duplication in your entered values
// 8- Add any property you need
let linkedListObj = {
  data: [],
  push: function (value) {
    if (this.data.length == 0 && value) {
      this.data.push({ val: value });
      this.index.push(value);
    }
    // else {throw "Error pushing empty value to linkedListObj, enter a valid value"}
    else if (
      this.data[this.data.length - 1].val < value &&
      !this.index.includes(value)
    ) {
      this.data.push({ val: value });
      this.index.push(value);
    } else {
      throw "Error pushing value to object, check that the value is unique and in ascending order";
    }
  },

  pop: function () {
    this.data.pop();
  },
  unshift: function (value) {
    if (this.data.length == 0 && value) {
      this.data.unshift({ val: value });
      this.index.unshift(value);
    } else if (this.data[0].val > value && !this.index.includes(value)) {
      this.data.unshift({ val: value });
      this.index.unshift(value);
    } else {
      throw "Error adding value at the beggining of the object, check that the value is unique and in ascending order";
    }
  },
  shift: function () {
    this.data.shift();
  },
  addByVal: function (value) {
    // loop through data array
    // find an item whose value is greater than 'value'
    // insert value before the item
    // if no item > value, push(value)
    // temp = data
    this.temp ? (this.temp = []) : ""; // empty temp array to prevent concatenating to old values
    this.data.forEach((item) => {
      if (item.val < value) {
        this.temp.push(item);
      }// 1 2 3 ==> 4
      // temp.push(value)
      else {
        if (!this.index.includes(value)) {
          // Bug: throws an error if adding an item that is smaller than all items
          // prevents "value" from being inserted before each value greater than it
          // and prevents adding duplicate values using this method
          // also handles inserting items greater than given value parameter
          this.temp.push({ val: value });
          this.index.push(value);
        }
        // else {
        //   throw "Error attempting to insert an already existing value";
        // }
        this.temp.push(item);
      }
    });

    // throws an error when calling addByValue on an empty this.data : calling .val on empty temp array
    if (this.temp[this.temp.length - 1].val < value) {
      // last value of data is less than given value parameter
      // handles the case that "value" is greater than all values in data array, adds it to the end
      this.temp.push({ val: value });
      this.index.push(value);
    }
    this.data = this.temp;
  },
  removeByVal: function (value) {
    this.data.forEach((item, index) => {
      if (item.val == value) {
        this.data.splice(index, 1);
      }
    });
    if (!this.index.includes(value)) {
      return "Data not found";
    }
  },
  index: [],
  temp: [],
  _validate: function (value, method, error) {
    if (this.data.length == 0 && value) {
      this.data.method({ val: value });
      this.index.method(value);
    } else if (this.data[0].val > value && !this.index.includes(value)) {
      this.data.method({ val: value });
      this.index.method(value);
    } else {
      throw error;
    }
  },
  display: function()
  {
    console.log(this.data)
  }
};

console.log(linkedListObj.push(1));
console.log(linkedListObj.push(2))
// // console.log(linkedListObj.push(3));
 console.log(linkedListObj.push(4));
 // console.log(linkedListObj.push(4));
console.log(linkedListObj.addByVal(3));
// console.log(linkedListObj.addByVal(1));
// console.log(linkedListObj.addByVal(1));
console.log(linkedListObj.addByVal(6));
// console.log(linkedListObj.removeByVal(6))
console.log(linkedListObj.removeByVal(4))
// console.log(linkedListObj.unshift(6));
// console.log(linkedListObj.unshift(2));
// console.log(linkedListObj.unshift(1));
console.log(linkedListObj.shift());
console.log(linkedListObj.pop());

// console.log(linkedListObj.addByVal(6));
// console.log(linkedListObj.temp);
// console.log(linkedListObj.data);
linkedListObj.display()
