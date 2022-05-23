import React, { useEffect, useState } from "react";
import axios from "axios";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import AppBar from "./AppBar";

function FileUpload() {

  const [selectedFile, setSelectedFile] = useState();
  const [chartOptions, setChartOptions] = useState({});
  const [table, setTable] = useState([]);

// ------------------ Upload CSV -----------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    const response = axios.post(
      'http://localhost:8081/api/csv/upload', 
      formData, 
      {
        headers: { "Content-Type": "multipart/form-data" }
      }
    );
  };
    
  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0])
  };

// -------------------- Chart data ------------------------
  useEffect(() => {
  const chart = () => {
    let unixArr = [];
    let tempArr = [];
    let combineArr = [];
    
    axios
      .get("http://localhost:8081/api/csv/files")
      .then(res => {
        console.log(res.data);

        // Parse float unix and temp item
        for(const dataObj of res.data) {
          unixArr?.push(parseFloat(dataObj.unix))
          tempArr?.push(parseFloat(dataObj.temp))
        }

        // Combine unix and temp into a single 2D array
        for(let i = 0 ; i < unixArr.length ; i++){
          combineArr?.push([unixArr[i], tempArr[i]])
        }

        // sortFunction(combineArr);
        combineArr.sort();

        // Chart options using React Hook
        setChartOptions({
          title: {
            text: "Temperature vs Time"
            },
          series: [
            {
              data: combineArr
            }
          ],
          xAxis: {
            type: 'datetime'
          },
          accessibility: {
            enabled: false
          }
        });

        //Read all data to table
        setTable(res.data);

      })
      .catch(err => {
        console.log(err);
      });

      // console.log(combineArr);
    };
    chart();
  }, []);

  // -------------------- Table Headers ------------------------

  const columns = [
    {
      name: "Id",
      selector: row => row.id,
      sortable: true,
    },
    {
      name: "UUID",
      selector: row => row.uuid,
      sortable: true,
    },
    {
      name: "Type",
      selector: row => row.type,
    },
    {
      name: "Unix",
      selector: row => row.unix,
      sortable: true,
    },
    {
      name: "Temp",
      selector: row => row.temp,
      sortable: true,
    }
  ];

  const tableData = {
    columns,
    table
  };


  return (
    <div>

      <AppBar/>

      <h1>MY WORKSPACE</h1>
      <br></br>

       <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileSelect}/>
        <input type="submit" value="Upload CSV" />
      </form>

        <br></br><br></br>

          <h2>Graph</h2>

          <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={chartOptions}
          />

      <br></br><br></br><br></br>
        <h2>Data</h2>

          {/* <DataTableExtensions {...tableData}> */}
            <DataTable
              title="Temperature Data"
              columns={columns}
              data={table}
              defaultSortFieldID={1}
              dense={true}
              selectableRows
              pagination
              highlightOnHover
            />
          {/* </DataTableExtensions> */}

    </div>
  );
}

export default FileUpload;