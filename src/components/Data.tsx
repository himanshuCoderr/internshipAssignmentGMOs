// import * as {React} from 'react';
import { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Button from '@mui/material/Button/Button';
import {useNavigate} from 'react-router-dom'

interface Post {
  id: number;
  userId: number;
  title: string;
}

export default function Data() {
  let navigate = useNavigate()

  const goNext =() =>{
    navigate('/checkBoxes')
  } 
  
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error("low internet");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error occurred");
    }
  };

  console.log(data);
  
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'userId', headerName: 'USER ID', width: 200 },
    { field: 'title', headerName: 'USER TITLE', width: 1000 },
  ];

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid style={{ height: "90vh" , margin:"10px" }} rows={data} columns={columns} />

      <Button
        type="submit"
        className="submit-button"
        variant="contained"
        color="primary"
        onClick={goNext}
      >
        Next
      </Button>
    </div>
  );
}
