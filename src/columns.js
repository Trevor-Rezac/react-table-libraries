export default [
  {
    field: 'url',
    title: 'First Name',
    render: rowData => <p>{rowData.first_name}</p>
  },
  {
    field: 'url',
    title: 'Last Name',
    render: rowData => <p>{rowData.last_name}</p>
  },
  {
    field: 'url',
    title: 'Gender',
    render: rowData => <p>{rowData.gender}</p>
  },
  {
    field: 'url',
    title: 'Username',
    render: rowData => <p>{rowData.username}</p>
  },
  {
    field: 'url',
    title: 'Phone Number',
    render: rowData => <p>{rowData.phone}</p>
  },
  {
    field: 'url',
    title: 'State',
    render: rowData => <p>{rowData.state}</p>
  },
  {
    field: 'url',
    title: 'Time Zone',
    render: rowData => <p>{rowData.time_zone}</p>
  },
];

