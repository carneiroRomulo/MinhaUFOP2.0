import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Box } from '@material-ui/core'
import Sidebar from "../components/Sidebar"
import StickyHeadTable from "../components/StickyHeadTable"

import '../App.css'
import ruimg from '../static/images/ru.png'

const HomePage = () => {
  const columnsEnrollmentSubjects = [
    { id:"time", label:"Horário", minWidth:100},
    { id:"monday", label:"Segunda", minWidth:50},
    { id:"tuesday", label:"Terça", minWidth:50},
    { id:"wednesday", label:"Quarta", minWidth:50},
    { id:"thursday", label:"Quinta", minWidth:50},
    { id:"friday", label:"Sexta", minWidth:50},
    { id:"sunday", label:"Sábado", minWidth:50},
  ]
  const rowsEnrollmentSubjects = [
    { time:"07:30 - 08:20", monday:"",          tuesday:"",           wednesday:"",         thursday:"",        friday:"", sunday:"" },
    { time:"08:20 - 09:10", monday:"BCC485",    tuesday:"",           wednesday:"BCC485",   thursday:"",        friday:"", sunday:"" },
    { time:"09:20 - 10:10", monday:"BCC485",    tuesday:"",           wednesday:"BCC485",   thursday:"",        friday:"", sunday:"" },
    { time:"10:10 - 11:00", monday:"BCC204",    tuesday:"",           wednesday:"BCC204",   thursday:"",        friday:"", sunday:"" },
    { time:"11:10 - 12:00", monday:"BCC204",    tuesday:"",           wednesday:"BCC204",   thursday:"",        friday:"", sunday:"" },
    { time:"12:00 - 12:50", monday:"",          tuesday:"",           wednesday:"",         thursday:"",        friday:"", sunday:"" },
    { time:"13:30 - 14:20", monday:"",          tuesday:"BCC321",     wednesday:"",         thursday:"BCC321",  friday:"", sunday:"" },
    { time:"14:20 - 15:10", monday:"",          tuesday:"BCC321",     wednesday:"",         thursday:"BCC321",  friday:"", sunday:"" },
    { time:"15:20 - 16:10", monday:"BCC760",    tuesday:"BCC323",     wednesday:"BCC760",   thursday:"BCC323",  friday:"", sunday:"" },
    { time:"16:10 - 17:00", monday:"BCC760",    tuesday:"BCC323",     wednesday:"BCC760",   thursday:"BCC323",  friday:"", sunday:"" },
    { time:"17:10 - 18:00", monday:"",          tuesday:"",           wednesday:"",         thursday:"BCC502",  friday:"", sunday:"" },
    { time:"18:00 - 18:50", monday:"",          tuesday:"",           wednesday:"",         thursday:"BCC502",  friday:"", sunday:"" },
    { time:"19:00 - 19:50", monday:"",          tuesday:"",           wednesday:"",         thursday:"",        friday:"", sunday:"" },
    { time:"19:50 - 20:40", monday:"",          tuesday:"",           wednesday:"",         thursday:"",        friday:"", sunday:"" },
    { time:"21:00 - 21:50", monday:"",          tuesday:"",           wednesday:"",         thursday:"",        friday:"", sunday:"" },
  ]

  const columnsSubjectDetails = [
    { id:"subject", label:"Disciplina", minWidth:50},
    { id:"building", label:"Prédio", minWidth:50},
    { id:"classroom", label:"classroom", minWidth:50},
    { id:"language", label:"Idioma", minWidth:50},
  ]
  const rowsSubjectDetails = [
    { subject:"BANCO DE DADOS I", building:"BLOCO DE SALAS DE AULA", classroom:"206", language:"PORTUGUES"},
    { subject:"ENGENHARIA DE SOFTWARE II", building:"ICEB", classroom:"19", language:"PORTUGUES"},
    { subject:"DEISGN DE INTERAÇÃO", building:"BLOCO DE SALAS DE AULA", classroom:"209", language:"PORTUGUES"},
    { subject:"METODOLOGIA CIENTIFICA EM CIENCIA DA COMPUTAÇÃO", building:"BLOCO DE SALAS DE AULA", classroom:"109", language:"PORTUGUES"},
  ]

  const columnsExtrato = [
    {id:"extrato", label:"Extrato", minWidth: 200}
  ]
  const rowsExtrato = [
    {extrato:"09/05/2022 - Janta"},
    {extrato:"11/05/2022 - Almoço"},
    {extrato:"11/05/2022 - Janta"},
    {extrato:"14/05/2022 - Janta"},
  ]
  const tableExtrato = {columns: columnsExtrato, rows: rowsExtrato}
  
  const tables = [
    {tableTitle: 'ATESTADO DE MATRÍCULA', columns: columnsEnrollmentSubjects, rows: rowsEnrollmentSubjects},
    {tableTitle: 'DETALHES DAS DISCIPLINAS MATRICULADAS', columns: columnsSubjectDetails, rows: rowsSubjectDetails},
  ]

  return (
    <div className="maindiv grid_center">
      <div style={{marginLeft:200}}>
        <Sidebar/> 
        <Container style={{ maxWidth:"60vw"}}>
            {tables.map((table) => (
                <Box key={table.tableTitle + '-container'} style={{ padding:'20px 0px 20px 0px' }}>
                    <StickyHeadTable key={table.tableTitle} table={table}/>
                </Box>
            ))}
        </Container>
      </div>
      <div>
        <img class="ruimg" src={ruimg} alt="ruimg" />
        <div class="saldodiv">SALDO: R$ 46,00 (8 Refeições)</div>

        <Box key={"extrato" + '-container'} style={{ padding:'20px 0px 20px 0px' }}>
          <StickyHeadTable key={'extrato'} table={tableExtrato}/>
        </Box>
      </div>
    </div>
  )
}

export default HomePage