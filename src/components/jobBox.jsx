import { Box, Grid } from "@mui/material"



const JobBox = (job) => {
const name = job.job.name;
const start =  job.job.start;
const end = job.job.end;

return (
    <>
    <Box sx={{
    width:"220px",
    height: "140px",
    backgroundColor: 'darkcyan',
    borderRadius: "15px"
    }}>
        <Grid item sx={{marginTop:"12px", marginLeft:"12px"}}>
            <h4>
                {`Nome: ${name}`}
            </h4>
            <h4>
                {`Inicio: ${start}`}
            </h4>
            <h4>
                {`Fim: ${end}`}
            </h4>
        </Grid>
    </Box>
    </>
)

}

export default JobBox