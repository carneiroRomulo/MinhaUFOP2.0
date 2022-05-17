import React, { useState } from "react"
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    withStyles,
} from "@material-ui/core"
import { ArrowDropDownCircle } from "@material-ui/icons"


const StyledTableRow = withStyles({
    root: {
        '& .MuiTableCell-root' : {
            padding: '0px 16px',
            border: '1px solid #C4C4C4',
        }
    },
  })(TableRow)

const StickyHeadTable = (props) => {
    const [expanded, setExpanded] = useState(true)
    const handleExpanded = () => setExpanded(!expanded)

    return (
        <>
        <Accordion expanded={expanded} style={{backgroundColor:"transparent", boxShadow:'none'}}>
            {props.table.tableTitle != null ? (
                <AccordionSummary style={{padding:0}}>
                    <Box style={{display:'flex'}} onClick={handleExpanded}>
                        <ArrowDropDownCircle style={{marginRight: 8}} />
                        <Typography>{props.table.tableTitle}</Typography>
                    </Box>
                </AccordionSummary>
            ) : undefined }

            <AccordionDetails style={{backgroundColor: 'white', padding:0}}>
                <div style={{width:'100%'}}>
                    <TableContainer style={{ maxHeight: 440, borderRadius:4}}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <StyledTableRow>
                                    {props.table.columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, backgroundColor:'#47BEBA', color: 'white'}}
                                    >
                                        {column.label}
                                    </TableCell>
                                    ))}
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                            {props.table.rows
                                .map((row) => {
                                    return (
                                        <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {props.table.columns.map((column) => {
                                                const value = row[column.id]
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                    </TableCell>
                                                )
                                            })}
                                        </StyledTableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </AccordionDetails>
        </Accordion>
        </>
    )
}

export default StickyHeadTable