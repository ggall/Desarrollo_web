
  new Vue({
    el: '#exercise',
    data: {
      array: ['Max', 'Anna', 'Chris', 'Manu'],
      myObject: {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkiens',
        books: '3'
      },
      testData2:  {
        name: 'TESTOBJECT', 
        id: 3,
        data: [1.67, 1.33, 0.98, 2.21]
      },
      testloop: [ {
        name: 'TESTOBJECT', 
        id: 3,
        data: [1.67, 1.33, 0.98, 2.21], 
        sh: false
      },
      {
        name: 'TESTOBJECT2', 
        id: 9,
        data: [5,6,7,8], 
        sh: false
      },
      {
        name: 'TESTOBJECT3', 
        id: 10,
        data: [10,11,12,13], 
        sh: false
      },
    ],
      toggle1: true
    }
  });