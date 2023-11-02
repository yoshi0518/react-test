import { useState, useLayoutEffect } from 'react';
import axios from 'axios';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from '@tanstack/react-table';

type typePost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const App = () => {
  const [posts, setPosts] = useState<typePost[]>([] as typePost[]);

  useLayoutEffect(() => {
    const getPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log({ posts: response.data });
      setPosts(response.data);
    };

    getPosts();
  }, []);

  const update = (id: number) => {
    console.log(`update：${id}`);
  };
  const remove = (id: number) => {
    console.log(`remove：${id}`);
    setPosts(() => posts.filter((post) => post.id !== id));
  };

  const columnHelper = createColumnHelper<typePost>();
  const columns = [
    columnHelper.accessor('id', { cell: ({ getValue }) => getValue(), header: 'ID' }),
    columnHelper.accessor('userId', { cell: ({ getValue }) => getValue(), header: 'UserID' }),
    columnHelper.accessor('title', { cell: ({ getValue }) => getValue().toUpperCase(), header: 'Title' }),
    columnHelper.accessor('body', { cell: ({ getValue }) => getValue(), header: 'Body' }),
    columnHelper.display({
      id: 'manage',
      header: '操作',
      cell: (props) => (
        <div>
          <button onClick={() => update(props.row.original.id)}>更新</button>
          <button onClick={() => remove(props.row.original.id)}>削除</button>
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data: posts,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        // pageIndex: 1,
        pageSize: 30,
      },
    },
  });

  return (
    <>
      <h1>Posts</h1>
      <div style={{ display: 'flex', marginBottom: '1em' }}>
        <button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>
          Privious
        </button>
        {Array.from({ length: table.getPageCount() }, (_, i) => i).map((index) => (
          <div
            key={index}
            style={{
              backgroundColor: table.getState().pagination.pageIndex === index ? 'blue' : '',
              color: table.getState().pagination.pageIndex === index ? 'white' : 'black',
              padding: '0 0.5em 0 0.5em',
              margin: '0 0.2em 0 0.2em',
              cursor: 'pointer',
            }}
            onClick={() => table.setPageIndex(index)}
          >
            {index + 1}
          </div>
        ))}
        <button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>
          Next
        </button>
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>Rows Number：{table.getRowModel().rows.length}</div>
    </>
  );
};

export default App;
