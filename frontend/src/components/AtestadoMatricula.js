import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


const generatePDF = () => {
    var bodies1 = [['07:30 - 08:20'],
                ['08:20 - 09:10', '', 'BCC325-11T', '', 'BCC325-11T'],
                ['09:20 - 10:10', '', 'BCC325-11T', '', 'BCC325-11T'], 
                ['10:10 - 11:00', 'BCC325-11T', 'BCC325-11T', 'BCC325-11T', 'BCC325-11T'],
                ['11:10 - 12:00', 'BCC325-11T', 'BCC325-11T', 'BCC325-11T', 'BCC325-11T'],
                ['12:00 - 12:50'],
                ['13:30 - 14:20', '', 'BCC325-11T', '', 'BCC325-11T'],
                ['14:20 - 15:10', '', 'BCC325-11T', '', 'BCC325-11T'],
                ['15:20 - 16:10', 'BCC325-11T', 'BCC325-11T', 'BCC325-11T', 'BCC325-11T'],
                ['16:10 - 17:00', 'BCC325-11T', 'BCC325-11T', 'BCC325-11T', 'BCC325-11T'],
                ['17:10 - 18:00'],
                ['18:00 - 18:50'],
                ['19:00 - 19:50'],
                ['19:50 - 20:40'],
                ['21:00 - 21:50'],
                ['21:50 - 22:40']
    ];
    var bodies2 = [['BCC325-11T', '11', 'INTELIGENCIA ARTIFICIAL', 'BLOCO DE SALAS DE AULA', 'PORTUGUES'],
                    ['BCC325-11T', '11', 'INTELIGENCIA ARTIFICIAL', 'BLOCO DE SALAS DE AULA', 'PORTUGUES'],
                    ['BCC325-11T', '11', 'INTELIGENCIA ARTIFICIAL', 'BLOCO DE SALAS DE AULA', 'PORTUGUES'],
                    ['BCC325-11T', '11', 'INTELIGENCIA ARTIFICIAL', 'BLOCO DE SALAS DE AULA', 'PORTUGUES'],
                    ['BCC325-11T', '11', 'INTELIGENCIA ARTIFICIAL', 'BLOCO DE SALAS DE AULA', 'PORTUGUES'],
                    ['BCC325-11T', '11', 'INTELIGENCIA ARTIFICIAL', 'BLOCO DE SALAS DE AULA', 'PORTUGUES'] 
    ];

    var doc = new jsPDF();
        autoTable(doc, {
            theme: 'grid',
            styles: {textColor: 0,
                    lineColor: 0,
                    lineWidth: 0.1, 
                    cellPadding: 0.5, 
                    halign: 'center',
                    minCellWidth: 20},
            headStyles: {fillColor: 255},
            head: [['Horário', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']],
            body: bodies1,
    })
    doc.setFontSize(10);
    doc.text(15, 105, 'Carga horária semanal matriculada: 24');
    autoTable(doc, {
        theme: 'plain',
        startY: 110,
        styles: {fontSize: 8, cellPadding: 0.5,},
        headStyles: {fillColor: 255},
        head: [['Código', 'Turma', 'Disciplina', 'Prédio', 'Idioma']],
        body: bodies2,
    })
    doc.setFontSize(12);
    doc.text(15, 152, 'T = Aula Teórica\nP = Aula Prática\nInício das Aulas: 15 de Março de 2022\nTérmino das Aulas: 25 de Junho de 2022');
    doc.save("Atestado de Matricula.pdf")
}

export default generatePDF;