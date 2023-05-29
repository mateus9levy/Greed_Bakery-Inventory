import { StarRate } from "@mui/icons-material";
import { Box, Grid } from "@mui/material"



const JobBox = (job) => {
const name = job.job.name;
const start =  job.job.start;
const end = job.job.end;
console.log(name    ,start)
return (
    <>
    <Box sx={{
    width:"220px",
    height: "120px",
    backgroundColor: 'darkcyan',
    borderRadius: "15px"
    }}>
        <Grid item sx={{marginTop: "30px", marginLeft:"12px"}}>
            <h3>
                {`Nome: ${name}`}
            </h3>
            <h3>
                {`Inicio: ${start}`}
            </h3>
            <h3>
                {`Fim: ${end}`}
            </h3>
        </Grid>
    </Box>
    </>
)

}

export default JobBox