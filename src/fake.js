import uuid from 'uuid/v4'


const boards = [
    {
      name: "First board",
      id: uuid,
      lists: [
        {
          name: "First list",
          id: uuid,
          tasks: [
            {
              title: 'first task',
              body: 'body',
              id: uuid
            },
            {
              title: 'second task',
              body: 'body',
              id: uuid 
            }
          ]
        },
        {
          name: "Second list",
          id: uuid,
          tasks: [
            {
              title: 'first 2 task',
              body: 'body 2',
              id: uuid
            },
            {
              title: 'second 2 task',
              body: 'body 2',
              id: uuid 
            }
          ]
        }
      ]
    },
    {
        name: "Second 2 board",
        id: uuid,
        lists: [
            {
              name: "First 2 list",
              id: uuid,
              tasks: [
                {
                  title: 'first 2 task',
                  body: 'body',
                  id: uuid
                },
                {
                  title: 'second 2 task',
                  body: 'body',
                  id: uuid 
                }
              ]
            },
            {
              name: "Second 2 list",
              id: uuid,
              tasks: [
                {
                  title: 'first 2 task',
                  body: 'body 2',
                  id: uuid
                },
                {
                  title: 'second 2 task',
                  body: 'body 2',
                  id: uuid 
                }
              ]
            }
          ]
    }
  ]

  export default boards