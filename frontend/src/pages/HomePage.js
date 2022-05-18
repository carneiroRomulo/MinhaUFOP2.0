import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Box } from '@material-ui/core'
import Sidebar from "../components/Sidebar"
import StickyHeadTable from "../components/StickyHeadTable"

import '../App.css'
import ruimg from '../static/images/ru.png'

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
  const rowsEnrollmentSubjects = [
    { time:"07:30 - 08:20", monday:"",              tuesday:"",               wednesday:"",             thursday:"",            friday:"", sunday:"" },
    { time:"08:20 - 09:10", monday:"BCC485-11T",    tuesday:"",               wednesday:"BCC485-11T",   thursday:"",            friday:"", sunday:"" },
    { time:"09:20 - 10:10", monday:"BCC485-11T",    tuesday:"",               wednesday:"BCC485-11T",   thursday:"",            friday:"", sunday:"" },
    { time:"10:10 - 11:00", monday:"BCC204-11T",    tuesday:"",               wednesday:"BCC204-11T",   thursday:"",            friday:"", sunday:"" },
    { time:"11:10 - 12:00", monday:"BCC204-11T",    tuesday:"",               wednesday:"BCC204-11T",   thursday:"",            friday:"", sunday:"" },
    { time:"12:00 - 12:50", monday:"",              tuesday:"",               wednesday:"",             thursday:"",            friday:"", sunday:"" },
    { time:"13:30 - 14:20", monday:"",              tuesday:"BCC321-11T",     wednesday:"",             thursday:"BCC321-11T",  friday:"", sunday:"" },
    { time:"14:20 - 15:10", monday:"",              tuesday:"BCC321-11T",     wednesday:"",             thursday:"BCC321-11T",  friday:"", sunday:"" },
    { time:"15:20 - 16:10", monday:"BCC760-11T",    tuesday:"BCC323-11T",     wednesday:"BCC760-11T",   thursday:"BCC323-11T",  friday:"", sunday:"" },
    { time:"16:10 - 17:00", monday:"BCC760-11T",    tuesday:"BCC323-11T",     wednesday:"BCC760-11T",   thursday:"BCC323-11T",  friday:"", sunday:"" },
    { time:"17:10 - 18:00", monday:"",              tuesday:"",               wednesday:"",             thursday:"BCC502-11T",  friday:"", sunday:"" },
    { time:"18:00 - 18:50", monday:"",              tuesday:"",               wednesday:"",             thursday:"BCC502-11T",  friday:"", sunday:"" },
    { time:"19:00 - 19:50", monday:"",              tuesday:"",               wednesday:"",             thursday:"",            friday:"", sunday:"" },
    { time:"19:50 - 20:40", monday:"",              tuesday:"",               wednesday:"",             thursday:"",            friday:"", sunday:"" },
    { time:"21:00 - 21:50", monday:"",              tuesday:"",               wednesday:"",             thursday:"",            friday:"", sunday:"" },
  ]

  const columnsSubjectDetails = [
    { id:"subject", label:"Disciplina", minWidth:50},
    { id:"building", label:"Prédio", minWidth:50},
    { id:"classroom", label:"Sala", minWidth:50},
    { id:"language", label:"Idioma", minWidth:50},
  ]
  const rowsSubjectDetails = [
    { subject:"BANCO DE DADOS I", building:"BLOCO DE SALAS DE AULA", classroom:"206", language:"PORTUGUES"},
    { subject:"ENGENHARIA DE SOFTWARE II", building:"ICEB", classroom:"19", language:"PORTUGUES"},
    { subject:"DEISGN DE INTERAÇÃO", building:"BLOCO DE SALAS DE AULA", classroom:"209", language:"PORTUGUES"},
    { subject:"METODOLOGIA CIENTIFICA EM CIENCIA DA COMPUTAÇÃO", building:"BLOCO DE SALAS DE AULA", classroom:"109", language:"PORTUGUES"},
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
  const tableExtrato = {columns: columnsExtrato, rows: rowsExtrato}
  
  const tables = [
    {tableTitle: 'ATESTADO DE MATRÍCULA', download:true, columns: columnsEnrollmentSubjects, rows: rowsEnrollmentSubjects},
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