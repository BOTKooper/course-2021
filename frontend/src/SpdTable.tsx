import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_SPD, EDIT_SPD, GET_ALL_SPDS, GET_ALL_STORES } from './api/schemas';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SpdRow({ row }: any) {
  const { id } = row;

  const [deleteImpl] = useMutation(DELETE_SPD, {
    refetchQueries: [GET_ALL_SPDS, GET_ALL_STORES],
    awaitRefetchQueries: true,
  })
  const [editImpl] = useMutation(EDIT_SPD, {
    refetchQueries: [GET_ALL_SPDS],
    awaitRefetchQueries: true,
  })

  const [name, updateName] = useState(row.name);
          

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
                return editImpl({ variables: { id, input: { name } } });
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

export default function SpdTable({ spds }: any) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Название</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {spds.map((row: any) => 
            <SpdRow
              key={row.id}
              row={row}
            />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
