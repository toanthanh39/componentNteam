export const Data = {
  tasks: {
    1: {
      id: 1,
      content: "content1",
    },
    2: {
      id: 2,
      content: "content2",
    },
    3: {
      id: 3,
      content: "content3",
    },
    4: {
      id: 4,
      content: "content4",
    },
    5: {
      id: 5,
      content: "content5",
    },
    6: {
      id: 6,
      content: "content6",
    },
    7: {
      id: 7,
      content: "content7",
    },
    8: {
      id: 8,
      content: "content8",
    },
    9: {
      id: 9,
      content: "content9",
    },
  },

  columns: {
    "column-1": {
      id: "column-1",
      title: "to do",
      taskIds: [1, 2, 3, 4, 5, 6],
      color: "#31d0e7",
    },
    "column-2": {
      id: "column-2",
      title: "in progress",
      taskIds: [],
      color: "#001ef9",
    },
    "column-3": {
      id: "column-3",
      title: "complete",
      taskIds: [],
      color: "#00fb1d",
    },
  },

  columnOrder: ["column-1", "column-2", "column-3"],
};
