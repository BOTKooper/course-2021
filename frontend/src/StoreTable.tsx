import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_STORE, EDIT_STORE, GET_ALL_STORES } from './api/schemas';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

function StoreRow({ row, spds, districts }: any) {
  const { id } = row;

  const [deleteImpl] = useMutation(DELETE_STORE, {
    refetchQueries: [GET_ALL_STORES],
    awaitRefetchQueries: true,
  })
  const [editImpl] = useMutation(EDIT_STORE, {
    refetchQueries: [GET_ALL_STORES],
    awaitRefetchQueries: true,
  })

  const [name, updateName] = useState(row.name);
  const [street, updateStreet] = useState(row.street);
  const [hours, updateHours] = useState(row.hours);
  const [spdId, updateSpdId] = useState(row.spdId);
  const [districtId, updateDistrictId] = useState(row.districtId);


          

  return (
    <TableRow
      key={id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >

      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="right">
        <TextField value={name} onChange={(e) => updateName(e.target.value)}></TextField>
      </TableCell>
      <TableCell align="right">
        <TextField value={street} onChange={(e) => updateStreet(e.target.value)}></TextField>
      </TableCell>
      <TableCell align="right">
        <TextField value={hours} onChange={(e) => updateHours(e.target.value)}></TextField>
      </TableCell>
      <TableCell align="right">
        <Select
          value={districtId}
          onChange={(e) => updateDistrictId(e.target.value)}
        >
          {districts.map((d: { id: number, name: string }) => <MenuItem value={d.id}>{d.name}</MenuItem>)}
        </Select>
      </TableCell>
      <TableCell align="right">
      <Select
          value={spdId}
          onChange={(e) => updateSpdId(e.target.value)}
        >
          {spds.map((d: { id: number, name: string }) => <MenuItem value={d.id}>{d.name}</MenuItem>)}
        </Select>
      </TableCell>
      <TableCell align="right">
        <div>
          <Button
            variant="outlined"
            color="error"
            onClick={(e: any) => deleteImpl({ variables: { id }})}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            onClick={
              (e: any) => {
                return editImpl({ variables: { id, input: { name, hours, street, spdId: +spdId, districtId: +districtId } } });
              }
            }
          >
            Save changes
          </Button>
        </div>
      </TableCell>     
    </TableRow>
  )
}

// yep, this should be done with DataGrid and pagination, but who cares?
export default function StoreTable({ districts, spds, stores }: any) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Вывеска</TableCell>
            <TableCell align="right">Адрес</TableCell>
            <TableCell align="right">Часы работы</TableCell>
            <TableCell align="right">Район</TableCell>
            <TableCell align="right">СПД</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stores.map((row: any) => 
            <StoreRow
              key={row.id}
              row={row}
              districts={districts}
              spds={spds}
            />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
