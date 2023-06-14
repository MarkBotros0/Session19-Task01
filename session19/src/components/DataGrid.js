import * as React from 'react';
import { Box, Button, FormControl, IconButton, InputAdornment, MenuItem, Select, TextField, Typography, ThemeProvider,createTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from "@mui/icons-material/Search";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import EditIcon from '@mui/icons-material/Edit';
import HttpsIcon from '@mui/icons-material/Https';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const columns = [
    { field: 'name', headerName: 'Name', width: 270 },
    { field: 'username', headerName: 'User Name', width: 230 },
    { field: 'email', headerName: 'Email Address', width: 350 },
    { field: 'group', headerName: 'Group', width: 220, },
    { field: 'status', headerName: 'Status', width: 170 },
    { field: 'createdOn', headerName: 'Created On', width: 170 },
];


export default function DataTable({ data, togglemodalWithData, filterData }) {
    const [search, setSearch] = React.useState("");

    const getRowData = (e) => {
        togglemodalWithData(e.row)
    }

    const searchData = (e) => {
        setSearch(e.target.value)
        filterData(e.target.value)
    }

    const theme = createTheme({
        components:{
            MuiDataGrid:{
                styleOverrides:{
                    cell:{
                        fontSize:"17px"
                    },
                    columnHeader:{
                        fontSize:"17px",
                        color:"#8c97ad",
                    },
                    columnHeaders:{
                        backgroundColor:"#f8fafb"
                    }
                }
            }
        }
    });

    return (
        <div style={{ height: "fit-content", width: '100%' }}>
            <Box sx={{ bgcolor: "white", border: "1px solid #dee1e8", borderRadius: "10px" }}>
                <Box sx={{ display: "flex", alignItems: "center", padding: "20px 0 0px 20px" }}>
                    <TextField
                        size="small"
                        variant="outlined"
                        onChange={searchData}
                        value={search}
                        placeholder='Search'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        sx={{ marginLeft: "18px" }}
                        size="small"
                        variant="outlined"
                        placeholder='User Name'
                    />

                    <Box sx={{ minWidth: 160, marginLeft: "18px" }}>
                        <FormControl fullWidth>
                            <Select size="small" defaultValue={1}>
                                <MenuItem value={1}>Any</MenuItem>
                                <MenuItem value={2}>Option 2</MenuItem>
                                <MenuItem value={3}>Option 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>



                    <LocalizationProvider sx={{ paddingTop: "0px" }} dateAdapter={AdapterDayjs}>
                        <DemoContainer sx={{ marginLeft: "18px", paddingTop: "0px" }} components={['DatePicker']}>
                            <DatePicker slotProps={{ textField: { size: "small" } }} label={'All Time'} />
                        </DemoContainer>
                    </LocalizationProvider>


                    <Typography sx={{ color: "blue", marginLeft: "18px" }}>All Filters</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px", marginBottom: "10px", paddingLeft: "20px" }}>
                    <Typography variant='p' sx={{ marginRight: "10px" }}>1 selected</Typography>
                    <Typography variant='p' sx={{ marginRight: "10px" }}>|</Typography>

                    <IconButton sx={{ borderRadius: "5px", color: "#51576d", bgcolor: "#e7e9ef", marginRight: "10px" }} variant="contained" color="secondary">
                        <EditIcon />
                    </IconButton>
                    <IconButton sx={{ borderRadius: "5px", color: "#51576d", bgcolor: "#e7e9ef", marginRight: "10px" }} variant="contained" color="secondary">
                        <DoDisturbAltIcon />
                    </IconButton>
                    <IconButton sx={{ borderRadius: "5px", color: "#51576d", bgcolor: "#e7e9ef", marginRight: "10px" }} variant="contained" color="secondary">
                        <HttpsIcon />
                    </IconButton>
                    <Button sx={{ color: "#51576d", bgcolor: "#e7e9ef", textTransform: "capitalize", marginRight: "10px" }}>Assign to Profile</Button>
                    <Button sx={{ color: "#51576d", bgcolor: "#e7e9ef", textTransform: "capitalize", marginRight: "10px" }}>Assign to Group</Button>
                    <IconButton sx={{ borderRadius: "5px", color: "#51576d", bgcolor: "#e7e9ef", marginRight: "10px" }} variant="contained" color="secondary">
                        <MoreVertIcon />
                    </IconButton>
                    <Typography variant='p' sx={{ margin: "0", marginRight: "10px", textDecoration: "underline" }}>Unselect all</Typography>
                </Box >

                <ThemeProvider theme={theme} >
                    <DataGrid
                        rows={data}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 10 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        onRowClick={getRowData}
                    />
                </ThemeProvider>
            </Box>
        </div>
    );
}
