import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Chart } from "react-google-charts";


import axios from 'axios';

const Home: React.FC = () => {
    const [formData, setFormData] = useState({
        db_host: '',
        db_username: '',
        db_database: '',
        db_password: '',
        db_query: '',
    });
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([]);
    const [keys, setKeys] = useState([]);
    const [values, setValues] = useState([]);
    const [options, setOptions] = useState({});
    const [data, setData] = useState({});


    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true)
        console.log('Form submitted:', formData);

        axios.post('/api/db-connection', formData).then((res) => {
            console.log('res:', res.data);
            let keys_: any = [];
            if (res.data.length > 0) {
                keys_ = Object.keys(res.data[0]);
            } else {
                keys_ = [];
            }
            const values = Object.values(res.data).map(value => value);
            console.log('keys:', keys_);
            const map_data = [
                keys_,  // Assuming keys_ is an array of strings
                ...values.map((value: any) => Object.values(value))
            ];

            // Assuming keys_ is an array of strings
            const sort_keys: string[] = map_data[0];

            const chartData = [
                sort_keys,  // Assuming keys_ is an array of strings
                ...map_data.slice(1).map(row => row.map(value => {
                    // Check if the value is a string, date, or numeric string
                    if (typeof value === 'string') {
                        // Check if it's a date
                        if (!isNaN(Date.parse(value))) {
                            return new Date(value);
                        }

                        // Check if it's a numeric string
                        if (!isNaN(parseFloat(value))) {
                            return parseFloat(value);
                        }

                        // It's a regular string
                        return value;
                    }

                    // It's not a string, return as is
                    return value;
                }))
            ];

            console.log('chartData:', chartData);
            setData(chartData);
            setOptions({
                title: "Query Results",
                chartArea: { width: "50%" },
                hAxis: {
                    title: "Dynamic Data",
                    minValue: 0,
                },
                vAxis: {
                    title: "Data",
                },
            });
            setTimeout(() => {
                setLoading(false);
            }, 200);
        }).catch((err) => {

            alert(err.message)
            setTimeout(() => {
                setLoading(false);
            }, 1200);
        });



        // Add your form submission logic here
    };

    return (
        <Container>
            <h1 style={{ marginTop: '30px' }}>MySQL DataBase Connection</h1>

            <form method="post" onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="db_host"
                            label="MySQL Host"
                            variant="outlined"
                            required
                            fullWidth
                            name="db_host"
                            value={formData.db_host}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="db_username"
                            label="MySQL Username"
                            variant="outlined"
                            required
                            fullWidth
                            name="db_username"

                            value={formData.db_username}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="db_database"
                            label="MySQL Database"
                            variant="outlined"
                            required
                            fullWidth
                            name="db_database"
                            value={formData.db_database}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="db_password"
                            label="MySQL Password"
                            variant="outlined"
                            required
                            fullWidth
                            name="db_password"
                            value={formData.db_password}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>


                <h1 style={{ marginTop: '20px' }}>MySQL Query</h1>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>

                        <textarea
                            name="db_query"
                            value={formData.db_query}
                            onChange={handleChange}
                            required
                            rows={4}
                            cols={40}
                        />
                    </Grid>
                </Grid>
                <Button
                    style={{ marginTop: '20px' }} type="submit" variant="contained" color="primary" disabled={loading}>
                    Search
                </Button>
                {
                    loading && (
                        <div className="spinner-container" >
                            <div className="loading-spinner">

                            </div>
                        </div>
                    )
                }

            </form>

            <h1 style={{ marginTop: '20px' }}>Query Result</h1>
            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </Container>
    );
}

export default Home;
