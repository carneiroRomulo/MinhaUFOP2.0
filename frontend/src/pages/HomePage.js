import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Box, Icon } from '@material-ui/core'
import Sidebar from "../components/Sidebar"
import StickyHeadTable from "../components/StickyHeadTable"

import '../App.css'

var json = require('./data.json');
var newsjson = require('./news.json');
var rolljson = require('./roll.json');

const HomePage = () => {
  const columnsEnrollmentSubjects = [
    { id:"time", label:"Horário", align:"center"},
    { id:"monday", label:"Segunda", align:"center"},
    { id:"tuesday", label:"Terça", align:"center"},
    { id:"wednesday", label:"Quarta", align:"center"},
    { id:"thursday", label:"Quinta", align:"center"},
    { id:"friday", label:"Sexta", align:"center"},
    { id:"sunday", label:"Sábado", align:"center"},
  ]

  const columnsSubjectDetails = [
    { id:"subject", label:"Disciplina", minWidth:50},
    { id:"building", label:"Prédio", minWidth:50},
    { id:"classroom", label:"Sala", minWidth:50},
    { id:"language", label:"Idioma", minWidth:50},
  ]

  const columnsExtrato = [
    {id:"extrato", label:"Extrato", minWidth: 200, align:"center"}
  ]

  const rowsExtrato = [
    {extrato:"09/05/2022 - Janta"},
    {extrato:"11/05/2022 - Almoço"},
    {extrato:"11/05/2022 - Janta"},
    {extrato:"14/05/2022 - Janta"},
  ]
  
  const columnsMensagens = [
    {id:"title", label:"Mensagens", minWidth: 200, align:"center"}
  ]
  
  const tableExtrato = {columns: columnsExtrato, rows: rowsExtrato}

  const tableMensagens = {columns: columnsMensagens, rows: newsjson}
  
  const tables = [
    {tableTitle: 'ATESTADO DE MATRÍCULA', download:true, columns: columnsEnrollmentSubjects, rows: rolljson},
    {tableTitle: 'DETALHES DAS DISCIPLINAS MATRICULADAS', columns: columnsSubjectDetails, rows: json},
  ]

  return (
    <div className="maindiv grid_center">
      <div style={{marginLeft:200}}>
        <Sidebar/> 
        <Container style={{ maxWidth:"60vw"}}>
            {tables.map((table) => (
                <Box key={table.tableTitle + '-container'} style={{ padding:'20px 0px 20px 0px'}}>
                    <StickyHeadTable key={table.tableTitle} table={table}/>
                </Box>
            ))}
        </Container>
      </div>
      <div class="right">
        <div>
          <Box key={"Mensagens" + '-container'} style={{ padding:'20px 0px 20px 0px', maxWidth: 350}}>
            <StickyHeadTable key={'Mensagens'} table={tableMensagens}/>
          </Box>
        </div>

        
        <div>
          <div class="saldodiv">SALDO: R$ 46,00 (8 Refeições)</div>
          <div class="saldodivbutton"><button>Adicionar Saldo</button></div>
          <Box key={"extrato" + '-container'} style={{ padding:'20px 0px 20px 0px' }}>
            <StickyHeadTable key={'extrato'} table={tableExtrato}/>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default HomePage