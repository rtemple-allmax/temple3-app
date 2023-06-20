import { ColumnTypes, TableConfig } from "temple3-ui";

export const config: TableConfig = {
  columns: [
    {
      name: 'ID',
      type: ColumnTypes.number,
    },
    {
      name: 'Name',
      type: ColumnTypes.text,
    },
    {
      name: 'Age',
      type: ColumnTypes.number
    },
    {
      name: 'Registered',
      type: ColumnTypes.boolean
    }
  ],
  data: [
    {
      id: 0,
      name: 'Ben',
      age: 32,
      registered: true
    },
    {
      id: 1,
      name: 'Joe',
      age: 56,
      registered: true
    },
    {
      id: 2,
      name: 'Susan',
      age: 21,
      registered: false
    },
    {
      id: 3,
      name: 'Sam',
      age: 17,
      registered: true
    },
    {
      id: 4,
      name: 'Julie',
      age: 42,
      registered: false
    },
    {
      id: 5,
      name: 'Jane',
      age: 45,
      registered: true
    },
    {
      id: 6,
      name: 'John',
      age: 37,
      registered: false
    },
  ]
} 

