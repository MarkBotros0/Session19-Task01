import React, { useState } from 'react'
import DataGrid from '../components/DataGrid'
import Modal from './Modal'
import { Box, Button, Typography } from '@mui/material';

const MyHome = () => {
  const rows = [
    { id: 1, name: 'Snow', username: 'wewdwe', email: "aslkhbasdkad@hadasd.com", group: "office", status: "active", createdOn: "Dec 10 2022" },
    { id: 2, name: 'asdas', username: 'wdddqw', email: "aslkhbasdkad@hadasd.com", group: "office", status: "active", createdOn: "Dec 10 2022" },
    { id: 3, name: 'sdada', username: 'qwdqw', email: "aslkhbasdkad@hadasd.com", group: "office", status: "active", createdOn: "Dec 10 2022" },
    { id: 4, name: 'adasas', username: 'dqwqdz', email: "aslkhbasdkad@hadasd.com", group: "office", status: "active", createdOn: "Dec 10 2022" },
    { id: 5, name: 'dasad', username: 'iluil', email: "aslkhbasdkad@hadasd.com", group: "office", status: "active", createdOn: "Dec 10 2022" },
    { id: 6, name: 'sdasda', username: 'liuilu', email: "aslkhbasdkad@hadasd.com", group: "office", status: "active", createdOn: "Dec 10 2022" },
    { id: 7, name: 'zxczcz', username: 'iluul', email: "aslkhbasdkad@hadasd.com", group: "office", status: "active", createdOn: "Dec 10 2022" },
    { id: 8, name: 'Snczzcow', username: 'ilul', email: "aslkhbasdkad@hadasd.com", group: "office", status: "active", createdOn: "Dec 10 2022" },
    { id: 9, name: 'zcczxc', username: 'luiluil', email: "aslkhbasdkad@hadasd.com", group: "office", status: "active", createdOn: "Dec 10 2022" },
    { id: 10, name: 'zxcdsw', username: 'uilul', email: "aslkhbasdkad@hadasd.com", group: "office", status: "active", createdOn: "Dec 10 2022" },
    { id: 11, name: 'dwewef', username: 'luilulu', email: "aslkhbasdkad@hadasd.com", group: "office", status: "active", createdOn: "Dec 10 2022" },
  ];

  const [openModal, setOpenModal] = React.useState(false);
  const [data, SetData] = useState(rows)
  const [filteredData, SetfilteredData] = useState(rows)
  const [dataToEdit, SetDataToEdit] = useState({})
  const [editMode, setEditMode] = React.useState(false)


  const toggleModal = (value) => {
    setOpenModal(!openModal)
  }
  const addNewUser = (newUser) => {
    SetData([...data, newUser])
  }
  const togglemodalWithData = (data) => {
    toggleModal()
    SetDataToEdit(data)
    setEditMode(true)
  }
  const handleEditMode = () => {
    setEditMode(!editMode)
  }
  const setAllData = (data) => {
    SetData(data)
    SetfilteredData(data)
  }

  const filterData = (searchValue) => {
    SetfilteredData(data.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchValue.toLowerCase())
      ))
    );
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "20px", marginBottom: "20px" }}>
        <Typography sx={{ fontWeight: "bold" }} variant={"h4"}> User Management</Typography>
        <Button variant={'contained'} color={'success'} onClick={toggleModal}>+ Add New</Button>
      </Box>
      <DataGrid filterData={filterData} togglemodalWithData={togglemodalWithData} data={filteredData} />
      <Modal handleEditMode={handleEditMode} editMode={editMode} dataToEdit={dataToEdit} allData={data} setAllData={setAllData} toggleModal={toggleModal} modalValue={openModal} addNewUser={addNewUser} />
    </>
  )
}

export default MyHome